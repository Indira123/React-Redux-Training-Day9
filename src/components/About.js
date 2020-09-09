import React from "react";
//import PropTypes from "prop-types";
import classes from "../styles/Aboutus.module.css";
import styled from "styled-components";
import '../styles/custom.css';

//Inline Style
const pStyle = {
  color: "red"
};

//Styled component
//npm install --save styled-components
const Paragraph = styled.p`
  font-size: 30px;
  text-align: center;
`;

const Aboutus = props => {
  return (
    <>
      <p className='pstyle'>1.Css Stylesheet</p>
      <p style={{ color: "red" }}>2.Inline style in element</p>
      <p style={pStyle}>2.Inline style with const</p>
      <p className={classes.pStyle}>3.Css Module import</p>
      <Paragraph>4.Styled Component css</Paragraph>
    </>
  );
};

// Aboutus.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number
// };
export default Aboutus;
