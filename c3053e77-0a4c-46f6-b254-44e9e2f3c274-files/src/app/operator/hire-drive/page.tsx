import Link from 'next/link';

export default function HireDriveOperatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Hire-Drive Operator Dashboard</h1>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">St Helena Auto Rentals</span>
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
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm">Active Rentals</p>
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm">Monthly Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900">£6,450</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm">Vehicle Utilization</p>
                <h3 className="text-2xl font-bold text-gray-900">72%</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm">Average Rating</p>
                <h3 className="text-2xl font-bold text-gray-900">4.7/5</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current rentals and fleet status */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Current Rentals</h2>
                <Link 
                  href="/operator/hire-drive/rentals" 
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rental ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vehicle
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Period
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #HD-2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        John Smith
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Toyota RAV4 (SUV-102)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 2 - May 8, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #HD-2022
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Nissan Note (EC-104)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 1 - May 7, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #HD-2021
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Robert Wilson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Ford Ranger (PU-101)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 3 - May 10, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Reserved
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Fleet Status</h2>
                <Link 
                  href="/operator/hire-drive/fleet" 
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Manage Fleet
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vehicle
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Service
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">Toyota RAV4</div>
                          <div className="ml-2 text-xs text-gray-500">(SUV-102)</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        SUV
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Rented
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        June 15, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">Nissan Note</div>
                          <div className="ml-2 text-xs text-gray-500">(EC-104)</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Economy
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Rented
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 30, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">Ford Ranger</div>
                          <div className="ml-2 text-xs text-gray-500">(PU-101)</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Pickup
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Reserved
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        July 10, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">Honda Jazz</div>
                          <div className="ml-2 text-xs text-gray-500">(EC-105)</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Economy
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Available
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        June 5, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">Suzuki Jimny</div>
                          <div className="ml-2 text-xs text-gray-500">(SUV-103)</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        SUV
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Maintenance
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 6, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">Details</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <a href="#" className="block w-full py-2 px-4 bg-primary-600 text-white rounded-md text-center hover:bg-primary-700">
                  Add New Vehicle
                </a>
                <a href="#" className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-center hover:bg-gray-50">
                  Schedule Maintenance
                </a>
                <a href="#" className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-center hover:bg-gray-50">
                  Update Pricing
                </a>
                <a href="#" className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-center hover:bg-gray-50">
                  View Reservation Requests
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Returns</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Today</p>
                  <div className="mt-2 space-y-2">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Mitsubishi Outlander (SUV-101)</p>
                        <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">5:00 PM</p>
                      </div>
                      <p className="text-xs text-gray-500">Paul Roberts</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Tomorrow (May 5)</p>
                  <div className="mt-2 space-y-2">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Toyota Yaris (EC-101)</p>
                        <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">10:00 AM</p>
                      </div>
                      <p className="text-xs text-gray-500">Sarah Johnson</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Honda Civic (EC-102)</p>
                        <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">2:30 PM</p>
                      </div>
                      <p className="text-xs text-gray-500">Michael Brown</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  View All Upcoming Returns →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Fleet Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Vehicle Categories</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">Economy</span>
                        <span className="text-xs text-gray-500">5 vehicles</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">SUV</span>
                        <span className="text-xs text-gray-500">4 vehicles</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">Pickup</span>
                        <span className="text-xs text-gray-500">3 vehicles</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Availability Status</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 p-3 rounded-md text-center">
                      <p className="text-2xl font-bold text-blue-600">5</p>
                      <p className="text-xs text-gray-500">Available</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-md text-center">
                      <p className="text-2xl font-bold text-green-600">6</p>
                      <p className="text-xs text-gray-500">Rented</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-md text-center">
                      <p className="text-2xl font-bold text-yellow-600">2</p>
                      <p className="text-xs text-gray-500">Reserved</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md text-center">
                      <p className="text-2xl font-bold text-red-600">1</p>
                      <p className="text-xs text-gray-500">Maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  View Fleet Analytics →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}