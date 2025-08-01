function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-neutral-500 mb-8">
        Last updated: January 2025
      </p>

      <div className="space-y-6 text-neutral-300">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to hankiou.com. This Privacy Policy explains how we collect,
            use, and protect your information when you visit our website and use
            our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            2. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Usage data (pages visited, time spent, browser type)</li>
            <li>IP address and general location data</li>
            <li>
              Information collected through cookies and similar technologies
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <p>We use collected information to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Analyze website traffic and usage patterns</li>
            <li>Display relevant advertisements through Google AdSense</li>
            <li>Ensure website security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Google AdSense</h2>
          <p>
            We use Google AdSense to display advertisements on our website.
            Google AdSense uses cookies to serve ads based on your visit to our
            site and other sites on the Internet. You may opt out of
            personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-blue-400 hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience.
            Cookies are small text files stored on your device. You can control
            cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            through the contact information provided on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
