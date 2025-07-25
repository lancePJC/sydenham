'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
          Sign Up
        </h1>

        {/* Google Sign Up Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg p-3 mb-6 hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6 flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" className="mt-1" required />
          <label>
            I agree to the{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition"
        >
          Sign Up
        </button>

        {/* Link to Login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-orange-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
