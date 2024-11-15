import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Galaxy AI is here for your all-new Galaxy Buds3",
    description: "Experience the next generation of technology with our cutting-edge products.",
    imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-buds3-r530-sm-r530nzaainu-542189989?$684_547_PNG$",
    imageAlt: "Galaxy Buds3"
  },
  {
    title: "SanDisk Ultra Dual Drive Go usb3.0",
    description: "Seamlessly move content between your USB Type-C smartphone, tablets and Macs and USB Type-A computers.",
    imageUrl: "https://m.media-amazon.com/images/I/617wjUR4vbL._SX679_.jpg",
    imageAlt: "SanDisk Ultra Dual Drive Go usb3.0"
  },
  {
    title: "SanDisk 2TB Extreme Pro Portable SSD ",
    description: "SanDisk 2TB Extreme Pro Portable SSD 2000MB/s R/ W, Upto 3 meter drop protection with IP65 water and dust resistance, Metal Enclosure, PC, MAC & TypeC Smartphone Compatible",
    imageUrl: "https://m.media-amazon.com/images/I/71z2lEHwfNL._SX522_.jpg",
    imageAlt: "SanDisk 2TB Extreme Pro Portable SSD ",
  },
  {
    title: "Anker 555 USB-C Hub (8-in-1)",
    description: "USB-C and USB-A data ports provide file transfer at speeds up to 10 Gbps, while an HDMI port supports media display at resolutions up to 4K@60Hz",
    imageUrl: "https://m.media-amazon.com/images/I/61BuvdURdzL._AC_SX679_.jpg",
    imageAlt: "Anker 555 USB-C Hub (8-in-1)"
  },
];

const HeroSlide = ({ data, direction }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === 'right' ? -300 : 300 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction === 'right' ? 300 : -300 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="m-auto md:h-full flex items-center justify-center gap-10 w-full"
  >
    <div className="max-w-xl mx-auto">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
      >
        {data.title}
      </motion.h2>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8 text-gray-700 text-center"
      >
        {data.description}
      </motion.p>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-4"
      >
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Buy Now
        </button>
      </motion.div>
    </div>
    <motion.img
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      src={data.imageUrl}
      alt={data.imageAlt}
      className="min-w-64 h-64 md:h-96 bg-slate-50 rounded-md object-contain mx-auto"
    />
  </motion.div>
);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-900 py-10 md:py-20 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <HeroSlide key={currentIndex} data={slides[currentIndex]} direction={direction} />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          prevSlide();
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 5000);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 5000);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-900' : 'bg-gray-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
