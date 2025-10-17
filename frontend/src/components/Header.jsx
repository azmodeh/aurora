import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-white">Network Management Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 border border-slate-700"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-5 h-5 text-teal-400" />
              <span className="text-slate-300 text-sm font-medium">Light</span>
            </>
          ) : (
            <>
              <Moon className="w-5 h-5 text-purple-400" />
              <span className="text-slate-300 text-sm font-medium">Dark</span>
            </>
          )}
          <div className={`w-10 h-6 rounded-full p-1 transition-all duration-300 ${
            theme === 'dark' ? 'bg-purple-600' : 'bg-teal-500'
          }`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
              theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </div>
        </button>

        {/* Settings */}
        <button className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 border border-slate-700 group">
          <lord-icon
            src="https://cdn.lordicon.com/lecprnjb.json"
            trigger="hover"
            colors="primary:#319795"
            style={{ width: '24px', height: '24px' }}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;