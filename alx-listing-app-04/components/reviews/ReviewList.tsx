// components/booking/BookingForm.tsx
import { useState } from 'react';
import { propertyAPI } from '@/services/api';
import { Property, Booking } from '@/types/property';

interface BookingFormProps {
  property: Property;
}

export default function BookingForm({ property }: BookingFormProps) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return 0;
    
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    return nights > 0 ? nights * property.price : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      setError('Please select check-in and check-out dates');
      return;
    }

    const totalPrice = calculateTotalPrice();
    if (totalPrice <= 0) {
      setError('Invalid dates selected');
      return;
    }

    const bookingData: Booking = {
      propertyId: property.id,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
    };

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await propertyAPI.createBooking(bookingData);
      
      setSuccess(true);
      // Reset form
      setCheckInDate('');
      setCheckOutDate('');
      setGuests(1);
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      console.error('Booking error:', err);
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = calculateTotalPrice();
  const nights = totalPrice > 0 ? totalPrice / property.price : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <div className="mb-4">
        <span className="text-3xl font-bold text-blue-600">${property.price}</span>
        <span className="text-gray-600"> / night</span>
      </div>

      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Booking successful! We'll send you a confirmation email.
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            min={checkInDate || new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {totalPrice > 0 && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">
                ${property.price} × {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
              <span className="text-gray-700">${totalPrice}</span>
            </div>
            <div className="border-t border-gray-300 pt-2 mt-2">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Processing...' : 'Book Now'}
        </button>
      </form>

      <p className="text-center text-gray-600 text-sm mt-4">
        You won't be charged yet
      </p>
    </div>
  );
}// components/booking/BookingForm.tsx
import { useState } from 'react';
import { propertyAPI } from '@/services/api';
import { Property, Booking } from '@/types/property';

interface BookingFormProps {
  property: Property;
}

export default function BookingForm({ property }: BookingFormProps) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return 0;
    
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    return nights > 0 ? nights * property.price : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      setError('Please select check-in and check-out dates');
      return;
    }

    const totalPrice = calculateTotalPrice();
    if (totalPrice <= 0) {
      setError('Invalid dates selected');
      return;
    }

    const bookingData: Booking = {
      propertyId: property.id,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
    };

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await propertyAPI.createBooking(bookingData);
      
      setSuccess(true);
      // Reset form
      setCheckInDate('');
      setCheckOutDate('');
      setGuests(1);
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      console.error('Booking error:', err);
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = calculateTotalPrice();
  const nights = totalPrice > 0 ? totalPrice / property.price : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <div className="mb-4">
        <span className="text-3xl font-bold text-blue-600">${property.price}</span>
        <span className="text-gray-600"> / night</span>
      </div>

      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Booking successful! We'll send you a confirmation email.
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            min={checkInDate || new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {totalPrice > 0 && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">
                ${property.price} × {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
              <span className="text-gray-700">${totalPrice}</span>
            </div>
            <div className="border-t border-gray-300 pt-2 mt-2">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Processing...' : 'Book Now'}
        </button>
      </form>

      <p className="text-center text-gray-600 text-sm mt-4">
        You won't be charged yet
      </p>
    </div>
  );
}