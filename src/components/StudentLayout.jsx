import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, User, Home, CreditCard, AlertCircle, LogOut } from 'lucide-react'

const navItems = [
  { to: '/student/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/student/profile', icon: User, label: 'My Profile' },
  { to: '/student/room-allocation', icon: Home, label: 'Room Allocation' },
  { to: '/student/payment-status', icon: CreditCard, label: 'Payment Status' },
  { to: '/student/complaints', icon: AlertCircle, label: 'Complaints' },
]

export default function StudentLayout() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-52 bg-navy-900 flex flex-col fixed h-full z-40">
        <div className="p-5 border-b border-navy-700">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand rounded-md flex items-center justify-center">
              <Home size={13} className="text-white" />
            </div>
            <span className="font-display font-bold text-white text-base">HostelHub</span>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-thin">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-brand text-white font-medium'
                    : 'text-gray-400 hover:bg-navy-700 hover:text-white'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-navy-700">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-sm text-gray-400 hover:text-white rounded-lg hover:bg-navy-700 transition-all"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
      {/* Main content */}
      <main className="ml-52 flex-1 p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
