import React, { useState } from 'react';
import { ShoppingBag, Heart, Package, Gift, Bell, Search } from 'lucide-react';

import { Sidebar } from './dashboard_comp/Sidebar.jsx';
import { StatCard } from './dashboard_comp/StatCard.jsx';
import { OrderCard } from './dashboard_comp/OrderCard.jsx';
import { WishlistItem } from './dashboard_comp/WishlistItem.jsx';
import { RecommendationCard } from './dashboard_comp/RecommendationCard.jsx';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');


  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-zinc-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Welcome back, Sarah!</h2>
              <p className="text-sm text-zinc-500 mt-1">Track your orders, manage wishlist, and explore new arrivals.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>
              <button className="relative p-2 hover:bg-zinc-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-zinc-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Orders"
              value="24"
              subtitle="3 in progress"
              icon={ShoppingBag}
            />
            <StatCard 
              title="Wishlist Items"
              value="12"
              subtitle="2 back in stock"
              icon={Heart}
              iconColor="text-red-500"
            />
            <StatCard 
              title="Reward Points"
              value="1,240"
              subtitle="$12.40 value"
              icon={Gift}
              iconColor="text-purple-500"
            />
            <StatCard 
              title="Total Spent"
              value="$2,459"
              subtitle="This year"
              icon={Package}
            />
          </div>

          {/* Recent Orders */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">Recent Orders</h3>
                <p className="text-sm text-zinc-500 mt-1">Track and manage your orders</p>
              </div>
              <button className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors">
                View All Orders
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <OrderCard 
                orderId="#ORD-1245"
                date="January 15, 2026"
                status="Shipped"
                total="$159.99"
                items={3}
                estimatedDelivery="Jan 20, 2026"
              />
              <OrderCard 
                orderId="#ORD-1238"
                date="January 10, 2026"
                status="Delivered"
                total="$89.99"
                items={2}
              />
              <OrderCard 
                orderId="#ORD-1221"
                date="January 5, 2026"
                status="Processing"
                total="$249.99"
                items={4}
                estimatedDelivery="Jan 22, 2026"
              />
              <OrderCard 
                orderId="#ORD-1215"
                date="December 28, 2025"
                status="Delivered"
                total="$129.99"
                items={2}
              />
            </div>
          </div>

          {/* Wishlist Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">Your Wishlist</h3>
                <p className="text-sm text-zinc-500 mt-1">Items you've saved for later</p>
              </div>
              <button className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <WishlistItem 
                id="1"
                name="Classic Denim Jacket"
                price="$89.99"
                image="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
                inStock={true}
              />
              <WishlistItem 
                id="2"
                name="White Cotton T-Shirt"
                price="$29.99"
                image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
                inStock={true}
              />
              <WishlistItem 
                id="3"
                name="Black Skinny Jeans"
                price="$79.99"
                image="https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
                inStock={false}
              />
              <WishlistItem 
                id="4"
                name="Summer Floral Dress"
                price="$99.99"
                image="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
                inStock={true}
              />
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Recommended For You</h3>
              <p className="text-sm text-zinc-500 mt-1">Based on your browsing history</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <RecommendationCard 
                name="Striped Button-Up Shirt"
                price="$49.99"
                image="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
                rating={5}
                reviews={128}
              />
              <RecommendationCard 
                name="High-Waisted Trousers"
                price="$69.99"
                image="https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=400"
                rating={4}
                reviews={89}
              />
              <RecommendationCard 
                name="Leather Ankle Boots"
                price="$139.99"
                image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"
                rating={5}
                reviews={234}
              />
              <RecommendationCard 
                name="Cozy Knit Sweater"
                price="$59.99"
                image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400"
                rating={4}
                reviews={156}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard