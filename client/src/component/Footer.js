import React from 'react';

var style = {
  // backgroundColor: "#F8F8F8",
  // borderTop: "1px solid #E7E7E7",
  // textAlign: "center",
  // padding: "20px",
   position: "fixed",
  // left: "0",
  bottom: "0",
  // height: "120px",
  width: "100%",
};

const Footer = () => {

  return (
    
    <div style={style}>


      <div className="ui inverted  grey vertical footer segment">
        <div className="ui center aligned container">
          <h4 className="ui inverted header">&copy; Copyright 2022 | All rights reserved </h4>
          <a href="https://www.facebook.com/"><i className="facebook square icon big"></i></a>
          <a href="https://twitter.com/"><i className="twitter square icon big"></i></a>
          <a href="https://www.linkedin.com/company/c"><i className="linkedin square icon big"></i></a>
        </div>
      </div>
    </div>
  );
};
export default Footer;