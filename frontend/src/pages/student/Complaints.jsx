import React, { useState } from 'react'
import { Download, Search, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Total Complaints (Weekly)', value: 258 },
  { label: 'Complaints Resolved (This Week)', value: 157 },
  { label: 'Total Complaints (Weekly)', value: 258 },
]

export default function Complaints() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">Complaints</h1>
        <p className="text-gray-500 mt-1">Report issues and track their resolution</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {stats.map(({ label, value }) => (
          <div key={label + value} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="w-8 h-8 bg-gray-50 rounded-lg mb-3" />
            <p className="text-xs text-gray-500 mb-2">{label}</p>
            <div className="flex items-center justify-between">
              <p className="font-display text-2xl font-bold text-gray-900">{value}</p>
              <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp size={10} /> 20% More
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Table area */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-semibold text-gray-900">Complaints (258)</p>
            <p className="text-xs text-gray-400">View list of Complaints Below</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Here"
                className="pl-9 pr-4 py-2 text-sm border border-gray-100 rounded-lg bg-gray-50 focus:outline-none focus:border-brand"
              />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={13} /> Download as CSV
            </button>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 mb-5">
          {['Jan 12 - Mar 11', 'Solved', 'Hamadil Boys Hostel'].map(f => (
            <span key={f} className="flex items-center gap-1 px-2.5 py-1 text-xs bg-gray-100 rounded-full text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              {f} ×
            </span>
          ))}
        </div>

        {/* Table headers */}
        <div className="grid grid-cols-5 py-2 border-b border-gray-100 text-xs font-medium text-gray-400 mb-2">
          {['Complainants Name', 'Complaint ID', 'Nature of Complaint', 'Status', 'Type of Complaint'].map(h => (
            <span key={h}>{h}</span>
          ))}
        </div>

        <div className="h-24 flex items-center justify-center text-sm text-gray-400">
          No complaints in this filter
        </div>

        {/* Submit button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-6 w-full py-3 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-colors"
        >
          Submit a Complaint
        </button>
      </div>

      {/* Modal form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="font-display font-bold text-gray-900 text-xl mb-5">Submit a Complaint</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Nature of Complaint</label>
                <input className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand" placeholder="e.g. Water Shortage" />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Description</label>
                <textarea rows={3} className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand resize-none" placeholder="Describe the issue..." />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Type</label>
                <select className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand">
                  <option>Maintenance</option>
                  <option>Security</option>
                  <option>Facilities</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowForm(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={() => setShowForm(false)} className="flex-1 py-2.5 bg-brand text-white rounded-xl text-sm hover:bg-brand-dark transition-colors font-medium">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
