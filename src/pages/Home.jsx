import "react-calendar/dist/Calendar.css";

import { Check, Copy, MapPin, Send } from "lucide-react";

import AvailabilityCalendar from "../components/AvailabilityCalendar";
import { useState } from "react";

function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "enzogueny30@gmail.com";
  const phone = "+33 7 70 50 85 85";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
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
                className="card w-[75%] block hover:scale-105 transition-transform overflow-hidden"
              >
                <img
                  className="w-full h-auto rounded"
                  src="/cv-preview.png"
                  alt="Professional CV Preview"
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
                className="card block"
              >
                <div className="flex items-start gap-3">
                  <img
                    className="w-10 h-10 flex-shrink-0"
                    src="/gw128.png"
                    alt="GeoWarmup Logo"
                  />
                  <div className="min-w-0">
                    <h4 className="heading-5 text-sm mb-1">geowarmup❚</h4>
                    <p className="body-small">Fast-paced geography game</p>
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
        </main>

        {/* Right Column - Daily Rate Box (3/12) */}
        <aside className="md:col-span-3">
          <div className="card-glow">
            <div className="space-y-4">
              <div className="text-center">
                <p className="mono-label mb-2">Daily Rate</p>
                <p className="heading-2 text-accent">480€</p>
              </div>

              <div className="divider"></div>

              <div className="text-center">
                <p className="mono-label mb-2">Location</p>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <p className="heading-5">Lyon</p>
                </div>
              </div>

              <div className="divider"></div>

              <div
                className="bg-black/40 cursor-pointer rounded-lg px-2 py-1 flex items-center justify-between gap-2"
                onClick={handleCopy}
              >
                <code className="text-accent text-sm font-mono flex-grow overflow-x-hidden">
                  {email}
                </code>
                <button
                  className="p-2 cursor-pointer hover:bg-accent/10 rounded transition-colors flex-shrink-0"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-accent" />
                  )}
                </button>
              </div>

              <div
                className="bg-black/40 cursor-pointer rounded-lg px-2 py-1 flex items-center justify-between gap-2 whitespace-nowrap"
                onClick={handleCopyPhone}
              >
                <code className="text-accent text-sm font-mono flex-grow overflow-x-hidden">
                  {phone}
                </code>
                <button
                  className="p-2 hover:bg-accent/10 rounded transition-colors flex-shrink-0"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-accent" />
                  )}
                </button>
              </div>

              <a
                href="mailto:enzogueny30@gmail.com"
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
