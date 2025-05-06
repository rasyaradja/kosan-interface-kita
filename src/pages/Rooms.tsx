
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
    imageUrl: "data:image/jpeg;base64,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",
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
