import React from "react";

function Footer() {
  return (
    <footer className="bg-light p-4 shadow-lg" id="footer">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;