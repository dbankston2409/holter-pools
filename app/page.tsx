'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Mock data
  const metrics = {
    revenue: {
      total: 487500,
      growth: 12.4,
      newBuilds: 253000,
      maintenance: 151200,
      repairs: 83300
    },
    projects: {
      active: 14,
      scheduled: 8,
      completed: 42
    },
    satisfaction: {
      rating: 4.8,
      reviews: 127
    }
  };

  const techSchedule = [
    { day: 'Monday', tech: 'Mike Rodriguez', jobs: 6, type: 'Maintenance', location: 'Canyon Lake Area' },
    { day: 'Tuesday', tech: 'Sarah Chen', jobs: 4, type: 'Repairs', location: 'New Braunfels' },
    { day: 'Wednesday', tech: 'David Martinez', jobs: 5, type: 'Maintenance', location: 'Spring Branch' },
    { day: 'Thursday', tech: 'Mike Rodriguez', jobs: 3, type: 'New Build Support', location: 'Canyon Lake' },
    { day: 'Friday', tech: 'Sarah Chen', jobs: 7, type: 'Maintenance', location: 'Canyon Lake Area' }
  ];

  const newBuilds = [
    { id: 'NB-2024-018', client: 'Anderson Family', stage: 'Excavation', progress: 35, startDate: '2024-03-01', estimatedCompletion: '2024-06-15', value: 48500 },
    { id: 'NB-2024-019', client: 'Thompson Residence', stage: 'Planning', progress: 15, startDate: '2024-03-10', estimatedCompletion: '2024-07-01', value: 52000 },
    { id: 'NB-2024-020', client: 'Miller Estate', stage: 'Plumbing', progress: 65, startDate: '2024-02-15', estimatedCompletion: '2024-05-20', value: 67500 },
    { id: 'NB-2024-021', client: 'Garcia Property', stage: 'Steel Installation', progress: 45, startDate: '2024-02-28', estimatedCompletion: '2024-06-10', value: 58000 },
  ];

  const revenueByMonth = [
    { month: 'Oct', amount: 42000 },
    { month: 'Nov', amount: 38500 },
    { month: 'Dec', amount: 35000 },
    { month: 'Jan', amount: 41200 },
    { month: 'Feb', amount: 45800 },
    { month: 'Mar', amount: 48750 }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Holter Pools" width={180} height={60} className="h-12 w-auto" />
            <div className="h-8 w-px bg-slate-300" />
            <h1 className="text-xl font-bold text-slate-800">Executive Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Last updated: {new Date().toLocaleString()}</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
              HP
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{formatCurrency(metrics.revenue.total)}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-sm font-semibold">↑ {metrics.revenue.growth}%</span>
              <span className="text-slate-500 text-sm">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Projects</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{metrics.projects.active}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700 text-sm">{metrics.projects.scheduled} scheduled</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 text-sm">{metrics.projects.completed} done</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Customer Rating</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{metrics.satisfaction.rating}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700 text-sm">{metrics.satisfaction.reviews} reviews</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white">
            <div className="mb-4">
              <p className="text-sm font-medium text-blue-100">Month Progress</p>
              <p className="text-3xl font-bold mt-1">78%</p>
            </div>
            <div className="w-full bg-blue-800 rounded-full h-2 mb-2">
              <div className="bg-white rounded-full h-2" style={{ width: '78%' }} />
            </div>
            <p className="text-sm text-blue-100">6 days remaining</p>
          </div>
        </div>

        {/* Revenue Breakdown & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Revenue Breakdown</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">New Builds</span>
                  <span className="text-sm font-bold text-slate-900">{formatCurrency(metrics.revenue.newBuilds)}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-3" style={{ width: '52%' }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">52% of total</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Maintenance</span>
                  <span className="text-sm font-bold text-slate-900">{formatCurrency(metrics.revenue.maintenance)}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full h-3" style={{ width: '31%' }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">31% of total</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Repairs</span>
                  <span className="text-sm font-bold text-slate-900">{formatCurrency(metrics.revenue.repairs)}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full h-3" style={{ width: '17%' }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">17% of total</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">Monthly Performance</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">Month</button>
                <button className="px-3 py-1 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100">Quarter</button>
                <button className="px-3 py-1 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100">Year</button>
              </div>
            </div>
            <div className="flex items-end justify-between h-48 gap-4">
              {revenueByMonth.map((data, idx) => {
                const maxAmount = Math.max(...revenueByMonth.map(d => d.amount));
                const height = (data.amount / maxAmount) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end h-40">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all cursor-pointer relative group"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {formatCurrency(data.amount)}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-600">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech Schedule */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Tech Schedule - This Week</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Day</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Technician</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Jobs</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Location</th>
                </tr>
              </thead>
              <tbody>
                {techSchedule.map((schedule, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-medium text-slate-900">{schedule.day}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                          {schedule.tech.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-slate-800">{schedule.tech}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        {schedule.jobs} jobs
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        schedule.type === 'Maintenance' ? 'bg-emerald-100 text-emerald-700' :
                        schedule.type === 'Repairs' ? 'bg-orange-100 text-orange-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {schedule.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{schedule.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Build Projects */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-6">New Build Projects In Progress</h2>
          <div className="space-y-4">
            {newBuilds.map((project, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-slate-900">{project.client}</h3>
                      <span className="text-xs font-mono text-slate-500">{project.id}</span>
                    </div>
                    <p className="text-sm text-slate-600">Current Stage: <span className="font-semibold text-blue-600">{project.stage}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Project Value</p>
                    <p className="text-xl font-bold text-slate-900">{formatCurrency(project.value)}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Progress</span>
                    <span className="text-sm font-bold text-blue-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-3 transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Started {project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Est. completion {project.estimatedCompletion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
