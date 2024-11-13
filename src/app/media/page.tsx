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
    <section id="about" className="relative h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="container   h-full flex items-center ">
        <div className="flex flex-wrap w-full h-full ">
          <div className="hidden w-full  md:flex md:w-5/12 h-full overflow-hidden " data-aos="fade-right">
            <Image
              alt="Technical Services"
              className="h-full w-full rounded-lg object-cover" // Full height and object cover to fill the div
              src={WorkerImg}
              width={800} // Image dimensions; actual size will be responsive
              height={600}
              layout="responsive" // Ensures responsiveness within the container
              objectFit="cover" // Ensures the image covers the div without distortion
              objectPosition="center" // Centers the image within the div
            />
          </div>
          <div className="w-full md:w-5/12 h-full flex items-center ml-auto mr-auto px-4 " data-aos="fade-left">
            <div className="md:pr-12">
              <h3 className="text-4xl uppercase font-bold">Professional Home Furnishing Services</h3>
              <p className="mt-4 text-lg leading-relaxed">
                We specialize in providing high-quality home furnishing services, including custom curtains, sofas, and carpets. Our expert team is dedicated to delivering exceptional results with a
                focus on style and comfort.
              </p>
              <ul className="list-none mt-6">
                {services.map((service) => (
                  <li key={service.id} className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="font-semibold inline-block py-3 mr-3">{service.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl">{service.title}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
