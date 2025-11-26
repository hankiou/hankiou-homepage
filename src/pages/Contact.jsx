import { Send } from "lucide-react";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-blueprint-fade py-12 px-8 rounded-lg mb-12 text-center">
        <h1 className="heading-1 mb-4">Contact</h1>
        <p className="mono-label">LET'S BUILD SOMETHING TOGETHER</p>
      </div>

      <div className="space-y-8">
        <p className="body-large text-center">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <section className="card">
          <h2 className="heading-3 mb-4">Socials</h2>
          <div className="flex gap-3 justify-center">
            <SocialIcon url="https://www.linkedin.com/in/enzo-gueny-3b16b9186/" />
            <SocialIcon url="https://github.com/hankiou" />
          </div>
        </section>

        <section className="card-glow text-center">
          <h2 className="heading-3 mb-4">Ready to Connect?</h2>
          <p className="body-base mb-6">
            Whether you're looking to start a new project or inviting me to join
            your team as a consultant, I'd love to hear from you.
          </p>
          <a
            href="mailto:enzogueny30@gmail.com"
            className="btn btn-primary animate-pulse-glow inline-flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}

export default Contact;
