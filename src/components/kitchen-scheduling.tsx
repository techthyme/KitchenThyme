'use client'

import { useState } from 'react'
import { HeartIcon, StarIcon, CalendarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import KitchenModal from './KitchenModal'
import { AttendeeInfo } from '@/types'

// Types
interface Kitchen {
  id: string
  name: string
  location: string
  capacity: number
  equipment: string[]
  hourlyRate: number
  dailyRate: number
  image: string
  description: string
  rating: number
  reviewCount: number
  isFavorite: boolean
  availableToday: boolean
  hostName: string
}

// Sample Data
const kitchens: Kitchen[] = [
  {
    id: 'kitchen-1',
    name: 'Main Commercial Kitchen',
    location: 'Charlotte Amalie, St. Thomas',
    capacity: 8,
    equipment: ['Industrial Stoves', 'Walk-in Cooler', 'Prep Tables', 'Dishwasher'],
    hourlyRate: 25,
    dailyRate: 180,
    image: '/kitchen-appliances-in-professional-kitchen-in-a-mo-2025-02-24-17-48-15-utc.jpg',
    description: 'Our flagship commercial kitchen with full industrial equipment perfect for large-scale food production and catering operations.',
    rating: 4.85,
    reviewCount: 47,
    isFavorite: false,
    availableToday: true,
    hostName: 'KitchenThyme'
  },
  {
    id: 'kitchen-2', 
    name: 'Caribbean Specialty Kitchen',
    location: 'Christiansted, St. Croix',
    capacity: 6,
    equipment: ['Plantain Press', 'Large Rice Cookers', 'Seafood Prep Station', 'Fryer'],
    hourlyRate: 30,
    dailyRate: 200,
    image: '/professional-kitchen-in-hotel-restaurant-kitchen-u-2024-12-04-12-52-37-utc.jpg',
    description: 'Specialized kitchen designed for authentic Caribbean cuisine with traditional equipment and ample prep space for island cooking.',
    rating: 4.92,
    reviewCount: 63,
    isFavorite: true,
    availableToday: true,
    hostName: 'Island Culinary'
  },
  {
    id: 'kitchen-3',
    name: 'Baking & Pastry Kitchen',
    location: 'Cruz Bay, St. John',
    capacity: 4,
    equipment: ['Commercial Ovens', 'Mixers', 'Proofing Cabinet', 'Cooling Racks'],
    hourlyRate: 20,
    dailyRate: 150,
    image: '/chef-ending-the-work-at-the-kitchen-2024-10-18-08-49-38-utc (1).jpg',
    description: 'Dedicated baking facility with specialized equipment for pastries, cakes, and dessert production in a temperature-controlled environment.',
    rating: 4.78,
    reviewCount: 29,
    isFavorite: false,
    availableToday: false,
    hostName: 'Sweet Island Kitchens'
  },
  {
    id: 'kitchen-4',
    name: 'Seaside Prep Kitchen',
    location: 'Red Hook, St. Thomas',
    capacity: 5,
    equipment: ['Prep Tables', 'Commercial Refrigeration', 'Food Processor', 'Vacuum Sealer'],
    hourlyRate: 22,
    dailyRate: 160,
    image: '/kitchen-appliances-in-professional-kitchen-in-a-mo-2025-02-24-17-48-15-utc.jpg',
    description: 'Waterfront kitchen perfect for seafood preparation and fresh ingredient processing with ocean views.',
    rating: 4.66,
    reviewCount: 34,
    isFavorite: false,
    availableToday: true,
    hostName: 'Coastal Kitchens'
  },
  {
    id: 'kitchen-5',
    name: 'Event Catering Kitchen',
    location: 'Estate Thomas, St. John',
    capacity: 10,
    equipment: ['Large Prep Areas', 'Multiple Ovens', 'Warming Stations', 'Plating Area'],
    hourlyRate: 35,
    dailyRate: 250,
    image: '/professional-kitchen-in-hotel-restaurant-kitchen-u-2024-12-04-12-52-37-utc.jpg',
    description: 'Large-scale kitchen designed for wedding and event catering with extensive prep space and professional equipment.',
    rating: 4.95,
    reviewCount: 81,
    isFavorite: true,
    availableToday: true,
    hostName: 'VI Events Kitchen'
  },
  {
    id: 'kitchen-6',
    name: 'Artisan Food Lab',
    location: 'Frederiksted, St. Croix',
    capacity: 3,
    equipment: ['Specialty Fermentation', 'Smoking Equipment', 'Curing Chamber', 'Small Batch Tools'],
    hourlyRate: 28,
    dailyRate: 190,
    image: '/chef-ending-the-work-at-the-kitchen-2024-10-18-08-49-38-utc (1).jpg',
    description: 'Specialized facility for artisan food production, fermentation, and small-batch specialty items.',
    rating: 4.89,
    reviewCount: 16,
    isFavorite: false,
    availableToday: true,
    hostName: 'Artisan Collective'
  }
]

export default function KitchenScheduling() {
  const [favorites, setFavorites] = useState<string[]>(
    kitchens.filter(k => k.isFavorite).map(k => k.id)
  )
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'available' | 'hourly' | 'daily'>('all')
  const [selectedKitchen, setSelectedKitchen] = useState<Kitchen | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleFavorite = (kitchenId: string) => {
    setFavorites(prev => 
      prev.includes(kitchenId) 
        ? prev.filter(id => id !== kitchenId)
        : [...prev, kitchenId]
    )
  }

  const filteredKitchens = kitchens.filter(kitchen => {
    if (selectedFilter === 'available') return kitchen.availableToday
    return true
  })

  const handleKitchenClick = (kitchen: Kitchen) => {
    setSelectedKitchen(kitchen)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedKitchen(null)
  }

  const handleBookingSubmit = (attendeeInfo: AttendeeInfo) => {
    console.log('Kitchen booking submitted:', {
      kitchen: selectedKitchen,
      attendee: attendeeInfo
    })
    // Here you would typically send this data to your booking API
    alert(`Booking request submitted for ${selectedKitchen?.name}!`)
    handleModalClose()
  }

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Professional Kitchen Rentals in Virgin Islands</h1>
          <p className="text-gray-600 mt-1">Book commercial kitchen space by the hour or day</p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto">
            <button 
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedFilter === 'all' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Kitchens
            </button>
            <button 
              onClick={() => setSelectedFilter('available')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedFilter === 'available' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Available Today
            </button>
            <button 
              onClick={() => setSelectedFilter('hourly')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedFilter === 'hourly' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hourly Rental
            </button>
            <button 
              onClick={() => setSelectedFilter('daily')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedFilter === 'daily' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Daily Rental
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {selectedFilter === 'available' ? 'Available kitchens today' : 'Popular kitchen rentals in Virgin Islands'}
          </h2>
          <p className="text-gray-600">{filteredKitchens.length} kitchens available</p>
        </div>

        {/* Kitchen Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredKitchens.map((kitchen) => (
            <div key={kitchen.id} className="group cursor-pointer" onClick={() => handleKitchenClick(kitchen)}>
              {/* Image Container */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  src={kitchen.image}
                  alt={kitchen.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(kitchen.id)
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  {favorites.includes(kitchen.id) ? (
                    <HeartIconSolid className="h-4 w-4 text-red-500" />
                  ) : (
                    <HeartIcon className="h-4 w-4 text-gray-700" />
                  )}
                </button>

                {/* Status Badge */}
                {kitchen.availableToday && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Available Today
                  </div>
                )}
              </div>

              {/* Kitchen Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">{kitchen.name}</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 fill-black" />
                    <span className="text-sm font-medium">{kitchen.rating}</span>
                    <span className="text-sm text-gray-600">({kitchen.reviewCount})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm truncate">{kitchen.location}</p>
                
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>{kitchen.capacity} people</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">${kitchen.hourlyRate}</span> /hour
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">${kitchen.dailyRate}</span> /day
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">Hosted by {kitchen.hostName}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Show more kitchens
          </button>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why choose our kitchen spaces?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CalendarIcon className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Flexible Booking</h4>
              <p className="text-sm text-gray-600">Book by the hour or day with instant confirmation and easy cancellation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ClockIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">24/7 Access</h4>
              <p className="text-sm text-gray-600">Access your kitchen space anytime with secure keyless entry systems.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Licensed & Insured</h4>
              <p className="text-sm text-gray-600">All kitchens are USVI health department approved and fully insured.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kitchen Booking Modal */}
      {selectedKitchen && (
        <KitchenModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleBookingSubmit}
          kitchen={selectedKitchen}
        />
      )}
    </div>
  )
}