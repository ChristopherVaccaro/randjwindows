import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Shield, Award, Phone, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Highly Skilled',
      description: 'Our team brings decades of combined experience to every installation.',
    },
    {
      icon: Shield,
      title: 'Fully Licensed',
      description: 'NY State License #13VH05500600',
    },
    {
      icon: Award,
      title: 'Insured',
      description: 'Complete coverage for your peace of mind.',
    },
  ];

  const benefits = [
    'Free window and door estimates',
    'High quality products',
    'Expert installation',
    'References available upon request',
    'Serving Rockland & Westchester since 1978',
    'No job too small or too large',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About R&J Window Company
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  R&J Window Company has been in business since 1978, specializing in all types 
                  of window and door replacement work. From a couple windows to hundreds of 
                  windows, no job is too small or too large.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Staying up to date with the current regulations and building laws, we are 
                  experts at making sure you get the quality installation your house or 
                  apartment deserves.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Is your home ready for some new replacement windows? Give us a call and take 
                  advantage of your free window or door estimate. We will help you choose the 
                  highest quality products for your house and show you exactly what is available, 
                  and a full line of choices for you to decide from.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  If you don't see what you like, let us know, and we will do our best to find 
                  it for you. Having doubts? We gladly provide references upon request.
                </p>
              </div>

              {/* Benefits List */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Why Choose Us?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Features */}
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-4">Get Your Free Estimate</h3>
                <p className="text-gray-300 mb-4">
                  Ready to upgrade your windows or doors?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone size={18} />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
