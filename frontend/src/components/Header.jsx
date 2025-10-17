import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="h-16 bg-[#1a1d2e] border-b border-[#2a2d3e] fixed top-0 right-0 left-0 z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo & App Icon */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-base">NM</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Network Manager</h1>
            <p className="text-xs text-slate-500">Management Dashboard</p>
          </div>
        </div>

        {/* Settings & Theme Toggle */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#252836] hover:bg-[#2a2d3e] transition-all duration-300"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm font-medium">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300 text-sm font-medium">Dark</span>
              </>
            )}
            <div className={`w-9 h-5 rounded-full p-0.5 transition-all duration-300 ${
              theme === 'dark' ? 'bg-[#6366f1]' : 'bg-slate-500'
            }`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </button>

          {/* Settings */}
          <button className="p-2.5 rounded-lg bg-[#252836] hover:bg-[#2a2d3e] transition-all duration-300 group">
            <Settings className="w-5 h-5 text-slate-400 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;