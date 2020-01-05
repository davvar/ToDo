import React from "react";

const Navbar = ({ color, children }) =>
  console.log("Navbar's 'console.log' will run only if color was changed") || (
    <div>
      <h2 style={{ color }}>{children}</h2>
    </div>
  );

export default Navbar;
