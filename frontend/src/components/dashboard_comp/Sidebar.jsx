import React from 'react';
import { 
  Home, 
  ShoppingBag, 
  Heart, 
  User, 
  CreditCard,
  MapPin,
  Bell,
  HelpCircle
} from "lucide-react";


const navItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'orders', label: 'My Orders', icon: ShoppingBag },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  { id: 'addresses', label: 'Addresses', icon: MapPin },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'help', label: 'Help & Support', icon: HelpCircle },];

export const Sidebar = ({ activeTab, onTabChange }) => {

  return (
    <aside className="sidebar">
      <ul>
        {navItems.map((navItem) => (
          <li
            key={navItem}
            className={activeTab === navItem ? "active" : ""}
            onClick={() => onTabChange(navItem)}
          >
          </li>
        ))}
      </ul>
    </aside>
  );
}

