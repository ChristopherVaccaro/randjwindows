import { motion } from 'framer-motion';
import { Phone, Mail, FileText, MapPin, Printer } from 'lucide-react';

const Contact = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      items: [
        { value: '845-268-0165', type: 'phone' },
        { value: '845-735-7602', type: 'phone' },
      ],
      description: 'Call us for a free estimate or to discuss your project.',
    },
    {
      icon: Printer,
      title: 'Fax',
      items: [{ value: '845-268-0165', type: 'text' }],
      description: 'Send documents via fax.',
    },
    {
      icon: Mail,
      title: 'Email',
      items: [{ value: 'rjvwindows@gmail.com', type: 'email' }],
      description: 'Email us anytime and we\'ll respond as soon as possible.',
    },
    {
      icon: FileText,
      title: 'NY State License',
      items: [{ value: '13VH05500600', type: 'text' }],
      description: 'Fully licensed and compliant with all NY State regulations.',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      items: [{ value: 'Rockland & Westchester County, NY', type: 'text' }],
      description: 'Proudly serving the Hudson Valley region since 1978.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact R&J Window Company
          </motion.h1>
          
          <motion.p
            className="text-gray-600 text-lg mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to upgrade your windows or doors? We're here to help! Reach out to us by phone or email 
            for a free estimate. Our team of experienced professionals is ready to assist you with your 
            window and door replacement needs.
          </motion.p>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">{card.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {card.items.map((item) => (
                    <p key={item.value} className="text-gray-800 font-semibold text-lg">
                      {item.type === 'phone' ? (
                        <a 
                          href={`tel:${item.value}`} 
                          className="hover:text-gray-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : item.type === 'email' ? (
                        <a 
                          href={`mailto:${item.value}`} 
                          className="hover:text-gray-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  ))}
                </div>
                
                <p className="text-gray-500 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Give us a call today for your free window or door estimate. We'll help you choose 
              the highest quality products for your home and provide expert installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:845-268-0165"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone size={22} />
                845-268-0165
              </a>
              <a
                href="mailto:rjvwindows@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition-colors text-lg"
              >
                <Mail size={22} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
