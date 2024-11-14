"use client";
import ModernInteriorDesign from "../../assets/modern-interior-design-grey-living-room2-scaled.jpeg";
import KitchenDesign from "../../assets/kitchen-with-small-space-modern-design_23-2150710611.jpg";
import HospitalDesign from "../../assets/clinic1.jpg";
import Exhibition from "../../assets/exhibition.jpg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Ac from "../../assets/services/ac.jpg";
import Plaster from "../../assets/services/plastring.jpg";
import WallTiling from "../../assets/services/floorandtailing.jpg";
import Plumbing from "../../assets/services/plumbing-professional-doing-his-job.jpg";
import FalseCeiling from "../../assets/services/falseceleingnew.jpg";
import Painting from "../../assets/services/paitning.webp";
import Renovation from "../../assets/services/rennovation.jpg";
import Carpentry from "../../assets/services/carpentry.jpg";

const cardData = [
  {
    title: "Plumbing & Sanitary Services",
    description: "Expert plumbing services ensuring optimal water flow and sanitation, along with professional sanitary installations to enhance your bathroom experience.",
    imageUrl: Plumbing.src,
  },
  { title: "Plaster Work", description: "Quality plaster work to give your walls a smooth and flawless finish.", imageUrl: Plaster.src },
  { title: "Floor & Wall Tiling Works", description: "Precision floor and wall tiling works for an elegant and modern look.", imageUrl: WallTiling.src },
  { title: "False Ceiling & Light Partitions Installation", description: "Creative false ceiling designs and light partitions for enhanced aesthetics.", imageUrl: FalseCeiling.src },
  { title: "Carpentry & Wood Flooring Works", description: "Custom carpentry and wood flooring services to elevate your interiors.", imageUrl: Carpentry.src },
  { title: "Air Conditioning Ventilations & Air Filtration System Installation", description: "Professional air conditioning and ventilation installations for optimal comfort.", imageUrl: Ac.src },
  { title: "Painting Contracting", description: "Comprehensive painting contracting services to refresh and beautify your spaces.", imageUrl: Painting.src },
  { title: "Renovation Services", description: "Full renovation services to transform your space into your dream environment.", imageUrl: Renovation.src },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
    },
  }),
};

export default function ServicePage() {
  return (
    <div className="w-full min-h-screen p-6 md:p-28 flex flex-col items-center justify-center bg-cover bg-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-sky-900 mb-6">Dedicated Technical Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {cardData.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });
          const delay = index * 0.3; // Delay each card by 0.3s

          return (
            <motion.div
              key={index}
              ref={ref}
              className={cn("relative rounded-md shadow-lg flex flex-col justify-end p-4 bg-cover bg-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80")}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={delay}
              variants={cardVariants}
            >
              <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
              <div className="text-white relative z-10">
                <h2 className="text-lg sm:text-xl font-semibold">{card.title}</h2>
                <p className="text-xs sm:text-sm">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
