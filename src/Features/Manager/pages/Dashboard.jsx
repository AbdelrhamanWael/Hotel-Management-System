import React from 'react'
import { Hotel, Users, Calendar } from 'lucide-react';




const Dashboard = () => {
    
  return (
     <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Rooms</p>
              <p className="text-3xl font-bold text-blue-600">45</p>
            </div>
            <Hotel className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Available</p>
              <p className="text-3xl font-bold text-green-600">28</p>
            </div>
            <Users className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Occupied</p>
              <p className="text-3xl font-bold text-orange-600">17</p>
            </div>
            <Calendar className="w-12 h-12 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Room Management</h2>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            + Add New Room
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">Room No.</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { room: '101', type: 'Deluxe', price: 250, status: 'Available' },
                { room: '102', type: 'Suite', price: 450, status: 'Occupied' },
                { room: '103', type: 'Standard', price: 150, status: 'Available' },
                { room: '104', type: 'Deluxe', price: 250, status: 'Maintenance' },
              ].map((room, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold">{room.room}</td>
                  <td className="p-3">{room.type}</td>
                  <td className="p-3">${room.price}/night</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      room.status === 'Available' ? 'bg-green-100 text-green-800' :
                      room.status === 'Occupied' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {room.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard