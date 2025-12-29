import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Award, Wrench } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const sliderImages = [
  { src: '/images/slideout_open_picture.jpg', alt: 'Professional slideout window installation in Rockland County' },
  { src: '/images/2casement_picture.jpg', alt: 'Casement window replacement in Westchester NY' },
  { src: '/images/4section_bow.jpg', alt: 'Bow window installation by R&J Window Company' },
  { src: '/images/3pane_slideout.jpg', alt: '3 pane slideout window replacement' },
  { src: '/images/5section_bay.jpg', alt: 'Bay window installation Rockland County NY' },
];


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-700 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professionally Installed Replacement Windows and Doors
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageSlider images={sliderImages} />
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                Since 1978 we have been installing windows and doors in all shapes and varieties 
                in houses and apartments throughout Rockland and Westchester County. Our staff 
                are highly skilled and fully insured meaning your installation is in good hands.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We have nothing but happy customers who call us back again for more work and 
                recommend us to their friends and family.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                If you or someone you know is looking for high quality windows, professionally 
                installed, please do not hesitate to contact us with any questions.
              </p>

              <div className="text-center pt-4">
                <p className="text-xl font-bold text-gray-700 mb-6">
                  How can we help you today?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/bay-bow-windows"
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    Replacement Windows
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-accent flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              Specializing in:
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-gray-600">
              {[
                'Replacement Windows',
                'Double Hungs',
                'Casements',
                'Bows',
                'Entry Doors',
                'Storm Windows',
                'Gutters',
                'Leaders-Trim',
                'Facia',
              ].map((service) => (
                <span
                  key={service}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm md:text-base font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'Highly Skilled',
                description: 'Expert craftsmen with decades of experience in window and door installation.',
              },
              {
                icon: Shield,
                title: 'Fully Licensed',
                description: 'NY State License #13VH05500600. Fully compliant with all regulations.',
              },
              {
                icon: Award,
                title: 'Insured',
                description: 'Complete insurance coverage for your peace of mind during every project.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for Your Free Estimate?
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Contact us today and let us help you transform your home with beautiful new windows and doors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:845-268-0165"
              className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              845-268-0165
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
