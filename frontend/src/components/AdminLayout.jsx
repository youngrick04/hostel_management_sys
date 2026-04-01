import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Home, GitBranch, CreditCard, BarChart2, LogOut } from 'lucide-react'

const navItems = [
  { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/students', icon: Users, label: 'Students' },
  { to: '/admin/rooms', icon: Home, label: 'Rooms' },
  { to: '/admin/allocations', icon: GitBranch, label: 'Allocations' },
  { to: '/admin/payments', icon: CreditCard, label: 'Payments' },
  { to: '/admin/reports', icon: BarChart2, label: 'Reports' },
]

export default function AdminLayout() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen bg-gray-100">
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
      <main className="ml-52 flex-1 p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
