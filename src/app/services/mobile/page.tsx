import Link from "next/link";

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mobile App Development</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Build fast, scalable, and beautiful mobile apps for iOS and Android with modern technologies.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Key Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Cross-Platform Apps",
              desc: "Using React Native or Flutter, we deliver apps that work smoothly on both iOS and Android.",
            },
            {
              title: "Custom UI/UX",
              desc: "We design user-friendly interfaces with attention to detail and interaction design.",
            },
            {
              title: "Backend Integration",
              desc: "Our apps are fully integrated with your backend systems using REST or GraphQL APIs.",
            },
            {
              title: "App Store Deployment",
              desc: "We handle app publishing, testing, and submission to Apple App Store and Google Play.",
            },
            {
              title: "Push Notifications",
              desc: "We implement real-time communication using Firebase or OneSignal for better engagement.",
            },
            {
              title: "Maintenance & Support",
              desc: "We provide post-launch updates, bug fixes, and ongoing support.",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to launch your app?</h2>
        <p className="mb-6">Let’s build something amazing together. Get in touch with our mobile team today.</p>
        <Link
          href="/get-in-touch"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
        <div className="mt-4">
        <Link
          href="/"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>
        </div>
      </section>
    </div>
  );
}

