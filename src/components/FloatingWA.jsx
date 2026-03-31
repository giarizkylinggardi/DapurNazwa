import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';

const FloatingWA = () => {
    return (
        <motion.a
            href="https://wa.me/6289668795011"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/30 animate-pulse-glow transition-colors duration-300"
            aria-label="Chat via WhatsApp"
        >
            <WhatsappLogo size={30} weight="fill" />
        </motion.a>
    );
};

export default FloatingWA;
