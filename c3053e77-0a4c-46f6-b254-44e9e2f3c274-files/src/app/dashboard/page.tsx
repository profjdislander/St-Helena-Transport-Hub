import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, John Doe</span>
              <Link
                href="/auth/logout"
                className="bg-primary-600 px-4 py-2 rounded-md text-white hover:bg-primary-700 transition-colors"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Rides</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="font-medium">Taxi to Jamestown</p>
                <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
                <div className="mt-2 flex space-x-2">
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-700">View Details</a>
                  <a href="#" className="text-sm text-red-600 hover:text-red-700">Cancel</a>
                </div>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium">No more upcoming rides</p>
                <p className="text-sm text-gray-600">Book a new ride now</p>
                <div className="mt-2">
                  <Link href="/taxis" className="text-sm text-primary-600 hover:text-primary-700">Book Taxi</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Vehicle Rentals</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary-500 pl-4 py-2">
                <p className="font-medium">Economy Car #EC-103</p>
                <p className="text-sm text-gray-600">May 10 - May 15, 2025</p>
                <div className="mt-2 flex space-x-2">
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-700">View Details</a>
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-700">Extend</a>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  href="/hire-drive" 
                  className="block w-full bg-gray-100 text-center py-2 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Rent a Vehicle
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Travel History</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium">Taxi from Sandy Bay to Jamestown</p>
                <p className="text-sm text-gray-600">April 28, 2025</p>
                <p className="text-sm text-gray-600">£15.00</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium">SUV Rental</p>
                <p className="text-sm text-gray-600">April 15 - April 20, 2025</p>
                <p className="text-sm text-gray-600">£250.00</p>
              </div>
              <div className="mt-4">
                <a 
                  href="#" 
                  className="block w-full bg-gray-100 text-center py-2 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  View All History
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                href="/taxis" 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="text-sm font-medium">Book Taxi</span>
              </Link>
              <Link 
                href="/transport" 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-sm font-medium">Bus Schedules</span>
              </Link>
              <Link 
                href="/hire-drive" 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Rent Vehicle</span>
              </Link>
              <Link 
                href="/profile" 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-medium">Edit Profile</span>
              </Link>
              <Link 
                href="/payments" 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-sm font-medium">Payment Methods</span>
              </Link>
              <Link 
                href="/support" 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm font-medium">Get Support</span>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Saved Locations</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Home</p>
                  <p className="text-sm text-gray-600">123 Upper Jamestown, St Helena</p>
                  <div className="mt-1 flex space-x-2">
                    <a href="#" className="text-xs text-primary-600 hover:text-primary-700">Edit</a>
                    <a href="#" className="text-xs text-red-600 hover:text-red-700">Remove</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Work</p>
                  <p className="text-sm text-gray-600">Government Building, Main St, Jamestown</p>
                  <div className="mt-1 flex space-x-2">
                    <a href="#" className="text-xs text-primary-600 hover:text-primary-700">Edit</a>
                    <a href="#" className="text-xs text-red-600 hover:text-red-700">Remove</a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}