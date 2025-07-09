export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          Have questions? Want to start a project? Reach out to our team today.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Office</h2>
            <p className="text-gray-700 mb-1">123 Developer Street</p>
            <p className="text-gray-700 mb-1">Tech City, 56789</p>
            <p className="text-gray-700 mb-1">Email: info@example.com</p>
            <p className="text-gray-700">Phone: +1 234 567 890</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-semibold text-lg">
                How soon can you start on a project?
              </h3>
              <p className="text-gray-700">
                We typically start new projects within 1–2 weeks of initial
                discussion.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">
                Do you offer maintenance services?
              </h3>
              <p className="text-gray-700">
                Yes! We provide monthly and yearly maintenance contracts for
                mobile and web apps.
              </p>
            </li>
          </ul>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-12">
            <a
              href="/"
              className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded border border-rose-600 hover:bg-rose-50 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

