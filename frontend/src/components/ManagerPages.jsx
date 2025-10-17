import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ManagerPage = ({ title, icon, items, actions }) => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <lord-icon
            src={`https://cdn.lordicon.com/${icon}.json`}
            trigger="loop"
            delay="2000"
            colors="primary:#319795"
            style={{ width: '48px', height: '48px' }}
          />
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl shadow-lg shadow-purple-500/30">
          + Add New
        </Button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Card key={index} className="bg-[#1a1d2e] border-[#2a2d3e] hover:border-purple-500/30 transition-all duration-300 cursor-pointer group rounded-xl">
            <CardContent className="p-5">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#252836] rounded-xl group-hover:bg-[#2a2d3e] transition-all duration-300">
                  <lord-icon
                    src={`https://cdn.lordicon.com/${action.icon}.json`}
                    trigger="hover"
                    colors="primary:#6366f1"
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
      <Card className="bg-[#1a1d2e] border-[#2a2d3e] rounded-xl">
        <CardHeader>
          <CardTitle className="text-white text-base">Manage {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a2d3e]">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs">Name</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs">Status</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs">Last Activity</th>
                  <th className="text-right py-3 px-4 text-slate-500 font-medium text-xs">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b border-[#2a2d3e] hover:bg-[#252836] transition-all duration-300">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'active' ? 'bg-green-500' :
                          item.status === 'inactive' ? 'bg-slate-500' : 'bg-red-500'
                        }`} />
                        <span className="text-white font-medium text-sm">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                        item.status === 'active' ? 'bg-green-500/10 text-green-400' :
                        item.status === 'inactive' ? 'bg-slate-500/10 text-slate-400' : 'bg-red-500/10 text-red-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-sm">{item.lastActivity}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-[#252836] rounded-lg transition-all duration-300">
                          <lord-icon
                            src="https://cdn.lordicon.com/wuvorxbv.json"
                            trigger="hover"
                            colors="primary:#6366f1"
                            style={{ width: '18px', height: '18px' }}
                          />
                        </button>
                        <button className="p-2 hover:bg-[#252836] rounded-lg transition-all duration-300">
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