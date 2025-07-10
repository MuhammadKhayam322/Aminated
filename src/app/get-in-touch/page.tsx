import { Link } from "lucide-react";

export default function GetInTouchPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Let’s Start a Project</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto">
          Whether you’re launching a startup or growing a business, our team is ready to help you build a high-impact web solution.
        </p>
      </section>

      {/* Project Inquiry Section */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Tell Us About Your Project</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Project Summary</label>
            <textarea
              rows={5}
              placeholder="Tell us about your idea, timeline, and goals..."
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-300"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </section>

      {/* Extra Info */}
      <section className="bg-gray-100 py-12 text-center px-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Prefer Email?</h3>
        <p className="text-gray-700">
          You can also reach us directly at{" "}
          <Link
            href="mailto:projects@example.com"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            projects@example.com
          </Link>
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

