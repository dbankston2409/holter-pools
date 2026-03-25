'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard metrics
  const metrics = {
    totalRevenue: '$487,320',
    newBuilds: { count: 12, revenue: '$324,500' },
    maintenance: { count: 48, revenue: '$96,200' },
    repairs: { count: 23, revenue: '$66,620' },
    monthlyGrowth: '+18.5%',
    customerSatisfaction: '4.9/5.0',
  };

  const techSchedule = [
    { id: 1, tech: 'Mike Torres', time: '8:00 AM', client: 'Henderson Residence', service: 'Pool Maintenance', status: 'In Progress' },
    { id: 2, tech: 'Sarah Chen', time: '10:30 AM', client: 'Oakwood Estates', service: 'Filter Repair', status: 'Scheduled' },
    { id: 3, tech: 'David Rodriguez', time: '1:00 PM', client: 'Lakeside Community', service: 'Chemical Balance', status: 'Scheduled' },
    { id: 4, tech: 'Jessica Park', time: '2:30 PM', client: 'Summit View HOA', service: 'Equipment Install', status: 'Scheduled' },
    { id: 5, tech: 'Mike Torres', time: '4:00 PM', client: 'Canyon Vista', service: 'Weekly Service', status: 'Scheduled' },
  ];

  const newBuilds = [
    { id: 1, project: 'Martinez Custom Pool', location: 'Canyon Lake', status: 'Excavation', progress: 25, startDate: '3/15/26', completion: '6/20/26' },
    { id: 2, project: 'Thompson Resort Pool', location: 'New Braunfels', status: 'Gunite', progress: 45, startDate: '2/28/26', completion: '5/30/26' },
    { id: 3, project: 'Wilson Luxury Spa', location: 'Bulverde', status: 'Plumbing', progress: 60, startDate: '2/10/26', completion: '5/15/26' },
    { id: 4, project: 'Davis Family Pool', location: 'Spring Branch', status: 'Planning', progress: 10, startDate: '3/20/26', completion: '7/1/26' },
    { id: 5, project: 'Anderson Infinity Edge', location: 'Canyon Lake', status: 'Tile & Coping', progress: 75, startDate: '1/15/26', completion: '4/30/26' },
  ];

  const recentActivity = [
    { id: 1, type: 'New Build', description: 'Martinez project - excavation completed', time: '2 hours ago', icon: '🏗️' },
    { id: 2, type: 'Maintenance', description: '48 weekly services completed this week', time: '4 hours ago', icon: '✅' },
    { id: 3, type: 'Repair', description: 'Filter replacement at Oakwood Estates', time: '6 hours ago', icon: '🔧' },
    { id: 4, type: 'Quote', description: 'New pool quote sent to Johnson family', time: '1 day ago', icon: '📄' },
    { id: 5, type: 'Payment', description: '$12,400 payment received - Thompson project', time: '1 day ago', icon: '💰' },
  ];

  const upcomingMaintenance = [
    { id: 1, client: 'Henderson HOA', nextService: 'Mar 26', type: 'Weekly', techs: 2 },
    { id: 2, client: 'Lakeside Community', nextService: 'Mar 27', type: 'Bi-Weekly', techs: 1 },
    { id: 3, client: 'Summit View', nextService: 'Mar 28', type: 'Monthly', techs: 1 },
    { id: 4, client: 'Canyon Vista Homes', nextService: 'Mar 29', type: 'Weekly', techs: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/holter-logo.png"
                alt="Holter Pools"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
              <div className="h-8 w-px bg-slate-300"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pool-dark to-pool-blue bg-clip-text text-transparent">
                Business Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-slate-600">Today</p>
                <p className="text-lg font-semibold text-slate-900">March 25, 2026</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pool-blue to-pool-accent flex items-center justify-center text-white font-semibold">
                HP
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-2xl">
                💰
              </div>
              <span className="text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                {metrics.monthlyGrowth}
              </span>
            </div>
            <h3 className="text-slate-600 text-sm font-medium mb-1">Total Revenue</h3>
            <p className="text-3xl font-bold text-slate-900">{metrics.totalRevenue}</p>
            <p className="text-xs text-slate-500 mt-2">This month</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pool-blue to-pool-accent flex items-center justify-center text-white text-2xl">
                🏗️
              </div>
              <span className="text-pool-blue font-semibold text-sm">{metrics.newBuilds.count} active</span>
            </div>
            <h3 className="text-slate-600 text-sm font-medium mb-1">New Builds</h3>
            <p className="text-3xl font-bold text-slate-900">{metrics.newBuilds.revenue}</p>
            <p className="text-xs text-slate-500 mt-2">52% of total revenue</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-2xl">
                🔧
              </div>
              <span className="text-cyan-600 font-semibold text-sm">{metrics.maintenance.count} clients</span>
            </div>
            <h3 className="text-slate-600 text-sm font-medium mb-1">Maintenance</h3>
            <p className="text-3xl font-bold text-slate-900">{metrics.maintenance.revenue}</p>
            <p className="text-xs text-slate-500 mt-2">31% of total revenue</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-2xl">
                ⚡
              </div>
              <span className="text-amber-600 font-semibold text-sm">{metrics.repairs.count} jobs</span>
            </div>
            <h3 className="text-slate-600 text-sm font-medium mb-1">Repair Work</h3>
            <p className="text-3xl font-bold text-slate-900">{metrics.repairs.revenue}</p>
            <p className="text-xs text-slate-500 mt-2">17% of total revenue</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 border border-slate-100">
          <div className="border-b border-slate-200 px-6">
            <nav className="flex space-x-8">
              {['overview', 'tech-schedule', 'new-builds', 'maintenance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-pool-blue text-pool-blue'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{activity.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-pool-blue font-medium">{activity.type}</span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs text-slate-500">{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Maintenance */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Upcoming Maintenance</h3>
                  <div className="space-y-3">
                    {upcomingMaintenance.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-pool-blue hover:shadow-md transition-all">
                        <div>
                          <p className="font-medium text-slate-900">{item.client}</p>
                          <p className="text-sm text-slate-500">{item.type} Service</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-pool-blue">{item.nextService}</p>
                          <p className="text-xs text-slate-500">{item.techs} tech{item.techs > 1 ? 's' : ''}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tech-schedule' && (
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Today&apos;s Tech Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Time</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Technician</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Client</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Service</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {techSchedule.map((item) => (
                        <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-4 px-4 text-sm font-medium text-slate-900">{item.time}</td>
                          <td className="py-4 px-4 text-sm text-slate-700">{item.tech}</td>
                          <td className="py-4 px-4 text-sm text-slate-700">{item.client}</td>
                          <td className="py-4 px-4 text-sm text-slate-700">{item.service}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                              item.status === 'In Progress'
                                ? 'bg-pool-blue text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'new-builds' && (
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Active New Build Projects</h3>
                <div className="space-y-4">
                  {newBuilds.map((build) => (
                    <div key={build.id} className="border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg">{build.project}</h4>
                          <p className="text-sm text-slate-500">📍 {build.location}</p>
                        </div>
                        <span className="bg-pool-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                          {build.status}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                          <span>Progress</span>
                          <span className="font-semibold">{build.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-pool-blue to-pool-accent h-2.5 rounded-full transition-all"
                            style={{ width: `${build.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Started: {build.startDate}</span>
                        <span>Est. Completion: {build.completion}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'maintenance' && (
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Maintenance Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border border-cyan-200">
                    <p className="text-sm text-cyan-700 font-medium mb-2">Weekly Contracts</p>
                    <p className="text-3xl font-bold text-cyan-900">28</p>
                    <p className="text-xs text-cyan-600 mt-1">$45,200/month</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium mb-2">Bi-Weekly Contracts</p>
                    <p className="text-3xl font-bold text-blue-900">15</p>
                    <p className="text-xs text-blue-600 mt-1">$28,500/month</p>
                  </div>
                  <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-6 border border-sky-200">
                    <p className="text-sm text-sky-700 font-medium mb-2">Monthly Contracts</p>
                    <p className="text-3xl font-bold text-sky-900">12</p>
                    <p className="text-xs text-sky-600 mt-1">$22,500/month</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Service Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">Chemical Balance & Testing</span>
                      <span className="text-sm font-semibold text-slate-900">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">Cleaning & Debris Removal</span>
                      <span className="text-sm font-semibold text-slate-900">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">Equipment Inspection</span>
                      <span className="text-sm font-semibold text-slate-900">18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">Filter Maintenance</span>
                      <span className="text-sm font-semibold text-slate-900">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Customer Satisfaction</h3>
            <div className="flex items-end space-x-3">
              <p className="text-5xl font-bold text-pool-blue">{metrics.customerSatisfaction}</p>
              <p className="text-lg text-slate-500 pb-2">rating</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">Based on 156 reviews this month</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Active Techs Today</h3>
            <div className="flex items-end space-x-3">
              <p className="text-5xl font-bold text-pool-blue">5</p>
              <p className="text-lg text-slate-500 pb-2">technicians</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">23 service calls scheduled</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Pending Quotes</h3>
            <div className="flex items-end space-x-3">
              <p className="text-5xl font-bold text-pool-blue">8</p>
              <p className="text-lg text-slate-500 pb-2">quotes</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">$242,800 potential revenue</p>
          </div>
        </div>
      </main>
    </div>
  );
}
