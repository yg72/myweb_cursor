'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Here you would typically integrate with your newsletter service
    // For now, we'll just simulate a successful subscription
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Stay Updated on AI & Mental Health
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Join our newsletter to receive the latest insights, research findings, and practical
          applications in AI and mental health.
        </p>

        {/* Subscription Form */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg">
              Thank you for subscribing! Please check your email to confirm your subscription.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg">
              An error occurred. Please try again later.
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Latest Research</h3>
            <p className="text-gray-600">
              Get updates on cutting-edge AI applications in mental health research.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Practical Insights</h3>
            <p className="text-gray-600">
              Learn how to apply AI tools and techniques in mental health practice.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Community Updates</h3>
            <p className="text-gray-600">
              Stay connected with the AI and mental health community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 