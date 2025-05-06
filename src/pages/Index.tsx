
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedListings from "@/components/home/FeaturedListings";
import AboutSection from "@/components/home/AboutSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedListings />
        <AboutSection />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Residents Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our residents have to say about their experience with KosanKita.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                      alt="Resident" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Siti Nurhayati</h4>
                    <p className="text-gray-600 text-sm">Student at UI</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I've been staying at KosanKita for over 2 years now. The location is perfect for my university, and the facilities are always well-maintained. The staff is friendly and responsive."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                      alt="Resident" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Budi Santoso</h4>
                    <p className="text-gray-600 text-sm">Young Professional</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "After trying several other boarding houses, I finally found KosanKita. The premium room I'm renting has everything I need, and the security makes me feel safe at all times."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" 
                      alt="Resident" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Maya Wijaya</h4>
                    <p className="text-gray-600 text-sm">Fresh Graduate</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The community at KosanKita is amazing. I've made friends with many other residents, and the common areas are great for socializing. The WiFi is fast and reliable too!"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Home?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Browse our available rooms and find the perfect place to stay. We offer flexible booking options to suit your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/rooms">
                <Button className="bg-white text-teal-600 hover:bg-gray-100">
                  Browse Rooms
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-teal-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
