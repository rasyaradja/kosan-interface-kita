
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

// Mock data for rooms
const allRooms = [
  {
    id: 1,
    title: "Standard Room - Central Jakarta",
    type: "Standard",
    location: "Central Jakarta",
    price: 1500000,
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Shared Bathroom"]
  },
  {
    id: 2,
    title: "Premium Room - South Jakarta",
    type: "Premium",
    location: "South Jakarta",
    price: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Private Bathroom", "Wardrobe"]
  },
  {
    id: 3,
    title: "Luxury Room - West Jakarta",
    type: "Luxury",
    location: "West Jakarta",
    price: 3500000,
    imageUrl: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Private Bathroom", "Wardrobe", "TV", "Refrigerator"]
  },
  {
    id: 4,
    title: "Standard Room - East Jakarta",
    type: "Standard",
    location: "East Jakarta",
    price: 1300000,
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Shared Bathroom"]
  },
  {
    id: 5,
    title: "Premium Room - North Jakarta",
    type: "Premium",
    location: "North Jakarta",
    price: 2200000,
    imageUrl: "https://images.unsplash.com/photo-1536399646555-27b982ead29b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Private Bathroom", "Wardrobe"]
  },
  {
    id: 6,
    title: "Luxury Room - Central Jakarta",
    type: "Luxury",
    location: "Central Jakarta",
    price: 3800000,
    imageUrl: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Private Bathroom", "Wardrobe", "TV", "Refrigerator", "Balcony"]
  },
  {
    id: 7,
    title: "Shared Room - South Jakarta",
    type: "Shared",
    location: "South Jakarta",
    price: 900000,
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Shared Bathroom", "Shared Kitchen"]
  },
  {
    id: 8,
    title: "Standard Room - West Jakarta",
    type: "Standard",
    location: "West Jakarta",
    price: 1400000,
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Wi-Fi", "AC", "Shared Bathroom"]
  }
];

// Format price to IDR
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Types for filters
type LocationFilter = string[];
type RoomTypeFilter = string[];
type PriceRangeFilter = [number, number];
type AmenityFilter = string[];

const Rooms = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(allRooms);
  
  // Filter states
  const [locationFilter, setLocationFilter] = useState<LocationFilter>([]);
  const [roomTypeFilter, setRoomTypeFilter] = useState<RoomTypeFilter>([]);
  const [priceRange, setPriceRange] = useState<PriceRangeFilter>([500000, 5000000]);
  const [amenityFilter, setAmenityFilter] = useState<AmenityFilter>([]);
  
  // Get all unique locations
  const locations = [...new Set(allRooms.map(room => room.location))];
  
  // Get all unique room types
  const roomTypes = [...new Set(allRooms.map(room => room.type))];
  
  // Get all unique amenities
  const amenities = [...new Set(allRooms.flatMap(room => room.features))];
  
  // Parse URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const typeParam = searchParams.get('type');
    const searchParam = searchParams.get('search');
    
    if (typeParam) {
      setRoomTypeFilter([typeParam]);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search]);
  
  // Filter rooms based on all filters
  useEffect(() => {
    let result = allRooms;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(room => 
        room.title.toLowerCase().includes(query) || 
        room.location.toLowerCase().includes(query) || 
        room.type.toLowerCase().includes(query) ||
        room.features.some(feature => feature.toLowerCase().includes(query))
      );
    }
    
    // Filter by location
    if (locationFilter.length > 0) {
      result = result.filter(room => locationFilter.includes(room.location));
    }
    
    // Filter by room type
    if (roomTypeFilter.length > 0) {
      result = result.filter(room => roomTypeFilter.includes(room.type));
    }
    
    // Filter by price range
    result = result.filter(room => room.price >= priceRange[0] && room.price <= priceRange[1]);
    
    // Filter by amenities
    if (amenityFilter.length > 0) {
      result = result.filter(room => 
        amenityFilter.every(amenity => room.features.includes(amenity))
      );
    }
    
    setFilteredRooms(result);
  }, [searchQuery, locationFilter, roomTypeFilter, priceRange, amenityFilter]);
  
  // Toggle location filter
  const toggleLocationFilter = (loc: string) => {
    setLocationFilter(prev => 
      prev.includes(loc) 
        ? prev.filter(l => l !== loc) 
        : [...prev, loc]
    );
  };
  
  // Toggle room type filter
  const toggleRoomTypeFilter = (type: string) => {
    setRoomTypeFilter(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };
  
  // Toggle amenity filter
  const toggleAmenityFilter = (amenity: string) => {
    setAmenityFilter(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity) 
        : [...prev, amenity]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setLocationFilter([]);
    setRoomTypeFilter([]);
    setPriceRange([500000, 5000000]);
    setAmenityFilter([]);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-teal-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Find Your Ideal Room</h1>
            <p className="text-lg max-w-3xl">
              Browse our selection of high-quality boarding rooms across Jakarta. Use the filters to find the perfect match for your needs and budget.
            </p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search rooms..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button onClick={resetFilters} variant="outline">
                Reset Filters
              </Button>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  
                  {/* Location Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Location</h4>
                    {locations.map(loc => (
                      <div key={loc} className="flex items-center space-x-2 mb-2">
                        <Checkbox 
                          id={`location-${loc}`} 
                          checked={locationFilter.includes(loc)}
                          onCheckedChange={() => toggleLocationFilter(loc)}
                        />
                        <label htmlFor={`location-${loc}`} className="text-sm">
                          {loc}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  {/* Room Type Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Room Type</h4>
                    {roomTypes.map(type => (
                      <div key={type} className="flex items-center space-x-2 mb-2">
                        <Checkbox 
                          id={`type-${type}`} 
                          checked={roomTypeFilter.includes(type)}
                          onCheckedChange={() => toggleRoomTypeFilter(type)}
                        />
                        <label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={[500000, 5000000]}
                        min={500000}
                        max={5000000}
                        step={100000}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Amenities Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Amenities</h4>
                    {amenities.map(amenity => (
                      <div key={amenity} className="flex items-center space-x-2 mb-2">
                        <Checkbox 
                          id={`amenity-${amenity}`} 
                          checked={amenityFilter.includes(amenity)}
                          onCheckedChange={() => toggleAmenityFilter(amenity)}
                        />
                        <label htmlFor={`amenity-${amenity}`} className="text-sm">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Room Listing */}
              <div className="lg:w-3/4">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    {filteredRooms.length} Room{filteredRooms.length !== 1 ? 's' : ''} Found
                  </h3>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm text-gray-600">Sort by:</span>
                    <select className="border border-gray-300 rounded-md text-sm p-2">
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                      <option>Newest</option>
                    </select>
                  </div>
                </div>
                
                {filteredRooms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredRooms.map(room => (
                      <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <img 
                            src={room.imageUrl} 
                            alt={room.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 text-xs font-semibold rounded">
                            {room.type}
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
                          <p className="text-gray-600 mb-2">{room.location}</p>
                          <p className="text-teal-600 font-bold mb-3">{formatPrice(room.price)}/month</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {room.features.map((feature, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex justify-between">
                            <Link to={`/rooms/${room.id}`}>
                              <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50">
                                View Details
                              </Button>
                            </Link>
                            <Button className="bg-teal-600 hover:bg-teal-700">Book Now</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">No Rooms Found</h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any rooms matching your current filters. Try adjusting your search criteria.
                    </p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
                
                {/* Pagination */}
                {filteredRooms.length > 0 && (
                  <div className="mt-8 flex justify-center">
                    <nav className="flex items-center space-x-2">
                      <Button variant="outline" className="text-gray-600" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" className="bg-teal-50 text-teal-600 border-teal-600">1</Button>
                      <Button variant="outline" className="text-gray-600">2</Button>
                      <Button variant="outline" className="text-gray-600">3</Button>
                      <Button variant="outline" className="text-gray-600">
                        Next
                      </Button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rooms;
