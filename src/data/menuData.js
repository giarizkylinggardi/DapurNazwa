// =============================================
// Dapur Nazwa — Menu Data
// =============================================
// Setiap item WAJIB memiliki: id, name, description, price, category, image
// Categories: makanan, minuman, paket, snackbox, cake, donuts
// =============================================

// --- Makanan Images ---
import ayambakarImg from '../assets/makanan/ayambakar-tanpanasi.png';
import ayamgeprekImg from '../assets/makanan/ayamgeprek-tanpanasi.png';
import bananaCheeseRollImg from '../assets/makanan/banana-cheese-roll.png';
import burgerImg from '../assets/makanan/burger.png';
import burgerSpecialImg from '../assets/makanan/burgerspecial.png';
import chickenEggstraImg from '../assets/makanan/chicken-eggstra.png';
import chickenCrispySteakImg from '../assets/makanan/chickencrispysteak.png';
import chickenKarageImg from '../assets/makanan/chickenkarage-ricebowl.png';
import chickenKatsuImg from '../assets/makanan/chickenkatsu-ricebowl.png';
import cirengIsiImg from '../assets/makanan/cirengisi.png';
import dimsumImg from '../assets/makanan/dimsum.png';
import fireChickenImg from '../assets/makanan/firechicken-tanpa-nasi.png';
import kebabAyamImg from '../assets/makanan/kebabayam.png';
import kebabDagingImg from '../assets/makanan/kebabdaging.png';
import nasigorengSpecialImg from '../assets/makanan/nasigoreng-special.png';
import spagetiSeafoodImg from '../assets/makanan/spageti-seafood.png';
import ramenImg from '../assets/makanan/ramen.png';
import pempekImg from '../assets/makanan/pempek.png';
import lumpiaBeefImg from '../assets/makanan/lumpia-beef.png';

// --- Minuman Images ---
import thaiTeaImg from '../assets/minuman/thaitea.png';
import esJerukImg from '../assets/minuman/esjeruk.png';
import alpukatKocokImg from '../assets/minuman/alpukatkocok.png';
import capucinoCincauImg from '../assets/minuman/capucino-cincau.png';
import greenTeaImg from '../assets/minuman/greentea.png';
import milkshakeOreoImg from '../assets/minuman/milkshakeoreo.png';
import kopiDinginImg from '../assets/minuman/kopi-dingin.png';
import tehTarikImg from '../assets/minuman/tehtarik.png';

// --- Paket Images ---
import paketAnakImg from '../assets/paket/paket-anak.png';
import paketAyamBakarImg from '../assets/paket/paket-ayam-bakar.png';
import paketAyamGeprekImg from '../assets/paket/paket-ayam-geprek.png';
import paketFireChickenImg from '../assets/paket/paket-fire-chicken.png';
import paketGepukImg from '../assets/paket/paket-gepuk.png';
import paketPelajarImg from '../assets/paket/paket-pelajar.png';
import paketLockdownImg from '../assets/paket/paket-lockdown.png';
import paketNasiLiwetImg from '../assets/paket/paket-nasi-liwet-10porsi.png';

// --- Snackbox Images ---
import snackImg from '../assets/snackbox/snack.png';
import snack1Img from '../assets/snackbox/snack1.png';
import snack2Img from '../assets/snackbox/snack2.png';
import snack3Img from '../assets/snackbox/snack3.png';

// --- Cake Images ---
import kueImg from '../assets/cake/kue.png';
import kue1Img from '../assets/cake/kue1.png';
import kue2Img from '../assets/cake/kue2.png';
import kue3Img from '../assets/cake/kue3.png';
import kue4Img from '../assets/cake/kue4.png';

// --- Donuts Images ---
import donutImg from '../assets/donuts/donut.png';
import donut1Img from '../assets/donuts/donut1.png';
import donut2Img from '../assets/donuts/donut2.png';

export const menuData = [
    // ========== MAKANAN ==========
    {
        id: 'mak-01',
        name: 'Ayam Bakar',
        description: 'Ayam bakar bumbu rempah khas Dapur Nazwa, empuk dan juicy.',
        price: 20000,
        category: 'makanan',
        image: ayambakarImg,
    },
    {
        id: 'mak-02',
        name: 'Ayam Geprek',
        description: 'Ayam geprek sambal pedas mantap, bikin nagih!',
        price: 18000,
        category: 'makanan',
        image: ayamgeprekImg,
    },
    {
        id: 'mak-03',
        name: 'Banana Cheese Roll',
        description: 'Pisang goreng gulung keju yang crispy dan lumer.',
        price: 15000,
        category: 'makanan',
        image: bananaCheeseRollImg,
    },
    {
        id: 'mak-04',
        name: 'Burger Original',
        description: 'Burger daging sapi juicy dengan saus spesial.',
        price: 22000,
        category: 'makanan',
        image: burgerImg,
    },
    {
        id: 'mak-05',
        name: 'Burger Special',
        description: 'Burger premium double patty, keju, dan sayuran segar.',
        price: 30000,
        category: 'makanan',
        image: burgerSpecialImg,
    },
    {
        id: 'mak-06',
        name: 'Chicken Eggstra',
        description: 'Ayam crispy dengan telur ceplok dan saus spesial.',
        price: 25000,
        category: 'makanan',
        image: chickenEggstraImg,
    },
    {
        id: 'mak-07',
        name: 'Chicken Crispy Steak',
        description: 'Steak ayam crispy dengan saus BBQ dan kentang.',
        price: 28000,
        category: 'makanan',
        image: chickenCrispySteakImg,
    },
    {
        id: 'mak-08',
        name: 'Chicken Karage Rice Bowl',
        description: 'Rice bowl dengan ayam karage Jepang dan saus teriyaki.',
        price: 25000,
        category: 'makanan',
        image: chickenKarageImg,
    },
    {
        id: 'mak-09',
        name: 'Chicken Katsu Rice Bowl',
        description: 'Rice bowl ayam katsu renyah dengan saus katsu Jepang.',
        price: 25000,
        category: 'makanan',
        image: chickenKatsuImg,
    },
    {
        id: 'mak-10',
        name: 'Cireng Isi',
        description: 'Cireng aci goreng isi ayam suwir, renyah di luar, lembut di dalam.',
        price: 12000,
        category: 'makanan',
        image: cirengIsiImg,
    },
    {
        id: 'mak-11',
        name: 'Dimsum',
        description: 'Dimsum ayam udang kukus, fresh dan lembut.',
        price: 15000,
        category: 'makanan',
        image: dimsumImg,
    },
    {
        id: 'mak-12',
        name: 'Fire Chicken',
        description: 'Ayam goreng pedas level yang bikin keringatan!',
        price: 20000,
        category: 'makanan',
        image: fireChickenImg,
    },
    {
        id: 'mak-13',
        name: 'Kebab Ayam',
        description: 'Kebab tortilla isi ayam, sayuran, dan saus mayo.',
        price: 18000,
        category: 'makanan',
        image: kebabAyamImg,
    },
    {
        id: 'mak-14',
        name: 'Kebab Daging',
        description: 'Kebab tortilla daging sapi slice premium.',
        price: 22000,
        category: 'makanan',
        image: kebabDagingImg,
    },
    {
        id: 'mak-15',
        name: 'Nasi Goreng Special',
        description: 'Nasi goreng spesial dengan telur, ayam, dan kerupuk.',
        price: 20000,
        category: 'makanan',
        image: nasigorengSpecialImg,
    },
    {
        id: 'mak-16',
        name: 'Spageti Seafood',
        description: 'Spageti dengan topping seafood saus marinara.',
        price: 28000,
        category: 'makanan',
        image: spagetiSeafoodImg,
    },
    {
        id: 'mak-17',
        name: 'Ramen',
        description: 'Ramen kuah kaldu gurih dengan topping ayam dan telur.',
        price: 25000,
        category: 'makanan',
        image: ramenImg,
    },
    {
        id: 'mak-18',
        name: 'Pempek',
        description: 'Pempek Palembang lengkap dengan cuko asli.',
        price: 15000,
        category: 'makanan',
        image: pempekImg,
    },
    {
        id: 'mak-19',
        name: 'Lumpia Beef',
        description: 'Lumpia goreng isi daging sapi cincang dan sayuran.',
        price: 15000,
        category: 'makanan',
        image: lumpiaBeefImg,
    },

    // ========== MINUMAN ==========
    {
        id: 'min-01',
        name: 'Thai Tea',
        description: 'Thai tea creamy khas dengan susu dan gula aren.',
        price: 12000,
        category: 'minuman',
        image: thaiTeaImg,
    },
    {
        id: 'min-02',
        name: 'Es Jeruk',
        description: 'Jeruk peras segar dingin, cocok buat cuaca panas.',
        price: 8000,
        category: 'minuman',
        image: esJerukImg,
    },
    {
        id: 'min-03',
        name: 'Alpukat Kocok',
        description: 'Alpukat kocok segar dengan susu dan gula aren.',
        price: 15000,
        category: 'minuman',
        image: alpukatKocokImg,
    },
    {
        id: 'min-04',
        name: 'Capucino Cincau',
        description: 'Capucino dingin creamy dengan topping cincau hitam.',
        price: 12000,
        category: 'minuman',
        image: capucinoCincauImg,
    },
    {
        id: 'min-05',
        name: 'Green Tea',
        description: 'Green tea matcha latte, segar dan nikmat.',
        price: 13000,
        category: 'minuman',
        image: greenTeaImg,
    },
    {
        id: 'min-06',
        name: 'Milkshake Oreo',
        description: 'Milkshake oreo blended dengan whipped cream.',
        price: 15000,
        category: 'minuman',
        image: milkshakeOreoImg,
    },
    {
        id: 'min-07',
        name: 'Kopi Dingin',
        description: 'Kopi susu gula aren, bikin melek seharian.',
        price: 12000,
        category: 'minuman',
        image: kopiDinginImg,
    },
    {
        id: 'min-08',
        name: 'Teh Tarik',
        description: 'Teh tarik khas Malaysia, manis dan creamy.',
        price: 10000,
        category: 'minuman',
        image: tehTarikImg,
    },

    // ========== PAKET ==========
    {
        id: 'pak-01',
        name: 'Paket Anak',
        description: 'Paket hemat untuk si kecil, porsi pas dan enak.',
        price: 18000,
        category: 'paket',
        image: paketAnakImg,
    },
    {
        id: 'pak-02',
        name: 'Paket Ayam Bakar',
        description: 'Nasi + ayam bakar + lalapan + sambal + es teh.',
        price: 25000,
        category: 'paket',
        image: paketAyamBakarImg,
    },
    {
        id: 'pak-03',
        name: 'Paket Ayam Geprek',
        description: 'Nasi + ayam geprek sambal + lalapan + es teh.',
        price: 23000,
        category: 'paket',
        image: paketAyamGeprekImg,
    },
    {
        id: 'pak-04',
        name: 'Paket Fire Chicken',
        description: 'Nasi + fire chicken pedas + kentang + es teh.',
        price: 25000,
        category: 'paket',
        image: paketFireChickenImg,
    },
    {
        id: 'pak-05',
        name: 'Paket Gepuk',
        description: 'Nasi + empal gepuk + lalapan + sambal + es teh.',
        price: 27000,
        category: 'paket',
        image: paketGepukImg,
    },
    {
        id: 'pak-06',
        name: 'Paket Pelajar',
        description: 'Paket hemat khusus pelajar, murah tapi kenyang!',
        price: 15000,
        category: 'paket',
        image: paketPelajarImg,
    },
    {
        id: 'pak-07',
        name: 'Paket Lockdown',
        description: 'Paket lengkap untuk makan di rumah, porsi besar!',
        price: 35000,
        category: 'paket',
        image: paketLockdownImg,
    },
    {
        id: 'pak-08',
        name: 'Paket Nasi Liwet (10 Porsi)',
        description: 'Nasi liwet komplit untuk 10 orang, cocok buat acara.',
        price: 250000,
        category: 'paket',
        image: paketNasiLiwetImg,
    },

    // ========== SNACKBOX ==========
    {
        id: 'snk-01',
        name: 'Snack Box A',
        description: 'Paket snack box isi 4 macam jajanan pilihan.',
        price: 25000,
        category: 'snackbox',
        image: snackImg,
    },
    {
        id: 'snk-02',
        name: 'Snack Box B',
        description: 'Paket snack box premium isi 5 macam jajanan.',
        price: 30000,
        category: 'snackbox',
        image: snack1Img,
    },
    {
        id: 'snk-03',
        name: 'Snack Box C',
        description: 'Paket snack box ekonomis, pas untuk rapat kantor.',
        price: 20000,
        category: 'snackbox',
        image: snack2Img,
    },
    {
        id: 'snk-04',
        name: 'Snack Box D',
        description: 'Paket snack box spesial dengan kue basah & gorengan.',
        price: 35000,
        category: 'snackbox',
        image: snack3Img,
    },

    // ========== CAKE ==========
    {
        id: 'cak-01',
        name: 'Kue Ulang Tahun',
        description: 'Kue tart cantik custom untuk ulang tahun spesial.',
        price: 150000,
        category: 'cake',
        image: kueImg,
    },
    {
        id: 'cak-02',
        name: 'Brownies Premium',
        description: 'Brownies coklat premium, fudgy dan lembut.',
        price: 75000,
        category: 'cake',
        image: kue1Img,
    },
    {
        id: 'cak-03',
        name: 'Red Velvet Cake',
        description: 'Red velvet cake dengan cream cheese frosting.',
        price: 120000,
        category: 'cake',
        image: kue2Img,
    },
    {
        id: 'cak-04',
        name: 'Cheese Cake',
        description: 'New York cheesecake lembut dan creamy.',
        price: 110000,
        category: 'cake',
        image: kue3Img,
    },
    {
        id: 'cak-05',
        name: 'Lapis Legit',
        description: 'Lapis legit premium, rempah khas dan lembut.',
        price: 180000,
        category: 'cake',
        image: kue4Img,
    },

    // ========== DONUTS ==========
    {
        id: 'don-01',
        name: 'Donut Glazed',
        description: 'Donut klasik glazed yang lembut dan manis.',
        price: 8000,
        category: 'donuts',
        image: donutImg,
    },
    {
        id: 'don-02',
        name: 'Donut Coklat',
        description: 'Donut coklat topping meses dan selai coklat.',
        price: 10000,
        category: 'donuts',
        image: donut1Img,
    },
    {
        id: 'don-03',
        name: 'Donut Premium',
        description: 'Donut premium topping beragam dan isian krim.',
        price: 12000,
        category: 'donuts',
        image: donut2Img,
    },
];

// Helper: dapatkan daftar kategori unik
export const categories = [
    { key: 'semua', label: 'Semua' },
    { key: 'makanan', label: 'Makanan' },
    { key: 'minuman', label: 'Minuman' },
    { key: 'paket', label: 'Paket' },
    { key: 'snackbox', label: 'Snack Box' },
    { key: 'cake', label: 'Cake' },
    { key: 'donuts', label: 'Donuts' },
];

// Helper: format harga ke Rupiah
export const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};
