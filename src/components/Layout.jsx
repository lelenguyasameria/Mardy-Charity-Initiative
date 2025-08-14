// src/components/Layout.jsx
import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="mt-8 px-6">{children}</main>
    </div>
  );
}

export default Layout;
