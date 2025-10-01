'use client'

import { useState } from 'react';
import { AttendeeInfo } from '@/types';

interface Kitchen {
  id: string;
  name: string;
  location: string;
  capacity: number;
  equipment: string[];
  hourlyRate: number;
  dailyRate: number;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  hostName: string;
}

interface KitchenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (attendeeInfo: AttendeeInfo) => void;
  kitchen: Kitchen;
}

export default function KitchenModal({ isOpen, onClose, onSubmit, kitchen }: KitchenModalProps) {
  const [formData, setFormData] = useState<AttendeeInfo>({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit(formData);
      setFormData({ name: '', email: '', phone: '', organization: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative mx-auto max-w-lg w-full">
        <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-gray-900/5 overflow-hidden">
          {/* Header Section with Kitchen Preview */}
          <div className="relative bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-8 pt-8 pb-6">
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
              >
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Kitchen Preview Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm ring-1 ring-gray-100 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl overflow-hidden">
                  <img 
                    src={kitchen.image} 
                    alt={kitchen.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-2">
                    {kitchen.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-1">
                    {kitchen.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>${kitchen.hourlyRate}/hour</span>
                    <span>${kitchen.dailyRate}/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-2">
                Book Kitchen Space
              </h2>
              <p className="text-sm font-light text-gray-600">
                Reserve your professional kitchen space
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 pb-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Organization Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    placeholder="(340) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">
                    Business/Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    placeholder="Company/Business Name"
                  />
                </div>
              </div>

              {/* Kitchen Features */}
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-indigo-900 mb-1">What&apos;s included:</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Capacity for {kitchen.capacity} people</li>
                      <li>• {kitchen.equipment.join(', ')}</li>
                      <li>• Professional-grade equipment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
                >
                  Reserve Kitchen →
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium py-3.5 px-8 rounded-xl transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}