const CancellationPolicy = () => (
  <div className="bg-white p-6 shadow-md rounded-lg mt-6">
    <h2 className="text-xl font-semibold">Cancellation policy</h2>
    <p className="mt-3 text-gray-600 leading-relaxed">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-3 text-gray-600 space-y-2">
      <li className="flex items-start">
        <span className="text-green-500 mr-2 mt-1">✓</span>
        <span>Follow the house rules</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-2 mt-1">✓</span>
        <span>Treat your Host's home like your own</span>
      </li>
    </ul>
  </div>
);

export default CancellationPolicy;