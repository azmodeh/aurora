import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ManagerPage = ({ title, icon, items, actions }) => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-purple-600/30 to-teal-500/30 rounded-xl shadow-lg shadow-purple-500/30">
            <lord-icon
              src={`https://cdn.lordicon.com/${icon}.json`}
              trigger="loop"
              delay="2000"
              colors="primary:#14b8a6"
              style={{ width: '40px', height: '40px' }}
            />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">{title}</h2>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg shadow-purple-500/30">
          + Add New
        </Button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-teal-500/30 hover:border-teal-500 transition-all duration-300 cursor-pointer group rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <CardContent className="p-5 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-teal-500/20 rounded-xl group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                  <lord-icon
                    src={`https://cdn.lordicon.com/${action.icon}.json`}
                    trigger="hover"
                    colors="primary:#14b8a6"
                    style={{ width: '28px', height: '28px' }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-base mb-1">{action.label}</h4>
                  <p className="text-slate-500 text-xs">{action.count} items</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Items Table */}
      <Card className="bg-[#1a1a1a] border-teal-500/30 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 opacity-50" />
        <CardHeader>
          <CardTitle className="text-white text-base">Manage {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-teal-500/20">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs">Name</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs">Status</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs">Last Activity</th>
                  <th className="text-right py-3 px-4 text-slate-500 font-medium text-xs">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b border-teal-500/20 hover:bg-gradient-to-r hover:from-purple-600/5 hover:to-teal-500/5 transition-all duration-300">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'active' ? 'bg-teal-500 shadow-lg shadow-teal-500/50' :
                          item.status === 'inactive' ? 'bg-slate-500' : 'bg-red-500 shadow-lg shadow-red-500/50'
                        }`} />
                        <span className="text-white font-medium text-sm">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                        item.status === 'active' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                        item.status === 'inactive' ? 'bg-slate-500/10 text-slate-400 border border-slate-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-sm">{item.lastActivity}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-teal-500/20 rounded-lg transition-all duration-300">
                          <lord-icon
                            src="https://cdn.lordicon.com/wuvorxbv.json"
                            trigger="hover"
                            colors="primary:#14b8a6"
                            style={{ width: '18px', height: '18px' }}
                          />
                        </button>
                        <button className="p-2 hover:bg-red-500/10 rounded-lg transition-all duration-300">
                          <lord-icon
                            src="https://cdn.lordicon.com/ssdupzsv.json"
                            trigger="hover"
                            colors="primary:#ef4444"
                            style={{ width: '18px', height: '18px' }}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerPage;