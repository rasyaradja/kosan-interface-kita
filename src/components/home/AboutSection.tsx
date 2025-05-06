
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="KosanKita Building" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg w-40 h-40 flex flex-col justify-center items-center">
              <p className="font-bold text-xl">10+</p>
              <p className="text-center">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About KosanKita</h2>
            <p className="text-gray-600 mb-6">
              KosanKita is a leading provider of quality boarding houses (kosan) in Jakarta, serving students and young professionals since 2010. We pride ourselves on offering comfortable, clean, and affordable accommodations in strategic locations across the city.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to create a home away from home for our residents, with a focus on community, safety, and convenience. We maintain high standards for all our properties and ensure that each boarding house has the amenities that modern residents need.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-2xl text-teal-600">50+</p>
                <p className="text-gray-700">Locations</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-2xl text-teal-600">1000+</p>
                <p className="text-gray-700">Rooms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-2xl text-teal-600">5000+</p>
                <p className="text-gray-700">Happy Residents</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-2xl text-teal-600">24/7</p>
                <p className="text-gray-700">Support</p>
              </div>
            </div>
            
            <Link to="/about">
              <Button className="bg-teal-600 hover:bg-teal-700">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
