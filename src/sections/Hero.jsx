import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import burgerSpecialImg from '../assets/makanan/burgerspecial.png';
import chickenCrispySteakImg from '../assets/makanan/chickencrispysteak.png';
import spagetiSeafoodImg from '../assets/makanan/spageti-seafood.png';
import ramenImg from '../assets/makanan/ramen.png';
import kebabDagingImg from '../assets/makanan/kebabdaging.png';

const heroImages = [
    { src: burgerSpecialImg, alt: 'Burger Special' },
    { src: chickenCrispySteakImg, alt: 'Chicken Crispy Steak' },
    { src: spagetiSeafoodImg, alt: 'Spageti Seafood' },
    { src: ramenImg, alt: 'Ramen' },
    { src: kebabDagingImg, alt: 'Kebab Daging' },
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-warm-50 dark:bg-dark-bg pt-16 md:pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent-200/20 dark:bg-accent-900/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-100/40 dark:bg-primary-800/10 rounded-full blur-3xl" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-6"
                        >
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                            Buka Setiap Hari • 08:00 - 21:00
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
                        >
                            <span className="text-warm-900 dark:text-warm-50">Rasa </span>
                            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                                Istimewa
                            </span>
                            <br />
                            <span className="text-warm-900 dark:text-warm-50">dari </span>
                            <span className="bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent">
                                Dapur Nazwa
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="mt-6 text-lg sm:text-xl text-warm-600 dark:text-warm-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Nikmati aneka kuliner lezat dari makanan berat, snack, hingga kue & donat.
                            Pesan langsung via WhatsApp, mudah dan cepat!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#menu"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Lihat Menu
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/6289668795011"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-warm-300 dark:border-warm-600 text-warm-700 dark:text-warm-300 hover:border-primary-400 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 text-lg font-bold rounded-2xl transition-all duration-300"
                            >
                                Hubungi Kami
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
                        >
                            {[
                                { value: '40+', label: 'Menu' },
                                { value: '6', label: 'Kategori' },
                                { value: '100%', label: 'Halal' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-extrabold text-primary-600 dark:text-primary-400">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-warm-500 dark:text-warm-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Image Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
                            {/* Glowing ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400 via-accent-400 to-primary-300 dark:from-primary-600 dark:via-accent-600 dark:to-primary-500 p-1 animate-[spin_8s_linear_infinite]">
                                <div className="w-full h-full rounded-full bg-warm-50 dark:bg-dark-bg" />
                            </div>

                            {/* Image container */}
                            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl shadow-primary-500/20 dark:shadow-primary-400/10 bg-warm-100 dark:bg-dark-card">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImage}
                                        src={heroImages[currentImage].src}
                                        alt={heroImages[currentImage].alt}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 bg-white dark:bg-dark-card px-4 py-2 rounded-xl shadow-lg border border-warm-200 dark:border-dark-border"
                            >
                                <span className="text-sm font-bold text-primary-600 dark:text-primary-400">🔥 Best Seller</span>
                            </motion.div>

                            {/* Floating price tag */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -top-2 -left-2 sm:top-4 sm:left-0 bg-white dark:bg-dark-card px-3 py-2 rounded-xl shadow-lg border border-warm-200 dark:border-dark-border"
                            >
                                <span className="text-xs font-medium text-warm-500 dark:text-warm-400">Mulai dari</span>
                                <div className="text-sm font-bold text-warm-900 dark:text-warm-100">Rp 8.000</div>
                            </motion.div>
                        </div>

                        {/* Image carousel dots */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                            {heroImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImage
                                            ? 'w-6 bg-primary-500'
                                            : 'bg-warm-300 dark:bg-warm-600 hover:bg-warm-400'
                                        }`}
                                    aria-label={`Show image ${i + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
