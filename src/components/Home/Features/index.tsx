import Image from "next/image";
import { Featuresdata } from "@/app/api/data";

const Features = () => {
    return (
        <section>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative" id="features-section">
                <div className="bg-gradient-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/4 blur-390"></div>
                <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4 relative z-10">
                    {/* Column-1 */}
                    <div>
                        <h3 className="text-primary text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                        <h2 className="text-white text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
                            Powering the Future of Crypto Trading
                        </h2>
                        <p className="lg:text-lg font-normal text-white/60 text-center md:text-start">
                            NebulaXBT delivers cutting-edge tools, lightning-fast execution, and secure transactions to help you trade with confidence. 
                            Whether you're a beginner or a pro, our platform empowers you to take control of your crypto journey.
                        </p>
                    </div>
                    {/* Column-2 */}
                    <div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                            {Featuresdata.map((items, i) => (
                                <div className="bg-darkmode py-10 pr-12 pl-6 rounded-lg" key={i}>
                                    <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-fit p-5 flex items-center justify-center mb-10">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                    </div>
                                    <h5 className="text-white/80 text-lg font-medium mb-4">{items.heading}</h5>
                                    <p className="text-white/40 text-sm font-normal">{items.subheading}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
