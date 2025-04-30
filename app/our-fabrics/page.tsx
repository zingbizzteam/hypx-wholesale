"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../../components/multi/HeroSection";
import AccordionCard from "../../components/multi/Accordioncard";
import Washcard from "../../components/multi/Washcard";

const Tabs = () => {

  const materialContent = [
    {
      title: "COTTON",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Soft, breathable, and natural—cotton is a timeless fabric loved for its comfort and versatility. Gentle on the skin and perfect for all seasons, it offers durability while keeping you cool in the heat and warm in the cold. Whether in everyday essentials or statement pieces, our premium cotton ensures long-lasting wear and effortless style."
    },
    {
      title: "POLYESTER",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Durable, lightweight, and wrinkle-resistant—polyester is a versatile fabric known for its strength and easy maintenance. It retains shape, dries quickly, and resists shrinking and fading, making it perfect for active and everyday wear. Our high-quality polyester blends ensure comfort, breathability, and long-lasting style."
    },
    {
      title: "LYCRA",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Stretchy, flexible, and form-fitting—Lycra is designed for maximum comfort and movement. Known for its excellent elasticity, it enhances the fit of clothing while maintaining shape over time. Ideal for activewear and figure-hugging styles, our premium Lycra blends offer superior flexibility, durability, and a smooth, second-skin feel."
    },
    {
      title: "POLY-COTTON",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "The perfect blend of softness and durability, poly cotton combines the breathability of cotton with the strength of polyester. This fabric is lightweight, wrinkle-resistant, and easy to maintain, making it ideal for everyday wear. Our high-quality poly cotton ensures comfort, longevity, and a smooth, polished look."
    },
    {
      title: "TRI-BLEND",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Soft, lightweight, and ultra-comfortable—tri blend fabric is a perfect mix of cotton, polyester, and rayon. This combination offers the breathability of cotton, the durability of polyester, and the silky smoothness of rayon. With a vintage-inspired feel and excellent drape, our triblend fabric provides all-day comfort with a stylish, lived-in look."
    },
    {
      title: "NYLON",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Strong, lightweight, and resistant to wear—nylon is a durable fabric known for its smooth texture and flexibility. It wicks moisture, dries quickly, and maintains its shape, making it ideal for activewear and performance clothing. Our high-quality nylon blends offer comfort, resilience, and a sleek, modern finish."
    },
    {
      title: "SINGLE JERSEY",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Single jersey fabric is known for its smooth texture and excellent stretch. Made with a fine knit construction, it offers a comfortable fit and drapes beautifully on the body. Ideal for t-shirts, casual wear, and activewear, our premium single jersey ensures all-day ease and durability."
    },
    {
      title: "DOT KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "dot knit fabric features a unique pattern that enhances airflow and comfort. Its soft feel and slight stretch make it ideal for sportswear, casual wear, and stylish layering pieces. Designed for durability and flexibility, our high-quality dot knit ensures a modern look with lasting performance."
    },
    {
      title: "LOOP KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Soft, cozy, and flexible—loop knit fabric is known for its plush texture and excellent stretch. Featuring tiny loops on the inside, it provides warmth while remaining breathable and comfortable. Perfect for sweatshirts, hoodies, and loungewear, our high-quality loop knit fabric offers durability and a relaxed fit for everyday wear."
    },
    {
      title: "MARS",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Durable, breathable, and stylish—Mars fabric is a high-performance knit known for its unique texture and modern appeal. With a smooth outer surface and a structured feel, it provides excellent shape retention and comfort. Ideal for activewear, casual wear, and trendy streetwear, our premium Mars fabric ensures a sleek look with long-lasting quality."
    },
    {
      title: "COTTON FLEECE",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Cotton fleece is a plush fabric perfect for layering. With a smooth outer surface and a brushed, fleecy interior, it provides excellent insulation while remaining breathable. Ideal for hoodies, sweatshirts, and loungewear, our high-quality cotton fleece ensures superior comfort and lasting warmth."
    },
    {
      title: "HONEYCOMB",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Honeycomb fabric features a unique woven pattern that enhances airflow and adds a modern touch. Known for its lightweight feel and durability, it provides comfort while maintaining structure. Perfect for polos, t-shirts, and athleisure wear, our premium honeycomb fabric ensures a sleek look with all-day ease."
    },
    {
      title: "AIR TEX",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Lightweight, breathable, and moisture-wicking—Airtex fabric is designed for ultimate comfort and performance. Its open-weave construction enhances airflow, keeping you cool and dry during any activity. Ideal for sportswear and activewear, our high-quality Airtex fabric ensures durability, flexibility, and a fresh feel all day long."
    },
    {
      title: "LACOSTE",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Classic, breathable, and textured—Lacoste fabric is a premium knit known for its signature piqué weave. Soft yet durable, it offers excellent airflow and a structured feel, making it perfect for polo shirts and casual wear. Our high-quality Lacoste fabric ensures comfort, style, and long-lasting elegance."
    },
  ]

  const textureContent = [
    {
      title: "WAFFLE KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Waffle knit fabric is known for its signature square-patterned weave that enhances insulation and airflow. Lightweight yet cozy, it provides warmth without bulk, making it perfect for layering. Ideal for loungewear, casual wear, and thermal clothing, our high-quality waffle knit offers comfort with a stylish, modern look."
    },
    {
      title: "PIQUE KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Piqué knit fabric features a subtle raised pattern, offering a refined look with excellent airflow. Known for its durability and slight stretch, it provides comfort while maintaining structure. Commonly used in polo shirts and sportswear, our premium piqué knit ensures a polished appearance with long-lasting wear."
    },
    {
      title: "RIB KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Rib knit fabric is designed with parallel ridges that provide excellent elasticity and shape retention. Soft and comfortable, it offers a snug fit while allowing ease of movement. Ideal for cuffs, collars, turtlenecks, and fitted garments, our high-quality rib knit ensures durability and a stylish, structured look."
    },
    {
      title: "THERMAL KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Thermal knit fabric features a unique honeycomb or waffle-like pattern that traps heat while allowing airflow. Designed for insulation without added bulk, it’s perfect for layering in cooler weather. Ideal for loungewear, activewear, and winter essentials, our premium thermal knit ensures cozy comfort with lasting durability."
    },
    {
      title: "DOUBLE KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Thick, durable, and structured—double knit fabric is made with two layers of interwoven fabric, providing extra strength and stability. With a smooth finish on both sides, it offers excellent shape retention, wrinkle resistance, and a comfortable stretch. Ideal for jackets, dresses, and activewear, our premium double knit fabric ensures a polished look with long-lasting wear."
    },
    {
      title: "WARP KNIT",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Strong, lightweight, and resistant to wear—nylon is a durable fabric known for its smooth texture and flexibility. It wicks moisture, dries quickly, and maintains its shape, making it ideal for activewear and performance clothing. Our high-quality nylon blends offer comfort, resilience, and a sleek, modern finish."
    },
    {
      title: "RASCHEL FABRIC",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Intricate, durable, and versatile—Raschel fabric is a type of warp knit known for its open, lacy, or textured patterns. It offers excellent strength and flexibility while maintaining a lightweight feel. Commonly used in lace, mesh, and decorative textiles, our high-quality Raschel fabric ensures elegance, breathability, and lasting durability"
    },
    {
      title: "PURL KNIT FABRIC",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Purl knit fabric features textured loops on both sides, offering excellent elasticity and comfort. Known for its superior drape and flexibility, it retains shape while allowing free movement. Ideal for sweaters, scarves, and cozy knitwear, our premium purl knit fabric ensures warmth, durability, and a stylish, relaxed look."
    },
    {
      title: "WAFFLE JERSEY",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Waffle jersey fabric combines the softness of jersey with the distinct square-patterned texture of a waffle weave. This unique design enhances airflow and insulation, making it perfect for comfortable, all-season wear. Ideal for loungewear, casual tops, and layering pieces, our high-quality waffle jersey ensures a stylish look with lasting comfort"
    },
    {
      title: "WAFFLE FLEECE",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Waffle fleece combines the insulating properties of fleece with the breathable, grid-like texture of a waffle weave. This unique construction traps heat while allowing airflow, making it perfect for cozy yet lightweight layering. Ideal for hoodies, jackets, and winter essentials, our premium waffle fleece ensures warmth, comfort, and durability."
    },
  ]

  const washContent = [
    {
      title: "BIO WASH",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Bio wash, also known as enzyme wash, is a fabric treatment that enhances softness, smoothness, and durability. Using natural enzymes, it removes excess fibers, reduces pilling, and gives fabrics a refined, premium feel. This eco-friendly process not only improves comfort but also helps retain color and texture for long-lasting quality."
    },
    {
      title: "LAVA WASH",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Lava wash is a special garment treatment that gives fabrics a slightly distressed, vintage look while maintaining softness and durability. This process enhances texture, adds subtle fading, and creates a worn-in, rugged appearance, making it ideal for casual and trendy clothing styles."
    },
    {
      title: "SOFTENER WASH",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Softener wash is a fabric treatment that enhances the softness and comfort of garments. By using special softening agents, this wash improves the fabric’s texture, making it feel smoother and more luxurious. It also "
    },
    {
      title: "ACID WASH",
      imageSrc: "/Images/OurPolicy/dummy.png",
      description: "Acid wash is a fabric treatment that creates a bold, vintage look by using an acid or bleach solution to produce unique, high-contrast color variations. This process gives garments a rugged, worn-in appearance, adding a distinctive edge to casual and statement pieces."
    },
  ]

  const [activeTab, setActiveTab] = useState("fabricmaterial");

  const tabVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
    exit: { opacity: 0, },
  };

  return (
    <div>
      <HeroSection Title="Our Fabrics" ImageUrl="/Images/Our-fabrics/.png" />
      <div className="container1">
        <div className="container2">
          <div className="container3">
            <div className="tab-header mt-6">
              <button
                className={activeTab === "fabricmaterial" ? "active" : ""}
                onClick={() => setActiveTab("fabricmaterial")}
              >
                Fabric Material
              </button>
              <button
                className={activeTab === "fabrictextures" ? "active" : ""}
                onClick={() => setActiveTab("fabrictextures")}
              >
                Fabric Textures
              </button>
              <button
                className={activeTab === "fabricwash" ? "active" : ""}
                onClick={() => setActiveTab("fabricwash")}
              >
                Fabric Wash
              </button>
            </div>
            {activeTab === "fabricmaterial" && (
              <motion.div
                key="fabricmaterial"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.5 }}
                className=""
              >
                <div className="border-t border-[#B5B5B5]"></div>
                <div className="flex flex-col items-center justify-center ">
                  <p className="ch2 py-3">Fabric Material</p>
                  <p className="cp3 text-justify">
                    The foundation of great clothing starts with the right fabric. We offer a wide range of high-quality materials, from soft and breathable cotton to durable polyester, stretchable Lycra, and premium blends. Whether you need comfort, performance, or style, our diverse fabric options ensure the perfect fit for every need. Explore our collection and experience the difference in quality and craftsmanship
                  </p>
                </div>
                <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between justify-items-center 
              gap-x-4 gap-y-10 my-8 w-[94%] md:w-full">
                  {materialContent.map((material, index) => (
                    <AccordionCard
                      key={index}
                      title={material.title}
                      imageSrc={material.imageSrc}
                      description={material.description} />
                  ))}
                </div>
                </div>
              </motion.div>
            )}
            {activeTab === "fabrictextures" && (
              <motion.div
                key="fabrictextures"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.5 }}
                className=""
              >
                <div className="border-t border-[#B5B5B5]"></div>
                <div className="flex flex-col items-center justify-center ">
                  <p className="ch2 py-3">Fabric Textures</p>
                  <p className="cp3 text-justify">
                    Texture plays a key role in how a fabric looks, feels, and drapes. From smooth and silky to rough and structured, different textures add character and functionality to clothing. Whether it’s the softness of fleece, the crispness of piqué, or the stretch of ribbed knits, our diverse range of fabric textures ensures comfort, style, and performance for every occasion.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between justify-items-center 
              gap-x-4 gap-y-10 my-8 w-[94%] md:w-full">
                    {textureContent.map((texture, index) => (
                      <AccordionCard
                        key={index}
                        title={texture.title}
                        imageSrc={texture.imageSrc}
                        description={texture.description} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "fabricwash" && (
              <motion.div
                key="fabricwash"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.5 }}
                className=""
              >
                <div className="border-t border-[#B5B5B5]"></div>
                <div className="flex flex-col items-center justify-center ">
                  <p className="ch2 py-3">Fabric Washes</p>
                  <p className="cp3 text-justify">
                    Washing techniques enhance the texture, appearance, and feel of fabrics, giving them a unique character and improved comfort. From softening to creating a worn-in effect, different wash treatments bring out the best in every material.
                  </p>
                </div>
                <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-between justify-items-center 
              gap-x-4 gap-y-10 my-8 w-[94%] md:w-full">
                  {washContent.map((wash, index) => (
                    <Washcard
                      key={index}
                      title={wash.title}
                      imageSrc={wash.imageSrc}
                      description={wash.description} />
                  ))}
                </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
