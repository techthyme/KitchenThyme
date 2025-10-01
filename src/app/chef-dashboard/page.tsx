"use client";

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';
import { mockKitchens, mockReservations, type CommercialKitchen, type KitchenReservation } from '@/data/mockData';

export default function ChefDashboard() {
  const [selectedKitchen, setSelectedKitchen] = useState<CommercialKitchen | null>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [reservationForm, setReservationForm] = useState({
    date: '',
    startTime: '',
    endTime: '',
    purpose: ''
  });

  const handleReserveKitchen = (kitchen: CommercialKitchen) => {
    setSelectedKitchen(kitchen);
    setIsReservationModalOpen(true);
  };

  const submitReservation = () => {
    console.log('Reservation submitted:', {
      kitchen: selectedKitchen,
      ...reservationForm
    });
    setIsReservationModalOpen(false);
    setReservationForm({ date: '', startTime: '', endTime: '', purpose: '' });
  };

  const getStatusColor = (status: KitchenReservation['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Chef Dashboard</h1>
          <p className="mt-2 text-gray-600">Find and reserve commercial kitchen spaces</p>
        </div>

        {/* My Reservations Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Reservations</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {mockReservations.map((reservation) => {
                const kitchen = mockKitchens.find(k => k.id === reservation.kitchenId);
                return (
                  <div key={reservation.id} className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{kitchen?.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{reservation.purpose}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {reservation.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {reservation.startTime} - {reservation.endTime}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {kitchen?.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(reservation.status)}`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">${reservation.totalCost}</p>
                        <p className="text-sm text-gray-500">{reservation.totalHours} hours</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Available Kitchens Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Kitchens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockKitchens.map((kitchen) => (
              <div key={kitchen.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={kitchen.images[0]}
                  alt={kitchen.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{kitchen.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{kitchen.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      {kitchen.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="h-4 w-4 mr-2" />
                      Max {kitchen.maxCapacity} people
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {kitchen.availableHours.join(', ')}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(kitchen.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({kitchen.reviews})</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">${kitchen.hourlyRate}/hr</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-1">
                      {kitchen.amenities.slice(0, 3).map((amenity) => (
                        <span key={amenity} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          {amenity}
                        </span>
                      ))}
                      {kitchen.amenities.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          +{kitchen.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleReserveKitchen(kitchen)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Reserve Kitchen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Modal */}
        <Dialog open={isReservationModalOpen} onClose={setIsReservationModalOpen} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="mx-auto max-w-sm rounded bg-white p-6 w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Reserve {selectedKitchen?.name}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={reservationForm.date}
                    onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                    <input
                      type="time"
                      value={reservationForm.startTime}
                      onChange={(e) => setReservationForm({...reservationForm, startTime: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                    <input
                      type="time"
                      value={reservationForm.endTime}
                      onChange={(e) => setReservationForm({...reservationForm, endTime: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                  <textarea
                    value={reservationForm.purpose}
                    onChange={(e) => setReservationForm({...reservationForm, purpose: e.target.value})}
                    placeholder="What will you be preparing?"
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    Rate: <span className="font-medium">${selectedKitchen?.hourlyRate}/hour</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setIsReservationModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={submitReservation}
                  className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Reserve
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}