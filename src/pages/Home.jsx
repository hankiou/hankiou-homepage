import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Enzo GUENY</h1>
        <h2 className="text-xl text-neutral-300">
          Full-Stack Developer from France
        </h2>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Welcome to my digital space. I'm a passionate developer creating web
          applications and games. Explore my projects below.
        </p>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
        <div className="space-y-4">
          <a
            href="https://geowarmup.hankiou.com"
            className="block border border-neutral-700 p-6 rounded-lg hover:border-neutral-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12"
                  src="/gw128.png"
                  alt="GeoWarmup Logo"
                />
                <div>
                  <h4 className="text-xl font-semibold">geowarmup❚</h4>
                  <p className="text-neutral-400">
                    An fast-paced geography game with a speedrun flavour to test
                    and improve your knowledge of nations, capitals and flags.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-up-right-from-square text-neutral-400"></i>
            </div>
          </a>

          <a
            href="https://dofus-games.onrender.com/"
            className="block border border-neutral-700 p-6 rounded-lg hover:border-neutral-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12"
                  src="/dg.png"
                  alt="Dofus Games Logo"
                />
                <div>
                  <h4 className="text-xl font-semibold">
                    Dofus: Les Gardiens de Donjons
                  </h4>
                  <p className="text-neutral-400">
                    A simple game I made a couple of years ago about remembering
                    and guessing every boss from the Dofus MMORPG.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-up-right-from-square text-neutral-400"></i>
            </div>
          </a>

          <a
            href="https://hankiou.github.io/cv/"
            className="block border border-neutral-700 p-6 rounded-lg hover:border-neutral-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12" src="/vite.svg" alt="CV Icon" />
                <div>
                  <h4 className="text-xl font-semibold">Professional CV</h4>
                  <p className="text-neutral-400">
                    View my detailed resume with skills, experience, and
                    professional journey in software development.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-up-right-from-square text-neutral-400"></i>
            </div>
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">About My Work</h3>
        <div className="prose prose-neutral">
          <p className="text-neutral-500">
            As a developer, I focus on creating user-friendly applications with
            a creative UI. I like creating projects for entertainment that have
            an educational value. I believe in clean code, intuitive design, and
            continuous improvement.
          </p>
          <p className="text-neutral-500 mt-4">
            Each project represents a unique challenge and learning opportunity.
            I try to use technologies I do not master to increase my skillset.
            Whether it's optimizing performanc, or creating engaging user
            interfaces, I approach every project with creativity and attention
            to detail.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "Python",
            "HTML/CSS",
            "Git",
            "Vite",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-neutral-400 text-neutral-950 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
