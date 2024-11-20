import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StickyNote, ArrowLeft, Mail, MessageSquare, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Landing Page
        </Link>

        <div className="text-center mb-12">
          <MessageSquare className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  <a href="mailto:support@stickyuploader.com" className="hover:text-yellow-600">
                    support@stickyuploader.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <MessageSquare className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Live Chat</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Available Monday to Friday<br />
                  9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};