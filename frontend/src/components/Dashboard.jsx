import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Dashboard = () => {
  const stats = [
    { label: 'Total Devices', value: '248', change: '+12%', icon: 'psnhawjn', color: 'teal' },
    { label: 'Active Tunnels', value: '156', change: '+8%', icon: 'jvihlqtw', color: 'purple' },
    { label: 'Active Users', value: '1,234', change: '+24%', icon: 'dxjqoygy', color: 'blue' },
    { label: 'Network Health', value: '98%', change: '+2%', icon: 'xzksbhzh', color: 'green' }
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-teal-500/30 hover:border-teal-500 transition-all duration-300 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <CardContent className="p-5 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-2">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <span className="text-teal-400 text-xs font-medium">{stat.change}</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-teal-500/20 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <lord-icon
                    src={`https://cdn.lordicon.com/${stat.icon}.json`}
                    trigger="loop"
                    delay="2000"
                    colors="primary:#14b8a6"
                    style={{ width: '28px', height: '28px' }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Network Activity */}
        <Card className="lg:col-span-2 bg-[#1a1a1a] border-teal-500/30 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 opacity-50" />
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2 text-base">
              <lord-icon
                src="https://cdn.lordicon.com/xzksbhzh.json"
                trigger="loop"
                delay="3000"
                colors="primary:#14b8a6"
                style={{ width: '24px', height: '24px' }}
              />
              <span>Network Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-[#0f0f0f] rounded-xl border border-teal-500/20">
              <p className="text-slate-600">Network visualization will be displayed here</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-[#1a1a1a] border-teal-500/30 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-purple-600 opacity-50" />
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2 text-base">
              <lord-icon
                src="https://cdn.lordicon.com/nocovwne.json"
                trigger="loop"
                delay="3000"
                colors="primary:#8b5cf6"
                style={{ width: '24px', height: '24px' }}
              />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-[#0f0f0f] hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-teal-500/10 transition-all duration-300 border border-teal-500/10 hover:border-teal-500/30">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-teal-500 shadow-lg shadow-teal-500/50' :
                    activity.type === 'error' ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-purple-500 shadow-lg shadow-purple-500/50'
                  }`} />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{activity.action}</p>
                    <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1a1a1a] border-teal-500/30 hover:border-teal-500 transition-all duration-300 cursor-pointer group rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <CardContent className="p-5 flex flex-col items-center text-center space-y-3 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600/30 to-teal-500/30 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <lord-icon
                src="https://cdn.lordicon.com/gqdnbnwt.json"
                trigger="hover"
                colors="primary:#8b5cf6"
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <h4 className="text-white font-semibold text-base">Create New Tunnel</h4>
            <p className="text-slate-500 text-xs">Set up a secure tunnel connection</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm py-2 shadow-lg shadow-purple-500/30">
              Create
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-teal-500/30 hover:border-teal-500 transition-all duration-300 cursor-pointer group rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <CardContent className="p-5 flex flex-col items-center text-center space-y-3 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500/30 to-purple-600/30 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="hover"
                colors="primary:#14b8a6"
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <h4 className="text-white font-semibold text-base">Deploy Application</h4>
            <p className="text-slate-500 text-xs">Deploy a new application instance</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm py-2 shadow-lg shadow-purple-500/30">
              Deploy
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-teal-500/30 hover:border-teal-500 transition-all duration-300 cursor-pointer group rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <CardContent className="p-5 flex flex-col items-center text-center space-y-3 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600/30 to-teal-500/30 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                colors="primary:#8b5cf6"
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <h4 className="text-white font-semibold text-base">Add User</h4>
            <p className="text-slate-500 text-xs">Create a new user account</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm py-2 shadow-lg shadow-purple-500/30">
              Add User
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;