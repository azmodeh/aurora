import React from 'react';
import { LayoutDashboard, AppWindow, Network, Shield, Users, Globe } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'system-solid-42-server' },
    { id: 'app-manager', label: 'App Manager', icon: 'system-solid-51-layers' },
    { id: 'tunnel-manager', label: 'Tunnel Manager', icon: 'system-solid-38-link' },
    { id: 'vpn-manager', label: 'VPN Manager', icon: 'system-solid-18-lock' },
    { id: 'user-manager', label: 'User Manager', icon: 'users-solid-19-multiple-users' },
    { id: 'network-manager', label: 'Network Manager', icon: 'system-solid-43-globe' }
  ];

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NM</span>
          </div>
          <span className="text-white font-semibold text-lg">Network Manager</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30'
                : 'text-slate-400 hover:bg-slate-800 hover:text-teal-400'
            }`}
          >
            <lord-icon
              src={`https://cdn.lordicon.com/${item.icon}.json`}
              trigger="hover"
              colors={activeTab === item.id ? 'primary:#ffffff' : 'primary:#319795'}
              style={{ width: '24px', height: '24px' }}
            />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-teal-400 transition-all duration-300">
          <lord-icon
            src="https://cdn.lordicon.com/vduvxizq.json"
            trigger="hover"
            colors="primary:#319795"
            style={{ width: '24px', height: '24px' }}
          />
          <span className="font-medium">Notifications</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-teal-400 transition-all duration-300">
          <lord-icon
            src="https://cdn.lordicon.com/eszyyflr.json"
            trigger="hover"
            colors="primary:#319795"
            style={{ width: '24px', height: '24px' }}
          />
          <span className="font-medium">Help</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;