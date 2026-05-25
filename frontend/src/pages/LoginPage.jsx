import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(role === "admin" ? "/admin/dashboard" : "/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-900">
              <Home size={14} className="text-white" />
            </div>
            <span className="font-display text-lg font-bold text-navy-900">
              HostelHub
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-navy-900"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <section>
          <span className="mb-4 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
            Welcome Back
          </span>
          <h1 className="mb-4 max-w-xl font-display text-4xl font-bold leading-tight text-navy-900 md:text-5xl">
            Sign in to manage hostel operations with clarity.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-gray-500">
            Access your dashboard, room allocation, payments, complaints, and
            student records from one focused workspace.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Log in
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Choose your portal and enter your account details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 rounded-xl border border-gray-200 bg-gray-50 p-1">
              {["student", "admin"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRole(option)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all ${
                    role === option
                      ? "bg-blue-100 text-blue-900navy-900 shadow-sm"
                      : "text-gray-500 hover:text-navy-900"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy-900">
                Email address
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-blue-100">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy-900">
                Password
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-blue-100">
                <Lock size={18} className="text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-brand"
                />
                Remember me
              </label>
              <a href="#" className="font-medium text-brand hover:text-brand-dark">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Log in to dashboard
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            New to HostelHub?{" "}
            <Link to="/signup" className="font-semibold text-brand hover:text-brand-dark">
              Create an account
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
