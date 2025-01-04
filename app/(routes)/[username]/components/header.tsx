import React from "react";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Welcome to Magnifique</h1>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  background: "linear-gradient(to right, #ff7e5f, #feb47b)",
  padding: "20px",
  textAlign: "center",
  color: "white",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "2.5rem",
};

export default Header;
