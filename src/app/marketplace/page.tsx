"use client";

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ShoppingCartIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon as ShoppingCartSolidIcon } from '@heroicons/react/24/solid';
import { mockProducts, mockChefs, mockCart } from '@/data/mockData';
import { ProductCategory } from '@/types/maybe';
import { type Product } from '@/types';

export default function Marketplace() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [cart, setCart] = useState(mockCart);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? mockProducts
    : mockProducts.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const addToCart = (product: Product) => {
    console.log('Added to cart:', product);
    setCart(prevCart => ({
      ...prevCart,
      totalItems: prevCart.totalItems + 1,
      total: prevCart.total + product.price
    }));
  };

  const getChefByProduct = (product: Product) => {
    return mockChefs.find(chef => chef.id === product.chefId);
  };

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: ProductCategory.PREPARED_FOODS, label: 'Prepared Foods' },
    { value: ProductCategory.BAKED_GOODS, label: 'Baked Goods' },
    { value: ProductCategory.CONDIMENTS_SAUCES, label: 'Sauces & Condiments' },
    { value: ProductCategory.BEVERAGES, label: 'Beverages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Cart */}
      <div className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
              <p className="text-gray-600">Fresh food prepared by local chefs</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCartSolidIcon className="h-6 w-6 text-indigo-600" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.totalItems}
                  </span>
                )}
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Cart Total</p>
                <p className="text-lg font-semibold text-gray-900">${cart.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedCategory(option.value as ProductCategory | 'all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === option.value
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const chef = getChefByProduct(product);
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  />
                  {product.featured && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-800 px-2 py-1 text-xs font-medium rounded">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-700 px-2 py-1 text-xs font-medium rounded">
                    {product.quantityAvailable} left
                  </span>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h3
                      className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-indigo-600"
                      onClick={() => handleProductClick(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium">by {chef?.name}</p>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                  <div className="flex items-center mb-3">
                    <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">
                      Best within {product.shelfLife} days
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        <TagIcon className="h-3 w-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                    {product.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        +{product.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">per {product.unit}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.quantityAvailable === 0}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        product.quantityAvailable === 0
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {product.quantityAvailable === 0 ? 'Sold Out' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}

        {/* Product Detail Modal */}
        <Dialog open={isProductModalOpen} onClose={setIsProductModalOpen} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="mx-auto max-w-2xl rounded bg-white w-full max-h-[90vh] overflow-y-auto">
              {selectedProduct && (
                <div>
                  <img
                    src={selectedProduct.primaryImage}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                        <p className="text-indigo-600 font-medium">by {getChefByProduct(selectedProduct)?.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">per {selectedProduct.unit}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Details</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>Available: {selectedProduct.quantityAvailable} units</p>
                          <p>Shelf life: {selectedProduct.shelfLife} days</p>
                          <p>Category: {selectedProduct.category.replace('_', ' ').toLowerCase()}</p>
                        </div>
                      </div>

                      {selectedProduct.allergens && selectedProduct.allergens.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Allergens</h3>
                          <div className="flex flex-wrap gap-1">
                            {selectedProduct.allergens.map((allergen) => (
                              <span key={allergen} className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                                {allergen}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsProductModalOpen(false)}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-300 font-medium"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          addToCart(selectedProduct);
                          setIsProductModalOpen(false);
                        }}
                        disabled={selectedProduct.quantityAvailable === 0}
                        className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                          selectedProduct.quantityAvailable === 0
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        <ShoppingCartIcon className="h-5 w-5 inline mr-2" />
                        {selectedProduct.quantityAvailable === 0 ? 'Sold Out' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}