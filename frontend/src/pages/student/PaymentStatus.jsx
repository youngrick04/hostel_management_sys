import React from "react";
import { AlertCircle, CheckCircle, CreditCard } from "lucide-react";

const payments = [
  { id: "#15267", date: "Mar 1, 2023", amount: 100, status: "Success" },
  { id: "#153587", date: "Jan 26, 2023", amount: 300, status: "Success" },
  { id: "#12436", date: "Feb 12, 2033", amount: 100, status: "Success" },
  { id: "#16879", date: "Feb 12, 2033", amount: 500, status: "Success" },
  { id: "#16378", date: "Feb 28, 2033", amount: 500, status: "Success" },
  { id: "#16609", date: "March 13, 2033", amount: 100, status: "Success" },
  { id: "#16907", date: "March 18, 2033", amount: 100, status: "Pending" },
];

export default function PaymentStatus() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Payment Status
        </h1>
        <p className="text-gray-500 mt-1">View and Manage your payments</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500 mb-1">Amount Due</p>
          <p className="font-display text-2xl font-bold text-red-500">₵300</p>
          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <AlertCircle size={11} /> 1 pending Payment
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500 mb-1">Total Paid</p>
          <p className="font-display text-2xl font-bold text-gray-900">₵2000</p>
          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <CheckCircle size={11} className="text-green-500" /> 4 Payments
            Completed
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500 mb-1">Payment Method</p>
          <p className="font-display text-xl font-bold text-gray-900">
            Online & Cash
          </p>
          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <CreditCard size={11} /> Multiple options available
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50">
          <h2 className="font-display font-bold text-gray-900">
            Payments History
          </h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50">
              {["Order ID", "Date", "Amount", "Status"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-xs font-medium text-gray-400 text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {payments.map((p, i) => (
              <tr
                key={i}
                className={`hover:bg-gray-50 transition-colors ${i === 0 ? "bg-blue-50" : ""}`}
              >
                <td className="px-6 py-3.5 text-sm text-blue-600 font-medium">
                  {p.id}
                </td>
                <td className="px-6 py-3.5 text-sm text-gray-600">{p.date}</td>
                <td className="px-6 py-3.5 text-sm text-gray-800">
                  ₵{p.amount}
                </td>
                <td className="px-6 py-3.5">
                  <span
                    className={`text-sm font-medium ${p.status === "Success" ? "text-green-500" : "text-orange-500"}`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
