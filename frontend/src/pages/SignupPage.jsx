import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Lock, Mail, User, Github } from "lucide-react";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/student/dashboard");
  };

  const handleGoogleSignup = () => {
    // Add Google OAuth logic here
    console.log("Google signup clicked");
  };

  const handleGithubSignup = () => {
    // Add GitHub OAuth logic here
    console.log("GitHub signup clicked");
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
            Get Started
          </span>
          <h1 className="mb-4 max-w-xl font-display text-4xl font-bold leading-tight text-navy-900 md:text-5xl">
            Create your HostelHub account in minutes.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-gray-500">
            Join the right portal for your role and start managing residents,
            rooms, payments, and requests from one organized system.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Sign up
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Tell us who you are so we can open the right workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500"></span>
              </div>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy-900">
                Firstname
              </span>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-blue-100">
                <User size={18} className="text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Your firstname"
                  className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy-900">
                Surname
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-blue-100">
                <User size={18} className="text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Your surname"
                  className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </label>

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
                Student ID
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-blue-100">
                <User size={18} className="text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Your student ID"
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
                  minLength={6}
                  placeholder="Create a password"
                  className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-dark hover:shadow-lg"
            >
              Create account
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={handleGithubSignup}
                className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300"
              >
                <Github size={18} />
                GitHub
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              Log in
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
