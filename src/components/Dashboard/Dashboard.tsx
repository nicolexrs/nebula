"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { Card, Title, Text, Metric, Flex, Grid } from "@tremor/react";

const TradingViewWidget = dynamic(() => import("./TradingViewWidget"), { ssr: false });

const Dashboard = ({ userId, email }: { userId: string; email: string }) => {
  const [wallet, setWallet] = useState<{ balance: number; transactions: { type: string; amount: number }[] }>({
    balance: 0,
    transactions: [],
  });
  const [prices, setPrices] = useState<{ bitcoin?: { usd: number }; ethereum?: { usd: number } }>({});
  const [referralBonus, setReferralBonus] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    fetchWallet(userId);
    fetchCryptoPrices();
    fetchReferralBonus(userId);
    setLoading(false);
  }, [userId]);

  const fetchWallet = async (userId: string) => {
    try {
      const res = await axios.get(`/api/wallet/${userId}`);
      setWallet(res.data);
    } catch (error) {
      console.error("Error fetching wallet:", error);
    }
  };

  const fetchCryptoPrices = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
      );
      setPrices(res.data);
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  const fetchReferralBonus = async (userId: string) => {
    try {
      const res = await axios.get(`/api/referrals/${userId}`);
      setReferralBonus(res.data.bonus);
    } catch (error) {
      console.error("Error fetching referral bonus:", error);
    }
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <div className="p-6 space-y-6">
      
      <Text className="text-lg">Welcome, {email}</Text> {/* Updated Welcome Message */}
      
      {/* Trading Chart Card */}
      
        <TradingViewWidget />
     

      
    </div>
  );
};

export default Dashboard;
