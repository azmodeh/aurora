import React from 'react';

const TabBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'lupuorrc' },
    { id: 'app-manager', label: 'App Manager', icon: 'wlorhwqa' },
    { id: 'tunnel-manager', label: 'Tunnel Manager', icon: 'jvihlqtw' },
    { id: 'vpn-manager', label: 'VPN Manager', icon: 'fihkmjcs' },
    { id: 'user-manager', label: 'User Manager', icon: 'dxjqoygy' },
    { id: 'network-manager', label: 'Network Manager', icon: 'xzksbhzh' }
  ];

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/50">
      <div className="flex items-center justify-center px-6 py-3 space-x-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/40'
                : 'text-slate-400 hover:text-teal-400 hover:bg-slate-800/50'
            }`}
          >
            <lord-icon
              src={`https://cdn.lordicon.com/${item.icon}.json`}
              trigger="hover"
              colors={activeTab === item.id ? 'primary:#ffffff' : 'primary:#319795'}
              style={{ width: '20px', height: '20px' }}
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;