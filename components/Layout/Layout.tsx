// components/Layout/Layout.tsx
import React from "react";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookiePopup from "../CookiePopup";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <CookiePopup/>
      <Footer />
    </div>
  );
};

export default Layout;
