"use client";
import { useState } from "react";
import ProButton from "./ProButton"; // Adjust path if needed

const categories = [
  { label: "Trending", description: "Popular content trending across the platform." },
  { label: "Design & Style", description: "Explore the latest in fashion, interior, and graphic design." },
  { label: "Business", description: "Insights, strategies, and stories from the business world." },
  { label: "Art & Entertainment", description: "Creative expressions from music, film, and visual arts." },
  { label: "Home & Lifestyle", description: "Tips and trends for home improvement and lifestyle." },
  { label: "Music", description: "Discover new sounds, artists, and music theory." },
  { label: "Food", description: "Delicious recipes, cooking tips, and food culture." },
  { label: "Writing", description: "Improve your writing or explore stories and journalism." },
  { label: "Science & Tech", description: "The latest in science, technology, and innovation." },
];

export default function CategoryButtons() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected((prev) => (prev === label ? null : label));
  };

  const selectedCategory = categories.find((cat) => cat.label === selected);

  return (
    <div className="px-4 py-8">
      <div className="relative flex flex-row justify-center flex-wrap gap-4">
        {categories.map((category) => (
          <ProButton key={category.label} label={category.label} onClick={() => handleSelect(category.label)} />
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-8 text-center bg-gray-100 p-6 rounded-lg max-w-3xl mx-auto ">
          <h2 className="text-2xl font-bold mb-2 text-black">{selectedCategory.label}</h2>
          <p className="text-gray-700">{selectedCategory.description}</p>
        </div>
      )}
    </div>
  );
}
