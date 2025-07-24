import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Skotleaf Healthcare",
    category: "Pharmaceutical",
    description: "Modern website for a pharmaceutical company with product catalog and inquiry system",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    link: "https://skotleafhealthcare.in/"
  },
  {
    id: 2,
    title: "SR Printers",
    category: "Printing Services",
    description: "Professional website for a printing press showcasing their services and portfolio",
    image: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?w=600&h=400&fit=crop",
    link: "https://srprinters.co.in/"
  },
  {
    id: 3,
    title: "Rajdarbar Resort",
    category: "Hospitality",
    description: "Elegant website for a hotel and resort with booking functionality and virtual tours",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    link: "https://rajdarbarresort.in/"
  },
  {
    id: 4,
    title: "4GS Educational NGO",
    category: "Education",
    description: "Impactful website for an educational NGO showcasing their programs and initiatives",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    link: "https://4gs.4gs.in/home/"
  }
];

const categories = ["All", "Pharmaceutical", "Printing Services", "Hospitality", "Education"];

export function SimplePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Portfolio Test</h1>
      
      {/* Category Buttons */}
      <div className="text-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              console.log('Button clicked:', category);
              setSelectedCategory(category);
            }}
            className={`mx-2 px-4 py-2 rounded border ${
              selectedCategory === category 
                ? "bg-blue-500 text-white" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Debug Info */}
      <div className="text-center mb-4 text-sm text-gray-600">
        Selected: "{selectedCategory}" | Showing: {filteredItems.length} of {portfolioItems.length} items
      </div>
      
      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded mb-4" 
            />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Category: {item.category}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              Visit Website →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 