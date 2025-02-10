"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useState } from "react";

export default function DashboardHeader() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Logout failed:", error.message);
      } else {
        console.error("An unexpected error occurred during logout.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="dashboard-header">
      <h1>Dashboard</h1>
      <div>
        {user && <span>Welcome, {user.displayName || "User"}!</span>}
        <button onClick={handleLogout} disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </header>
  );
}
