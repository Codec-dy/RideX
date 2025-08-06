import Layout1 from '@/Layout/Layout1';
import React, { useState } from 'react';

const ManageBooking = () => {
  const [bookingRef, setBookingRef] = useState('');
  const [email, setEmail] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  // Dummy booking details for demonstration
  const bookingDetails = {
    ref: 'RX123456',
    name: 'John Doe',
    type: 'Flight',
    from: 'New York',
    to: 'London',
    date: '2025-08-15',
    status: 'Confirmed'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <Layout1>
    <div className="max-w-2xl mx-auto p-8 my-30 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Manage Your Booking</h1>
      <p className="text-gray-700 mb-8 text-center">
        View, change, or cancel your booking. Enter your booking reference and email to get started.
      </p>
      <form className="flex flex-col gap-6 mb-8" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Booking Reference"
          value={bookingRef}
          onChange={e => setBookingRef(e.target.value)}
          className="border border-gray-300 rounded-md p-3 text-lg"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-3 text-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-md p-3 text-lg font-semibold hover:bg-blue-800 transition"
        >
          Find Booking
        </button>
      </form>

      {showDetails && (
        <div className="bg-blue-50 rounded-lg p-6 mt-4 shadow">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Booking Details</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-semibold">Reference:</span> {bookingDetails.ref}
            </div>
            <div>
              <span className="font-semibold">Name:</span> {bookingDetails.name}
            </div>
            <div>
              <span className="font-semibold">Type:</span> {bookingDetails.type}
            </div>
            <div>
              <span className="font-semibold">Status:</span> {bookingDetails.status}
            </div>
            <div>
              <span className="font-semibold">From:</span> {bookingDetails.from}
            </div>
            <div>
              <span className="font-semibold">To:</span> {bookingDetails.to}
            </div>
            <div>
              <span className="font-semibold">Date:</span> {bookingDetails.date}
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Change Booking</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Cancel Booking</button>
          </div>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Need Help?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Contact our support team for urgent changes.</li>
          <li>Check our <a href="/services/contact" className="text-blue-700 hover:underline">Contact Us</a> page for FAQs and assistance.</li>
          <li>Read our <a href="#" className="text-blue-700 hover:underline">Booking Policy</a> for more information.</li>
        </ul>
      </div>
    </div>
    </Layout1>
  );
};


export default ManageBooking;