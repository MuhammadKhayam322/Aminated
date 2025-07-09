// app/explore/page.tsx
import Image from "next/image";

const classes = [
  {
    title: "Photography Mastery",
    description: "Master the art of photography with hands-on guidance.",
    image: "/ptgpy.png",
  },
  {
    title: "Web Development",
    description: "Learn React, Next.js, and Tailwind CSS from scratch.",
    image: "/dev.png",
  },
  {
    title: "Music Production",
    description: "Create beats and learn music theory like a pro.",
    image: "/music.png",
  },
  {
    title: "Cooking Essentials",
    description: "Become a home chef with top-notch culinary skills.",
    image: "/cooking.png",
  },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Explore Classes</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {classes.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
