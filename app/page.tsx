'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/CRM
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Luxury pool by Holter Pools"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="absolute bottom-12 left-0 right-0 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Transform Your Backyard Into Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Expert Pool Design & Construction
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Why Choose Holter Pools */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Why Choose Holter Pools?
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          We don't just build pools—we craft lifetime experiences
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Award-Winning Designs</h3>
            <p className="text-gray-600 leading-relaxed">
              Over 25 years of excellence in pool design and construction. Our portfolio includes
              hundreds of stunning projects recognized for innovation and quality.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Lightning-Fast Installation</h3>
            <p className="text-gray-600 leading-relaxed">
              Most pools completed in 6-8 weeks from design approval. We work efficiently without
              compromising on quality or attention to detail.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium Materials Only</h3>
            <p className="text-gray-600 leading-relaxed">
              We use only the highest-grade materials and equipment. Every pool comes with a
              comprehensive warranty and lifetime support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Custom Design Process</h3>
            <p className="text-gray-600 leading-relaxed">
              Every pool is uniquely designed to match your vision, lifestyle, and property. Our
              3D rendering technology lets you visualize before we build.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">5-Star Customer Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Rated #1 in customer satisfaction. Our dedicated team guides you through every step,
              from initial consultation to final walkthrough and beyond.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Complete Maintenance Plans</h3>
            <p className="text-gray-600 leading-relaxed">
              We don't disappear after installation. Our full-service maintenance plans keep your
              pool pristine year-round with minimal hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Build Your Dream Pool?
            </h2>
            <p className="text-xl text-blue-100">
              Get a free consultation and custom design quote
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Property Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="123 Main Street, City, State, ZIP"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {submitted ? '✓ Request Sent!' : 'Get My Free Quote'}
            </button>

            {submitted && (
              <p className="text-center text-green-600 font-semibold mt-4">
                Thank you! We'll contact you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/logo.png"
            alt="Holter Pools Logo"
            width={200}
            height={80}
            className="mx-auto mb-6"
          />
          <p className="text-gray-400 mb-4">
            © 2026 Holter Pools. All rights reserved.
          </p>
          <p className="text-gray-400">
            Premium Pool Design & Construction
          </p>
        </div>
      </footer>
    </div>
  );
}
