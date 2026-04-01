import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ExternalLink, Download } from 'lucide-react'

const data = [
  { date: '23 Jul', value: 10 }, { date: '24 Jul', value: 18 },
  { date: '25 Jul', value: 22 }, { date: '26 Jul', value: 30 },
  { date: '27 Jul', value: 45 }, { date: '28 Jul', value: 55 },
  { date: '29 Jul', value: 65 }, { date: '30 Jul', value: 75 },
  { date: '31 Jul', value: 88 },
]

const tabs = ['D', 'W', 'M', 'Y']

const reportStats = [
  { label: 'Total Expected Amount', value: '₵ 5,20,000', color: 'text-yellow-500' },
  { label: 'Total Collected Amount', value: '₵ 2,20,000', color: 'text-yellow-500' },
  { label: 'Total Remaining Amount', value: '₵ 3,00,000', color: 'text-red-500' },
  { label: 'Growth Performance', value: '+ 8.9%', sub: 'Change in revenue', color: 'text-green-500' },
]

export default function Reports() {
  const [activeTab, setActiveTab] = useState('D')
  const [activeType, setActiveType] = useState('Credit')
  const [from, setFrom] = useState('12-01-2023')
  const [to, setTo] = useState('12-01-2023')

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">Report</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {/* Date range */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-gray-500">From</span>
          <div className="flex items-center gap-2 border border-gray-100 rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-sm text-gray-700">📅</span>
            <input
              type="text"
              value={from}
              onChange={e => setFrom(e.target.value)}
              className="text-sm bg-transparent focus:outline-none w-24 text-gray-700"
            />
          </div>
          <span className="text-sm text-gray-500">to</span>
          <div className="flex items-center gap-2 border border-gray-100 rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-sm text-gray-700">📅</span>
            <input
              type="text"
              value={to}
              onChange={e => setTo(e.target.value)}
              className="text-sm bg-transparent focus:outline-none w-24 text-gray-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Chart section */}
          <div className="col-span-2">
            {/* Type tabs */}
            <div className="flex gap-4 mb-5 border-b border-gray-100">
              {['Credit', 'Debit', 'Outstanding'].map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors flex items-center gap-1.5 ${
                    activeType === type ? 'border-brand text-brand' : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${type === 'Credit' ? 'bg-green-400' : type === 'Debit' ? 'bg-red-400' : 'bg-yellow-400'}`} />
                  {type}
                  <ExternalLink size={11} />
                </button>
              ))}
            </div>

            {/* Period + Download */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-lg p-1">
                <button className="px-2 py-1 rounded text-xs text-gray-400">🕐</button>
                {tabs.map(t => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                      activeTab === t ? 'bg-brand text-white' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
                <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700">Custom Time</button>
              </div>
              <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                <Download size={13} /> Download Chart
              </button>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}L`} />
                <Tooltip
                  contentStyle={{ border: '1px solid #f3f4f6', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(v) => [`${v}L`, 'Revenue']}
                />
                <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} fill="url(#colorGreen)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Collection report */}
          <div className="border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-gray-900">Collection Report</h3>
              <ExternalLink size={14} className="text-gray-400" />
            </div>
            <div className="space-y-5">
              {reportStats.map(({ label, value, sub, color }) => (
                <div key={label} className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{label}</p>
                    {sub && <p className="text-xs text-gray-400">{sub}</p>}
                  </div>
                  <div className="flex items-center gap-1">
                    <p className={`font-display font-bold text-base ${color}`}>{value}</p>
                    <ExternalLink size={11} className="text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
