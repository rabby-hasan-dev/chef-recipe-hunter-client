import React from 'react';
import banner1 from '../../../assets/Banner/Banner (1).jpg'
import banner2 from '../../../assets/Banner/Banner (2).jpg'
import banner3 from '../../../assets/Banner/Banner (3).jpg'
import banner4 from '../../../assets/Banner/Banner (4).jpg'
const BannerOne = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner4} className="w-full" />
                    <div className=" lg:mb-24 mb-24 text-white absolute top-16 bottom-1/2 md:top-1/4 xl:bottom-1 lg:top-20 xl:top-1/4 lg:bottom-1/2 left-0 md:left-10 lg:left-20 xl:left-1/4  p-2  xl:p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="lg:my-20 xl:my-20 mb-20 ">
                            <h1 className="text-2xl lg:text-4xl xl:text-4xl uppercase font-bold my-2 lg:my-3 xl:my-3">Well Come to our Chef and Recipe</h1>
                            <p className="xl:text-lg">Who is lover Food for this chef and recipe . Everyone Welcome for delicious food item</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner1} className="w-full" />
                    <div className=" lg:mb-24 mb-24 text-white absolute top-16 bottom-1/2 md:top-1/4 xl:bottom-1 lg:top-20 xl:top-1/4 lg:bottom-1/2 left-0 md:left-10 lg:left-20 xl:left-1/4  p-2  xl:p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="lg:my-20 xl:my-20 mb-20 ">
                            <h1 className="text-2xl lg:text-4xl xl:text-4xl uppercase font-bold my-2 lg:my-3 xl:my-3">Well Come to our Chef and Recipe</h1>
                            <p className="xl:text-lg">Who is lover Food for this chef and recipe . Everyone Welcome for delicious food item</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner2} className="w-full" />
                    <div className=" lg:mb-24 mb-24 text-white absolute top-16 bottom-1/2 md:top-1/4 xl:bottom-1 lg:top-20 xl:top-1/4 lg:bottom-1/2 left-0 md:left-10 lg:left-20 xl:left-1/4  p-2  xl:p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="lg:my-20 xl:my-20 mb-20 ">
                            <h1 className="text-2xl lg:text-4xl xl:text-4xl uppercase font-bold my-2 lg:my-3 xl:my-3">Well Come to our Chef and Recipe</h1>
                            <p className="xl:text-lg">Who is lover Food for this chef and recipe . Everyone Welcome for delicious food item</p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={banner3} className="w-full" />
                    <div className=" lg:mb-24 mb-24 text-white absolute top-16 bottom-1/2 md:top-1/4 xl:bottom-1 lg:top-20 xl:top-1/4 lg:bottom-1/2 left-0 md:left-10 lg:left-20 xl:left-1/4  p-2  xl:p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="lg:my-20 xl:my-20 mb-20 ">
                            <h1 className="text-2xl lg:text-4xl xl:text-4xl uppercase font-bold my-2 lg:my-3 xl:my-3">Well Come to our Chef and Recipe</h1>
                            <p className="xl:text-lg">Who is lover Food for this chef and recipe . Everyone Welcome for delicious food item</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    );
};

export default BannerOne;