import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Sun, Moon } from '@phosphor-icons/react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'Kontak', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/90 dark:bg-dark-surface/90 backdrop-blur-xl shadow-lg shadow-warm-900/5 dark:shadow-black/20'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex-shrink-0">
                            <motion.img
                                src="/logo.svg"
                                alt="Dapur Nazwa Logo"
                                className="h-10 md:h-12 w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="relative px-4 py-2 text-sm font-medium text-warm-700 dark:text-warm-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20"
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="ml-3 p-2.5 rounded-xl bg-warm-100 dark:bg-dark-card text-warm-600 dark:text-warm-300 hover:bg-warm-200 dark:hover:bg-warm-700 transition-colors"
                                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                <AnimatePresence mode="wait">
                                    {isDark ? (
                                        <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <Sun size={20} weight="bold" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <Moon size={20} weight="bold" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* CTA Button */}
                            <a
                                href="https://wa.me/6289668795011"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                            >
                                Pesan Sekarang
                            </a>
                        </div>

                        {/* Mobile: Theme Toggle + Hamburger */}
                        <div className="flex md:hidden items-center gap-2">
                            <motion.button
                                onClick={toggleTheme}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-warm-100 dark:bg-dark-card text-warm-600 dark:text-warm-300"
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
                            </motion.button>

                            <motion.button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg text-warm-700 dark:text-warm-300 hover:bg-warm-100 dark:hover:bg-dark-card"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 z-50 w-72 h-full bg-white dark:bg-dark-surface shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col p-6 pt-20 h-full">
                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="px-4 py-3 text-lg font-medium text-warm-700 dark:text-warm-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-xl transition-colors"
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-auto pb-8">
                                    <a
                                        href="https://wa.me/6289668795011"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center px-5 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-md"
                                    >
                                        Pesan Sekarang
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
