import React from "react";

export default function Footer() {
  return (
    <footer className="fixed-bottom bg-dark text-white py-3">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © Your Website {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
