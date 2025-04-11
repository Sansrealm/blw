import React from 'react';
import { MainNavigation } from './components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Strategic consulting for growing businesses
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Helping businesses navigate challenges, seize opportunities, and achieve sustainable growth.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/contact">
                <span className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50">
                  Book a Consultation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Simple content section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy Consulting</h3>
              <p className="text-gray-600">Develop clear roadmaps with data-backed strategies that align with your goals.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations Optimization</h3>
              <p className="text-gray-600">Streamline your operations for efficiency and productivity while reducing costs.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Advisory</h3>
              <p className="text-gray-600">Make confident financial decisions with expert analysis and planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between flex-wrap">
            <div>
              <h3 className="text-xl font-bold mb-4">Your Consulting</h3>
              <p className="text-gray-400 max-w-md">Strategic consulting services for growing businesses.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">info@yourconsulting.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}