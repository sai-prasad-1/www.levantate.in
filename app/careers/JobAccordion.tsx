"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
  about: string;
  department: string;
  responsibilities: string;
  requirements: string;
  location: string;
  type: string;
  salary: string;
  closing_date: string;
  created_at: string;
  updated_at: string;
  uuid: string;
  loc_type: string | null;
}

interface Department {
  department_name: string;
  jobs: Job[];
}

interface JobAccordionProps {
  departments: Department[];
}

const JobAccordion = ({ departments }: JobAccordionProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

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

  if (departments.length === 0) {
    return (
      <p className="text-center text-lg font-onest text-[#5A5A7A] animate-fade-in">
        No job openings available at the moment. Check back later!
      </p>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
    >
      {departments.map((department) => {
        const isExpanded = expandedCategories.has(department.department_name);
        const jobs = department.jobs;

        return (
          <motion.div
            key={department.department_name}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-2! bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! rounded-2xl"
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden"
              initial={false}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(department.department_name)}
                className="w-full flex items-center justify-between px-6! py-5! text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-onest font-medium text-black">
                  {department.department_name}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-onest text-[#5A5A7A]">
                    {jobs.length} {jobs.length === 1 ? "position" : "positions"}
                  </span>
                  {isExpanded ? (
                    <FaChevronUp className="w-4 h-4 text-black" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-black" />
                  )}
                </div>
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
                    <div className="px-6! pb-4!">
                      {jobs.map((job, index) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {index > 0 && (
                            <div className="h-[1px] bg-[#E2E4F5] my-4!" />
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2! gap-3">
                            <div className="flex-1">
                              <h3 className="text-lg font-onest font-medium text-black mb-1!">
                                {job.title}
                              </h3>
                              <p className="text-sm font-onest text-[#5A5A7A]">
                                {job.location} | {job.type}{" "}
                                {job.loc_type && `| ${job.loc_type}`}
                              </p>
                            </div>
                            <Link
                              href={`/careers/${job.uuid}`}
                              className="w-full sm:w-auto text-center sm:ml-6! px-6! py-2! bg-[#38385B] text-white rounded-xl font-onest font-medium hover:bg-[#2A2A45] transition-colors"
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
  );
};

export default JobAccordion;

