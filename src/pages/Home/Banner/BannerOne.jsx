import React from 'react';

const BannerOne = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="/src/assets/Banner (1).jpg" className="w-full" />
                    <div className="carousel-caption d-none md:block tex-black">
                        <h5 >Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="/src/assets/Banner (2).jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="/src/assets/Banner (3).jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="/src/assets/Banner (4).jpg" className="w-full" />
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