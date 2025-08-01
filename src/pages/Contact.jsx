function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      
      <div className="space-y-6 text-neutral-300">
        <section>
          <p className="text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be 
            part of your visions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
          <p>
            Feel free to reach out if you have any questions about my projects, want to 
            collaborate, or just want to say hello!
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Professional Inquiries</h2>
          <p>
            For professional opportunities, project collaborations, or freelance work, please 
            don't hesitate to contact me. I'm particularly interested in:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Web application development projects</li>
            <li>Game development opportunities</li>
            <li>Open-source collaborations</li>
            <li>Technical consulting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Connect Online</h2>
          <div className="space-y-3">
            <a 
              href="https://hankiou.github.io/cv/" 
              className="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <i className="fa-solid fa-file-lines"></i>
              View my professional CV
            </a>
          </div>
        </section>

        <section className="bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Response Time</h2>
          <p>
            I typically respond to inquiries within 48 hours. For urgent matters, please mention 
            it in your message.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Contact;