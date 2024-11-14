"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatButton = () => {
  const phoneNumber = "+971504274185";

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
  };

  return (
    <button onClick={handleClick} className="fixed bottom-4 right-4 flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition">
      <FaWhatsapp size={24} className="mr-2" />
      Chat with Us
    </button>
  );
};

export default WhatsAppChatButton;
