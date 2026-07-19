import buildingImage from "../assets/buildingImage.png";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function BuildingBackground({ children }: Props) {
  const backgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${buildingImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  };

  return (
    <div style={backgroundStyle}>{children}</div>
  );
}

export default BuildingBackground;