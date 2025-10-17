export const mockData = {
  apps: [
    { name: 'Web Dashboard', status: 'active', lastActivity: '2 mins ago' },
    { name: 'API Gateway', status: 'active', lastActivity: '5 mins ago' },
    { name: 'Database Service', status: 'active', lastActivity: '10 mins ago' },
    { name: 'Auth Service', status: 'inactive', lastActivity: '1 hour ago' },
    { name: 'File Storage', status: 'active', lastActivity: '30 mins ago' },
    { name: 'Analytics Engine', status: 'error', lastActivity: '45 mins ago' }
  ],
  tunnels: [
    { name: 'Production Tunnel', status: 'active', lastActivity: 'Just now' },
    { name: 'Staging Tunnel', status: 'active', lastActivity: '3 mins ago' },
    { name: 'Development Tunnel', status: 'active', lastActivity: '8 mins ago' },
    { name: 'Test Tunnel', status: 'inactive', lastActivity: '2 hours ago' },
    { name: 'Backup Tunnel', status: 'active', lastActivity: '15 mins ago' },
    { name: 'Migration Tunnel', status: 'error', lastActivity: '1 hour ago' }
  ],
  vpns: [
    { name: 'Office VPN', status: 'active', lastActivity: 'Just now' },
    { name: 'Remote Access VPN', status: 'active', lastActivity: '1 min ago' },
    { name: 'Site-to-Site VPN', status: 'active', lastActivity: '5 mins ago' },
    { name: 'Backup VPN', status: 'inactive', lastActivity: '3 hours ago' },
    { name: 'Client VPN', status: 'active', lastActivity: '12 mins ago' },
    { name: 'Emergency VPN', status: 'error', lastActivity: '2 hours ago' }
  ],
  users: [
    { name: 'John Smith', status: 'active', lastActivity: '5 mins ago' },
    { name: 'Sarah Johnson', status: 'active', lastActivity: '12 mins ago' },
    { name: 'Mike Davis', status: 'active', lastActivity: '20 mins ago' },
    { name: 'Emily Brown', status: 'inactive', lastActivity: '2 days ago' },
    { name: 'David Wilson', status: 'active', lastActivity: '1 hour ago' },
    { name: 'Lisa Anderson', status: 'active', lastActivity: '30 mins ago' }
  ],
  networks: [
    { name: 'Main Network', status: 'active', lastActivity: 'Just now' },
    { name: 'Guest Network', status: 'active', lastActivity: '2 mins ago' },
    { name: 'IoT Network', status: 'active', lastActivity: '5 mins ago' },
    { name: 'Secure Network', status: 'active', lastActivity: '8 mins ago' },
    { name: 'Test Network', status: 'inactive', lastActivity: '1 day ago' },
    { name: 'Backup Network', status: 'error', lastActivity: '3 hours ago' }
  ]
};