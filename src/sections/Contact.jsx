import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { profile } from '../data/portfolio';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
  },
  { icon: MapPin, label: 'Location', value: profile.location },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const setField = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.',
        );
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitStatus({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          error.text || 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="rs" id="contact" aria-labelledby="contact-title">
      <div className="rsc">
        <h2 className="sec-h rv" id="contact-title">
          Contact
        </h2>
        <p className="lead rv">
          Have a project in mind? I'd love to hear about it. Send me a message
          and let's discuss how we can work together.
        </p>
        <div className="contact-grid">
          <div className="ai-wrap rv">
            <div className="ai-wrap-head">
              <span className="ai-dot" /> message.compose
            </div>
            <form className="ai-wrap-body" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={setField('name')}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={setField('email')}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={setField('message')}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
              {submitStatus.type && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          <div className="ai-wrap rv rv-d1">
            <div className="ai-wrap-head">
              <span className="ai-dot" /> contact.info
            </div>
            <div className="ai-wrap-body">
              {contactInfo.map((item) => {
                const Tag = item.href ? 'a' : 'div';
                return (
                  <Tag className="info-item" key={item.label} href={item.href}>
                    <span className="ci">
                      <item.icon size={16} />
                    </span>
                    <span>
                      <small>{item.label}</small>
                      {item.value}
                    </span>
                  </Tag>
                );
              })}
              <div
                className="status-badge"
                style={{ marginTop: '1rem', marginBottom: 0 }}
              >
                <span className="pulse-dot" /> Open to new opportunities
              </div>
              <div className="ai-contact">
                <p className="message">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you need a full-time engineer or a freelance
                  consultant, let's talk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
