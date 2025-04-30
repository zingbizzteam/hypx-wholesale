"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../../components/multi/HeroSection";
import AccordionCard from "../../components/multi/Accordioncard";
import Image from "next/image";

const Tabs = () => {

  const cardContent = [
    {
      title: "NON-PVC PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/non-pvc.jpg",
      description: "Non-PVC printing is an eco-friendly alternative to traditional printing methods that use Polyvinyl Chloride (PVC). Unlike conventional plastisol inks that contain harmful chemicals and phthalates, Non-PVC inks are free from toxic substances, making them safer for the environment and the wearer. The prints are lightweight and breathable, preserving the natural feel of the fabric. Choosing Non-PVC prints showcases your commitment to sustainability and high-quality apparel. Whether you're an eco-conscious brand or simply want to provide safer and more comfortable clothing, Non-PVC printing is the ideal choice."
    },
    {
      title: "GLITTER PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/glitter.jpg",
      description: "Glitter printing is a specialized technique that involves applying glitter-infused ink or heat-pressed vinyl onto fabric. The result? A vibrant, shimmering design that stands out with brilliance and style. Perfect for logos, slogans, or custom graphics, glitter prints add flair to any design. Glitter printing is ideal for special events, parties, promotional apparel, or just to stand out in your everyday wear. Whether you’re creating custom merchandise or adding some glam to your personal style, glitter prints are sure to make a statement."
    },
    {
      title: "FOIL PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/foil.jpg",
      description: "Make your designs shine with Foil Printing! This premium printing technique adds a luxurious metallic finish to your apparel, creating a stunning, high-gloss effect that catches the eye and exudes sophistication. Foil printing involves applying a layer of metallic foil onto the fabric using a heat press. Foil printing is perfect for creating standout designs for special events, promotional merchandise, or fashion-forward collections. Whether you want to add a touch of elegance or make a bold statement, foil prints bring a unique and eye-catching element to your clothing line."
    },
    {
      title: "PUFF PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/puff.jpg",
      description: "Looking to add texture and dimension to your designs? Puff Printing is the perfect choice! This unique technique gives your graphics a raised, 3D effect, making them literally stand out from the fabric. It’s a fun and bold way to add character and style to your apparel. Made with high-quality inks, puff prints are durable and maintain their shape wash after wash. Puff printing is ideal for bold designs, streetwear, brand logos, or any creative concept that needs an extra pop. Whether you’re looking to make a playful statement or add a touch of sophistication, puff prints are sure to leave a lasting impression."
    },
    {
      title: "HD PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/hd.jpg",
      description: "Experience stunning clarity and vibrant colors with HD Printing! Perfect for detailed graphics, intricate designs, and photo-realistic prints, this advanced printing technique delivers high-definition results that truly stand out. Advanced color technology ensures vibrant, accurate colors that don’t fade easily. Whether you’re printing intricate patterns, realistic photos, or vibrant artwork, HD printing guarantees a flawless finish with stunning detail and color depth. Ideal for custom merchandise, brand logos, or personalized gifts, HD prints make your designs look more professional and eye-catching."
    },
    {
      title: "DISCHARGE PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/discharge.jpg",
      description: "Looking for a soft, vintage feel with vibrant colors? Discharge Printing is the perfect choice! This unique technique allows you to create bold designs with a soft, breathable finish that feels like part of the fabric itself. The ink becomes part of the fabric, ensuring long-lasting, vibrant colors that won’t fade or crack. Discharge printing is ideal for creating bold designs with a soft, natural feel. Whether you’re aiming for a retro vibe or a high-end fashion look, discharge prints deliver a unique, stylish appearance that sets your apparel apart."
    },
    {
      title: "PHTHALATE FREE PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/phthalate.jpg",
      description: "Looking for a safer, more eco-friendly printing option? Phthalate-Free Printing is the answer! This modern technique uses non-toxic inks, ensuring your designs are not only vibrant and durable but also safe for you and the environment. By avoiding toxic chemicals, phthalate-free inks reduce environmental impact, supporting a greener planet. Phthalate-free printing is perfect for eco-conscious brands, children’s clothing, and anyone seeking safer, high-quality prints. Whether you’re creating custom merchandise or fashionable apparel, choosing phthalate-free prints showcases your commitment to safety, sustainability, and style."
    },
    {
      title: "RIG SILICON PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/rig.jpg",
      description: "Rig Silicone Printing is a cutting-edge technique known for its premium finish and exceptional durability. This method uses high-quality silicone-based inks that create a smooth, rubbery texture with a slightly raised effect, giving your designs a modern and luxurious look. Highly resistant to cracking, peeling, and fading, ensuring vibrant designs wash after wash. Rig Silicone Printing is ideal for bold logos, detailed graphics, and premium clothing lines. Whether you’re designing streetwear, athletic gear, or luxury apparel, this technique offers unmatched durability, style, and comfort."
    },
    {
      title: "PHOTO PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/photo.jpg",
      description: "Turn your memories into wearable art with Photo Printing! Whether it’s a cherished moment, a favorite artwork, or a custom design, photo printing allows you to showcase vibrant, high-resolution images on your T-shirts with stunning clarity. Advanced color technology ensures vivid, accurate colors that don’t fade easily. Photo printing is ideal for personalized gifts, custom merchandise, or promotional apparel. Whether you want to celebrate a special occasion, promote your brand, or simply wear your favorite memories, photo prints are a creative and meaningful way to express yourself."
    },
    {
      title: "SUBLIMATION",
      imageSrc: "/Images/Prints-and-embroidery/Prints/sublimation.jpg",
      description: "Get vibrant, long-lasting designs with Sublimation Printing! Perfect for complex graphics, all-over prints, and bold colors, sublimation ensures your designs are crisp, detailed, and fade-resistant. Sublimation allows edge-to-edge designs, perfect for creating seamless patterns and bold graphics. Sublimation printing is ideal for full-color photographs, intricate patterns, custom merchandise, and sportswear. Whether you’re designing vibrant all-over prints or detailed graphics, sublimation offers limitless creativity with a premium finish.",
    },
    {
      title: "EMBOSSING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/embossing.jpg",
      description: "Looking to add a touch of elegance and sophistication to your designs? Embossing Print is the perfect choice! This premium technique gives your graphics a raised, three-dimensional effect, creating a textured look that’s both subtle and luxurious. Perfect for minimalist designs, embossing creates a classy and understated look. Embossing is ideal for high-end clothing lines, brand logos, or any design that requires a sophisticated, textured effect. Whether you’re looking to add elegance to your apparel or make a subtle statement, embossing print offers a refined and exclusive look."
    },
    {
      title: "3D SILICONE PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/3d-sillicon.jpg",
      description: "3D Silicone Printing is a cutting-edge technique that gives your designs a bold, raised effect with a sleek, rubbery texture. Known for its durability and modern look, this method creates a unique, tactile experience that makes your graphics literally stand out. he raised, glossy finish adds depth and dimension, making designs visually striking. Whether you’re creating a statement piece or enhancing your brand’s identity, 3D silicone prints offer a dynamic and contemporary look."
    },
    {
      title: "DIGITAL TRANSFER PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/digital.jpg",
      description: "Looking for a quick and versatile way to print vibrant designs on your T-shirts? Digital Transfer Printing is the perfect choice! This modern technique allows you to create detailed, full-color prints with exceptional accuracy and clarity. Suitable for small batches, custom designs, and on-demand printing with quick turnaround times. Digital Transfer Printing is ideal for personalized gifts, promotional apparel, and custom merchandise. Whether you’re looking to print detailed illustrations, colorful graphics, or photo-realistic designs, this method provides high-quality results with unmatched versatility."
    },
    {
      title: "REFLECTIVE PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/reflective.jpg",
      description: "Stand out, day or night, with Reflective Printing! This innovative technique enhances visibility and adds a stylish, futuristic look to your designs by reflecting light. Perfect for athletic wear, streetwear, and safety apparel, reflective prints combine functionality with fashion. Perfect for sportswear, work uniforms, and streetwear, reflective prints enhance visibility in low-light conditions. Whether you want to enhance visibility during night-time activities or create a bold, futuristic look, reflective prints offer a perfect blend of safety and style."
    },
    {
      title: "VINYL PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/vinyl.png",
      description: "Vinyl Printing is a popular and versatile technique known for its bold colors, sharp details, and durability. Perfect for custom logos, text, and simple graphics, vinyl printing offers a clean, high-quality finish that stands out. Vinyl prints are known for their bright, solid colors that don’t fade easily. Vinyl printing is great for custom T-shirts, sports jerseys, team uniforms, and promotional apparel. Whether you need bold branding, personalized names, or stylish logos, vinyl prints offer a clean and professional look with excellent durability."
    },
    {
      title: "ORGANIC PRINTING",
      imageSrc: "/Images/Prints-and-embroidery/Prints/organic.png",
      description: "Organic Printing is an eco-friendly method of decorating T-shirts using natural, non-toxic inks and sustainable practices. Unlike traditional printing techniques that rely on chemical-based dyes and synthetic materials, organic printing uses water-based, biodegradable inks made from natural ingredients. This ensures vibrant designs without harming the environment or irritating sensitive skin. Whether you’re designing custom apparel, promotional merchandise, or everyday wear, organic printing combines style, safety, and sustainability."
    },
  ]

  const [activeTab, setActiveTab] = useState("ourprints");

  const tabVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
    exit: { opacity: 0, },
  };

  return (
    <div>
      <HeroSection Title="Our Policies" ImageUrl="/Images/OurPolicy/hero_section.png" />
      <div className="container2">
        <div className="container3">
          <div className="tab-header mt-6">
            <button
              className={activeTab === "ourprints" ? "active" : ""}
              onClick={() => setActiveTab("ourprints")}
            >
              Our Prints
            </button>
            <button
              className={activeTab === "embroidery" ? "active" : ""}
              onClick={() => setActiveTab("embroidery")}
            >
              Embroidery
            </button>
          </div>
          {/* Animated Content */}
          {activeTab === "ourprints" && (
            <motion.div
              key="ourprints"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="border-t border-[#B5B5B5]"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              gap-x-4 gap-y-10 my-8 justify-items-center">
                {cardContent.map((card, index) => (
                  <AccordionCard
                    key={index}
                    title={card.title}
                    imageSrc={card.imageSrc}
                    description={card.description} />
                ))}
              </div>
            </motion.div>
          )}
          {/* Embroidery */}
          {activeTab === "embroidery" && (
            <motion.div
              key="embroidery"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="border-t border-[#B5B5B5]"></div>
              <div className="my-8 flex flex-col gap-16">
                {/* EMBROIDERY AND IT TYPES */}
                <div className="md:flex flex-1 gap-5 md:gap-0 md:justify-between">
                  <div className="flex flex-col w-full md:w-[30%] items-center md:justify-start">
                    <Image
                      src="/Images/Prints-and-embroidery/Embroidery/embroidery.png"
                      alt="404"
                      width={380}
                      height={395}
                    />
                  </div>
                  <div className="md:w-[65%] w-full flex flex-col justify-start gap-5">
                    <h2 className="text-left font-bold text-2xl uppercase">
                      EMBROIDERY AND IT TYPES
                    </h2>
                    <p className="text-justify cp3">
                      A timeless art of decorating fabric with needle and thread, embroidery adds texture, elegance, and personality to any design. From delicate hand-stitched patterns to intricate machine-made details, this craft enhances clothing, accessories, and home décor with unique artistry. Whether classic or modern, embroidery brings creativity to life with every stitch.
                    </p>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Hand Embroidery</p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Machine Embroidery</p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Digital Embroidery (Computerized Embroidery)</p>
                    </div>
                  </div>
                </div>
                {/* Hand Embroidery */}
                <div className="md:flex flex-1 gap-5 md:gap-0 md:justify-between">
                  <div className="md:hidden flex flex-col w-full md:w-[30%] items-center md:justify-start">
                    <Image
                      src="/Images/Prints-and-embroidery/Embroidery/hand-embroidery.png"
                      alt="404"
                      width={380}
                      height={395}
                    />
                  </div>
                  <div className="md:w-[65%] w-full flex flex-col justify-start gap-5">
                    <h2 className="text-left font-bold text-2xl uppercase">
                      Hand Embroidery
                    </h2>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Running Stitch – <span className="cp3">A simple, straight stitch used for outlines.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Chain Stitch – <span className="cp3">Creates a looped, textured effect.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Satin Stitch – <span className="cp3">Fills areas with smooth, dense stitching.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">French Knots – <span className="cp3">Small, raised knots for detailing.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Cross Stitch – <span className="cp3">X-shaped stitches forming patterns.</span></p>
                    </div>
                  </div>
                  <div className="md:flex flex-col w-full md:w-[30%] items-center hidden md:justify-start">
                    <Image
                      src="/Images/Prints-and-embroidery/Embroidery/hand-embroidery.png"
                      alt="404"
                      width={380}
                      height={395}
                    />
                  </div>
                </div>
                {/* Machine Embroidery */}
                <div className="md:flex flex-1 gap-5 md:gap-0 md:justify-between">
                  <div className="flex flex-col w-full md:w-[30%] items-center md:justify-start">
                    <Image
                      src="/Images/Prints-and-embroidery/Embroidery/machine-embroidery.png"
                      alt="404"
                      width={380}
                      height={395}
                    />
                  </div>
                  <div className="md:w-[65%] w-full flex flex-col justify-start gap-5">
                    <h2 className="text-left font-bold text-2xl uppercase">
                      Machine Embroidery
                    </h2>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Running Stitch – <span className="cp3">A simple, straight stitch used for outlines.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Flat Embroidery – <span className="cp3">Standard embroidery using a machine to create smooth, intricate designs.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">3D Puff Embroidery – <span className="cp3">Raised embroidery using foam for a 3D effect (popular on caps and jackets).</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Chenille Embroidery – <span className="cp3">Uses a looped, fuzzy texture (commonly seen in varsity jackets).</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Sequin & Bead Embroidery – <span className="cp3">Adds embellishments like sequins or beads for a decorative effect.</span></p>
                    </div>
                  </div>
                </div>
                {/* Digital Embroidery (Computerized Embroidery) */}
                <div className="md:flex flex-1 gap-5 md:gap-0 md:justify-between">
                  <div className="md:hidden flex flex-col w-full md:w-[30%] items-center md:justify-start">
                    <Image
                      src="/Images/Prints-and-embroidery/Embroidery/digital-embroidery.png"
                      alt="404"
                      width={380}
                      height={395}
                    />
                  </div>
                  <div className="md:w-[65%] w-full flex flex-col justify-start gap-5">
                    <h2 className="text-left font-bold text-2xl uppercase">
                      Digital Embroidery (Computerized Embroidery)
                    </h2>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Appliqué Embroidery – <span className="cp3">Fabric patches are stitched onto the base fabric for a layered look.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Laser Cut Embroidery – <span className="cp3">Designs are precision-cut using lasers before being stitched.</span></p>
                    </div>
                    <div className="flex gap-2 pl-1">
                      <p>•</p>
                      <p className="cp3b">Photo Stitch Embroidery – <span className="cp3">Creates detailed, realistic images using multiple thread shades</span></p>
                    </div>
                  </div>
                  <div className="md:flex flex-col w-full md:w-[30%] items-center hidden md:justify-start">
                    <Image
                      src="/Images/Prints-and-embroidery/Embroidery/digital-embroidery.png"
                      alt="404"
                      width={380}
                      height={395}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;