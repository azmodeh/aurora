import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TabBar from './components/TabBar';
import Dashboard from './components/Dashboard';
import ManagerPage from './components/ManagerPages';
import NetworkTopology from './components/NetworkTopology';
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
            icon="wlorhwqa"
            items={mockData.apps}
            actions={[
              { label: 'Running Apps', count: 24, icon: 'gqdnbnwt' },
              { label: 'Stopped Apps', count: 8, icon: 'qhviklyi' },
              { label: 'Deployments', count: 156, icon: 'jvihlqtw' }
            ]}
          />
        );
      case 'tunnel-manager':
        return (
          <ManagerPage
            title="Tunnel Manager"
            icon="jvihlqtw"
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
            icon="fihkmjcs"
            items={mockData.vpns}
            actions={[
              { label: 'Active Connections', count: 89, icon: 'lecprnjb' },
              { label: 'Available Servers', count: 24, icon: 'psnhawjn' },
              { label: 'Security Events', count: 3, icon: 'egiwmiit' }
            ]}
          />
        );
      case 'user-manager':
        return (
          <ManagerPage
            title="User Manager"
            icon="dxjqoygy"
            items={mockData.users}
            actions={[
              { label: 'Active Users', count: 234, icon: 'hrjifpbq' },
              { label: 'Pending Invites', count: 12, icon: 'nocovwne' },
              { label: 'Admin Users', count: 8, icon: 'eszyyflr' }
            ]}
          />
        );
      case 'network-manager':
        return <NetworkTopology />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0f1117]' : 'bg-slate-50'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-32 px-6 pb-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;