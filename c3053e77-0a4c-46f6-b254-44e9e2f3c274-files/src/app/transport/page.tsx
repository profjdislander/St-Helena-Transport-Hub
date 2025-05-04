import Link from 'next/link';

export default function Transport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">St Helena Bus Schedules</h1>
          <p className="mt-2">View all public transport routes and timetables</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Route</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((route) => (
              <Link 
                key={route} 
                href={`/transport/route/${route}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Route {route}</h3>
                <p className="text-gray-600 mb-4">
                  {route === 1 && "Jamestown ↔ Blue Hill"}
                  {route === 2 && "Jamestown ↔ Sandy Bay"}
                  {route === 3 && "Jamestown ↔ HTH & St Pauls"}
                  {route === 4 && "Sandy Bay/Blue Hill ↔ Jamestown"}
                </p>
                <span className="text-primary-600 font-medium">View Schedule &rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About St Helena Public Transport</h2>
          <p className="text-gray-600 mb-4">
            St Helena's public transport system consists of regular bus services that connect Jamestown with various areas around the island. 
            These services are designed to provide convenient and affordable transportation for residents and visitors alike.
          </p>
          <p className="text-gray-600">
            Buses are modern and comfortable, with routes covering major settlements and tourist destinations. 
            Fares are kept affordable to encourage use of public transport, reducing congestion and environmental impact.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fare Information</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adult Fare</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Child Fare (5-15)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Senior/Disabled</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Single Journey</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£2.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£1.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£1.50</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day Pass</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£5.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£2.50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£3.75</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weekly Pass</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£20.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£10.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£15.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monthly Pass</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£60.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£30.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£45.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            * Children under 5 travel free when accompanied by a fare-paying adult.
          </p>
        </div>
      </main>
    </div>
  );
}