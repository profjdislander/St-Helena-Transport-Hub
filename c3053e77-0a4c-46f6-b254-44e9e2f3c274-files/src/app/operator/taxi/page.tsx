import Link from 'next/link';

export default function TaxiOperatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Taxi Operator Dashboard</h1>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Island Taxis Ltd</span>
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
                <p className="text-gray-500 text-sm">Today's Bookings</p>
                <h3 className="text-2xl font-bold text-gray-900">12</h3>
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
                <p className="text-gray-500 text-sm">Today's Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900">£285.00</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm">Active Drivers</p>
                <h3 className="text-2xl font-bold text-gray-900">8/10</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">4.8/5</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking requests */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Current Bookings</h2>
                <Link 
                  href="/operator/taxi/bookings" 
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
                        Booking ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pickup
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Driver
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #1089
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        John Smith
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jamestown, 10:30 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          En Route
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        David Johnson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #1088
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Half Tree Hollow, 11:15 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Assigned
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Michael Brown
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #1087
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Robert Wilson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Blue Hill, 11:45 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Unassigned
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        -
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">Assign</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Driver Locations</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700">Refresh</button>
              </div>
              
              <div className="h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                Map Visualization of Driver Locations
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium">David J.</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Jamestown</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium">Michael B.</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Half Tree Hollow</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium">Sarah L.</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">St Pauls</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm font-medium">James T.</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">On Break</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <a href="#" className="block w-full py-2 px-4 bg-primary-600 text-white rounded-md text-center hover:bg-primary-700">
                  Add New Driver
                </a>
                <a href="#" className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-center hover:bg-gray-50">
                  View All Vehicles
                </a>
                <a href="#" className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-center hover:bg-gray-50">
                  Update Availability
                </a>
                <a href="#" className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-center hover:bg-gray-50">
                  Pricing Settings
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Scheduled Rides</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Tomorrow</p>
                  <div className="mt-2 space-y-2">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium">Airport Pickup - 10:00 AM</p>
                      <p className="text-xs text-gray-500">Mary Williams</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium">Longwood to Jamestown - 2:30 PM</p>
                      <p className="text-xs text-gray-500">Thomas Clark</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">May 6, 2025</p>
                  <div className="mt-2 space-y-2">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium">Sandy Bay to Jamestown - 9:15 AM</p>
                      <p className="text-xs text-gray-500">Elizabeth Taylor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  View All Scheduled Rides →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Summary</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Acceptance Rate</span>
                    <span className="text-sm text-gray-500">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">On-Time Arrival</span>
                    <span className="text-sm text-gray-500">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Vehicle Utilization</span>
                    <span className="text-sm text-gray-500">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Customer Satisfaction</span>
                    <span className="text-sm text-gray-500">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  View Detailed Reports →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}