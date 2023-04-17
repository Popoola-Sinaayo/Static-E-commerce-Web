import React from "react"
import "../css/body.css"
import image1 from "../assets/png/Mask group (2).png";

interface FeatureProps {
    title: string,
    description: string,
    image: string
}

const Features: React.FC<FeatureProps> = ({title, description, image}) => {
    return (
        <div className="main__feature">
            <div className="main__feature__content">
              <img src={image} alt="" />
                <h1>{title }</h1>
              <p>
                {description}
              </p>
              <button>View Collection</button>
            </div>
          </div>
    )
}

export default Features