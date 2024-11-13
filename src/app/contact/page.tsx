"use client";

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-sans w-full md:p-12 p-6">
        <div>
          <h1 className="text-gray-800 text-2xl sm:text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out; we'd love to hear about your project and provide help.</p>

          <div className="mt-8 sm:mt-12">
            <h2 className="text-gray-800 text-sm sm:text-base font-bold">Contact Details</h2>
            <ul className="mt-4 space-y-4">
              {/* Owner's Name */}
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.65 0-3.17-.5-4.42-1.36.03-.98.81-1.73 1.78-1.73.75 0 1.41.47 1.66 1.15.74.27 1.52.42 2.36.42.84 0 1.62-.15 2.36-.42.25-.68.91-1.15 1.66-1.15.97 0 1.75.75 1.78 1.73C15.17 19.5 13.65 20 12 20zm-4.8-6.8c.33-.44.8-.8 1.32-1.01.62-.26 1.25-.42 1.9-.5.65-.08 1.31-.13 1.98-.15.67.02 1.33.07 1.98.15.65.08 1.28.24 1.9.5.52.21.99.57 1.32 1.01-.61-.34-1.31-.56-2.05-.63-.67-.07-1.34-.1-2.01-.1-.67 0-1.34.03-2.01.1-.74.07-1.44.29-2.05.63z" />
                  </svg>
                </div>
                <p className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">Owner</small>
                  <strong>MOOSA MALIYEKKAL</strong>
                </p>
              </li>

              {/* phone number */}

              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M12.04 0C5.42 0 0 5.42 0 12.04c0 2.14.56 4.16 1.55 5.93l-1.03 5.55L6.17 22.5A11.99 11.99 0 0 0 12.04 24c6.61 0 12.04-5.42 12.04-11.96C24.08 5.42 18.66 0 12.04 0zm.14 21.6c-1.79 0-3.57-.45-5.15-1.28L4 22.8l1.53-5.44a10.69 10.69 0 0 1-1.4-5.3c0-5.88 4.83-10.68 10.69-10.68 5.88 0 10.67 4.8 10.67 10.68 0 5.87-4.8 10.66-10.67 10.66zM7.1 7.14c.37.17.76.2 1.13.32.35.11.58.2.75.41.2.23.23.39.32.61.08.2.17.37.23.56.03.11.06.25.17.3.26.12.58.02.79-.17.43-.37.86-.75 1.33-1.07.23-.15.53-.28.83-.17.18.06.34.15.5.26.2.13.31.27.5.42.15.12.31.28.45.44.1.1.14.2.23.34.04.05.05.12.03.17l-.14.24c-.06.12-.13.22-.18.34-.02.06-.06.13-.1.19a4.17 4.17 0 0 1-.34.43c-.08.1-.16.18-.27.25-.18.13-.38.25-.59.36-.17.08-.32.15-.47.26-.3.17-.45.45-.53.76-.05.19-.1.39-.12.59-.04.28.02.56.11.81.14.38.37.72.63 1.04.25.3.5.6.79.86.23.2.53.3.85.26.33-.03.62-.18.89-.3.2-.08.41-.15.6-.23.31-.14.62-.31.95-.31h.15l.22.06c.36.11.66.34.87.63.18.26.3.54.43.84.16.35.33.71.47 1.08.06.15.08.32.13.48.03.07.06.13.06.2a4.5 4.5 0 0 1-.04.32c-.06.36-.17.71-.3 1.06-.09.26-.21.5-.35.74-.28.47-.64.9-1.04 1.28-.38.35-.79.66-1.23.93-.36.22-.73.42-1.12.57-.23.08-.47.12-.72.17-.27.06-.54.12-.81.18-.3.06-.6.1-.91.12a7.84 7.84 0 0 1-.92.04z" />
                  </svg>
                </div>
                <a href="tel:+123456789" className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">Phone</small>
                  <strong>04 359 7435</strong>
                </a>
              </li>
              {/* Email */}

              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a href="mailto:info@example.com" className="text-[#007bff] text-xs sm:text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>moosamft@gmail.com</strong>
                </a>
              </li>

              {/* Phone / WhatsApp */}
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M12.04 0C5.42 0 0 5.42 0 12.04c0 2.14.56 4.16 1.55 5.93l-1.03 5.55L6.17 22.5A11.99 11.99 0 0 0 12.04 24c6.61 0 12.04-5.42 12.04-11.96C24.08 5.42 18.66 0 12.04 0zm.14 21.6c-1.79 0-3.57-.45-5.15-1.28L4 22.8l1.53-5.44a10.69 10.69 0 0 1-1.4-5.3c0-5.88 4.83-10.68 10.69-10.68 5.88 0 10.67 4.8 10.67 10.68 0 5.87-4.8 10.66-10.67 10.66zM7.1 7.14c.37.17.76.2 1.13.32.35.11.58.2.75.41.2.23.23.39.32.61.08.2.17.37.23.56.03.11.06.25.17.3.26.12.58.02.79-.17.43-.37.86-.75 1.33-1.07.23-.15.53-.28.83-.17.18.06.34.15.5.26.2.13.31.27.5.42.15.12.31.28.45.44.1.1.14.2.23.34.04.05.05.12.03.17l-.14.24c-.06.12-.13.22-.18.34-.02.06-.06.13-.1.19a4.17 4.17 0 0 1-.34.43c-.08.1-.16.18-.27.25-.18.13-.38.25-.59.36-.17.08-.32.15-.47.26-.3.17-.45.45-.53.76-.05.19-.1.39-.12.59-.04.28.02.56.11.81.14.38.37.72.63 1.04.25.3.5.6.79.86.23.2.53.3.85.26.33-.03.62-.18.89-.3.2-.08.41-.15.6-.23.31-.14.62-.31.95-.31h.15l.22.06c.36.11.66.34.87.63.18.26.3.54.43.84.16.35.33.71.47 1.08.06.15.08.32.13.48.03.07.06.13.06.2a4.5 4.5 0 0 1-.04.32c-.06.36-.17.71-.3 1.06-.09.26-.21.5-.35.74-.28.47-.64.9-1.04 1.28-.38.35-.79.66-1.23.93-.36.22-.73.42-1.12.57-.23.08-.47.12-.72.17-.27.06-.54.12-.81.18-.3.06-.6.1-.91.12a7.84 7.84 0 0 1-.92.04z" />
                  </svg>
                </div>
                <a href="https://wa.me/971504274185" className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">WhatsApp</small>
                  <strong>050 427 4185</strong>
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 24 24">
                    <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm0 15c-2.61 0-5-1.98-5-4.45 0-2.48 2.39-4.45 5-4.45s5 1.98 5 4.45c0 2.47-2.39 4.45-5 4.45zm0-7.5c-1.4 0-2.54 1.03-2.54 2.35 0 1.31 1.14 2.35 2.54 2.35s2.54-1.03 2.54-2.35c0-1.32-1.14-2.35-2.54-2.35z" />
                  </svg>
                </div>
                <p className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">Address</small>
                  <strong>Office No.43-44 Dubai Muncipality, Bur Dubai - Al Fahidi</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6 sm:space-y-8">
          <input type="text" placeholder="Full Name" className="border border-gray-200 text-gray-800 text-xs sm:text-sm rounded-lg block w-full p-3 focus:outline-none" />
          <input type="email" placeholder="Email Address" className="border border-gray-200 text-gray-800 text-xs sm:text-sm rounded-lg block w-full p-3 focus:outline-none" />
          <input type="tel" placeholder="Contact Number" className="border border-gray-200 text-gray-800 text-xs sm:text-sm rounded-lg block w-full p-3 focus:outline-none" />
          <textarea rows="4" placeholder="Type Your Message..." className="border border-gray-200 text-gray-800 text-xs sm:text-sm rounded-lg block w-full p-3 focus:outline-none"></textarea>
          <button type="submit" className="w-full bg-[#007bff] hover:bg-[#0069d9] active:bg-[#005cbf] text-white text-xs sm:text-sm font-semibold rounded-lg p-3">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
