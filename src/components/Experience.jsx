import { OrbitControls, Shadow } from "@react-three/drei";
import { MeAvatar } from "../../MeAvatar";
import * as THREE from 'three'
import { R32 } from "../../R32";
import { NSX } from "../../NSX";
import { Scene } from "../../Scene";
export const Experience = () => {

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 3, 10]} intensity={0.4} />
      <MeAvatar />
      <NSX scale={[0.33,0.33,0.33]} position={[3.0,3.15,-1.2]} rotation={[0, -Math.PI/7, 0]} />
      <R32 scale={[0.1,0.1,0.1]} position={[2.4,3.3,-1.2]} rotation={[0, -Math.PI/10, 0]} />
      <Scene/>
    </>
  );
};
