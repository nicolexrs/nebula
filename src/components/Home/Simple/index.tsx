const Simple = () => {
    return (
        <section className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10">
            <div className="">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
                    <h3 className="text-center text-white text-3xl lg:text-5xl font-semibold mb-6">
                        The Fast, Secure, and Easy Way <br /> to Trade Crypto
                    </h3>
                    <p className="text-center text-white/40 text-lg font-normal mb-8">
                        Buy, sell, and trade your favorite cryptocurrencies effortlessly with NebulaXBT. 
                        Experience a seamless, secure, and intuitive platform designed for both beginners and experts.
                    </p>
                    <div className="flex justify-center">
                        <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl'>
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Simple;
