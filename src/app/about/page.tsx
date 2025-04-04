import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
              About Google Translate
            </h1>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Google Translate is a multilingual neural machine translation
              service developed by Google to translate text, documents, and
              websites from one language to another. It offers a web interface,
              mobile apps for Android and iOS, and an API that helps developers
              build browser extensions and software applications.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Launched in April 2006 as a statistical machine translation
              service, Google Translate now uses a neural machine translation
              engine called Google Neural Machine Translation (GNMT), which
              translates whole sentences at a time, rather than piece by piece.
              It supports over 100 languages at various levels and serves over
              500 million people daily.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Development Status
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am still working on connecting databases and enhancing
              youth-focused features. This application is currently in
              development and offers a subset of Google Translate&apos;s
              functionality.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How to Use This Application
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To use this application, you need to provide your own Google
                Gemini API key. You can enter your API key by clicking the
                Settings button <Settings className="inline h-4 w-4" /> in the
                home page, which will open a sidebar where you can securely save
                your key. You can go to docs of github repo to learn more about
                the application.
                <Link
                  href="https://github.com/Sahil9214/Google-Translate-Clone"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Google Translate Clone Github Repo
                </Link>
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your API key is stored securely in your browser cookies and is
              never sent to our servers. This approach ensures your key remains
              private while allowing you to access the powerful translation
              capabilities of the Gemini API.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Text translation between multiple languages</li>
              <li>User-friendly interface inspired by Google&apos;s design</li>
              <li>Secure API key management</li>
              <li>Responsive design for desktop and mobile devices</li>
              <li>Privacy-focused approach with local data storage</li>
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
