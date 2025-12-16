"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaTimes } from "react-icons/fa";
import Section from "../../components/ui/Section";

interface JobDetail {
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

interface ApplicationForm {
  name: string;
  email: string;
  phone_number: string;
  country: string;
  state: string;
  experience: string;
  linkedin_profile: string;
  attachments: File | null;
  additional_information: string;
}

const JobDetailPage = () => {
  const params = useParams();
  const jobId = params.id;
  
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState<ApplicationForm>({
    name: "",
    email: "",
    phone_number: "",
    country: "",
    state: "",
    experience: "",
    linkedin_profile: "",
    attachments: null,
    additional_information: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError("not_found");
          } else {
            throw new Error("Failed to fetch job");
          }
          return;
        }
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError("Failed to load job details. Please try again later.");
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, attachments: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone_number", formData.phone_number);
      submitData.append("country", formData.country);
      submitData.append("state", formData.state);
      submitData.append("experience", formData.experience);
      submitData.append("linkedin_profile", formData.linkedin_profile);
      submitData.append("additional_information", formData.additional_information);
      submitData.append("status", "pending");
      submitData.append("job_uuid", job?.uuid || "");
      
      if (formData.attachments) {
        submitData.append("attachments", formData.attachments);
      }

      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/applications", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        country: "",
        state: "",
        experience: "",
        linkedin_profile: "",
        attachments: null,
        additional_information: "",
      });
    } catch (err) {
      console.error("Error submitting application:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus("idle");
  };

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

  // Loading state
  if (loading) {
    return (
      <main>
        <Section fullWidth className="w-full min-h-screen flex items-center justify-center !pt-40 !py-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#38385B] border-t-transparent rounded-full animate-spin" />
            <p className="text-lg font-onest text-[#5A5A7A]">Loading job details...</p>
          </div>
        </Section>
      </main>
    );
  }

  // Not found state
  if (error === "not_found" || !job) {
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

  // Error state
  if (error) {
    return (
      <main>
        <Section fullWidth className="w-full min-h-screen flex items-center justify-center !pt-40 !py-20">
          <div className="text-center">
            <p className="text-lg font-onest text-red-500 !mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="!px-6 !py-2 bg-[#38385B] text-white rounded-xl font-onest font-medium hover:bg-[#2A2A45] transition-colors"
            >
              Try Again
            </button>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section fullWidth className="w-full min-h-screen flex items-center justify-center !pt-30 !py-20">
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
                  {job.location} {job.loc_type && `(${job.loc_type})`}
                </span>
                <span className="flex items-center gap-2">
                  <FaBriefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <FaBuilding className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.department}
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
              <p className="text-sm sm:text-base text-[#5A5A7A] font-onest leading-relaxed whitespace-pre-line">
                {job.about}
              </p>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-2xl !mb-4 sm:!mb-6"
          >
            <div className="bg-white rounded-2xl !p-4 sm:!p-6 lg:!p-8">
              <h2 className="text-lg sm:text-xl font-onest font-semibold text-black !mb-3 sm:!mb-4">
                Your Responsibilities
              </h2>
              <div 
                className="text-sm sm:text-base text-[#5A5A7A] font-onest leading-relaxed [&_ul]:space-y-2 [&_ul]:list-none [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:before:content-[''] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:bg-[#38385B] [&_li]:before:rounded-full [&_li]:before:mt-2 [&_li]:before:shrink-0"
                dangerouslySetInnerHTML={{ __html: job.responsibilities }}
              />
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] !p-2 sm:!p-4 rounded-2xl !mb-6 sm:!mb-8"
          >
            <div className="bg-white rounded-2xl !p-4 sm:!p-6 lg:!p-8">
              <h2 className="text-lg sm:text-xl font-onest font-semibold text-black !mb-3 sm:!mb-4">
                Requirements
              </h2>
              <div 
                className="text-sm sm:text-base text-[#5A5A7A] font-onest leading-relaxed [&_ul]:space-y-2 [&_ul]:list-none [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:before:content-[''] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:bg-[#38385B] [&_li]:before:rounded-full [&_li]:before:mt-2 [&_li]:before:shrink-0"
                dangerouslySetInnerHTML={{ __html: job.requirements }}
              />
            </div>
          </motion.div>

          {/* Apply Button */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#38385B] text-white !px-8 sm:!px-10 !py-3 sm:!py-4 rounded-2xl font-onest font-semibold text-base sm:text-lg hover:bg-[#2A2A45] transition-all hover:scale-105 shadow-lg"
            >
              Apply for this Position
            </button>
            <p className="text-xs sm:text-sm text-[#5A5A7A] font-onest !mt-3 sm:!mt-4">
              We&apos;ll get back to you within 3-5 business days
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 !px-6 !py-4 flex items-center justify-between rounded-t-2xl">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-onest font-semibold text-[#38385B]">
                      Apply for {job?.title}
                    </h2>
                    <p className="text-sm text-[#5A5A7A] font-onest">Fill in your details below</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FaTimes className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Success Message */}
                {submitStatus === "success" ? (
                  <div className="!p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto !mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-onest font-semibold text-[#38385B] !mb-2">Application Submitted!</h3>
                    <p className="text-[#5A5A7A] font-onest !mb-6">
                      Thank you for applying. We&apos;ll review your application and get back to you within 3-5 business days.
                    </p>
                    <button
                      onClick={closeModal}
                      className="bg-[#38385B] text-white !px-6 !py-3 rounded-xl font-onest font-medium hover:bg-[#2A2A45] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="!p-6">
                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-600 !px-4 !py-3 rounded-xl !mb-6 text-sm font-onest">
                        Failed to submit application. Please try again.
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="India"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="Kerala"
                        />
                      </div>

                      {/* Experience */}
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Experience (years) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>

                      {/* LinkedIn */}
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          LinkedIn Profile <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          name="linkedin_profile"
                          value={formData.linkedin_profile}
                          onChange={handleInputChange}
                          required
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent"
                          placeholder="https://linkedin.com/in/johndoe"
                        />
                      </div>

                      {/* Resume/Attachment */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Resume/CV (optional)
                        </label>
                        <input
                          type="file"
                          name="attachments"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#38385B] file:text-white hover:file:bg-[#2A2A45]"
                        />
                        <p className="text-xs text-[#5A5A7A] !mt-1">Accepted formats: PDF, DOC, DOCX</p>
                      </div>

                      {/* Additional Information */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-onest font-medium text-[#38385B] !mb-2">
                          Additional Information (optional)
                        </label>
                        <textarea
                          name="additional_information"
                          value={formData.additional_information}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full !px-4 !py-3 border border-[#E2E4F5] rounded-xl font-onest text-sm focus:outline-none focus:ring-2 focus:ring-[#38385B] focus:border-transparent resize-none"
                          placeholder="Tell us anything else you'd like us to know..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="!mt-6 flex gap-3">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="flex-1 !py-3 border border-[#E2E4F5] text-[#38385B] rounded-xl font-onest font-medium hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 !py-3 bg-[#38385B] text-sm sm:text-base text-white rounded-xl font-onest font-medium hover:bg-[#2A2A45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default JobDetailPage;
