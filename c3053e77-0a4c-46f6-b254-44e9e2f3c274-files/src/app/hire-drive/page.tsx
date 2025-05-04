import Link from 'next/link';

export default function HireDrive() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Hire-Drive Services</h1>
          <p className="mt-2">Rent a vehicle for self-drive on St Helena Island</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Vehicle categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vehicle Fleet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Economy Car */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Economy Car Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Economy Car</h3>
                <p className="text-gray-600 mb-4">Compact, fuel-efficient vehicles perfect for individuals or couples.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-600 font-bold text-lg">From £35/day</span>
                  <span className="text-sm text-gray-500">4 available</span>
                </div>
                <Link 
                  href="/hire-drive/book?category=economy" 
                  className="block w-full bg-primary-600 text-white text-center py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Standard SUV */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">SUV Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Standard SUV</h3>
                <p className="text-gray-600 mb-4">Versatile SUVs ideal for families or exploring rough terrain.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-600 font-bold text-lg">From £50/day</span>
                  <span className="text-sm text-gray-500">3 available</span>
                </div>
                <Link 
                  href="/hire-drive/book?category=suv" 
                  className="block w-full bg-primary-600 text-white text-center py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Pickup Truck */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Pickup Truck Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pickup Truck</h3>
                <p className="text-gray-600 mb-4">Rugged pickup trucks for those needing cargo space or extra capability.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-600 font-bold text-lg">From £60/day</span>
                  <span className="text-sm text-gray-500">2 available</span>
                </div>
                <Link 
                  href="/hire-drive/book?category=pickup" 
                  className="block w-full bg-primary-600 text-white text-center py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Booking process */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Book</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-medium mb-2">Select Vehicle</h3>
              <p className="text-gray-600">Choose from our range of available vehicles that suit your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-medium mb-2">Pick Dates</h3>
              <p className="text-gray-600">Select your rental period with flexible pickup and return times.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-medium mb-2">Add Options</h3>
              <p className="text-gray-600">Include additional services like insurance, GPS, or child seats.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-medium mb-2">Confirm & Pay</h3>
              <p className="text-gray-600">Complete your booking with secure payment options.</p>
            </div>
          </div>
        </div>

        {/* Search form */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Available Vehicles</h2>
          
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
              <input
                type="date"
                id="pickup-date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
              <input
                type="date"
                id="return-date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label htmlFor="vehicle-category" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Category</label>
              <select
                id="vehicle-category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Categories</option>
                <option value="economy">Economy</option>
                <option value="suv">SUV</option>
                <option value="pickup">Pickup Truck</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
              >
                Search Vehicles
              </button>
            </div>
          </form>
        </div>

        {/* Additional information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Valid driving license (minimum 2 years)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Minimum age of 21 (25 for certain vehicles)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Credit card for security deposit</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Photo ID (passport or national ID)</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Included in Every Rental</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic insurance coverage</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 roadside assistance</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Vehicle orientation at pickup</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Island road map</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-primary-700 mb-2">What do I need to rent a vehicle?</h3>
              <p className="text-gray-600">
                You'll need a valid driving license that you've held for at least 2 years, proof of identity, and a credit card for the security deposit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary-700 mb-2">Can I extend my rental period?</h3>
              <p className="text-gray-600">
                Yes, subject to availability. Contact our customer service team at least 24 hours before your scheduled return time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary-700 mb-2">Is insurance included?</h3>
              <p className="text-gray-600">
                Basic insurance is included with all rentals. Premium insurance options are available for additional peace of mind.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary-700 mb-2">Where can I pick up and return the vehicle?</h3>
              <p className="text-gray-600">
                Vehicles can be picked up and returned to our main office in Jamestown. We also offer delivery and collection services for an additional fee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary-700 mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                Free cancellation up to 48 hours before pickup. Cancellations within 48 hours may incur a fee of one day's rental.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}