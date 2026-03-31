import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FunnelSimple } from '@phosphor-icons/react';
import { menuData, categories } from '../data/menuData';
import MenuCard from '../components/MenuCard';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('semua');

    const filteredItems = activeCategory === 'semua'
        ? menuData
        : menuData.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 lg:py-28 bg-white dark:bg-dark-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
                        <FunnelSimple size={16} weight="bold" />
                        Menu Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-warm-900 dark:text-warm-50">
                        Pilih{' '}
                        <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                            Favoritmu
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-warm-500 dark:text-warm-400 max-w-2xl mx-auto">
                        Dari makanan berat sampai dessert, semua tersedia untuk kamu pesan langsung via WhatsApp.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-nowrap gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-start lg:justify-center -mx-4 px-4 lg:mx-0 lg:px-0"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${activeCategory === cat.key
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-500 shadow-lg shadow-primary-500/25'
                                    : 'bg-warm-50 dark:bg-dark-card text-warm-600 dark:text-warm-300 border-warm-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Results Count */}
                <div className="mb-6 text-sm text-warm-500 dark:text-warm-400 text-center lg:text-left">
                    Menampilkan <span className="font-bold text-primary-600 dark:text-primary-400">{filteredItems.length}</span> menu
                </div>

                {/* Menu Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <MenuCard key={item.id} item={item} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-lg text-warm-400 dark:text-warm-500">
                            Belum ada menu di kategori ini.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Hide scrollbar utility */}
            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
};

export default Menu;
