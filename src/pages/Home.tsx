import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Lightbulb, GraduationCap, Users, Calendar, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="inline-block gradient-text">Bridging Academia</span>
              <br />
              <span className="inline-block">and Industry</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              A global research and innovation hub dedicated to democratizing research,
              supporting innovation, and training the next generation of researchers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                to="/apply"
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center group"
              >
                Join Our Program 
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/research"
                className="text-gray-600 hover:text-red-600 px-8 py-4 rounded-xl font-medium transition-colors flex items-center group"
              >
                Explore Research
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
                <div className="text-gray-600">Research Papers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600">Expert Researchers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Global Partners</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BookOpen className="h-8 w-8 text-red-600" />}
              title="Publication Support"
              description="Support for publications in UGC, Web of Science, and Scopus journals"
            />
            <ServiceCard
              icon={<Lightbulb className="h-8 w-8 text-orange-500" />}
              title="Patent & Research"
              description="Assistance with patent filings and research paper submissions"
            />
            <ServiceCard
              icon={<GraduationCap className="h-8 w-8 text-red-600" />}
              title="Training Programs"
              description="Online programs in AI/ML, Blockchain, and IoT"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Events & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard
              title="Hackathons"
              description="Join our coding competitions and showcase your skills"
              icon={<Users className="h-6 w-6" />}
            />
            <EventCard
              title="Faculty Development"
              description="Programs designed to enhance teaching and research capabilities"
              icon={<Calendar className="h-6 w-6" />}
            />
            <EventCard
              title="Research Bootcamps"
              description="Intensive training sessions for aspiring researchers"
              icon={<Microscope className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Online Program Section */}
      <section className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Interns & Research Program</h2>
            <p className="text-xl text-gray-600">Join our comprehensive research training program and kickstart your career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProgramFeature
              title="Personalized Dashboard"
              description="Track your progress and manage your research projects"
            />
            <ProgramFeature
              title="Expert Mentorship"
              description="Get guidance from industry experts and researchers"
            />
            <ProgramFeature
              title="Certification"
              description="Earn certificates upon completion of milestones"
            />
            <ProgramFeature
              title="Project Portfolio"
              description="Build a portfolio of research projects and publications"
            />
          </div>
          <motion.div 
            className="text-center mt-12"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/apply"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-xl font-medium hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Start Your Journey <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EventCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-red-100 p-2 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProgramFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;