import { MapPin, Send } from "lucide-react";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Projects (3/12) */}
        <aside className="col-span-3">
          <section className="top-8">
            <h3 className="text-xl font-semibold mb-2">Conventional CV</h3>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="https://hankiou.github.io/cv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[75%] block border border-neutral-700 rounded-lg hover:border-neutral-500 transition-colors overflow-hidden"
              >
                <img
                  className="w-full h-auto"
                  src="/cv-preview.png"
                  alt="Professional CV Preview"
                />
              </a>
            </div>
          </section>
          <section className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Side Projects</h3>
            <div className="space-y-3">
              <a
                href="https://geowarmup.hankiou.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-700 p-4 rounded-lg hover:border-neutral-500 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <img
                    className="w-10 h-10 flex-shrink-0"
                    src="/gw128.png"
                    alt="GeoWarmup Logo"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm">geowarmup❚</h4>
                    <p className="text-neutral-400 text-xs mt-1">
                      Fast-paced geography game
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://dofus-games.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-700 p-4 rounded-lg hover:border-neutral-500 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <img
                    className="w-10 h-10 flex-shrink-0"
                    src="/dg.png"
                    alt="Dofus Games Logo"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm">Dofus: Gardiens</h4>
                    <p className="text-neutral-400 text-xs mt-1">
                      Boss guessing game
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </aside>

        {/* Middle Column - Main Content (6/12) */}
        <main className="col-span-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Enzo GUENY</h1>
            <h2 className="text-xl text-neutral-300">
              Full-Stack Developer from France
            </h2>
            <p className="mt-4 text-neutral-400">
              Welcome to my digital space. I'm a passionate developer creating
              web applications and games. Explore my projects below.
            </p>
          </header>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">About My Work</h3>
            <div className="prose prose-neutral">
              <p className="text-neutral-500">
                As a developer, I focus on creating user-friendly applications
                with a creative UI. I like creating projects for entertainment
                that have an educational value. I believe in clean code,
                intuitive design, and continuous improvement.
              </p>
              <p className="text-neutral-500 mt-4">
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
        <aside className="col-span-3">
          <div className="border border-neutral-700 rounded-lg p-6 sticky top-8">
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-1">Daily Rate</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">520€</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-1">Location</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p className="text-lg">Lyon</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:enzogueny30@gmail.com"
                  className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold hover:bg-neutral-200 text-center py-3 px-4 rounded-lg transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
