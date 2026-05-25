import React, { useState } from "react";
import { Search, Plus, FileText, MoreVertical } from "lucide-react";

const payments = [
  {
    initials: "JD",
    name: "Jordan Davis",
    room: "Room 301B • Premium Single",
    amount: "₵1,200.00",
    invoiceId: "Inv #848-9921",
    date: "Oct 12, 2023",
    method: "POS ending 4338",
    status: "PAID",
  },
  {
    initials: "SR",
    name: "Sarah Richardson",
    room: "Room 102A • Standard Shared",
    amount: "₵850.00",
    invoiceId: "Inv #RJ-2945",
    date: "Due Oct 01, 2023",
    method: "Bank Transfer",
    status: "OVERDUE",
  },
  {
    initials: "MK",
    name: "Marcus Kim",
    room: "Room 409C • Studio",
    amount: "₵1,450.00",
    invoiceId: "Inv #MK-9860",
    date: "Oct 14, 2023",
    method: "Cash Payment",
    status: "PENDING",
  },
];

const statusStyle = {
  PAID: "bg-green-50 text-green-600",
  OVERDUE: "bg-red-50 text-red-600",
  PENDING: "bg-yellow-50 text-yellow-600",
};

const tabs = ["ALL", "PAID", "PENDING", "OVERDUE"];

export default function Payments() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showModal, setShowModal] = useState(false);

  const filtered =
    activeTab === "ALL"
      ? payments
      : payments.filter((p) => p.status === activeTab);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Payments
        </h1>
        <p className="text-gray-500 mt-1">Record and Manage student payments</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-50">
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-100 rounded-lg bg-gray-50 focus:outline-none focus:border-brand"
              placeholder="Search students, room numbers, or invoice IDs..."
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-navy-900 text-white rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors"
          >
            <Plus size={14} /> Record Payment
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <FileText size={14} /> Generate Invoice
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-xs font-semibold tracking-wider transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-brand text-brand"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="divide-y divide-gray-50">
          {/* Header */}
          <div className="grid grid-cols-5 px-5 py-3 text-xs font-medium text-gray-400">
            <span className="col-span-2">STUDENT & ROOM</span>
            <span>AMOUNT</span>
            <span>DATE & METHOD</span>
            <span>STATUS</span>
          </div>

          {filtered.map((p) => (
            <div
              key={p.name}
              className="grid grid-cols-5 items-center px-5 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {p.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-400">{p.room}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{p.amount}</p>
                <p className="text-xs text-gray-400">{p.invoiceId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-700">{p.date}</p>
                <p className="text-xs text-gray-400">{p.method}</p>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[p.status]}`}
                >
                  • {p.status}
                </span>
                <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                  <MoreVertical size={14} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="font-display font-bold text-gray-900 text-xl mb-5">
              Record Payment
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Student
                </label>
                <select className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand">
                  <option>Select student...</option>
                  <option>Jordan Davis</option>
                  <option>Sarah Richardson</option>
                  <option>Marcus Kim</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Amount ($)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Payment Method
                </label>
                <select className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand">
                  <option>Cash</option>
                  <option>Bank Transfer</option>
                  <option>POS / Card</option>
                  <option>Mobile Money</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-100 rounded-lg px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-brand"
                />
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
                Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
