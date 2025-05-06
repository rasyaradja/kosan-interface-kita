
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for featured listings
const featuredRooms = [
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

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Rooms</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most popular boarding rooms, hand-picked for quality, comfort, and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRooms.map((room) => (
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
        
        <div className="text-center mt-12">
          <Link to="/rooms">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
