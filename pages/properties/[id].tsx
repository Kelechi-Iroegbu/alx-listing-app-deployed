// pages/properties/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { propertyAPI } from '@/services/api';
import { Property, Review } from '@/types/property';
import Image from 'next/image';
import ReviewList from '@/components/reviews/ReviewList';
import BookingForm from '@/components/booking/BookingForm';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPropertyData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch property details and reviews in parallel
        const [propertyData, reviewsData] = await Promise.all([
          propertyAPI.getPropertyById(id as string),
          propertyAPI.getPropertyReviews(id as string),
        ]);

        setProperty(propertyData);
        setReviews(reviewsData);
      } catch (err) {
        setError('Failed to load property details.');
        console.error('Error fetching property:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Property not found'}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-4 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Details */}
        <div className="lg:col-span-2">
          <div className="relative h-96 w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={property.image || '/placeholder-property.jpg'}
              alt={property.name}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">{property.name}</h1>

          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {property.location}
          </div>

          <div className="flex items-center space-x-6 mb-6 text-gray-700">
            <span>{property.bedrooms} Bedrooms</span>
            <span>{property.bathrooms} Bathrooms</span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {property.rating}
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>

          {property.amenities && property.amenities.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Section */}
          <ReviewList reviews={reviews} />
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <BookingForm property={property} />
        </div>
      </div>
    </div>
  );
}