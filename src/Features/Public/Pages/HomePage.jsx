import React from 'react';
import { Star, MapPin, CreditCard } from 'lucide-react';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import HotelCard from '../HotelCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [featuredHotels] = useState([
    { id: 1, name: 'Luxury Resort', location: 'Miami, FL', rating: 4.5, price: '$200/night' },
    { id: 2, name: 'City Center Hotel', location: 'New York, NY', rating: 4.2, price: '$150/night' },
    { id: 3, name: 'Beachfront Inn', location: 'San Diego, CA', rating: 4.8, price: '$180/night' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover amazing hotels worldwide with unbeatable prices and exceptional service.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center">
              <Star className="h-6 w-6 mr-2" />
              <span>Top Rated</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>Global Locations</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 mr-2" />
              <span>Secure Booking</span>
            </div>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Next Adventure?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied travelers who trust us for their hotel bookings.
          </p>
          <Link to="/HotelsPage"> 
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore All Hotels
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
