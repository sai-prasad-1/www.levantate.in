import type { Metadata } from "next";
import Section from "../components/ui/Section";
import JobAccordion from "./JobAccordion";

export const metadata: Metadata = {
  title: "Careers | Levantate Labs",
  description: "Join Levantate Labs! Explore current job openings and be part of a team building innovative digital products.",
  openGraph: {
    title: "Careers | Levantate Labs",
    description: "Join Levantate Labs! Explore current job openings and be part of a team building innovative digital products.",
  },
};

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

interface JobsData {
  departments: Department[];
}

async function getJobs(): Promise<JobsData | null> {
  try {
    // Use internal API route to keep backend URL centralized
    const response = await fetch(`${process.env.NEXT_PRIVATE_BACKEND_URL}/api/jobs`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}

export default async function CareersPage() {
  const jobsData = await getJobs();
  const departments = jobsData?.departments || [];

  return (
    <main>
      <Section fullWidth className="w-full min-h-screen flex items-center justify-center pt-40! py-20!">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-4xl font-agile font-medium text-black text-center mb-12! animate-fade-in-down">
            Current Openings
          </h1>

          {/* Error state - shown if fetch failed */}
          {!jobsData && (
            <div className="text-center animate-fade-in">
              <p className="text-lg font-onest text-red-500 mb-4!">
                Failed to load job openings. Please try again later.
              </p>
            </div>
          )}

          {/* Job Categories - Client Component for interactivity */}
          {jobsData && <JobAccordion departments={departments} />}
        </div>
      </Section>
    </main>
  );
}
