import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from './models/productModel.js';

dotenv.config();

const testProducts = [
    // MEN'S SHOES
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195338/01/sv01/fnd/IND/fmt/png/Magnify-Nitro-Men's-Running-Shoes",
        brand: "Puma",
        title: "Magnify Nitro Men's Shoes",
        rating: 4.8,
        reviews: 245,
        sellPrice: 8500,
        mrp: "12999",
        discount: 35,
        category: "men",
        orders: "1200"
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed4100c5c644837b752ad7c014bbdf6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        brand: "Adidas",
        title: "Ultraboost 22 'Core Black'",
        rating: 4.9,
        reviews: 512,
        sellPrice: 14500,
        mrp: "17999",
        discount: 19,
        category: "men",
        orders: "3500"
    },
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376061/01/sv01/fnd/IND/fmt/png/RS-Z-Luxe-Men's-Shoes",
        brand: "Puma",
        title: "RS-Z Luxe Sneakers",
        rating: 4.5,
        reviews: 89,
        sellPrice: 5999,
        mrp: "9999",
        discount: 40,
        category: "men",
        orders: "850"
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2026850c954e4df59d16ad4900a6e60b_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg",
        brand: "Adidas",
        title: "Forum Low Classic",
        rating: 4.7,
        reviews: 320,
        sellPrice: 6999,
        mrp: "8999",
        discount: 22,
        category: "men",
        orders: "2100"
    },
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380746/01/sv01/fnd/IND/fmt/png/Smash-v2-L-Men's-Shoes",
        brand: "Puma",
        title: "Smash v2 Leather",
        rating: 4.3,
        reviews: 156,
        sellPrice: 2499,
        mrp: "4999",
        discount: 50,
        category: "men",
        orders: "1500"
    },

    // WOMEN'S SHOES
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376061/01/sv01/fnd/IND/fmt/png/RS-Z-Reinvent-Women's-Shoes",
        brand: "Puma",
        title: "RS-Z Reinvent Women's",
        rating: 4.6,
        reviews: 112,
        sellPrice: 4800,
        mrp: "7999",
        discount: 40,
        category: "women",
        orders: "950"
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7c8f9db448b47e5ab48ad6d0107a97b_9366/Superstar_Shoes_White_GW4437_01_standard.jpg",
        brand: "Adidas",
        title: "Adidas Superstar Women's",
        rating: 4.7,
        reviews: 1850,
        sellPrice: 7999,
        mrp: "9999",
        discount: 20,
        category: "women",
        orders: "12000"
    },
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380697/02/sv01/fnd/IND/fmt/png/Cali-Star-Women's-Sneakers",
        brand: "Puma",
        title: "Cali Star Sneakers",
        rating: 4.4,
        reviews: 75,
        sellPrice: 3999,
        mrp: "6999",
        discount: 43,
        category: "women",
        orders: "600"
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/290885c398324f9485c2ad8200924908_9366/OZWEEGO_Shoes_Beige_GX3322_01_standard.jpg",
        brand: "Adidas",
        title: "OZWEEGO Shoes Women",
        rating: 4.8,
        reviews: 420,
        sellPrice: 9500,
        mrp: "11999",
        discount: 21,
        category: "women",
        orders: "2800"
    },

    // KIDS SHOES (category: "child")
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195333/01/sv01/fnd/IND/fmt/png/Evolve-Run-Kids'-Shoes",
        brand: "Puma",
        title: "Evolve Run Kids",
        rating: 4.2,
        reviews: 45,
        sellPrice: 1999,
        mrp: "3499",
        discount: 43,
        category: "child",
        orders: "300"
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b8e64c3c3a948e4889cad0c010eb374_9366/Forum_Low_Shoes_Kids_White_GV7003_01_standard.jpg",
        brand: "Adidas",
        title: "Forum Low Shoes Kids",
        rating: 4.7,
        reviews: 120,
        sellPrice: 5999,
        mrp: "7999",
        discount: 25,
        category: "child",
        orders: "1100"
    },
    {
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380746/01/sv01/fnd/IND/fmt/png/Smash-v2-Kids-Shoes",
        brand: "Puma",
        title: "Smash v2 Kids",
        rating: 4.5,
        reviews: 88,
        sellPrice: 2200,
        mrp: "3999",
        discount: 45,
        category: "child",
        orders: "850"
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0ef1b9f71c1b489a8187adcb00989f66_9366/Superstar_Shoes_Kids_White_GZ1167_01_standard.jpg",
        brand: "Adidas",
        title: "Superstar Kids Shoes",
        rating: 4.9,
        reviews: 310,
        sellPrice: 4800,
        mrp: "5999",
        discount: 20,
        category: "child",
        orders: "4000"
    }
];

const seedDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI not found in environment variables");
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding...');
        
        await Products.deleteMany({});
        console.log('Database cleared.');
        
        await Products.insertMany(testProducts);
        console.log(`${testProducts.length} high-quality test products added successfully!`);
        
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
