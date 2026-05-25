import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  CreditCard,
  Bell,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

const notifications = [
  {
    icon: Bell,
    title: "Room Maintenance",
    desc: "Maintenance Scheduled on 2024-03-15",
    color: "text-gray-500",
  },
  {
    icon: AlertCircle,
    title: "Payment Due",
    desc: "Hostel fee due by the end of the year",
    color: "text-red-500",
  },
  {
    icon: CheckCircle,
    title: "Complaint Resolved",
    desc: "Water Shortage Complaint resolved",
    color: "text-green-500",
  },
];

export default function StudentDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Welcome, Akua
        </h1>
        <p className="text-gray-500 mt-1">Hostel Overview</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {/* Room Status */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-4">
            <Home size={15} className="text-brand" />
            Room Status
          </div>
          <p className="text-xs text-gray-400 mb-1">Status</p>
          <div className="flex items-center gap-1.5 mb-4">
            <CheckCircle size={14} className="text-green-500" />
            <span className="font-semibold text-gray-800">Allocated</span>
          </div>
          <p className="text-xs text-gray-400 mb-1">Current Details</p>
          <p className="font-semibold text-gray-800 text-sm">Hostel B</p>
          <p className="text-gray-600 text-sm">Room #B401</p>
        </div>

        {/* Payment Status */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-4">
            <CreditCard size={15} className="text-brand" />
            Payment Status
          </div>
          <p className="text-xs text-gray-400 mb-1">Current Status</p>
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="font-semibold text-gray-800">Pending</span>
          </div>
          <p className="text-xs text-gray-400 mb-1">Details</p>
          <p className="text-sm text-gray-700">
            Amount Due: <span className="font-semibold">₵2330</span>
          </p>
          <p className="text-sm text-gray-700">Due Date: 2024-03-29</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-4">
            Quick Actions
          </p>
          <div className="space-y-2">
            {[
              {
                label: "View Room Details",
                color: "bg-purple-50 text-purple-700",
                path: "/student/room-allocation",
              },
              {
                label: "Make Payment",
                color: "bg-yellow-50 text-yellow-700",
                path: "/student/payment-status",
              },
              {
                label: "File Complaint",
                color: "bg-red-50 text-red-700",
                path: "/student/complaints",
              },
            ].map(({ label, color, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium w-full text-left transition-opacity hover:opacity-80 ${color}`}
              >
                <ArrowRight size={13} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <Bell size={18} className="text-gray-800" />
          <h2 className="font-display text-xl font-bold text-gray-900">
            Recent Notifications
          </h2>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Stay updated with hostel announcements
        </p>
        <div className="divide-y divide-gray-50">
          {notifications.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-4 py-4">
              <div className={`mt-0.5 ${color}`}>
                <Icon size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">{title}</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
