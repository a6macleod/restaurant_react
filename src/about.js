import React from 'react';

const About = () => {
  return (
    <div className="contentContainer">
    <img 
      src={require("./images/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg")}
      alt="A cozy well lit coffee shop"
      className="backgroundImage"
    />

    <h2 className="sectionTitle">
      Our Mission!
    </h2>
    
    <p className="contentSection aboutContent">
      The Treat Factory is on a mission to change our community. Only through community engagment, interaction with, and being acted upon, can our meeting place bring the change our world needs. The Treat Factory is the seed crystal of change and we want to grow our crystal for the benefit of everyone.
    </p>

    <h2 className="sectionTitle">
      About Us!
    </h2>

    <p className="contentSection aboutContent">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorem, quam cupiditate consectetur maxime, magnam dicta vero maiores non, explicabo iusto sint consequatur. Sunt odit tempore nam quibusdam provident temporibus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reiciendis vel assumenda hic distinctio accusantium fuga voluptatem excepturi est mollitia. Maiores debitis qui consectetur. Vero laboriosam sapiente cumque quidem, aliquid.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati hic ab nihil ipsam labore, voluptatem quo nobis! Facilis perspiciatis, necessitatibus nemo magni doloremque consequatur, laboriosam ab rerum architecto, ullam corporis.
    </p>
    </div>
  );
};

export default About;
