import Link from 'next/link';

export default function TaxiBooking() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Book a Taxi</h1>
          <p className="mt-2">Request a ride anywhere on St Helena Island</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Ride</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                    <input
                      type="text"
                      id="pickup"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter pickup address"
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <input
                      type="text"
                      id="destination"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter destination address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                      type="time"
                      id="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                  <select
                    id="vehicle-type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="standard">Standard (4 seats)</option>
                    <option value="premium">Premium (4 seats)</option>
                    <option value="van">Van (7 seats)</option>
                    <option value="accessible">Accessible Vehicle</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Special Instructions (Optional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Add any special instructions for the driver"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Request Taxi
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold">1</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Request Your Ride</h3>
                    <p className="text-gray-600">Enter your pickup location, destination, and preferred time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold">2</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Get Matched with a Driver</h3>
                    <p className="text-gray-600">We'll find an available driver from our trusted taxi operators.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold">3</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Track Your Ride</h3>
                    <p className="text-gray-600">Follow your driver's location in real-time as they approach your pickup point.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold">4</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Enjoy Your Journey</h3>
                    <p className="text-gray-600">Pay securely through the app or in cash, and rate your experience afterward.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Fare Estimator</h2>
              <p className="text-gray-600 mb-4">Get an estimate for your journey based on distance and vehicle type.</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="pickup-estimate" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                  <input
                    type="text"
                    id="pickup-estimate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter pickup address"
                  />
                </div>
                <div>
                  <label htmlFor="destination-estimate" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <input
                    type="text"
                    id="destination-estimate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter destination address"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle-type-estimate" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                  <select
                    id="vehicle-type-estimate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="standard">Standard (4 seats)</option>
                    <option value="premium">Premium (4 seats)</option>
                    <option value="van">Van (7 seats)</option>
                    <option value="accessible">Accessible Vehicle</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Calculate Fare
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
              <ul className="space-y-3">
                <li>
                  <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium">Jamestown to Airport</span>
                    <span className="block text-sm text-gray-500">Approx. £15</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium">Jamestown to Half Tree Hollow</span>
                    <span className="block text-sm text-gray-500">Approx. £8</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium">Jamestown to Blue Hill</span>
                    <span className="block text-sm text-gray-500">Approx. £20</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium">Jamestown to Sandy Bay</span>
                    <span className="block text-sm text-gray-500">Approx. £18</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium">Jamestown to Longwood</span>
                    <span className="block text-sm text-gray-500">Approx. £16</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}