import React from 'react'
import {Link} from 'react-router-dom'
import acrylicCrafts from "../../assets/categories/Acrylic-Crafts.png"
import cameraSkins from "../../assets/categories/Camera_skins.jpg"
import customizable from "../../assets/categories/customizable.png"
import gift from "../../assets/categories/gift.jpg"
import homeDecor from "../../assets/categories/home-decor.jpg"
import laptopSkins from "../../assets/categories/laptop-skins.jpg"
import mobileCovers from "../../assets/categories/mobile-covers.jpg"
import mobileSkins from "../../assets/categories/mobile-skins.jpg";
import tshirts from "../../assets/categories/tshirts.png";
import accesoriesSkins from "../../assets/categories/accesories-skins.jpeg";
import rubberStamp from '../../assets/categories/shopping.jpg';
import keychain from '../../assets/categories/keychain.png';

const categories = [
    {
      id: 1,
      title: "Mobile Skins",
      image: mobileSkins,
    //   route: "/category/electronics"
    },
    {
      id: 2,
      title: "Mobile Covers",
      image: mobileCovers,
    //   route: "/category/phone-skins"
    },
    {
      id: 3,
      title: "Laptop Skins",
      image: laptopSkins,
    //   route: "/category/stamps"
    },
    {
      id: 4,
      title: "Camera Skins",
      image: cameraSkins,
    //   route: "/category/accessories"
    },
    {
        id: 5,
        title: "Accesories Skins",
        image: accesoriesSkins,
      
    },
    {
        id: 6,
        title: "Gift Items",
        image: customizable,
      
      },
      {
        id: 7,
        title: "T-shirts",
        image: tshirts,
      
      },
      {
        id: 8,
        title: "Acrylic Crafts",
        image: acrylicCrafts,
      
      },

      {
        id: 9,
        title: "Home Decors",
        image: homeDecor,
      
      },
      
      {
        id: 10,
        title: "Rubber Stamps",
        image: rubberStamp,
      
      },

      

  ];
  

  function ProductCategories() {
    return (
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {categories.slice(0, 10).map((category, index) => ( // Only show first 10 items
            <Link 
              to={category.route} 
              key={category.id}
              className={`
                group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow
                ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                ${index === 3 ? 'lg:col-span-2' : ''}
                ${index === 8 ? 'lg:col-span-2' : ''}
              `}
            >
              <div className="h-full w-full">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center p-4 rounded-lg backdrop-blur-sm">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  export default ProductCategories