import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-linear-to-r from-[#ff0080] via-[#7928ca] to-[#2afadf] m-10  py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated with Our Latest News!</h2>
        <p className="mb-6 text-gray-800">Subscribe to our newsletter and never miss an update.</p>
        
        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-full sm:w-64 mb-4 sm:mb-0 sm:mr-2 text-black border "
          />
          <button
            type="submit"
            className="bg-linear-to-r from-[#2AFADF] to-[#7928CA] py-3 px-6 rounded-r-lg w-full sm:w-auto cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
