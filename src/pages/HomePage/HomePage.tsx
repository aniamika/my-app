import React, { FC } from "react";
import Resume from "../../components/Resume/Resume";
import Slider from "../../components/Slider/Slider";
import Workspaces from "../../components/Workspaces/Workspaces";


export const HomePage: FC = () => {
  return (
    <>
        <Slider />
        <Workspaces />
        <Resume />
    </>
  );
};
export default HomePage;
