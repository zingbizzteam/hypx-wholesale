import CapCard from '@/components/multi/CapCard'
import HeroSection from '@/components/multi/HeroSection'
import React from 'react'

function page() {
    return (
        <div>
            <HeroSection Title="Cap Customisations" ImageUrl="/Images/Our-fabrics/.png" />
            <div className="container1 py-8 md:py-12">
                <div className="container2">
                    <div className="container3">
                        {/* Closure of the cap */}
                        <div className="flex flex-col items-center justify-center ">
                            <p className="ch2 py-3">Closure of the cap</p>
                            <p className="cp3 text-justify">
                                We offer a wide range of closure options to
                                suit every style and fit preference. Choose
                                from classic snapback closures for an iconic
                                look, adjustable straps with metal buckles for
                                a premium finish, Velcro straps for quick and
                                easy fastening, or fitted styles for a sleek,
                                streamlined silhouette. Whether you’re creating
                                casual everyday caps or high-end statement pieces,
                                our closure options are built for durability, comfort, and versatility.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-6 py-8'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-[94%]'>
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'Adjustable Velcro'} />
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'Plastic Strap'} />
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'H-Buckle'} />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 w-[94%] md:w-[66%]'>
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'Full Closure'} />
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'Metal Buckle'} />
                            </div>
                        </div>

                        {/* Panels */}
                        <div className="flex flex-col items-center justify-center ">
                            <p className="ch2 py-3">Panels</p>
                            <p className="cp3 text-justify">
                                We offer customization in the number
                                of panels to help you achieve the perfect
                                look and fit for your caps. Choose from 5-panel
                                designs for a smooth, uninterrupted front—ideal
                                for bold prints and logos—or 6-panel constructions
                                for a more traditional, structured style. For
                                unique projects, we also provide specialty options
                                like 7-panel caps that create a distinct, modern
                                silhouette. Whatever your design vision, we have
                                the panel setup to match.
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-[94%] pt-8'>
                                <CapCard imageSrc={'/Images/About/cap.png'} label={'5 - Panel'} />
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'6 - Panel'} />
                                <CapCard imageSrc={'/Images/Our-fabrics/.png'} label={'7 - Panel'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
