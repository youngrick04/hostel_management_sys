import React, { useState } from 'react'
import { Search, Filter, UserPlus } from 'lucide-react'

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-24">
    <div className="text-6xl mb-4">😴</div>
    <p className="font-semibold text-gray-800 mb-1">No students at this time</p>
    <p className="text-sm text-gray-400">Students will appear here after they register.</p>
  </div>
)

export default function ManageStudents() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900">Manage Students</h1>
          <p className="text-gray-500 mt-1">View and Manage all student accounts</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand text-white rounded-xl text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          <UserPlus size={15} /> Add Student
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex gap-3 p-4 border-b border-gray-50">
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={13} /> Add filter
          </button>
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-100 rounded-lg bg-gray-50 focus:outline-none focus:border-brand"
              placeholder="Search for a student by name or email"
            />
          </div>
        </div>
        <EmptyState />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="font-display font-bold text-gray-900 text-xl mb-5">Add New Student</h2>
            <div className="space-y-4">
              {[['Full Name', 'text', 'Enter full name'], ['Email', 'email', 'student@example.com'], ['Phone', 'text', '+233 ...'], ['Student ID', 'text', 'e.g. 022100860']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="text-xs text-gray-500 block mb-1">{label}</label>
                  <input type={type} placeholder={ph} className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 bg-brand text-white rounded-xl text-sm hover:bg-brand-dark transition-colors font-medium">Add Student</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
