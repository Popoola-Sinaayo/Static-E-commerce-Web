import React from "react";
import Features from "./Features";
import "../css/body.css";
import image1 from "../assets/png/Mask group (2).png";
import image2 from "../assets/png/Mask group (3).png";
import image3 from "../assets/png/Mask group (4).png";
import leftPointer from "../assets/svg/Vector (30).svg";
import rightPointer from "../assets/svg/Vector (31).svg";
import gridImage1 from "../assets/png/Group 464.png";
import gridImage2 from "../assets/png/Group 465.png";
import gridImage3 from "../assets/png/Group 466.png";
import gridImage4 from "../assets/png/Group 467.png";
import gridImage5 from "../assets/png/Mask group (6).png";
import gridImage6 from "../assets/png/Mask group (7).png";
import gridImage7 from "../assets/png/Mask group (8).png";
import gridImage8 from "../assets/png/Group 419.png";
import gridImage9 from "../assets/png/Group 474.png";
import gridImage10 from "../assets/png/Group 475.png";
import gridImage11 from "../assets/png/Group 476.png";
import gridImage12 from "../assets/png/Group 477.png";
import gridImage13 from "../assets/png/Group 478.png";
import gridImage14 from "../assets/png/Group 479.png";
import gridImage15 from "../assets/png/Group 481.png";
import gridImage16 from "../assets/png/Group 482.png";
import gridImage17 from "../assets/png/Group 482.png";
import gridImage18 from "../assets/png/Group 484.png";
import gridImage19 from "../assets/png/Group 485.png";
import gridImage20 from "../assets/png/Group 486 (1).png";
import gridImage21 from "../assets/png/2-format43 1.png";

function Main() {
  return (
    <main>
      <section className="main__feature__container">
        <img className="left-icon" src={leftPointer} alt="left-icon" />
        <img className="right-icon" src={rightPointer} alt="right-icon" />
        <h1>Featured Collection</h1>
        <div className="main__feature__content-container">
          <Features
            image={image1}
            title="Air Insulated Switchgear"
            description="Ante mus blandit sapien sociosqu per consequat ad. Aenean
                habitasse interdum letius lobortis primis tortor."
          />
          <Features
            image={image2}
            title="Air Insulated Switchgear"
            description="Ante mus blandit sapien sociosqu per consequat ad. Aenean
                habitasse interdum letius lobortis primis tortor."
          />
          <Features
            image={image3}
            title="Air Insulated Switchgear"
            description="Ante mus blandit sapien sociosqu per consequat ad. Aenean
                habitasse interdum letius lobortis primis tortor."
          />
        </div>
      </section>
      <section className="main__products__container">
        <h1>Products</h1>
        <div className="main__products__content">
          <div>
            <img src={gridImage1} alt="gridImage" className="gridImage1" />
          </div>
          <div className="main__products__content-sub-grid">
            <div className="main__prodcutcs__content-inner-grid">
              <div>
                <img src={gridImage2} alt="gridImage" className="gridImage2" />
              </div>
              <div>
                <img src={gridImage3} alt="gridImage" className="gridImage3" />
              </div>
            </div>
            <div className="gridImage4__container">
              <img src={gridImage4} alt="gridImage" className="gridImage4" />
            </div>
          </div>
        </div>
      </section>
      <section className="main__services__container">
        <h1>Products</h1>
        <div className="main__services__content">
          <div>
            <img src={gridImage5} alt="grid" />
          </div>
          <div className="main__services__content-text">
            <h1>Measurement Service</h1>
            <p>
              Our sales support team will come & measure your property in order
              to ensure accuracy in design and help you calculate how many tiles
              you need. Please call our toll free number 800 122 22 20 to
              arrange a visit, or visit one of our Showrooms.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="main__services__content">
          <div className="main__services__content-text">
            <h1>Measurement Service</h1>
            <p>
              Our sales support team will come & measure your property in order
              to ensure accuracy in design and help you calculate how many tiles
              you need. Please call our toll free number 800 122 22 20 to
              arrange a visit, or visit one of our Showrooms.
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={gridImage6} alt="grid" />
          </div>
        </div>
        <div className="main__services__content">
          <div>
            <img src={gridImage7} alt="grid" />
          </div>
          <div className="main__services__content-text">
            <h1>Measurement Service</h1>
            <p>
              Our sales support team will come & measure your property in order
              to ensure accuracy in design and help you calculate how many tiles
              you need. Please call our toll free number 800 122 22 20 to
              arrange a visit, or visit one of our Showrooms.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section className="main__choose__container">
        <div className="main__choose__content">
          <div>
            <img src={gridImage8} alt="grid" />
          </div>
          <div className="main__choose__content-text">
            <h1>Why Choose US</h1>
            <p className="main__chose__content-text-1">
              Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis
              tempor consequat turpis. Aenean curae elementum vestibulum dapibus
              vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl
              taciti si platea dui. Euismod malesuada facilisis duis lobortis
              aliquet massa. Tincidunt vivamus ac consectetuer molestie
              pharetra. Sodales pulvinar non habitant.
            </p>
            <p>
              Nisl taciti si platea dui. Euismod malesuada facilisis duis
              lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie
              pharetra. Sodales pulvinar non habitant.
            </p>
            <ul>
              <li>SUSTAINABLY SOURCED</li>
              <li>EASY TO RECYCLE</li>
              <li>IMPROVED HOME RESALE VALUE</li>
              <li>A SMART WAY TO LEED CERTIFICATION</li>
            </ul>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section className="main__projects__container">
        <div className="main__projects__content">
          <div className="main__projects__content-header">
            <h1>Projects</h1>
            <button>All Projects</button>
          </div>
          <div className="main__projects__content-details">
            <div>
              <img src={gridImage9} alt="grid" />
            </div>
            <div>
              <img src={gridImage10} alt="grid" />
            </div>
            <div>
              <img src={gridImage11} alt="grid" />
            </div>
            <div>
              <img src={gridImage12} alt="grid" />
            </div>
            <div>
              <img src={gridImage13} alt="grid" />
            </div>
            <div>
              <img src={gridImage14} alt="grid" />
            </div>
          </div>
        </div>
      </section>
      <section className="project__selector__container">
        <div className="project__selector"></div>
        <div className="project__selector-active"></div>
        <div className="project__selector"></div>
        <div className="project__selector"></div>
      </section>
      <section className="main__newServices__container">
        <div className="main__newServices__content">
          <div className="main__newServices__content-header">
            <h1>Projects</h1>
          </div>
          <div className="main__newServices__content-details">
            <div>
              <img src={gridImage15} alt="grid" />
            </div>
            <div>
              <img src={gridImage16} alt="grid" />
            </div>
            <div>
              <img src={gridImage17} alt="grid" />
            </div>
            <div>
              <img src={gridImage18} alt="grid" />
            </div>
            <div>
              <img src={gridImage19} alt="grid" />
            </div>
            <div>
              <img src={gridImage20} alt="grid" />
            </div>
          </div>
        </div>
      </section>
      <section className="main__media__container">
        <h1>Latest Media</h1>
        <div className="main__media__content">
          <div className="main__media__content-details-1">
            <img src={gridImage21} alt="grid" />
            <div className="main__media__content-text">
              <h1>
                Alfanar exa corp innovation at Expo 2020 with the Italian
                Pavilion
              </h1>
              <p>
                Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin
                eros ullamcorper adipiscing penatibus habitant ex nascetur.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="main__media__subContent-1">
            <div className="main__media__content-details-2">
              <div className="main__media__content-text__container">
                <div className="main__media__content-text">
                  <h1>
                    Alfanar exa corp innovation at Expo 2020 with the Italian
                    Pavilion
                  </h1>
                  <p>
                    Sociosqu nostra ipsum curabitur lacus diam. Ipsum
                    sollicitudin eros ullamcorper adipiscing penatibus habitant
                    ex nascetur.
                  </p>
                  <button>Read More</button>
                </div>
              </div>

              <div className="main__media__content-text__container">
                <div className="main__media__content-text">
                  <h1>
                    Alfanar exa corp innovation at Expo 2020 with the Italian
                    Pavilion
                  </h1>
                  <p>
                    Sociosqu nostra ipsum curabitur lacus diam. Ipsum
                    sollicitudin eros ullamcorper adipiscing penatibus habitant
                    ex nascetur.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <div className="main__media__content-details-2">
              <div className="main__media__content-text__container">
                <div className="main__media__content-text">
                  <h1>
                    Alfanar exa corp innovation at Expo 2020 with the Italian
                    Pavilion
                  </h1>
                  <p>
                   Sociosqu nostra ipsum curabitur lacus diam. Ipsum
                    sollicitudin eros ullamcorper adipiscing penatibus habitant
                    ex nascetur.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="main__media__content-text__container">
                <div className="main__media__content-text">
                  <h1>
                    Alfanar exa corp innovation at Expo 2020 with the Italian
                    Pavilion
                  </h1>
                  <p>
                    Sociosqu nostra ipsum curabitur lacus diam. Ipsum
                    sollicitudin eros ullamcorper adipiscing penatibus habitant
                    ex nascetur.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__media__button__container">
        <button className="main__media__button">View All</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
