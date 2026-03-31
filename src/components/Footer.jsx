import { motion } from 'framer-motion';
import { WhatsappLogo, InstagramLogo, Phone, MapPin, Clock } from '@phosphor-icons/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-warm-900 dark:bg-dark-surface text-warm-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="/logo.svg"
                            alt="Dapur Nazwa Logo"
                            className="h-12 w-auto brightness-0 invert opacity-80"
                        />
                        <p className="mt-4 text-warm-400 text-sm leading-relaxed max-w-xs">
                            Dapur Nazwa menyajikan aneka kuliner lezat, dari makanan berat, snack,
                            hingga kue dan donat. Pesan mudah via WhatsApp!
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <a
                                href="https://wa.me/6289668795011"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-warm-800 dark:bg-dark-card hover:bg-green-600 rounded-xl text-warm-400 hover:text-white transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <WhatsappLogo size={20} weight="fill" />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 bg-warm-800 dark:bg-dark-card hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl text-warm-400 hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <InstagramLogo size={20} weight="fill" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-5">Navigasi</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Beranda', href: '#hero' },
                                { label: 'Menu', href: '#menu' },
                                { label: 'Kontak', href: '#contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-warm-400 hover:text-primary-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-5">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} weight="duotone" className="text-primary-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-warm-400">
                                    Nazwa Catering / Dapur Nazwa<br />
                                    Kecamatan Cibatu,Kabupaten Garut, Provinsi Jawa Barat
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} weight="duotone" className="text-primary-400 flex-shrink-0" />
                                <a href="https://wa.me/6289668795011" target="_blank" rel="noopener noreferrer" className="text-sm text-warm-400 hover:text-primary-400 transition-colors">
                                    0896-6879-5011
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} weight="duotone" className="text-primary-400 flex-shrink-0" />
                                <span className="text-sm text-warm-400">
                                    Setiap Hari • 08:00 - 21:00 WIB
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-warm-800 dark:border-dark-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-warm-500 text-center sm:text-left">
                        &copy; {currentYear} Dapur Nazwa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
