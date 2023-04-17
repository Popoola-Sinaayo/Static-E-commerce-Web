import React from 'react';
import logo from "../assets/svg/Vector (29).svg";
import "../css/footer.css";
import icon1 from "../assets/svg/Group 400.svg";
import icon2 from "../assets/svg/Group 401.svg"
import icon3 from "../assets/svg/Group 402.svg"
import footerImage1 from "../assets/png/Group 492.png"
import footerImage2 from "../assets/png/Group 494.png"

function Footer() {
  return (
    <footer>
        <section className="footer__section__1">
            <img src={logo} alt="logo"/>
            <p>Social Media</p>
            <div className="footer__media__container">
                <div>
                    <img src={icon1} alt="icon" />
                </div>
                <div>
                    <img src={icon2} alt="icon" />
                </div>
                <div>
                    <img src={icon3} alt="icon" />
                </div>
            </div>
            <p>Copyright@2023</p>
        </section>
        <section className="footer__section__2">
            <p>Products</p>
             <p>SandStone</p>
             <p>Stone</p>
             <p>Cement</p>
             <p>Salt Stone </p>
        </section>
        <section>
            <p>Services</p>
             <p>Measurement Service</p>
             <p>Product Advice</p>
             <p>Interior Design</p>
        </section>
        <section>
            <p>Contact Information</p>
             <p>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, </p>
             <p>An Nuzhah, Riyadh 12474,</p>
             <p>Saudi Arabia</p>
        </section>
        <section className="footer__picture__section">
            <img src={footerImage1} alt="footerImage" />
            <img src={footerImage2} alt="footerImage" />
            <img src={footerImage1} alt="footerImage" />
            <img src={footerImage2} alt="footerImage" />
            <img src={footerImage1} alt="footerImage" />
            <img src={footerImage1} alt="footerImage" />
        </section>
    </footer>
  )
}

export default Footer