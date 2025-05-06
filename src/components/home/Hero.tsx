
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/rooms?search=${searchQuery}`);
  };
  
  return (
    <section className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          opacity: "0.4"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Boarding House</h1>
          <p className="text-xl mb-8">Comfortable, affordable, and well-located accommodations for students and professionals alike.</p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search by location, type, or amenities..."
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700 px-6 text-white">
              Search
            </Button>
          </form>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20" onClick={() => navigate('/rooms?type=standard')}>
              Standard Rooms
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20" onClick={() => navigate('/rooms?type=premium')}>
              Premium Rooms
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20" onClick={() => navigate('/rooms?type=luxury')}>
              Luxury Rooms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
