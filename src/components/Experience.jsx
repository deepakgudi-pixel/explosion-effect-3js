import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Heart } from "./Heart";


export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false}/>
      <Float floatIntensity={5} speed={3}/>
       <Heart scale={0.45}/>
       <Environment preset="sunset" background blur={0.4}/>
    </>
  );
};
