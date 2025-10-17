import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';

const Header = ({ theme, toggleTheme, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'app-manager', label: 'App Manager' },
    { id: 'tunnel-manager', label: 'Tunnel Manager' },
    { id: 'vpn-manager', label: 'VPN Manager' },
    { id: 'user-manager', label: 'User Manager' },
    { id: 'network-manager', label: 'Network Manager' }
  ];

  return (
    <header className="h-20 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 fixed top-0 right-0 left-0 z-50">
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

        {/* Floating Tabs */}
        <div className="flex items-center space-x-2 bg-slate-800/60 backdrop-blur-lg px-3 py-2 rounded-2xl border border-slate-700/50 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/40'
                  : 'text-slate-400 hover:text-teal-400 hover:bg-slate-700/50'
              }`}
            >
              {item.label}
            </button>
          ))}
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