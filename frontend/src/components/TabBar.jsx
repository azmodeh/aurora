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
    <div className="fixed top-16 left-0 right-0 z-40 bg-[#1a1a1a] border-b border-teal-500/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/5 to-transparent" />
      <div className="flex items-center justify-center px-6 py-2.5 space-x-1 relative z-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative overflow-hidden group ${
              activeTab === item.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {activeTab !== item.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            )}
            <lord-icon
              src={`https://cdn.lordicon.com/${item.icon}.json`}
              trigger="hover"
              colors={activeTab === item.id ? 'primary:#ffffff' : 'primary:#14b8a6'}
              style={{ width: '18px', height: '18px' }}
              className="relative z-10"
            />
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;