import React from 'react';

const Brands = () => {
    const brandLogos = [
        { name: 'CHANEL', image: '/brand/ChanelLogo.png' },
        { name: 'DIOR', image: '/brand/DiorLogo.png' },
        { name: 'CAROLINA HERRERA', image: '/brand/downloadG.jpg' },
        { name: 'GUCCI', image: '/brand/download H.jpg' },
        { name: 'JIMMY CHOO', image: '/brand/ogo.avif' },
        { name: 'LANCÔME', image: '/brand/logo.avif' },
        // { name: 'PRADA', image: '/brand/prada.png' },
        // { name: 'RABANNE', image: '/brand/rabanne.png' },
        // { name: 'YVES SAINT LAURENT', image: '/brand/yves_saint_laurent.png' },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-center text-3xl font-bold mb-6">Trending Brands</h2>
            <div className="flex flex-wrap justify-center gap-6 pb-10">
                {/* Display brand logos */}
                {brandLogos.map((brand) => (
                    <div key={brand.name} className="flex items-center justify-center">
                        <img
                        
                            src={brand.image}
                            alt={brand.name}
                            className="h-20 w-40 object-contain gap-5"
                        />
                    </div>
                ))}
            </div>
            <div className="bg-red-600 text-white py-10">
                <div className="text-center max-w-lg mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">BECOME A MEMBER</h2>
                    <p className="mb-6">
                        Keep updated about new launches, fragrance tips and news, as well as
                        receiving free delivery, exclusive offers and discounts on your favorite brands.
                    </p>
                    <button className="bg-white text-red-600 px-6 py-2 font-semibold rounded mb-4">
                        FREE SIGN UP
                    </button>
                    <p>
                        <a
                            href="#"
                            className="text-white underline"
                        >
                            Already a Member? Log in
                        </a>
                    </p>
                </div>
                </div>
        </div>
    );
};

export default Brands;
