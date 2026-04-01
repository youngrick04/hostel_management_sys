import React, { useState } from 'react'
import { PlusSquare } from 'lucide-react'

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-24">
    <div className="text-6xl mb-4">😴</div>
    <p className="font-semibold text-gray-800 mb-1">No rooms available</p>
    <p className="text-sm text-gray-400">Add rooms to get started.</p>
  </div>
)

export default function ManageRooms() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900">Manage Rooms</h1>
          <p className="text-gray-500 mt-1">View and Manage all hostel rooms</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand text-white rounded-xl text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          <PlusSquare size={15} /> Add Room
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <EmptyState />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="font-display font-bold text-gray-900 text-xl mb-5">Add New Room</h2>
            <div className="space-y-4">
              {[
                ['Room Number', 'text', 'e.g. A-101'],
                ['Hostel Name', 'text', 'e.g. Hostel A'],
                ['Floor', 'text', 'e.g. 1st floor'],
                ['Capacity', 'number', 'e.g. 4'],
              ].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="text-xs text-gray-500 block mb-1">{label}</label>
                  <input
                    type={type}
                    placeholder={ph}
                    className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-gray-500 block mb-1">Room Type</label>
                <select className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand">
                  <option>Standard Shared</option>
                  <option>Premium Single</option>
                  <option>Studio</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 bg-brand text-white rounded-xl text-sm hover:bg-brand-dark transition-colors font-medium"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
