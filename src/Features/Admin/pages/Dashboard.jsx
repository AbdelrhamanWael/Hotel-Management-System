import React from 'react';
import { Hotel, Users, Calendar, DollarSign } from 'lucide-react';

const Dashboard = () => {
  // Sample data
  const stats = [
    { 
      title: 'Total Hotels', 
      value: '12', 
      icon: <Hotel className="w-10 h-10 opacity-80" />,
      gradient: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-100'
    },
    { 
      title: 'Total Bookings', 
      value: '284', 
      icon: <Calendar className="w-10 h-10 opacity-80" />,
      gradient: 'from-green-500 to-green-600',
      textColor: 'text-green-100'
    },
    { 
      title: 'Total Revenue', 
      value: '$24,580', 
      icon: <DollarSign className="w-10 h-10 opacity-80" />,
      gradient: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-100'
    },
    { 
      title: 'Active Users', 
      value: '1,243', 
      icon: <Users className="w-10 h-10 opacity-80" />,
      gradient: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-100'
    }
  ];

  const recentBookings = [
    { id: 1, hotel: 'Grand Plaza Hotel', guest: 'John Doe', checkIn: '2025-10-20', checkOut: '2025-10-25', amount: 1250, status: 'Confirmed' },
    { id: 2, hotel: 'Seaside Resort', guest: 'Jane Smith', checkIn: '2025-10-18', checkOut: '2025-10-22', amount: 720, status: 'Pending' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-linear-to-br ${stat.gradient} text-white p-6 rounded-lg shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${stat.textColor} text-sm`}>{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.hotel}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.guest}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.checkIn}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.checkOut}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${booking.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all bookings →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;