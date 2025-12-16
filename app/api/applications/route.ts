import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const applicationData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone_number: formData.get("phone_number") as string,
      country: formData.get("country") as string,
      state: formData.get("state") as string,
      experience: formData.get("experience") as string,
      linkedin_profile: formData.get("linkedin_profile") as string,
      additional_information: formData.get("additional_information") as string,
      status: formData.get("status") as string, // "pending"
      job_uuid: formData.get("job_uuid") as string,
    };

    const attachments = formData.get("attachments") as File | null;

    
    // For now, create a new FormData to send to backend
    const backendFormData = new FormData();
    Object.entries(applicationData).forEach(([key, value]) => {
      if (value) backendFormData.append(key, value);
    });
    
    if (attachments && attachments.size > 0) {
      backendFormData.append("attachments", attachments);
    }

    // Uncomment and update when backend endpoint is ready:
    const response = await fetch(
      `${process.env.NEXT_PRIVATE_BACKEND_URL}/api/jobs/apply`,
      {
        method: "POST",
        body: backendFormData,
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to submit application to backend");
    }
    
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}

