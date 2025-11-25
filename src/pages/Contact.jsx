import { Send } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-blueprint-fade py-12 px-8 rounded-lg mb-12 text-center">
        <h1 className="heading-1 mb-4">Contact</h1>
        <p className="mono-label">LET'S BUILD SOMETHING TOGETHER</p>
      </div>

      <div className="space-y-8">
        <section className="card">
          <p className="body-large text-center">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-3 mb-4">Get in Touch</h2>
          <p className="body-base">
            Feel free to reach out if you have any questions about my projects,
            want to collaborate, or just want to say hello!
          </p>
        </section>

        <section className="card-accent">
          <h2 className="heading-3 mb-4">Professional Inquiries</h2>
          <p className="body-base mb-4">
            For professional opportunities, project collaborations, or freelance
            work, please don't hesitate to contact me. I'm particularly
            interested in:
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="tag">Web Applications</span>
            <span className="tag">Game Development</span>
            <span className="tag">Open Source</span>
            <span className="tag">Technical Consulting</span>
          </div>
        </section>

        <section className="card-glow text-center">
          <h2 className="heading-3 mb-4">Ready to Connect?</h2>
          <p className="body-base mb-6">
            Whether you're looking to start a new project or just want to chat
            about technology, I'd love to hear from you.
          </p>
          <a
            href="mailto:enzogueny30@gmail.com"
            className="btn btn-primary animate-pulse-glow inline-flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </a>
        </section>

        <section className="card">
          <div className="flex items-start gap-4">
            <div className="text-accent text-2xl">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h2 className="heading-4 mb-2">Response Time</h2>
              <p className="body-base">
                I typically respond to inquiries within 48 hours. For urgent
                matters, please mention it in your message.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="heading-3 mb-4">Additional Resources</h2>
          <div className="space-y-3">
            <a
              href="https://hankiou.github.io/cv/"
              className="inline-flex items-center gap-2 text-accent hover:underline body-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-file-lines"></i>
              View my professional CV
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
