import Link from "next/link";

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Web Development</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          We build fast, responsive, and modern websites tailored to your
          business needs.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Responsive Design",
              desc: "Websites that work perfectly across mobile, tablet, and desktop devices.",
            },
            {
              title: "SEO Optimization",
              desc: "Improve visibility and rankings with optimized structure and content.",
            },
            {
              title: "Fast Performance",
              desc: "We build lightweight and performant websites using best practices.",
            },
            {
              title: "CMS Integration",
              desc: "We can integrate WordPress, Strapi, or any headless CMS.",
            },
            {
              title: "Custom Web Apps",
              desc: "From dashboards to SaaS — we develop full-stack custom web applications.",
            },
            {
              title: "E-Commerce Solutions",
              desc: "Sell online with Shopify, WooCommerce, or custom e-commerce platforms.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Tech Stack We Use</h2>
          <p className="text-gray-700 mb-10">
            Here are some tools and frameworks we work with:
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-800">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Strapi",
              "Sanity",
              "WordPress",
              "Firebase",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Need a modern website?
        </h2>
        <p className="mb-6">
          Let our expert web developers bring your vision to life.
        </p>
          <div className="gap-4">
        <Link
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Contact
        </Link>
         <div className="mt-4">
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Back to Home
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
