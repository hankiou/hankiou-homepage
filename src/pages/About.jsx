function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <div className="space-y-6 text-neutral-300">
        <section>
          <h2 className="text-xl font-semibold mb-3">Hello, I'm Enzo GUENY</h2>
          <p>
            I'm a passionate full-stack developer from France with a love for
            creating engaging web applications and games. I always enjoyed video
            games and this idea got me into coding and learning computer science
            at university. Today I am still passionate about video games and
            esports.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">My Philosophy</h2>
          <p>
            I believe that technology should be accessible, intuitive, and fun.
            I enjoy video games a lot and I like creating entertainment for
            everyone. Whether I'm developing an educational game or a web
            application, I focus on creating experiences that users genuinely
            enjoy. Clean code, thoughtful design, and user feedback are the
            pillars of my development process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Current Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200">
                GeoWarmup
              </h3>
              <p>
                An interactive geography learning platform that makes studying
                world locations engaging and fun. Players can test their
                knowledge of countries, and tryhard their keyboard typing
                skills.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-200">
                Dofus: Les Gardiens de Donjons
              </h3>
              <p>
                A simple browser-based game inspired by the Dofus universe in
                which you have to remember and write down the name of every boss
                in the game.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Technical Expertise</h2>
          <p>
            My skill set spans both front-end and back-end development, allowing
            me to build complete solutions from concept to deployment:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>
              <strong>Frontend:</strong> React, JavaScript/TypeScript, HTML5,
              CSS3, Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express, Python, RESTful APIs
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, Vite, Webpack, Docker,
              CI/CD
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, PostgreSQL, Redis
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Beyond Code</h2>
          <p>
            When I'm not coding, I enjoy exploring new technologies and staying
            updated with the latest developments in web technology. I believe in
            continuous learning and regularly challenge myself with new
            frameworks and programming paradigms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Let's Connect</h2>
          <p>
            I'm always interested in new challenges and opportunities to create
            something amazing. Whether you have a project idea, want to
            collaborate, or just want to chat about technology, feel free to
            reach out.
          </p>
          <div className="mt-4">
            <a
              href="https://hankiou.github.io/cv/"
              className="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              View my detailed CV <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
