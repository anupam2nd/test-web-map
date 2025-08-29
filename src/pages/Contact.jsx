// src/pages/Contact.jsx
import React from "react";
import AnimatePageWrapper from "../component/AnimatePageWrapper";

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md mb-4">
          {/* Map placeholder */}
          <div className="w-full h-64 flex items-center justify-center text-gray-500">
            Map would go here
          </div>
        </div>
        <address className="not-italic">
          <p className="font-medium">123 Business Street</p>
          <p>Tech City, TC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </address>
      </div>
    </div>
  );
}
