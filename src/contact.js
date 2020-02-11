import React from "react";

const Contact = () => {
  return (
    <div className="contentContainer contentArea">
      <div className="hoursContainer subsectionContainer">
        <h2 className="sectionTitle">
          CafeHours
        </h2>
        <p className="contentSection">
          Monday - Friday: 7 - 5:30<br/><br/>
          Saturday: 7 - 9:00<br/><br/>
          Sunday: 11 - 5:30<br/>
        </p>
      </div>
      <div className="locationContainer subsectionContainer">
        <h2 className="sectionTitle">
          Our Location
        </h2>
        <div className="locationMap">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1475.8376921761615!2d-83.74492280755015!3d42.28545228672461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1571769065815!5m2!1sen!2sus" 
            title="map of restaurant"
            width="600" 
            height="450" 
            styles={{frameborder:"0", style:"border:0;", allowfullscreen:""}} 
          />
        </div>
        <p className="contactContent">
          111 Detroit St. Ann Arbor, MI
        </p>
      </div>
      <div className="phoneContainer subsectionContainer">
        <h2 className="sectionTitle">
          Phone Number
        </h2>
        <p className="contactContent">
          734-333-333
        </p>
      </div>
    </div>
  );
};

export default Contact;
