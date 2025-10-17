import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const NetworkTopology = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const datacenters = [
    { id: 1, name: 'Liverpool DC', x: 280, y: 280, load: 9, status: 'normal' },
    { id: 2, name: 'Manchester DC', x: 380, y: 200, load: 20, status: 'warning' },
    { id: 3, name: 'Nottingham DC', x: 500, y: 280, load: 10, status: 'normal' },
    { id: 4, name: 'Cambridge DC', x: 650, y: 350, load: 2, status: 'good' },
    { id: 5, name: 'Brighton DC', x: 600, y: 600, load: 18, status: 'normal' },
    { id: 6, name: 'Southampton DC', x: 480, y: 600, load: 2, status: 'good' },
    { id: 7, name: 'Bristol DC', x: 360, y: 520, load: 5, status: 'good' },
    { id: 8, name: 'Cardiff DC', x: 270, y: 500, load: 5, status: 'critical' },
    { id: 9, name: 'London DC', x: 580, y: 480, load: 75, status: 'critical' }
  ];

  const connections = [
    { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
    { from: 3, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
    { from: 7, to: 8 }, { from: 8, to: 1 }, { from: 3, to: 9 },
    { from: 9, to: 5 }, { from: 1, to: 8 }, { from: 2, to: 7 },
    { from: 4, to: 9 }
  ];

  const getNodeColor = (status, load) => {
    if (status === 'critical' || load > 50) return 'red';
    if (status === 'warning' || load > 15) return 'orange';
    return 'blue';
  };

  const getNodeClasses = (status, load) => {
    const baseClass = 'absolute flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer';
    if (status === 'critical' || load > 50) {
      return `${baseClass} w-24 h-24 bg-gradient-to-br from-red-500/30 to-red-600/30 border-4 border-red-500 shadow-lg shadow-red-500/50`;
    }
    if (status === 'warning' || load > 15) {
      return `${baseClass} w-20 h-20 bg-gradient-to-br from-orange-500/30 to-orange-600/30 border-3 border-orange-500 shadow-lg shadow-orange-500/40`;
    }
    return `${baseClass} w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/30 border-3 border-blue-500 shadow-lg shadow-blue-500/40`;
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Total Devices</p>
                <h3 className="text-3xl font-bold text-white">9</h3>
              </div>
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📡</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Links</p>
                <h3 className="text-3xl font-bold text-white">25</h3>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Hosts</p>
                <h3 className="text-3xl font-bold text-white">9</h3>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Network Health</p>
                <h3 className="text-3xl font-bold text-white">87%</h3>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Topology Map */}
      <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="text-2xl font-bold">Network Topology</span>
            <div className="flex items-center space-x-2">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl">
                + Add Node
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 rounded-xl">
                Refresh
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-[600px] bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50">
            {/* Background Map */}
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23334155' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: '50px 50px'
            }} />

            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {connections.map((conn, idx) => {
                const from = datacenters.find(dc => dc.id === conn.from);
                const to = datacenters.find(dc => dc.id === conn.to);
                const isHighLoad = from.load > 50 || to.load > 50;
                return (
                  <line
                    key={idx}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isHighLoad ? '#ef4444' : '#3b82f6'}
                    strokeWidth="2"
                    opacity="0.5"
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Datacenters */}
            {datacenters.map((dc) => (
              <div
                key={dc.id}
                className={getNodeClasses(dc.status, dc.load)}
                style={{
                  left: `${dc.x - 40}px`,
                  top: `${dc.y - 40}px`,
                  transform: hoveredNode === dc.id ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredNode(dc.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="text-center">
                  <div className="text-white font-bold text-lg">{dc.load}%</div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white text-xs font-medium bg-slate-800/80 px-2 py-1 rounded-lg">
                      {dc.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-lg rounded-xl p-4 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-3">Status</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-slate-300 text-xs">Normal (0-15%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-slate-300 text-xs">Warning (15-50%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-slate-300 text-xs">Critical (>50%)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkTopology;