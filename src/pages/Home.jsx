import { Check, Copy, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import AvailabilityCalendar from "../components/AvailabilityCalendar";
import { CONTACT_INFO } from "../config/contact";
import { TechBadge } from "../components/TechBadge";

function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const copyTimeoutRef = useRef(null);
  const copyPhoneTimeoutRef = useRef(null);

  // Cleanup timeouts on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      if (copyPhoneTimeoutRef.current) {
        clearTimeout(copyPhoneTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email to clipboard:", error);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.phone);
      setCopiedPhone(true);
      if (copyPhoneTimeoutRef.current) {
        clearTimeout(copyPhoneTimeoutRef.current);
      }
      copyPhoneTimeoutRef.current = setTimeout(
        () => setCopiedPhone(false),
        2000
      );
    } catch (error) {
      console.error("Failed to copy phone to clipboard:", error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      {/* Full-Width Title Section */}
      <header className="text-center mb-8 py-16 px-8 bg-blueprint-fade rounded-lg">
        <p className="text-accent mono-label mb-4 animate-fade-in delay-100">
          {"</>"}
        </p>
        <h1 className="heading-1 mb-2 animate-fade-in">Enzo GUENY</h1>
        <p className="mono-label mb-4 animate-fade-in delay-100">
          [ FULL-STACK DEVELOPER ]
        </p>
        <p className="body-large max-w-2xl mx-auto animate-fade-in delay-300">
          Combining expertise in software development with creativity and
          cutting-edge technology to deliver valuable applications in short
          delays
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Projects (3/12) */}
        <aside className="md:col-span-3">
          <section className="md:top-24">
            <h3 className="heading-5 mb-4">Conventional CV</h3>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="https://hankiou.github.io/cv/"
                target="_blank"
                rel="noopener noreferrer"
                className="card !p-2 w-[75%] block hover:scale-105 transition-transform overflow-hidden"
              >
                <img
                  className="w-full h-auto rounded"
                  src="/cv-preview.png"
                  alt="Enzo Gueny's professional curriculum vitae - Click to view full CV"
                />
              </a>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="heading-5 mb-4">Side Projects</h3>
            <div className="space-y-4">
              <a
                href="https://geowarmup.hankiou.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:scale-105 transition-transform block overflow-hidden !p-1"
              >
                <img
                  className="w-full h-24 object-cover object-top rounded-t-lg"
                  src="/gw-thumbnail.png"
                  alt="GeoWarmup game header - Fast-paced geography learning game"
                />
                <div className="flex items-center gap-3 p-3">
                  <img
                    className="w-10 h-10 flex-shrink-0 shadow-md"
                    src="/gw128.png"
                    alt="GeoWarmup game icon"
                  />
                  <div className="min-w-0 text-start">
                    <h4 className="heading-5 text-sm mb-1">geowarmup❚</h4>
                    <p className="body-small">Fast-paced geo game</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </aside>

        {/* Middle Column - About My Work (6/12) */}
        <main className="md:col-span-6">
          <section className="mb-12">
            <h3 className="heading-3 mb-4">About My Work</h3>
            <div className="space-y-4">
              <p className="body-base">
                As a developer, I focus on creating user-friendly applications
                with a creative UI. I like creating projects for entertainment
                that have an educational value. I believe in clean code,
                intuitive design, and continuous improvement.
              </p>
              <p className="body-base">
                Each project represents a unique challenge and learning
                opportunity. I try to use technologies I do not master to
                increase my skillset. Whether it's optimizing performance, or
                creating engaging user interfaces, I approach every project with
                creativity and attention to detail.
              </p>
            </div>
          </section>
          <h3 className="heading-3 mb-4">Stack</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <TechBadge tech="Javascript" />
            <TechBadge tech="React" />
            <TechBadge tech="Node.js" />
            <TechBadge tech="Tailwindcss" />
            <TechBadge tech="Figma" />
            <TechBadge tech="Blender" />
            <TechBadge tech="express" />
            <TechBadge tech="Rubyonrails" />
            <TechBadge tech="Docker" />
            <TechBadge tech="Git" />
            <TechBadge tech="PostgreSQL" />
            <TechBadge tech="MongoDB" />
          </div>
        </main>

        {/* Right Column - Daily Rate Box (3/12) */}
        <aside className="md:col-span-3">
          <div className="card-glow">
            <div className="space-y-4">
              <div className="text-center">
                <p className="mono-label mb-2">Daily Rate</p>
                <p className="heading-2 text-accent">
                  {CONTACT_INFO.dailyRate}
                </p>
              </div>

              <div className="divider"></div>

              <div className="text-center">
                <p className="mono-label mb-2">Location</p>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <p className="heading-5">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="bg-black/40 rounded-lg px-2 py-1 flex items-center justify-between gap-2">
                <code className="text-accent text-sm font-mono flex-grow overflow-x-hidden">
                  {CONTACT_INFO.email}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-2 cursor-pointer hover:bg-accent/10 rounded transition-colors flex-shrink-0"
                  title="Copy email"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-accent" />
                  )}
                </button>
              </div>

              <div className="bg-black/40 rounded-lg px-2 py-1 flex items-center justify-between gap-2 whitespace-nowrap">
                <code className="text-accent text-sm font-mono flex-grow overflow-x-hidden">
                  {CONTACT_INFO.phone}
                </code>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 cursor-pointer hover:bg-accent/10 rounded transition-colors flex-shrink-0"
                  title="Copy phone"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-accent" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="btn btn-primary animate-pulse-glow w-full"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="mono-label mb-2">Availability</p>
            <AvailabilityCalendar
              year={2026}
              periods={[
                {
                  year: 2026,
                  label: "availability",
                  startMonth: 2,
                  endMonth: 9,
                  type: "primary",
                },
                {
                  year: 2027,
                  label: "availability",
                  startMonth: 1,
                  endMonth: 12,
                  type: "primary",
                },
              ]}
              variant="default"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
