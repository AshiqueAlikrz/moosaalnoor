"use client";
import { FaUserTie } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";

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
                  <FaUserTie />
                </div>
                <p className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">Owner</small>
                  <strong>MOOSA MALIYEKKAL</strong>
                </p>
              </li>

              {/* phone number */}

              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <FaPhoneAlt />
                </div>
                <a href="tel:+123456789" className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">Phone</small>
                  <strong>04 359 7435</strong>
                </a>
              </li>
              {/* Email */}

              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <IoIosMail />
                </div>
                <a href="mailto:info@example.com" className="text-[#007bff] text-xs sm:text-sm ml-4">
                  <small className="block text-black">Mail</small>
                  <strong className="text-black">moosamft@gmail.com</strong>
                </a>
              </li>

              {/* Phone / WhatsApp */}
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <RiWhatsappFill className="text-green-600" />
                </div>
                <a href="https://wa.me/971504274185" className="text-gray-800 text-xs sm:text-sm ml-4">
                  <small className="block">WhatsApp</small>
                  <strong>+971 50 427 4185</strong>
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdLocationPin />
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
          <button
            type="submit"
            className="w-full bg-[#007bff] hover:bg-[#0069d9] active:bg-[#005cbf] text-white text-xs sm:text-sm font-semibold rounded-lg p-3"
            onClick={() => alert("Your message has been sent successfully! The owner will reach out to you shortly.")}
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
