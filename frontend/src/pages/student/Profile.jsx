import React, { useState } from 'react'
import { User, Edit2 } from 'lucide-react'

const Field = ({ label, placeholder, type = 'text', className = '' }) => (
  <div className={className}>
    <label className="block text-xs text-gray-500 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-brand transition-colors"
    />
  </div>
)

export default function StudentProfile() {
  const [editing, setEditing] = useState(false)
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-500 mt-1">View and Manage your personal information</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-semibold">
              AM
            </div>
            <div>
              <p className="font-semibold text-gray-900">Akua Mensah</p>
              <p className="text-xs text-gray-500">Student ID: 022100860</p>
            </div>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
          >
            <Edit2 size={13} />
            {editing ? 'Save Profile' : 'Edit Profile'}
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User size={15} className="text-gray-500" />
              <h3 className="font-semibold text-gray-800">Personal Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name" placeholder="Akua Mensah" />
              <Field label="Gender" placeholder="Female" />
              <Field label="Email" placeholder="akua@example.com" type="email" />
              <Field label="Phone" placeholder="+233 200 000 000" />
              <Field label="Date of Birth" placeholder="2000-01-01" type="date" className="col-span-1" />
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Address Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Street Address" placeholder="123 Main St" className="col-span-2" />
              <Field label="House Number" placeholder="12A" />
              <Field label="City" placeholder="Accra" />
              <Field label="Region" placeholder="Greater Accra" className="col-span-2" />
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Current Room</p>
              <p className="text-xl font-bold font-display text-gray-900">B-04</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Payment Status</p>
              <p className="text-xl font-bold font-display text-orange-500">Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
