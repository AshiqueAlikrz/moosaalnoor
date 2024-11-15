"use client";
import ButtonAppBar from "@/components/navbar";
import Image from "next/image";
import AboutPageBg from "../../assets/italian-luxury-designer-bedroom-furniture-1500x800.jpg";
import CustomImageList from "@/components/imageView";
import ImageGallery from "@/components/imageGallery";
import { motion } from "framer-motion";
import WorkerImg from "../../assets/newworker.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Custom Curtains",
    icon: <FaLongArrowAltRight className="fa-2x text-orange-500" />,
  },
  {
    id: 2,
    title: "Sofa Upholstery",
    icon: <FaLongArrowAltRight className="fa-2x text-orange-500" />,
  },
  {
    id: 3,
    title: "Carpet Installation",
    icon: <FaLongArrowAltRight className="fa-2x text-orange-500" />,
  },
];

export default function Media() {
  return (
    <section id="about" className="relative h-screen bg-gradient-to-l from-black to-gray-600 text-white">
      <div className="container h-full flex items-center">
        <div className="flex flex-wrap w-full h-full">
          {/* Image Section with Animation */}
          <motion.div
            className="hidden w-full md:flex md:w-5/12 h-full overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image alt="Technical Services" className="h-full w-full rounded-lg object-cover" src={WorkerImg} width={800} height={600} layout="responsive" objectFit="cover" objectPosition="center" />
          </motion.div>

          {/* Text Section with Staggered Animation */}
          <motion.div
            className="w-full md:w-5/12 h-full flex items-center ml-auto mr-auto px-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="md:pr-12">
              <motion.h3
                className="text-4xl uppercase font-bold"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                Professional Home Furnishing Services
              </motion.h3>
              <motion.p
                className="mt-4 text-lg leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We specialize in providing high-quality home furnishing services, including custom curtains, sofas, and carpets. Our expert team is dedicated to delivering exceptional results with a
                focus on style and comfort.
              </motion.p>
              <ul className="list-none mt-6">
                {services.map((service) => (
                  <motion.li
                    key={service.id}
                    className="py-2"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center">
                      <div>
                        <span className="font-semibold inline-block py-3 mr-3">{service.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl">{service.title}</h4>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
