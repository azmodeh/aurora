import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Dashboard = () => {
  const stats = [
    { label: 'Total Devices', value: '248', change: '+12%', icon: 'system-solid-42-server' },
    { label: 'Active Tunnels', value: '156', change: '+8%', icon: 'system-solid-38-link' },
    { label: 'Active Users', value: '1,234', change: '+24%', icon: 'users-solid-19-multiple-users' },
    { label: 'Network Health', value: '98%', change: '+2%', icon: 'system-solid-40-wifi' }
  ];

  const recentActivities = [
    { action: 'New tunnel created', time: '2 mins ago', type: 'success' },
    { action: 'VPN connection established', time: '5 mins ago', type: 'success' },
    { action: 'Security alert detected', time: '10 mins ago', type: 'error' },
    { action: 'User logged in', time: '15 mins ago', type: 'info' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <span className="text-teal-400 text-sm font-medium">{stat.change}</span>
                </div>
                <lord-icon
                  src={`https://cdn.lordicon.com/${stat.icon}.json`}
                  trigger="loop"
                  delay="2000"
                  colors="primary:#319795"
                  style={{ width: '48px', height: '48px' }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Network Activity */}
        <Card className="lg:col-span-2 bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <lord-icon
                src="https://cdn.lordicon.com/xzksbhzh.json"
                trigger="loop"
                delay="3000"
                colors="primary:#319795"
                style={{ width: '28px', height: '28px' }}
              />
              <span>Network Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-slate-900 rounded-lg border border-slate-700">
              <p className="text-slate-500">Network visualization will be displayed here</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <lord-icon
                src="https://cdn.lordicon.com/nocovwne.json"
                trigger="loop"
                delay="3000"
                colors="primary:#319795"
                style={{ width: '28px', height: '28px' }}
              />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-900 hover:bg-slate-750 transition-all duration-300">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-teal-500' :
                    activity.type === 'error' ? 'bg-red-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{activity.action}</p>
                    <p className="text-slate-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
            <lord-icon
              src="https://cdn.lordicon.com/gqdnbnwt.json"
              trigger="hover"
              colors="primary:#9B59B6"
              style={{ width: '48px', height: '48px' }}
            />
            <h4 className="text-white font-semibold">Create New Tunnel</h4>
            <p className="text-slate-400 text-sm">Set up a secure tunnel connection</p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
              Create
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
            <lord-icon
              src="https://cdn.lordicon.com/jvihlqtw.json"
              trigger="hover"
              colors="primary:#9B59B6"
              style={{ width: '48px', height: '48px' }}
            />
            <h4 className="text-white font-semibold">Deploy Application</h4>
            <p className="text-slate-400 text-sm">Deploy a new application instance</p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
              Deploy
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
            <lord-icon
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              colors="primary:#9B59B6"
              style={{ width: '48px', height: '48px' }}
            />
            <h4 className="text-white font-semibold">Add User</h4>
            <p className="text-slate-400 text-sm">Create a new user account</p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
              Add User
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;