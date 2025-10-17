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
    <div className="fixed top-16 left-0 right-0 z-40 bg-[#1a1d2e] border-b border-[#2a2d3e]">
      <div className="flex items-center justify-center px-6 py-2.5 space-x-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-[#6366f1] text-white'
                : 'text-slate-400 hover:text-white hover:bg-[#252836]'
            }`}
          >
            <lord-icon
              src={`https://cdn.lordicon.com/${item.icon}.json`}
              trigger="hover"
              colors={activeTab === item.id ? 'primary:#ffffff' : 'primary:#94a3b8'}
              style={{ width: '18px', height: '18px' }}
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;