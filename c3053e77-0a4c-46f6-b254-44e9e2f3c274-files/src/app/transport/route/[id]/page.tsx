import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock bus route data based on the PDFs
const busRoutes = {
  '1': {
    id: 1,
    name: 'Jamestown ↔ Blue Hill',
    description: 'Route 1 connects Jamestown with Blue Hill via several communities.',
    outboundName: 'Jamestown to Blue Hill',
    inboundName: 'Blue Hill to Jamestown',
    outbound: [
      // This would contain the actual schedule data from BusRoute1.pdf
      { days: 'Monday - Friday', stops: [
        { name: 'Jamestown Grand Parade', time: '07:00' },
        { name: 'Scotland', time: '07:15' },
        { name: 'Blue Hill', time: '07:30' },
      ]},
      { days: 'Saturday', stops: [
        { name: 'Jamestown Grand Parade', time: '09:00' },
        { name: 'Scotland', time: '09:15' },
        { name: 'Blue Hill', time: '09:30' },
      ]},
    ],
    inbound: [
      // Return journey
      { days: 'Monday - Friday', stops: [
        { name: 'Blue Hill', time: '16:00' },
        { name: 'Scotland', time: '16:15' },
        { name: 'Jamestown Grand Parade', time: '16:30' },
      ]},
      { days: 'Saturday', stops: [
        { name: 'Blue Hill', time: '14:00' },
        { name: 'Scotland', time: '14:15' },
        { name: 'Jamestown Grand Parade', time: '14:30' },
      ]},
    ]
  },
  '2': {
    id: 2,
    name: 'Jamestown ↔ Sandy Bay',
    description: 'Route 2 connects Jamestown with Sandy Bay.',
    outboundName: 'Jamestown to Sandy Bay',
    inboundName: 'Sandy Bay to Jamestown',
    outbound: [
      // This would contain the actual schedule data from BusRoute2.pdf
      { days: 'Monday - Friday', stops: [
        { name: 'Jamestown Grand Parade', time: '08:00' },
        { name: 'Half Tree Hollow', time: '08:15' },
        { name: 'Sandy Bay', time: '08:30' },
      ]},
      { days: 'Saturday', stops: [
        { name: 'Jamestown Grand Parade', time: '10:00' },
        { name: 'Half Tree Hollow', time: '10:15' },
        { name: 'Sandy Bay', time: '10:30' },
      ]},
    ],
    inbound: [
      // Return journey
      { days: 'Monday - Friday', stops: [
        { name: 'Sandy Bay', time: '17:00' },
        { name: 'Half Tree Hollow', time: '17:15' },
        { name: 'Jamestown Grand Parade', time: '17:30' },
      ]},
      { days: 'Saturday', stops: [
        { name: 'Sandy Bay', time: '15:00' },
        { name: 'Half Tree Hollow', time: '15:15' },
        { name: 'Jamestown Grand Parade', time: '15:30' },
      ]},
    ]
  },
  '3': {
    id: 3,
    name: 'Jamestown ↔ HTH & St Pauls',
    description: 'Route 3 connects Jamestown with Half Tree Hollow and St Pauls.',
    outboundName: 'Jamestown to HTH & St Pauls',
    inboundName: 'HTH & St Pauls to Jamestown',
    outbound: [
      // This would contain the actual schedule data from BusRoute3.pdf
      { days: 'Every Day', stops: [
        { name: 'Grand Parade', time: '07:09' },
        { name: 'Red Hill', time: '07:12' },
        { name: "Cleugh's Plain", time: '07:19' },
        { name: 'Scotland', time: '07:25' },
        { name: 'White Gate', time: '07:30' },
      ]},
      { days: 'Monday - Friday', stops: [
        { name: 'Grand Parade', time: '07:49' },
        { name: 'Red Hill', time: '07:59' },
        { name: 'White Gate', time: '08:20' },
      ]},
    ],
    inbound: [
      // Return journey
      { days: 'Every Day', stops: [
        { name: 'White Gate', time: '08:25' },
        { name: 'Scotland', time: '08:30' },
        { name: 'Cow Path', time: '08:34' },
        { name: 'Grand Parade', time: '08:42' },
      ]},
      { days: 'Monday - Saturday', stops: [
        { name: 'White Gate', time: '13:00' },
        { name: 'Scotland', time: '13:05' },
        { name: 'Grand Parade', time: '13:20' },
      ]},
    ]
  },
  '4': {
    id: 4,
    name: 'Sandy Bay/Blue Hill ↔ Jamestown',
    description: 'Route 4 serves both Sandy Bay and Blue Hill areas to and from Jamestown.',
    outboundName: 'Sandy Bay to Jamestown',
    inboundName: 'Jamestown to Sandy Bay',
    outbound: [
      // Sandy Bay to Jamestown
      { days: 'Mondays', stops: [
        { name: 'Sandy Bay Chapel', time: '09:45' },
        { name: 'White Gate', time: '09:57' },
        { name: 'HTH Clinic', time: '10:00' },
      ]},
      { days: 'Fridays & Saturdays', stops: [
        { name: 'Sandy Bay Chapel', time: '09:00' },
        { name: 'White Gate', time: '09:12' },
        { name: 'HTH Clinic', time: '09:15' },
        { name: 'Ladder Hill', time: '09:18' },
        { name: 'Jamestown Grand Parade', time: '09:24' },
      ]},
    ],
    inbound: [
      // Jamestown to Sandy Bay
      { days: 'Mondays', stops: [
        { name: 'Jamestown Grand Parade', time: '12:00' },
        { name: 'HTH Clinic', time: '12:00' },
        { name: 'White Gate', time: '12:03' },
        { name: 'Sandy Bay Chapel', time: '12:15' },
      ]},
      { days: 'Fridays & Saturdays', stops: [
        { name: 'Jamestown Grand Parade', time: '13:30' },
        { name: 'Ladder Hill', time: '13:36' },
        { name: 'HTH Clinic', time: '13:39' },
        { name: 'White Gate', time: '13:42' },
        { name: 'Sandy Bay Chapel', time: '13:57' },
      ]},
    ],
    blueHillOut: [
      // Blue Hill to Jamestown
      { days: 'Monday - Fridays', stops: [
        { name: 'White Gate', time: '07:20' },
        { name: 'The Saddle', time: '07:23' },
        { name: "Head O'Wain", time: '07:37' },
        { name: 'Blue Hill Community Centre', time: '07:47' },
        { name: 'White Gate', time: '08:05' },
        { name: 'HTH Clinic', time: '08:09' },
        { name: 'Ladder Hill', time: '08:12' },
        { name: 'Jamestown Grand Parade', time: '08:17' },
      ]},
    ],
    blueHillIn: [
      // Jamestown to Blue Hill
      { days: 'Monday - Fridays', stops: [
        { name: 'Jamestown Grand Parade', time: '16:10' },
        { name: 'Ladder Hill', time: '16:17' },
        { name: 'HTH Clinic', time: '16:21' },
        { name: 'White Gate', time: '16:25' },
        { name: 'Blue Hill Community Centre', time: '16:50' },
        { name: 'The Saddle', time: '17:10' },
      ]},
    ]
  }
};

export default function RoutePage({ params }: { params: { id: string } }) {
  const route = busRoutes[params.id as keyof typeof busRoutes];
  
  if (!route) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/transport" className="mr-3 text-white hover:text-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Route {route.id}: {route.name}</h1>
              <p className="mt-2">{route.description}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Outbound journeys */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{route.outboundName}</h2>
          
          {route.outbound.map((journey, journeyIndex) => (
            <div key={journeyIndex} className="mb-6 last:mb-0">
              <h3 className="text-lg font-medium text-primary-700 mb-3">{journey.days}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stop</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {journey.stops.map((stop, stopIndex) => (
                      <tr key={stopIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stop.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stop.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Inbound journeys */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{route.inboundName}</h2>
          
          {route.inbound.map((journey, journeyIndex) => (
            <div key={journeyIndex} className="mb-6 last:mb-0">
              <h3 className="text-lg font-medium text-primary-700 mb-3">{journey.days}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stop</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {journey.stops.map((stop, stopIndex) => (
                      <tr key={stopIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stop.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stop.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Special case for Route 4 which has Blue Hill routes */}
        {route.id === 4 && (
          <>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Blue Hill to Jamestown</h2>
              
              {route.blueHillOut?.map((journey, journeyIndex) => (
                <div key={journeyIndex} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-medium text-primary-700 mb-3">{journey.days}</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stop</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {journey.stops.map((stop, stopIndex) => (
                          <tr key={stopIndex}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stop.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stop.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Jamestown to Blue Hill</h2>
              
              {route.blueHillIn?.map((journey, journeyIndex) => (
                <div key={journeyIndex} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-medium text-primary-700 mb-3">{journey.days}</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stop</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {journey.stops.map((stop, stopIndex) => (
                          <tr key={stopIndex}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stop.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stop.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-8 flex justify-center">
          <Link 
            href="/transport"
            className="bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-800 transition-colors"
          >
            Back to All Routes
          </Link>
        </div>
      </main>
    </div>
  );
}