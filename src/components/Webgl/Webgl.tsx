import { Canvas } from "@react-three/fiber";
import { Environment, Float, Grid, OrbitControls } from "@react-three/drei";

import Logo from "./Logo.js";
// import { Perf } from "r3f-perf";

const Webgl = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, -10], fov: 35, near: 1, far: 1000 }}
    >
      <ambientLight color={"#ffd2f2"} intensity={0.5} />
      <directionalLight
        color={"#ff7474"}
        position={[5, 5, -5]}
        intensity={0.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        color={"#e8a768"}
        intensity={1}
        distance={10}
        decay={2}
        position={[0, 0, 0]}
      />
      <Float>
        <Logo />
      </Float>
      <Environment files="./maps/dam_wall_1k.hdr" background={false} blur={0} />
      <Grid
        sectionSize={1}
        sectionColor={"#ffabc6"}
        sectionThickness={1.0}
        cellSize={0.1}
        cellColor={"#ffabc6"}
        cellThickness={1.5}
        infiniteGrid
        fadeDistance={30}
        fadeStrength={5}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping={true}
        enableRotate={false}
      />
      {/* <Perf position={"bottom-left"} /> */}
    </Canvas>
  );
};

export default Webgl;
