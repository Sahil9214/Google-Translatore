import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-gray-200 flex items-center px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Back</span>
        </Link>
        <div className="mx-auto flex items-center">
          <div className="flex items-center">
            <span className="text-[#4285F4] font-medium text-xl">G</span>
            <span className="text-[#EA4335] font-medium text-xl">o</span>
            <span className="text-[#FBBC05] font-medium text-xl">o</span>
            <span className="text-[#4285F4] font-medium text-xl">g</span>
            <span className="text-[#34A853] font-medium text-xl">l</span>
            <span className="text-[#EA4335] font-medium text-xl">e</span>
            <span className="text-gray-700 font-normal text-xl ml-2">
              Translate
            </span>
          </div>
        </div>
        <div className="w-[72px]"></div> {/* Spacer for alignment */}
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-8">
          <section>
            <h1 className="text-3xl font-normal text-gray-800 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This Privacy Policy describes how we collect, use, and handle your
              information when you use our Google Translate clone application.
              We take your privacy seriously and are committed to protecting
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our application is designed with privacy in mind. We collect
              minimal information necessary to provide our translation services:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>
                <strong>API Keys:</strong> When you provide your Google Gemini
                API key, it is stored locally in your browser cookies. We do not
                transmit, store, or have access to your API key on our servers.
              </li>
              <li>
                <strong>Translation Content:</strong> The text you submit for
                translation is processed using your provided API key and is not
                stored on our servers.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect anonymous usage
                statistics to improve our service, such as which features are
                most commonly used and general performance metrics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>To provide and maintain our translation service</li>
              <li>To improve and optimize our application</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your translation content is processed in real-time and is not
              stored or used for any purpose other than providing the
              translation service you requested.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We implement appropriate security measures to protect your
              information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>
                <strong>Local Storage:</strong> Your API key is stored locally
                in your browser cookies and is not accessible to us or third
                parties.
              </li>
              <li>
                <strong>Encryption:</strong> All data transmitted between your
                browser and our application is encrypted using HTTPS.
              </li>
              <li>
                <strong>No Server Storage:</strong> We do not store your
                translation content or API key on our servers.
              </li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              While we implement safeguards, no method of transmission over the
              Internet or electronic storage is 100% secure. We strive to use
              commercially acceptable means to protect your information but
              cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our application integrates with the following third-party
              services:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>
                <strong>Google Gemini API:</strong> When you use our translation
                service, your content is sent to Google&apos;s Gemini API using
                your provided API key. This transmission is subject to
                Google&apos;s privacy policy and terms of service.
              </li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We encourage you to review Google&apos;s privacy policies to
              understand how they process your data when you use their API
              through our application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>The right to access information we have about you</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to erasure of your personal information</li>
              <li>
                The right to restrict or object to processing of your
                information
              </li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Since we store minimal information and primarily use local
              storage, many of these rights can be exercised directly by
              clearing your browser cookies or adjusting your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our service is not directed to individuals under the age of 13. We
              do not knowingly collect personal information from children under
              13. If we become aware that we have collected personal information
              from a child under 13 without verification of parental consent, we
              will take steps to remove that information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date at the top of this
              policy.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>By email: [Your Contact Email]</li>
              <li>By visiting our website: [Your Website URL]</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Google Translate Clone
          </div>
          <div className="flex space-x-6">
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
