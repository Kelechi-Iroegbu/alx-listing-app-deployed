import React from "react";

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const grandTotal = bookingDetails.bookingFee + bookingDetails.price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg h-fit sticky top-6">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex items-center mt-4 gap-4">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&auto=format&fit=crop" 
          alt="Property" 
          className="w-32 h-32 object-cover rounded-md" 
        />
        <div>
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500 flex items-center mt-1">
            <span className="text-yellow-500 mr-1">★</span>
            4.76 (345 reviews)
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between py-2">
          <p className="text-gray-600">Booking Fee</p>
          <p className="font-medium">${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between py-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between py-3 border-t mt-2 font-semibold text-lg">
          <p>Grand Total</p>
          <p>${grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;