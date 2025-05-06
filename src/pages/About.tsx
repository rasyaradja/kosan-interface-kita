
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
              opacity: "0.4"
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">About KosanKita</h1>
              <p className="text-xl mb-0">
                Learn about our story, mission, and commitment to providing quality boarding house accommodations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  KosanKita was founded in 2010 by a group of passionate real estate professionals who recognized the need for quality, affordable housing for students and young professionals in Jakarta. What started as a single boarding house with 10 rooms has now grown into a network of over 50 properties across the city.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founders, having experienced the challenges of finding good accommodation during their own university days, were committed to creating living spaces that were not just affordable, but also comfortable, safe, and conducive to personal growth and community building.
                </p>
                <p className="text-gray-600">
                  Over the years, we've continuously refined our approach, incorporated feedback from our residents, and expanded our services to meet the evolving needs of our community. Today, KosanKita stands as a trusted name in the boarding house industry in Indonesia.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our Story" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-lg w-40 h-40 flex flex-col justify-center items-center">
                  <p className="font-bold text-xl">Est.</p>
                  <p className="font-bold text-2xl">2010</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At KosanKita, we're driven by a clear mission and guided by strong values that shape everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-teal-100 flex items-center justify-center rounded-full mb-4">
                  <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide affordable, comfortable, and well-managed living spaces that foster a sense of community and support the personal and professional growth of our residents.
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-teal-100 flex items-center justify-center rounded-full mb-4">
                  <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of boarding houses in Indonesia, known for quality, innovation, and creating vibrant communities where residents thrive.
                </p>
              </div>
              
              {/* Values */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-teal-100 flex items-center justify-center rounded-full mb-4">
                  <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Quality & Comfort in everything we provide</li>
                  <li>• Community & Connection among our residents</li>
                  <li>• Safety & Security as our top priority</li>
                  <li>• Integrity & Transparency in all our dealings</li>
                  <li>• Innovation & Improvement in our services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The dedicated professionals behind KosanKita who work tirelessly to ensure the best experience for our residents.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Budi Santoso</h3>
                <p className="text-teal-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years in real estate, Budi leads our vision and strategic direction.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Siti Nurhayati</h3>
                <p className="text-teal-600 mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Siti ensures smooth day-to-day operations across all our properties.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Ahmad Rizki</h3>
                <p className="text-teal-600 mb-3">Property Manager</p>
                <p className="text-gray-600 text-sm">
                  Ahmad oversees property maintenance and ensures the highest standards.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Maya Wijaya</h3>
                <p className="text-teal-600 mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Maya handles resident concerns and ensures a positive living experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-xl">Properties</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-xl">Rooms</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">5000+</p>
                <p className="text-xl">Happy Residents</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-xl">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Browse our available rooms or get in touch with our team to find the perfect accommodation for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/rooms">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Browse Rooms
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
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

export default About;
