"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import careersData from "../data/careers.json";
import Section from "../components/ui/Section";

interface Job {
  category: string;
  jobId: number;
  Title: string;
  Location: string;
  Position: string;
  Type: string;
}

const Careers = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  // Group jobs by category
  const jobsByCategory = careersData.Openings.reduce((acc, job) => {
    if (!acc[job.category]) {
      acc[job.category] = [];
    }
    acc[job.category].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  const categories = Object.keys(jobsByCategory);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main>
      <Section fullWidth className="w-full min-h-screen flex items-center justify-center !py-20">
          <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <motion.h1 
              className="text-4xl font-agile font-medium text-black text-center !mb-12"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Current Openings
            </motion.h1>

            {/* Job Categories */}
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
          {categories.map((category, index) => {
            const isExpanded = expandedCategories.has(category);
            const jobs = jobsByCategory[category];

            return (
              <motion.div 
                key={category} 
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="!mb-2 bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 rounded-2xl"
              >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden"
                initial={false}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between !px-6 !py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-xl font-onest font-medium text-black">
                    {category}
                  </h2>
                  {isExpanded ? (
                    <FaChevronUp className="w-4 h-4 text-black" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-black" />
                  )}
                </button>

                {/* Jobs List */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="!px-6 !pb-4">
                        {jobs.map((job, index) => (
                          <motion.div 
                            key={job.jobId}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {index > 0 && (
                              <div className="h-[1px] bg-[#E2E4F5] !my-4" />
                            )}
                            <div className="flex items-center justify-between !py-2">
                              <div className="flex-1">
                                <h3 className="text-lg font-onest font-medium text-black !mb-1">
                                  {job.Title}
                                </h3>
                                <p className="text-sm font-onest text-[#5A5A7A]">
                                  {job.Location} | {job.Position} | {job.Type}
                                </p>
                              </div>
                              <Link 
                                href={`/careers/${job.jobId}`}
                                className="!ml-6 !px-6 !py-2 bg-[#38385B] text-white rounded-xl font-onest font-medium hover:bg-[#2A2A45] transition-colors"
                              >
                                Apply Now
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              </motion.div>
            );
          })}
            </motion.div>
          </div>
        </Section>
    </main>
  );
};

export default Careers;

