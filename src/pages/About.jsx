import { TechBadge } from "../components/TechBadge";

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-blueprint-fade py-12 px-8 rounded-lg mb-12 text-center">
        <h1 className="heading-1 mb-4">About Me</h1>
        <p className="mono-label">DEVELOPER • CREATOR • PROBLEM SOLVER</p>
      </div>

      <div className="space-y-8">
        <section className="card">
          <h2 className="heading-3 mb-4">Hello, I'm Enzo GUENY</h2>
          <p className="body-base">
            I'm a passionate full-stack developer from France with a love for
            creating engaging web applications and games. I always enjoyed video
            games and this idea got me into coding and learning computer science
            at university. Today I am still passionate about video games and
            esports.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-3 mb-4">My Philosophy</h2>
          <p className="body-base">
            I believe that technology should be accessible, intuitive, and fun.
            I enjoy video games a lot and I like creating entertainment for
            everyone. Whether I'm developing an educational game or a web
            application, I focus on creating experiences that users genuinely
            enjoy. Clean code, thoughtful design, and user feedback are the
            pillars of my development process.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-3 mb-4">Current Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="heading-4 text-accent mb-2">
                GeoWarmup
              </h3>
              <p className="body-base">
                An interactive geography learning platform that makes studying
                world locations engaging and fun. Players can test their
                knowledge of countries, and tryhard their keyboard typing
                skills.
              </p>
            </div>
            <div>
              <h3 className="heading-4 text-accent mb-2">
                Dofus: Les Gardiens de Donjons
              </h3>
              <p className="body-base">
                A simple browser-based game inspired by the Dofus universe in
                which you have to remember and write down the name of every boss
                in the game.
              </p>
            </div>
          </div>
        </section>

        <section className="card-accent">
          <h2 className="heading-3 mb-4">Technical Expertise</h2>
          <p className="body-base mb-6">
            My skill set spans both front-end and back-end development, allowing
            me to build complete solutions from concept to deployment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mono-label mb-3">FRONTEND</p>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="React" />
                <TechBadge tech="Javascript" />
                <TechBadge tech="Typescript" />
                <TechBadge tech="HTML5" />
                <TechBadge tech="CSS3" />
                <TechBadge tech="Tailwindcss" />
              </div>
            </div>
            <div>
              <p className="mono-label mb-3">BACKEND</p>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="Node.js" />
                <TechBadge tech="express" />
                <TechBadge tech="Python" />
              </div>
            </div>
            <div>
              <p className="mono-label mb-3">TOOLS & PLATFORMS</p>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="Git" />
                <TechBadge tech="Vite" />
                <TechBadge tech="Webpack" />
                <TechBadge tech="Docker" />
              </div>
            </div>
            <div>
              <p className="mono-label mb-3">DATABASES</p>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="MongoDB" />
                <TechBadge tech="PostgreSQL" />
                <TechBadge tech="Redis" />
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="heading-3 mb-4">Beyond Code</h2>
          <p className="body-base">
            When I'm not coding, I enjoy exploring new technologies and staying
            updated with the latest developments in web technology. I believe in
            continuous learning and regularly challenge myself with new
            frameworks and programming paradigms.
          </p>
        </section>

        <section className="card-glow text-center">
          <h2 className="heading-3 mb-4">Let's Connect</h2>
          <p className="body-base mb-6">
            I'm always interested in new challenges and opportunities to create
            something amazing. Whether you have a project idea, want to
            collaborate, or just want to chat about technology, feel free to
            reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hankiou.github.io/cv/"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my detailed CV
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="mailto:enzogueny30@gmail.com"
              className="btn btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
