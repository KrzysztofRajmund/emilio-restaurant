import React from "react";
import HeaderJumbotron from "../Home/HeaderJumbotron";

const Menu = () => {
  return (
    <React.Fragment>
           {window.location.pathname === "/menu" ?  <HeaderJumbotron/> : "" }
      <div>Menu</div>
    </React.Fragment>
  );
};

export default Menu;
