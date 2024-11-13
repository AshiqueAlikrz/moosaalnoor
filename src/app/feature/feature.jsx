"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import FeatureImage from "../../assets/workman-with-his-fingers-crossing-white-background.png";

const Feature = () => {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-sky-900 mt-4 sm:mt-8 md:mt-10"
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        Why Choose Our Technical Services?
      </motion.h1>

      <div className="flex w-full min-h-screen flex-col md:flex-row">
        <div className="w-full md:w-9/12 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {[
              { title: "Expertise", content: "Our team has years of experience handling complex technical challenges." },
              { title: "Affordability", content: "We offer high-quality services at competitive prices to fit your budget." },
              { title: "24/7 Support", content: "Our support team is available around the clock to assist you whenever needed." },
              { title: "Customized Solutions", content: "Tailored services designed to meet your unique needs and goals." },
              { title: "High-Quality Standards", content: "We adhere to industry standards to ensure long-lasting, top-tier results." },
              { title: "Innovative Technology", content: "Cutting-edge tools and technologies for modern and effective solutions." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6"
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible" // This triggers animation when the element comes into view
                viewport={{ once: true, amount: 0.2 }} // 0.2 means 20% of the element needs to be visible
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 mt-4 sm:mt-6 mb-2 sm:mb-4">{feature.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-auto w-full md:w-5/12 flex justify-center md:justify-end md:block">
          <Image src={FeatureImage} alt="Feature" width={450} height={200} className="object-cover md:w-full md:h-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
