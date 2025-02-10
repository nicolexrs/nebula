"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/orders">Orders</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
