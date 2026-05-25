import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Home,
  Percent,
  CreditCard,
  UserPlus,
  PlusSquare,
  GitBranch,
  DollarSign,
  CheckCircle,
  UserCheck,
} from "lucide-react";

const stats = [
  {
    label: "Total Students",
    value: "248",
    sub: "+12% from last month",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    label: "Total Rooms",
    value: "156",
    sub: "80 occupied, 76 available",
    icon: Home,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    label: "Occupancy Rate",
    value: "51.3%",
    sub: "+25% from last month",
    icon: Percent,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    label: "Pending Payments",
    value: "₵1.2L",
    sub: "32 students pending",
    icon: CreditCard,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
];

const quickActions = [
  {
    label: "Add New Student",
    color: "bg-purple-100 text-purple-700 hover:bg-purple-200",
    path: "/admin/students",
  },
  {
    label: "Add New room",
    color: "bg-green-100 text-green-700 hover:bg-green-200",
    path: "/admin/rooms",
  },
  {
    label: "Allocate Room",
    color: "bg-pink-100 text-pink-700 hover:bg-pink-200",
    path: "/admin/allocations",
  },
  {
    label: "Record Payment",
    color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
    path: "/admin/payments",
  },
];

const activities = [
  { icon: UserCheck, label: "New Student Registered" },
  { icon: Home, label: "Room Allocated" },
  { icon: DollarSign, label: "Payment Received" },
  { icon: CheckCircle, label: "Complaint Resolved" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Manage your hostel operations</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, sub, icon: Icon, iconBg, iconColor }) => (
          <div
            key={label}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-sm text-gray-500">{label}</p>
              <div
                className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}
              >
                <Icon size={15} className={iconColor} />
              </div>
            </div>
            <p className="font-display text-2xl font-bold text-gray-900 mb-1">
              {value}
            </p>
            <p className="text-xs text-gray-400">{sub}</p>
          </div>
        ))}
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2.5">
            {quickActions.map(({ label, color, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium text-left transition-all ${color}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display font-bold text-gray-900 mb-1">
            Recent Activities
          </h2>
          <p className="text-xs text-gray-400 mb-4">Latest Operations</p>
          <div className="space-y-3">
            {activities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-3 border border-gray-50 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Icon size={14} className="text-gray-500" />
                </div>
                <p className="text-sm text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
