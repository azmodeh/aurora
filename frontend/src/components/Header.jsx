import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="h-16 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 fixed top-0 right-0 left-0 z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo & App Icon */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-bold text-lg">NM</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Network Manager</h1>
            <p className="text-xs text-slate-400">Management Dashboard</p>
          </div>
        </div>

        {/* Settings & Theme Toggle */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 border border-slate-700/50 backdrop-blur-lg"
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
          <button className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 border border-slate-700/50 backdrop-blur-lg group">
            <Settings className="w-5 h-5 text-teal-400 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;