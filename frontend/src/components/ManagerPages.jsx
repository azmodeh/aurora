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
            style={{ width: '40px', height: '40px' }}
          />
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
          + Add New
        </Button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-gradient-to-br group-hover:from-teal-500/20 group-hover:to-purple-600/20 transition-all duration-300">
                  <lord-icon
                    src={`https://cdn.lordicon.com/${action.icon}.json`}
                    trigger="hover"
                    colors="primary:#319795"
                    style={{ width: '32px', height: '32px' }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg mb-1">{action.label}</h4>
                  <p className="text-slate-400 text-sm">{action.count} items</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Items Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Manage {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Last Activity</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b border-slate-700 hover:bg-slate-750 transition-all duration-300">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'active' ? 'bg-teal-500' :
                          item.status === 'inactive' ? 'bg-slate-500' : 'bg-red-500'
                        }`} />
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'active' ? 'bg-teal-500/20 text-teal-400' :
                        item.status === 'inactive' ? 'bg-slate-500/20 text-slate-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-400">{item.lastActivity}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-all duration-300">
                          <lord-icon
                            src="https://cdn.lordicon.com/wuvorxbv.json"
                            trigger="hover"
                            colors="primary:#319795"
                            style={{ width: '20px', height: '20px' }}
                          />
                        </button>
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-all duration-300">
                          <lord-icon
                            src="https://cdn.lordicon.com/ssdupzsv.json"
                            trigger="hover"
                            colors="primary:#ef4444"
                            style={{ width: '20px', height: '20px' }}
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