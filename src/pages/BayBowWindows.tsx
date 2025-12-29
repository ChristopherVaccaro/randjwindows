import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const galleryImages = [
  { thumb: '/images/photogallery/sections_thumb.jpg', large: '/images/photogallery/sections_large.jpg', alt: 'Bay window sections installation Rockland County NY' },
  { thumb: '/images/photogallery/sections_bay_thumb.jpg', large: '/images/photogallery/sections_bay_large.jpg', alt: 'Bay window sections replacement Westchester' },
  { thumb: '/images/photogallery/three_casement_thumb.jpg', large: '/images/photogallery/three_casement_large.jpg', alt: 'Three casement windows before installation' },
  { thumb: '/images/photogallery/three_casement_bay_thumb.jpg', large: '/images/photogallery/three_casement_bay_large.jpg', alt: 'Three casement bay window after installation' },
  { thumb: '/images/photogallery/white_picture_thumb.jpg', large: '/images/photogallery/white_picture_large.jpg', alt: 'White picture window replacement' },
  { thumb: '/images/photogallery/white_bay_thumb.jpg', large: '/images/photogallery/white_bay_large.jpg', alt: 'White bay window professional installation' },
  { thumb: '/images/photogallery/white_picture_window_thumb.jpg', large: '/images/photogallery/white_picture_window_large.jpg', alt: 'White picture window installation completed' },
  { thumb: '/images/photogallery/white_five_panel_thumb.jpg', large: '/images/photogallery/white_five_panel_large.jpg', alt: 'Five panel bow window installation' },
  { thumb: '/images/photogallery/many_panels_thumb.jpg', large: '/images/photogallery/many_panels_large.jpg', alt: 'Multi-panel bay window Rockland County' },
  { thumb: '/images/photogallery/full_length_thumb.jpg', large: '/images/photogallery/full_length_large.jpg', alt: 'Full length bay window replacement' },
];

const BayBowWindows = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bay & Bow Window Installations
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Add a beautiful new view to your home with a Bay or Bow window. Increase 
                  natural sun light, provide a larger viewing area, and add allure to your 
                  existing space.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most houses can easily replace old casement windows with a large bay or 
                  bow window to transform the look and feel.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  To learn more about Bay or Bow windows, please{' '}
                  <Link to="/contact" className="text-gray-700 hover:underline font-medium">
                    contact us
                  </Link>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Transform Your Home?</h3>
                <p className="text-gray-300 mb-4">
                  Get a free estimate for your bay or bow window installation.
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

            {/* Gallery */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Bay & Bow Window Gallery</h2>
                <p className="text-gray-600 mb-6">
                  Click on any photo to see it enlarged. Photos show before and after shots of installations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {galleryImages.map((image, index) => (
                    <motion.button
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={image.thumb}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.img
              key={selectedImage}
              src={galleryImages[selectedImage].large}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BayBowWindows;
