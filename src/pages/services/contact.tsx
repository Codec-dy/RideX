import React from 'react';
import Layout1 from "@/Layout/Layout1";

const faqs = [
  {
    question: "How do I change my booking?",
    answer: "You can manage or change your booking from the 'Manage My Booking' section on our homepage."
  },
  {
    question: "Can I cancel my ticket?",
    answer: "Yes, tickets can be cancelled online. Refunds depend on the fare conditions."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via the contact form below or call our helpline during working hours."
  }
];

const articles = [
  {
    title: "How to Find the Best Travel Deals",
    link: "#"
  },
  {
    title: "Travel Safety Tips for 2025",
    link: "#"
  },
  {
    title: "Packing Essentials for Every Trip",
    link: "#"
  }
];

const Contact = () => {
  return (
    <Layout1>
      
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border rounded-md p-2" />
            <input type="email" placeholder="Your Email" className="border rounded-md p-2" />
            <textarea placeholder="Your Message" className="border rounded-md p-2 h-24" />
            <button className="bg-blue-700 text-white rounded-md p-2 hover:bg-blue-800 transition">Send Message</button>
          </form>
        </div>
        {/* Availability */}
        <div>
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Our Availability</h2>
          <div className="bg-blue-50 rounded-md p-4 text-blue-900">
            <p><span className="font-bold">Monday - Friday:</span> 8:00 AM - 8:00 PM</p>
            <p><span className="font-bold">Saturday:</span> 9:00 AM - 5:00 PM</p>
            <p><span className="font-bold">Sunday:</span> Closed</p>
            <p className="mt-2"><span className="font-bold">Helpline:</span> +1 234 567 890</p>
            <p><span className="font-bold">Email:</span> support@ridex.com</p>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-blue-50 rounded-md p-4">
              <p className="font-bold text-blue-800">{faq.question}</p>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Useful Articles */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Useful Articles</h2>
        <ul className="list-disc pl-6 space-y-2">
          {articles.map((article, idx) => (
            <li key={idx}>
              <a href={article.link} className="text-blue-700 hover:underline">{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Layout1>
  );
};

export default Contact;