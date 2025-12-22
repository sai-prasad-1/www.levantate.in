import type { Metadata } from "next";
import Section from "../components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "../components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Contact Us | Levantate Labs",
  description: "Get in touch with Levantate Labs. Let's discuss how we can help your startup stand out and convert more customers.",
};

export default function ContactPage() {
  return (
    <main>
      <Section fullWidth className="w-full p-10! min-h-screen flex items-center justify-center pt-32! sm:pt-36! pb-16! sm:pb-20!">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-10! sm:mb-14! animate-fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-agile font-medium text-[#38385B] mb-4!">
              Start a conversation
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-onest text-[#5A5A7A] max-w-2xl mx-auto text-center">
              Whether you&apos;re ready to transform your brand or just exploring options, 
              we&apos;d love to hear about your goals.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-up [animation-delay:100ms]">
              <div className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! rounded-2xl sm:rounded-3xl h-full">
                <div className="bg-white rounded-xl sm:rounded-2xl p-5! sm:p-8! h-full">
                  <h2 className="text-xl sm:text-2xl font-onest font-semibold text-[#38385B] mb-6!">
                    Send us a message
                  </h2>
                  
                  <form className="space-y-5!">
                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-2 gap-4!">
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] mb-2!">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          name="firstName"
                          placeholder="John"
                          className="w-full px-4! py-3! bg-[#F8F8FB] border border-[#E2E4F5] rounded-xl font-onest text-sm text-[#38385B] placeholder:text-[#9A9AB8] focus:outline-none focus:border-[#38385B] focus:ring-1 focus:ring-[#38385B] transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-onest font-medium text-[#38385B] mb-2!">
                          Last Name
                        </label>
                        <input 
                          type="text" 
                          name="lastName"
                          placeholder="Doe"
                          className="w-full px-4! py-3! bg-[#F8F8FB] border border-[#E2E4F5] rounded-xl font-onest text-sm text-[#38385B] placeholder:text-[#9A9AB8] focus:outline-none focus:border-[#38385B] focus:ring-1 focus:ring-[#38385B] transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-onest font-medium text-[#38385B] mb-2!">
                        Work Email
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="john@company.com"
                        className="w-full px-4! py-3! bg-[#F8F8FB] border border-[#E2E4F5] rounded-xl font-onest text-sm text-[#38385B] placeholder:text-[#9A9AB8] focus:outline-none focus:border-[#38385B] focus:ring-1 focus:ring-[#38385B] transition-all"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-onest font-medium text-[#38385B] mb-2!">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Acme Inc."
                        className="w-full px-4! py-3! bg-[#F8F8FB] border border-[#E2E4F5] rounded-xl font-onest text-sm text-[#38385B] placeholder:text-[#9A9AB8] focus:outline-none focus:border-[#38385B] focus:ring-1 focus:ring-[#38385B] transition-all"
                      />
                    </div>

                    {/* What do you need help with */}
                    <div>
                      <label className="block text-sm font-onest font-medium text-[#38385B] mb-2!">
                        What do you need help with?
                      </label>
                      <select 
                        name="service"
                        className="w-full px-4! py-3! bg-[#F8F8FB] border border-[#E2E4F5] rounded-xl font-onest text-sm text-[#38385B] focus:outline-none focus:border-[#38385B] focus:ring-1 focus:ring-[#38385B] transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2338385B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                        required
                        defaultValue="Select a service"
                      >
                        <option value="website">Website Design & Development</option>
                        <option value="branding">Brand Identity & Positioning</option>
                        <option value="landing">High-Converting Landing Pages</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="other">Something Else</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-onest font-medium text-[#38385B] mb-2!">
                        Tell us about your project
                      </label>
                      <textarea 
                        name="message"
                        rows={4}
                        placeholder="Share any details about your goals, timeline, or specific challenges..."
                        className="w-full px-4! py-3! bg-[#F8F8FB] border border-[#E2E4F5] rounded-xl font-onest text-sm text-[#38385B] placeholder:text-[#9A9AB8] focus:outline-none focus:border-[#38385B] focus:ring-1 focus:ring-[#38385B] transition-all resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <CTAButton type="submit" title="Send Message" subtitle="We'll respond within 24h" size="md" />
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-2 space-y-6!">
              {/* Book a Call Card */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <div className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! rounded-2xl sm:rounded-3xl">
                  <div className="bg-black rounded-xl sm:rounded-2xl p-5! sm:p-6! text-white">
                    <div className="flex items-center gap-3 mb-4!">
                      <div className="w-12 h-12 bg-[#C4F7D4] rounded-xl flex items-center justify-center">
                        <Image 
                          src="/levantate_logo_square.svg" 
                          alt="" 
                          width={28} 
                          height={28}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-onest font-semibold">
                          Prefer to talk?
                        </h3>
                        <p className="text-sm text-gray-400 font-onest">
                          Book a 20-min intro call
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 font-onest mb-5! leading-relaxed">
                      We&apos;ll discuss your goals, current challenges, and see if we&apos;re a good fit. 
                      No pressure, just a friendly chat.
                    </p>
                    <Link 
                      href="https://calendly.com/levantate" 
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium font-onest text-[#C4F7D4] hover:text-white transition-colors group"
                    >
                      Schedule a call
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="animate-fade-in-up [animation-delay:300ms]">
                <div className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! rounded-2xl sm:rounded-3xl">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-5! sm:p-6!">
                    <div className="flex items-center gap-3 mb-3!">
                      <div className="w-10 h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#38385B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg font-onest font-semibold text-[#38385B]">
                        Email Us
                      </h3>
                    </div>
                    <a 
                      href="mailto:contact@levantate.in" 
                      className="text-sm sm:text-base font-onest text-[#5A5A7A] hover:text-[#38385B] transition-colors"
                    >
                    contact@levantate.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="animate-fade-in-up [animation-delay:400ms]">
                <div className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! rounded-2xl sm:rounded-3xl">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-5! sm:p-6!">
                    <div className="flex items-center gap-3 mb-3!">
                      <div className="w-10 h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#38385B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg font-onest font-semibold text-[#38385B]">
                        Quick Response
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base font-onest text-[#5A5A7A]">
                      We typically respond within <span className="text-[#38385B] font-semibold">24 hours</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="animate-fade-in-up [animation-delay:500ms]">
                <div className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! rounded-2xl sm:rounded-3xl">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-5! sm:p-6!">
                    <div className="flex items-center gap-3 mb-3!">
                      <div className="w-10 h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#38385B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg font-onest font-semibold text-[#38385B]">
                        We Work Globally
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base font-onest text-[#5A5A7A]">
                      Working with clients Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12! sm:mt-16! text-center animate-fade-in [animation-delay:600ms]">
            <p className="text-xs sm:text-sm font-onest text-[#5A5A7A]">
              Not ready to reach out yet? Explore our{" "}
              <Link href="/#work" className="text-[#38385B] font-medium underline underline-offset-2 hover:text-black transition-colors">
                work
              </Link>{" "}
              or learn more{" "}
              <Link href="/#why" className="text-[#38385B] font-medium underline underline-offset-2 hover:text-black transition-colors">
                about us
              </Link>.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

