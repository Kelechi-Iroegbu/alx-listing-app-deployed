const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input type="text" placeholder="MM/YY" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" placeholder="123" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input type="text" className="border border-gray-300 p-2 w-full mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md w-full font-semibold transition duration-200">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;