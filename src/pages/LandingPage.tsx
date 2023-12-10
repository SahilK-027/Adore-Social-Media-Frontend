import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logo from "../components/Logo";

const LandingPage = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, -10], fov: 35, near: 1, far: 1000 }}
    >
      <color attach="background" args={["transparent"]} />
      <ambientLight color={"#ffd2f2"} intensity={0.5} />
      <directionalLight
        color={"#ff7474"}
        position={[5, 5, -5]}
        intensity={0.8}
        castShadow
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
      <Logo />
      <Environment files="./maps/dam_wall_1k.hdr" background={false} blur={0} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping={true}
      />
    </Canvas>
  );
};

export default LandingPage;
