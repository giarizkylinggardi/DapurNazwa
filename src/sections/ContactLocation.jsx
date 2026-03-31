import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, WhatsappLogo, NavigationArrow } from '@phosphor-icons/react';

const contactInfo = [
    {
        icon: MapPin,
        label: 'Alamat',
        value: 'Nazwa Catering / Dapur Nazwa',
        sub: 'Cibatu, Garut, Jawa Barat',
    },
    {
        icon: Phone,
        label: 'Telepon / WhatsApp',
        value: '0896-6879-5011',
        href: 'https://wa.me/6289668795011',
    },
    {
        icon: Clock,
        label: 'Jam Operasional',
        value: 'Setiap Hari',
        sub: '08:00 - 21:00 WIB',
    },
];

const ContactLocation = () => {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-warm-50 dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
                        <NavigationArrow size={16} weight="bold" />
                        Hubungi Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-warm-900 dark:text-warm-50">
                        Temukan{' '}
                        <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                            Lokasi Kami
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-warm-500 dark:text-warm-400 max-w-2xl mx-auto">
                        Kunjungi kami langsung atau pesan via WhatsApp untuk delivery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex items-start gap-4 p-5 bg-white dark:bg-dark-card rounded-2xl border border-warm-100 dark:border-dark-border hover:border-primary-200 dark:hover:border-primary-800 transition-colors group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <item.icon size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-warm-500 dark:text-warm-400">{item.label}</h4>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-bold text-warm-900 dark:text-warm-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-lg font-bold text-warm-900 dark:text-warm-100">{item.value}</p>
                                    )}
                                    {item.sub && (
                                        <p className="text-sm text-warm-500 dark:text-warm-400 mt-0.5">{item.sub}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 p-6 rounded-2xl text-white"
                        >
                            <h4 className="text-lg font-bold mb-2">Pesan Sekarang via WhatsApp</h4>
                            <p className="text-sm text-primary-100 mb-4">
                                Langsung chat kami untuk pesan makanan, catering, atau snack box.
                            </p>
                            <a
                                href="https://wa.me/6289668795011"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-primary-50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
                            >
                                <WhatsappLogo size={22} weight="fill" />
                                Chat WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Google Maps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full aspect-video md:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-warm-900/10 dark:shadow-black/30 border border-warm-200 dark:border-dark-border"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.21231675649!2d107.97657361046713!3d-7.101374192872313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f479e41f2c4cf%3A0x27250d8e0c591c1d!2sNazwa%20catering%2FDapur%20Nazwa!5e0!3m2!1sid!2sid!4v1774932079109!5m2!1sid!2sid"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactLocation;
