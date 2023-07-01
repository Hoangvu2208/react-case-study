import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Model from "../canvas/Model";
import "./about.css";
import { CustomButton } from "../components";
import { NavLink } from "react-router-dom";
import { useSnapshot } from 'valtio';

import { OrbitControls, Stats } from "@react-three/drei";
import state from '../store';

const About = () => {
	const snap = useSnapshot(state);
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 2], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-screen max-w-full h-screen transition-all ease-in absolute top-0 left-0"
      >
        <ambientLight intensity={0.5} />
        {/* Preset must be one of: apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
        <Environment preset="studio" background />

        <Model />

        <OrbitControls />
      </Canvas>
	  <div className="absolute top-36 right-5">
	  <NavLink to="/app">
	  <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
	  </NavLink>
	  
	  </div>
    </>
  );
};

export default About;
