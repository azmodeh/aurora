import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
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
            emoji="📱"
            items={mockData.apps}
            actions={[
              { label: 'Running Apps', count: 24, emoji: '✅' },
              { label: 'Stopped Apps', count: 8, emoji: '⏸️' },
              { label: 'Deployments', count: 156, emoji: '🚀' }
            ]}
          />
        );
      case 'tunnel-manager':
        return (
          <ManagerPage
            title="Tunnel Manager"
            emoji="🔗"
            items={mockData.tunnels}
            actions={[
              { label: 'Active Tunnels', count: 42, emoji: '✅' },
              { label: 'Inactive Tunnels', count: 12, emoji: '⏸️' },
              { label: 'Total Bandwidth', count: '2.4TB', emoji: '📊' }
            ]}
          />
        );
      case 'vpn-manager':
        return (
          <ManagerPage
            title="VPN Manager"
            emoji="🔒"
            items={mockData.vpns}
            actions={[
              { label: 'Active Connections', count: 89, emoji: '🔐' },
              { label: 'Available Servers', count: 24, emoji: '🖥️' },
              { label: 'Security Events', count: 3, emoji: '⚠️' }
            ]}
          />
        );
      case 'user-manager':
        return (
          <ManagerPage
            title="User Manager"
            emoji="👥"
            items={mockData.users}
            actions={[
              { label: 'Active Users', count: 234, emoji: '✅' },
              { label: 'Pending Invites', count: 12, emoji: '📧' },
              { label: 'Admin Users', count: 8, emoji: '👑' }
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
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-24 px-6 pb-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;