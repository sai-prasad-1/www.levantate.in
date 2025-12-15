"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaMapMarkerAlt, FaBriefcase, FaBuilding } from "react-icons/fa";
import jobDetailsData from "../../data/jobDetails.json";
import Section from "../../components/ui/Section";

interface JobDetail {
  jobId: number;
  title: string;
  category: string;
  location: string;
  position: string;
  type: string;
  aboutTheJob: string;
  responsibilities: string[];
  preferredQualifications: string[];
}

const JobDetailPage = () => {
  const params = useParams();
  const jobId = Number(params.id);
  
  const job = jobDetailsData.jobs.find((j: JobDetail) => j.jobId === jobId);

  if (!job) {
    return (
      <main>
        <Section fullWidth className="w-full min-h-screen flex items-center justify-center !py-20">
          <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-agile font-medium text-black !mb-4">Job Not Found</h1>
            <p className="text-gray-600 !mb-8">The job you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#38385B] text-white !px-6 !py-3 rounded-xl font-onest font-medium hover:bg-[#2A2A45] transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </div>
        </Section>
      </main>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <Section fullWidth className="!mt-16 sm:!mt-20 w-full min-h-screen flex items-center justify-center !py-12 sm:!py-20">
        <motion.div 
          className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <Link 
              href="/careers"
              className="inline-flex items-center gap-2 text-[#38385B] hover:text-[#2A2A45] transition-colors !mb-4 sm:!mb-8 font-onest font-medium text-sm sm:text-base"
            >
              <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Back to Careers
            </Link>
          </motion.div>

          {/* Job Header */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-2xl !mb-4 sm:!mb-8"
          >
            <div className="bg-white rounded-2xl !p-4 sm:!p-6 lg:!p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-agile font-medium text-black !mb-3 sm:!mb-4">
                {job.title}
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-[#5A5A7A] font-onest">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <FaBriefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.position}
                </span>
                <span className="flex items-center gap-2">
                  <FaBuilding className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.type}
                </span>
              </div>
            </div>
          </motion.div>

          {/* About the Job */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-2xl !mb-4 sm:!mb-6"
          >
            <div className="bg-white rounded-2xl !p-4 sm:!p-6 lg:!p-8">
              <h2 className="text-lg sm:text-xl font-onest font-semibold text-black !mb-3 sm:!mb-4">
                About the Job
              </h2>
              <p className="text-sm sm:text-base text-[#5A5A7A] font-onest leading-relaxed">
                {job.aboutTheJob}
              </p>
            </div>
          </motion.div>

          {/* Your Responsibilities */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-2xl !mb-4 sm:!mb-6"
          >
            <div className="bg-white rounded-2xl !p-4 sm:!p-6 lg:!p-8">
              <h2 className="text-lg sm:text-xl font-onest font-semibold text-black !mb-3 sm:!mb-4">
                Your Responsibilities
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-[#5A5A7A] font-onest">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#38385B] rounded-full !mt-1.5 sm:!mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Preferred Qualifications */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-2xl !mb-6 sm:!mb-8"
          >
            <div className="bg-white rounded-2xl !p-4 sm:!p-6 lg:!p-8">
              <h2 className="text-lg sm:text-xl font-onest font-semibold text-black !mb-3 sm:!mb-4">
                Preferred Qualifications
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {job.preferredQualifications.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-[#5A5A7A] font-onest">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#38385B] rounded-full !mt-1.5 sm:!mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Apply Button */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <button className="w-full sm:w-auto bg-[#38385B] text-white !px-8 sm:!px-10 !py-3 sm:!py-4 rounded-2xl font-onest font-semibold text-base sm:text-lg hover:bg-[#2A2A45] transition-all hover:scale-105 shadow-lg">
              Apply for this Position
            </button>
            <p className="text-xs sm:text-sm text-[#5A5A7A] font-onest !mt-3 sm:!mt-4">
              We&apos;ll get back to you within 3-5 business days
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  );
};

export default JobDetailPage;

