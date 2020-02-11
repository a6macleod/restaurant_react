import React from "react";

const Menu = () => {
  return (
    <div className="contentContainer contentArea">
      <img
        src={require("./images/jordan-christian-Tl6vDa-JRaE-unsplash.jpg")}
        alt="A scone and lattee"
        className="backgroundImage"
      />
      <div className="coffeeSection menuSection">
        <h2 className="sectionTitle">
          Coffee
        </h2>
        <h3 className="menuItem">
          Pour Over $3
        </h3>
        <h3 className="menuItem">
          Cappucino $4
        </h3>
      </div>

      <div className="cookieSection menuSection">
        <h2 className="sectionTitle">
          Cookies
        </h2>
        <h3 className="menuItem">
          Oatmeal Chocolate Walnut $2
        </h3>
        <h3 className="menuItem">
          M&M Sugar Cookie $2
        </h3>
      </div>

      <div className="sconeSection menuSection">
        <h2 className="sectionTitle">
          Scones
        </h2>
        <h3 className="menuItem">
          Cheese Scone $3
        </h3>
        <h3 className="menuItem">
          Orange Scone $3
        </h3>
      </div>
    </div>
  );
};

export default Menu;
