import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
                
                {/* Left Content */}
                <div className="md:w-1/2 space-y-5">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Welcome to <span className="text-indigo-600">Your Store</span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl">
                        Best products, best prices — all in one place.  
                        Shop smart. Live better.
                    </p>

                    <div className="space-x-4">
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
                            Shop Now
                        </button>
                        <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img 
                        src="https://i.ibb.co.com/zVwP7yyc/andrei-ianovskii-MUBl-Gf-PIu4g-unsplash.jpg" 
                        alt="Hero" 
                        className="rounded-2xl shadow-xl w-80 md:w-[420px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
