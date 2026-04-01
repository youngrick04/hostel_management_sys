import React, { useState } from 'react'
import { Clock, Bed, MapPin, Users } from 'lucide-react'

const rooms = [
  { id: 'A-101', hostel: 'Hostel A', capacity: 4, beds: 2, floor: '1st floor' },
  { id: 'A-102', hostel: 'Hostel A', capacity: 4, beds: 2, floor: '1st floor' },
  { id: 'A-103', hostel: 'Hostel A', capacity: 4, beds: 2, floor: '1st floor' },
  { id: 'A-104', hostel: 'Hostel A', capacity: 4, beds: 2, floor: '1st floor' },
]

export default function RoomAllocation() {
  const [applied, setApplied] = useState(null)

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">Room Allocation</h1>
        <p className="text-gray-500 mt-1">Browse and Apply for available rooms</p>
      </div>

      {/* Deadline banner */}
      <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-8">
        <Clock size={16} className="text-gray-500 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-gray-800">Room Allocation deadline</p>
          <p className="text-sm text-gray-500">Apply for your preferred room before 30th May</p>
        </div>
      </div>

      {/* Rooms */}
      <div className="mb-4">
        <h2 className="font-display text-lg font-bold text-gray-900">Available Rooms</h2>
        <p className="text-sm text-gray-500">{rooms.length} rooms available</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rooms.map((room) => (
          <div key={room.id + Math.random()} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="mb-3">
              <p className="font-display font-bold text-gray-900 text-lg">{room.id}</p>
              <p className="text-sm text-gray-500">{room.hostel}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                  <Users size={11} /> Capacity
                </div>
                <p className="text-sm font-semibold text-gray-800">{room.capacity} Persons</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                  <Bed size={11} /> Available Beds
                </div>
                <p className="text-sm font-semibold text-gray-800">{room.beds}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2.5 col-span-2">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                  <MapPin size={11} /> Location
                </div>
                <p className="text-sm font-semibold text-gray-800">{room.floor}</p>
              </div>
            </div>
            <button
              onClick={() => setApplied(room.id)}
              className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                applied === room.id
                  ? 'bg-green-500 text-white'
                  : 'bg-brand text-white hover:bg-brand-dark'
              }`}
            >
              {applied === room.id ? '✓ Applied' : 'Apply for Room'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
