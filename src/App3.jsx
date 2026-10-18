import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  });

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 transition-all ease-in-out dark:bg-gray-700">
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 shadow-md shadow-purple-400  text-gray-600 hover:text-purple-400 transition-all ease+-in-out cursor-pointer dark:bg-white dark:shadow-amber-400 dark:hover:text-amber400"
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
      <div className="dark:text-white">
        {theme === 'light'
          ? 'bright mode activated'
          : 'welcome to the dark side'}
      </div>
    </div>
  );
}

export default App;
