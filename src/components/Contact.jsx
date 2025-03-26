import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 bg-orange-50/80 dark:bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <span className="text-gray-600 dark:text-gray-400">chsaidileep2023@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <span className="text-gray-600 dark:text-gray-400">(978) 441-8579</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-gray-600 dark:text-gray-400">Denton, Texas</span>
            </div>
          </div>
        </div>
        <form className="space-y-6 bg-orange-50/80 dark:bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-orange-200 dark:border-gray-700 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800/50 dark:text-gray-200 bg-white/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-orange-200 dark:border-gray-700 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800/50 dark:text-gray-200 bg-white/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-orange-200 dark:border-gray-700 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800/50 dark:text-gray-200 bg-white/50"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-md hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;