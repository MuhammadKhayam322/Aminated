"use client";

import Link from "next/link";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">UI/UX Design Services</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Crafting beautiful, intuitive, and user-focused experiences for mobile and web.
        </p>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our UI/UX Design Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "User Research",
              desc: "We conduct interviews, surveys, and usability tests to understand your users’ needs.",
            },
            {
              title: "Wireframing & Prototyping",
              desc: "Low and high-fidelity wireframes and clickable prototypes using Figma or Adobe XD.",
            },
            {
              title: "Interaction Design",
              desc: "Smooth, intuitive interactions that delight and guide users through your product.",
            },
            {
              title: "Mobile & Web UI",
              desc: "Modern, pixel-perfect interfaces for responsive websites and mobile apps.",
            },
            {
              title: "Accessibility",
              desc: "We follow WCAG standards to make products usable by everyone, including people with disabilities.",
            },
            {
              title: "Design Systems",
              desc: "Reusable components and guidelines that make your design scalable and consistent.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              "Discover – Understand business goals and user needs.",
              "Define – Translate research into design requirements.",
              "Design – Build wireframes, mockups, and prototypes.",
              "Deliver – Final handoff and development support.",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-4 rounded shadow-sm hover:bg-gray-100"
              >
                <h4 className="text-lg font-semibold mb-2">Step {i + 1}</h4>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-rose-600 py-16 text-white text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Stunning Design?</h2>
        <p className="mb-6">
          Let&apos;s turn your idea into a product your users will love.
        </p>
        <Link href="/get-in-touch">
          <span className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Get in Touch
          </span>
        </Link>
        <div className="mt-4">
          <Link href="/">
            <span className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
              Back to Home
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}


