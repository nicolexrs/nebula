"use client"; // ✅ Add this at the top

import { useEffect, useState } from "react";
import Image from "next/image";

interface CryptoData {
    id: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
}

const Table = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    
    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
                );
                const data = await res.json();
                setCryptoData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCryptoData();
        const interval = setInterval(fetchCryptoData, 5000); // Refresh every 30s
        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4" id="exchange-section">
                <div className="rounded-2xl bg-tablebg p-8 overflow-x-auto relative z-10">
                    <h3 className="text-white/80 text-2xl">Market analysis</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-border rounded-2xl">
                                <th className="px-4 py-4 font-normal rounded-s-lg">#</th>
                                <th className="px-4 py-4 text-start font-normal">NAME</th>
                                <th className="px-4 py-4 font-normal">PRICE</th>
                                <th className="px-4 py-4 font-normal">CHANGE 24H</th>
                                <th className="px-4 py-4 font-normal">MARKET CAP</th>
                                <th className="px-4 py-4 font-normal rounded-e-lg">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoData.map((item, index) => (
                                <tr key={item.id} className="border-b border-b-border">
                                    <td className="px-4 py-6 text-center text-white">{index + 1}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center gap-5">
                                        <Image src={item.image} alt={item.name} height={50} width={50} />
                                        {item.name}
                                    </td>
                                    <td className="px-4 py-6 text-center text-white">${item.current_price.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${item.price_change_percentage_24h < 0 ? 'text-primary' : 'text-secondary'}`}>
                                        {item.price_change_percentage_24h.toFixed(2)}%
                                    </td>
                                    <td className="px-4 py-6 text-center text-white">${item.market_cap.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${item.price_change_percentage_24h > 0 ? 'text-secondary' : 'text-primary'}`}>
                                        {item.price_change_percentage_24h > 0 ? "Buy" : "Sell"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} />
        </section>
    );
};

export default Table;
