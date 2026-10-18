import { useEffect, useRef, useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * "AI assistant" modal that narrates a card's details: a thinking indicator,
 * then each section typed out / revealed one item at a time.
 * `item` is `{ title, ai: { intro, sections } }` or null when closed.
 */
export const AIModal = ({ item, onClose }) => {
  const [thinking, setThinking] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [done, setDone] = useState(false);
  const runId = useRef(0);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);

  // Move focus into the dialog on open, and back to the card that opened it on close.
  useEffect(() => {
    if (!item) return;
    const opener = document.activeElement;
    closeRef.current?.focus();
    return () => opener?.focus?.();
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const id = ++runId.current;
    const alive = () => runId.current === id;

    const update = (fn) => alive() && setBlocks((prev) => fn(prev.map((b) => ({ ...b }))));
    const scrollDown = () =>
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });

    // Reduced-motion users get the full content immediately, no typing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setThinking(false);
      setBlocks(
        item.ai.sections.map((s) => ({
          label: s.label,
          text: s.text ?? '',
          typing: false,
          features: s.features ?? [],
          techs: s.techs ?? [],
        })),
      );
      setDone(true);
      return;
    }

    (async () => {
      setBlocks([]);
      setDone(false);
      setThinking(true);
      await sleep(1600);
      if (!alive()) return;
      setThinking(false);

      for (const s of item.ai.sections) {
        if (!alive()) return;
        update((b) => [...b, { label: s.label, text: '', typing: !!s.text, features: [], techs: [] }]);

        if (s.text) {
          for (let i = 1; i <= s.text.length; i++) {
            if (!alive()) return;
            update((b) => {
              b[b.length - 1].text = s.text.slice(0, i);
              return b;
            });
            const ch = s.text[i - 1];
            await sleep(12 + Math.random() * 8 + (ch === '.' || ch === '—' ? 80 : ch === ',' ? 35 : 0));
          }
          update((b) => {
            b[b.length - 1].typing = false;
            return b;
          });
          await sleep(300);
        }
        for (const f of s.features ?? []) {
          if (!alive()) return;
          update((b) => {
            b[b.length - 1].features = [...b[b.length - 1].features, f];
            return b;
          });
          await sleep(90);
        }
        for (const t of s.techs ?? []) {
          if (!alive()) return;
          update((b) => {
            b[b.length - 1].techs = [...b[b.length - 1].techs, t];
            return b;
          });
          await sleep(70);
        }
        scrollDown();
        await sleep(300);
      }
      if (alive()) {
        setDone(true);
        setTimeout(scrollDown, 50);
      }
    })();

    return () => {
      runId.current++;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={`ai-overlay${item ? ' active' : ''}`} inert={item ? undefined : true}>
      <div className="ai-overlay-bg" onClick={onClose} />
      <div className="ai-modal" ref={bodyRef} role="dialog" aria-modal="true" aria-label={item?.title}>
        {item && <div className="scan-line" key={item.title} />}
        <div className="mhd">
          <div className="mhl">
            <div className="ai-av">
              <FaRobot />
            </div>
            <div className="mtg">
              <h3>Ram's AI Assistant</h3>
              <span className="st">{done ? 'Done' : 'Analyzing...'}</span>
            </div>
          </div>
          <button className="cbtn" onClick={onClose} aria-label="Close" ref={closeRef}>
            ✕
          </button>
        </div>
        <div className="acb">
          {thinking && (
            <div className="ai-thinking">
              <div className="td">
                <span />
                <span />
                <span />
              </div>
              <span>{item?.ai.intro}</span>
            </div>
          )}
          {blocks.map((b, i) => (
            <div className="ai-msg" key={i}>
              <div className="ai-lbl">{b.label}</div>
              {(b.text || b.typing) && (
                <div className="ai-txt">
                  {b.text}
                  {b.typing && <span className="cur" />}
                </div>
              )}
              {b.features.length > 0 && (
                <div className="ai-feats">
                  {b.features.map((f) => (
                    <div className="ai-fi" key={f}>
                      <span className="ic">⚡</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              )}
              {b.techs.length > 0 && (
                <div className="ai-ts">
                  {b.techs.map((t) => (
                    <span className={`ai-tb${t.h ? ' hl' : ''}`} key={t.n}>
                      {t.n}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
          {done && (
            <div className="ai-msg">
              <div className="ai-lbl" style={{ color: 'var(--ok)' }}>
                Analysis Complete
              </div>
              <div className="ai-txt" style={{ color: 'var(--t3)', fontSize: '.75rem', fontFamily: 'var(--mono)' }}>
                ✓ Analysis complete — Built by Ram Kashyap
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
