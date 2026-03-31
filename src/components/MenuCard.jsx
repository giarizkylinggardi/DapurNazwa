import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';
import { formatPrice } from '../data/menuData';

const MenuCard = ({ item, index }) => {
    const waMessage = `Halo Dapur Nazwa, saya ingin pesan: ${item.name}`;
    const waUrl = `https://wa.me/6289668795011?text=${encodeURIComponent(waMessage)}`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md shadow-warm-900/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/5 transform hover:-translate-y-1 transition-all duration-300 border border-warm-100 dark:border-dark-border"
        >
            {/* Image */}
            <div className="relative overflow-hidden bg-warm-100 dark:bg-warm-800">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-t-xl transform group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm text-xs font-semibold text-primary-600 dark:text-primary-400 rounded-full capitalize border border-warm-200/50 dark:border-dark-border">
                    {item.category}
                </div>
                {/* Price Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-8 pb-3 px-4">
                    <span className="text-white font-bold text-lg drop-shadow-md">{formatPrice(item.price)}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
                <div>
                    <h3 className="text-lg font-bold text-warm-900 dark:text-warm-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                        {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-warm-500 dark:text-warm-400 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                </div>

                {/* WA Button */}
                <button
                    onClick={() => window.open(waUrl, '_blank')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                    <WhatsappLogo size={20} weight="fill" />
                    Pesan via WA
                </button>
            </div>
        </motion.div>
    );
};

export default MenuCard;
