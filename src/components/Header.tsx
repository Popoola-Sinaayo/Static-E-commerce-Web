import React, { useState } from "react";
import logo from "../assets/svg/Vector (29).svg";
import thumbNail from "../assets/png/Thumbnail.png";
import "../css/header.css";

const Header: React.FC = () => {
  return (
    <body className="header__body">
      <main className="header__container">
        <header>
          <img src={logo} alt="logo" />
        </header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Spaces</li>
            <li>Prodcuts & Services</li>
            <li>Showrooms</li>
            <li>Company</li>
            <li>Media</li>
            <li>Contact</li>
          </ul>
        </nav>
      </main>
      <section className="header__section">
        <div className="header__section__content">
          <h1 className="header__section__content__text-header">New generation ceramic tile</h1>
          <p className="header__section__content__text-content">
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
            aptent dapibus metus maecenas consequat. Elementum interdum a
            semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra
            sagittis sit aliquet at. Magna nam platea justo.
          </p>
          <button className="header__button">Learn More</button>
        </div>
        <div>
          <img src={thumbNail} alt="thumbnail" className="header__section__content__image" />
        </div>
          </section>
          <section className="header__selector__container">
              <div className="header__selector">
                  
              </div>
              <div className="header__selector-active">
                  
              </div>
              <div className="header__selector">
                  
        </div>
        <div className="header__selector">
                  
              </div>
          </section>
    </body>
  );
};

export default Header;
