import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentLayout from './components/StudentLayout'
import AdminLayout from './components/AdminLayout'
import StudentDashboard from './pages/student/Dashboard'
import StudentProfile from './pages/student/Profile'
import RoomAllocation from './pages/student/RoomAllocation'
import PaymentStatus from './pages/student/PaymentStatus'
import Complaints from './pages/student/Complaints'
import AdminDashboard from './pages/admin/Dashboard'
import ManageStudents from './pages/admin/Students'
import ManageRooms from './pages/admin/Rooms'
import Allocations from './pages/admin/Allocations'
import Payments from './pages/admin/Payments'
import Reports from './pages/admin/Reports'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* Student Routes */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="room-allocation" element={<RoomAllocation />} />
        <Route path="payment-status" element={<PaymentStatus />} />
        <Route path="complaints" element={<Complaints />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="rooms" element={<ManageRooms />} />
        <Route path="allocations" element={<Allocations />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}
