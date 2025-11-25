import { MapPin, Send } from "lucide-react";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Projects (3/12) */}
        <aside className="md:col-span-3 order-2 md:order-1">
          <section className="md:sticky md:top-24">
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
                    <p className="body-small">
                      Fast-paced geography game
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://dofus-games.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card block"
              >
                <div className="flex items-start gap-3">
                  <img
                    className="w-10 h-10 flex-shrink-0"
                    src="/dg.png"
                    alt="Dofus Games Logo"
                  />
                  <div className="min-w-0">
                    <h4 className="heading-5 text-sm mb-1">Dofus: Gardiens</h4>
                    <p className="body-small">
                      Boss guessing game
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </aside>

        {/* Middle Column - Main Content (6/12) */}
        <main className="md:col-span-6 order-1 md:order-2">
          <header className="text-center mb-12 py-16 px-8 bg-blueprint-fade rounded-lg">
            <h1 className="heading-1 mb-2 animate-fade-in">Enzo GUENY</h1>
            <p className="mono-label mb-4 animate-fade-in delay-100">FULL-STACK DEVELOPER</p>
            <h2 className="heading-4 text-muted mb-6 animate-fade-in delay-200">From Lyon, France</h2>
            <p className="body-large max-w-2xl mx-auto animate-fade-in delay-300">
              Welcome to my digital space. I'm a passionate developer creating
              web applications and games. Explore my projects below.
            </p>
          </header>

          <section className="card mb-12">
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
                increase my skillset. Whether it's optimizing performanc, or
                creating engaging user interfaces, I approach every project with
                creativity and attention to detail.
              </p>
            </div>
          </section>
        </main>

        {/* Right Column - Contact Card (3/12) */}
        <aside className="md:col-span-3 order-3">
          <div className="card-glow md:sticky md:top-24">
            <div className="space-y-6">
              <div className="text-center">
                <p className="mono-label mb-2">Daily Rate</p>
                <p className="heading-2 text-accent">520€</p>
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

              <a
                href="mailto:enzogueny30@gmail.com"
                className="btn btn-primary animate-pulse-glow w-full"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
