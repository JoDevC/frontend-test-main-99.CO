import "./styles.css";
import { useState } from "react";

export default function ListingAd({ pic, title, address, description, psf_min, psf_max, subprice_label, availabilities_label }) {
  const [showDescription, setShowDescription] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  const anonymizePhoneNumber = (number) => {
    return number.length === 8 ? `${number.slice(0, 4)} XXXX` : number;
  };

  const handleDescriptionToggle = () => {
    setShowDescription(!showDescription);
  };

  const handlePhoneToggle = () => {
    setPhoneVisible(!phoneVisible);
  };

  const formattedDescription = description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
  <div className="container">
    <img className="mainPic" width="500" height="300" src={pic} alt="Listing" />
      <div className="mainContent">
        <div className="info-section">
          <h1 className="title">{title}</h1>
          <p className="address">{address}</p>
          <p className="price">
            {`${psf_min} - ${psf_max} psf`}
            <br />
            {subprice_label}
          </p>
            <p className="availability">{availabilities_label}</p>
        </div>
          <div className="description-section">
            <button className="description-button" onClick={handleDescriptionToggle}>See description</button>
              {showDescription && (
                <div className="description-box">
                  <p>
                    Phone number:{" "}
                    <span onClick={handlePhoneToggle} style={{ cursor: 'pointer', color: 'blue' }}>
                    {phoneVisible ? "8234 5678" : anonymizePhoneNumber("82345678")}
                    </span>
                  </p>
                {formattedDescription}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}