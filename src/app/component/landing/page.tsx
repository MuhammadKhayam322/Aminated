// app/landing/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    image: "/clm2.png",
    title: "Climate Change: Cause and Solution",
    price: "$40.90",
  },
  {
    image: "/clm.png",
    title: "Tech for Beginners",
    price: "$19.99",
  },
  {
    image: "/ptgpy.png",
    title: "Art of Mindfulness",
    price: "$24.50",
  },
  {
    image: "/gg.png",
    title: "Modern Leadership",
    price: "$29.00",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore More Trainings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="relative w-full h-[400px]">
            <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" className="rounded" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
              <Image src="/heart.png" alt="Heart" width={40} height={40} />
              <h3 className="text-2xl font-bold mt-4">{card.title}</h3>
              <p className="text-xl mt-1">{card.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
