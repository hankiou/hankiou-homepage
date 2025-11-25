function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-blueprint-fade py-12 px-8 rounded-lg mb-12">
        <h1 className="heading-1 mb-4 text-center">Privacy Policy</h1>
        <p className="mono-label text-center">Last Updated: January 2025</p>
      </div>

      <div className="space-y-6">
        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">01.</span> Introduction
          </h2>
          <p className="body-base">
            Welcome to hankiou.com. This Privacy Policy explains how we collect,
            use, and protect your information when you visit our website and use
            our services.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">02.</span> Information We Collect
          </h2>
          <p className="body-base mb-3">
            We may collect the following types of information:
          </p>
          <ul className="space-y-2">
            <li className="body-base flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>Usage data (pages visited, time spent, browser type)</span>
            </li>
            <li className="body-base flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>IP address and general location data</span>
            </li>
            <li className="body-base flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>
                Information collected through cookies and similar technologies
              </span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">03.</span> How We Use Your Information
          </h2>
          <p className="body-base mb-3">We use collected information to:</p>
          <ul className="space-y-2">
            <li className="body-base flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>Analyze website traffic and usage patterns</span>
            </li>
            <li className="body-base flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>Display relevant advertisements through Google AdSense</span>
            </li>
            <li className="body-base flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>Ensure website security and prevent fraud</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">04.</span> Google AdSense
          </h2>
          <p className="body-base">
            We use Google AdSense to display advertisements on our website.
            Google AdSense uses cookies to serve ads based on your visit to our
            site and other sites on the Internet. You may opt out of
            personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">05.</span> Cookies
          </h2>
          <p className="body-base">
            Our website uses cookies to enhance your browsing experience.
            Cookies are small text files stored on your device. You can control
            cookie settings through your browser preferences.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">06.</span> Data Security
          </h2>
          <p className="body-base">
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">07.</span> Third-Party Links
          </h2>
          <p className="body-base">
            Our website contains links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">08.</span> Children's Privacy
          </h2>
          <p className="body-base">
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">09.</span> Contact Us
          </h2>
          <p className="body-base">
            If you have questions about this Privacy Policy, please contact us
            through the contact information provided on our website.
          </p>
        </section>

        <section className="card">
          <h2 className="heading-4 mb-3">
            <span className="mono-accent">10.</span> Changes to This Policy
          </h2>
          <p className="body-base">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
