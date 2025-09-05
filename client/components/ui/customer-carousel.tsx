import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajeev Pandey EDP (IT)",
    company: "Baidyanath",
    photo: "/customers/rajeev-pandey.jpg",
    review:
      "mSELL truly knows what they are doing. They helped our biggest problem of expiry on Distributor end through Their DMS. Thank you mSELL.",
    rating: 5,
  },
  {
    name: "RD Mishra (CIO)",
    company: "Om Sweets & Snacks",
    photo: "/customers/rd-mishra.jpg",
    review:
      "From sweets outlets to FMCG products the leap was tough but thanks to mSELL and their SFA solution to bring out the full potential of our sales force.",
    rating: 5,
  },
  {
    name: "Piyush Pant",
    company: "Neha Herbal",
    photo: "/customers/piyush-pant.jpg",
    review:
      "I knew we had a salesforce efficiency problem and needed it to be resolved ASAP. Thanks to mSELL for the rescue. Keep going mSELL.",
    rating: 5,
  },
];

export default function CustomerCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white dark:bg-[#18181b]">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight pb-2 drop-shadow-md">
          What Our Customer Say
        </h2>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-6">
          Explore how leading companies are achieving success using our products.
        </p>
        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-center mb-3">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 dark:text-yellow-300 fill-yellow-400 dark:fill-yellow-300" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-100 font-medium mb-5">
                “{reviews[index].review}”
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={reviews[index].photo}
                  alt={reviews[index].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-300 dark:border-orange-500 shadow"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width="64"
                  height="64"
                />
                <div className="font-semibold text-base sm:text-lg text-primary dark:text-yellow-200">
                  {reviews[index].name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{reviews[index].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-6 mt-8">
            <button
              aria-label="Previous review"
              onClick={prev}
              className="rounded-full border border-gray-300 dark:border-gray-600 p-2 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Next review"
              onClick={next}
              className="rounded-full border border-gray-300 dark:border-gray-600 p-2 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
