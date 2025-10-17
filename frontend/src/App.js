import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ManagerPage from './components/ManagerPages';
import { mockData } from './mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'app-manager':
        return (
          <ManagerPage
            title="App Manager"
            icon="system-solid-51-layers"
            items={mockData.apps}
            actions={[
              { label: 'Running Apps', count: 24, icon: 'jvihlqtw' },
              { label: 'Stopped Apps', count: 8, icon: 'qhviklyi' },
              { label: 'Deployments', count: 156, icon: 'gqdnbnwt' }
            ]}
          />
        );
      case 'tunnel-manager':
        return (
          <ManagerPage
            title="Tunnel Manager"
            icon="system-solid-38-link"
            items={mockData.tunnels}
            actions={[
              { label: 'Active Tunnels', count: 42, icon: 'gqdnbnwt' },
              { label: 'Inactive Tunnels', count: 12, icon: 'qhviklyi' },
              { label: 'Total Bandwidth', count: '2.4TB', icon: 'xzksbhzh' }
            ]}
          />
        );
      case 'vpn-manager':
        return (
          <ManagerPage
            title="VPN Manager"
            icon="system-solid-18-lock"
            items={mockData.vpns}
            actions={[
              { label: 'Active Connections', count: 89, icon: 'lecprnjb' },
              { label: 'Available Servers', count: 24, icon: 'system-solid-42-server' },
              { label: 'Security Events', count: 3, icon: 'egiwmiit' }
            ]}
          />
        );
      case 'user-manager':
        return (
          <ManagerPage
            title="User Manager"
            icon="users-solid-19-multiple-users"
            items={mockData.users}
            actions={[
              { label: 'Active Users', count: 234, icon: 'hrjifpbq' },
              { label: 'Pending Invites', count: 12, icon: 'nocovwne' },
              { label: 'Admin Users', count: 8, icon: 'eszyyflr' }
            ]}
          />
        );
      case 'network-manager':
        return (
          <ManagerPage
            title="Network Manager"
            icon="system-solid-43-globe"
            items={mockData.networks}
            actions={[
              { label: 'Active Networks', count: 16, icon: 'system-solid-40-wifi' },
              { label: 'Devices', count: 248, icon: 'system-solid-42-server' },
              { label: 'Data Transfer', count: '8.9TB', icon: 'xzksbhzh' }
            ]}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="ml-64 mt-16 p-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;