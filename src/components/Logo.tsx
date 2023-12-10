import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Logo() {
    const { scene } = useGLTF("/models/adore3.glb");

    const mousePos = useRef({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });
    const logoRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
            mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Update the target rotation based on the mouse position
            targetRotation.current.x = mousePos.current.y;
            targetRotation.current.y = mousePos.current.x;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useFrame(({ clock }) => {
        // Apply damping to the rotation
        logoRef.current.rotation.x +=
            (targetRotation.current.x - (logoRef.current?.rotation.x ?? 0)) * 0.1;
        logoRef.current.rotation.y +=
            (targetRotation.current.y - (logoRef.current?.rotation.y ?? 0)) * 0.1;

        const scaleProgress = Math.min(clock.getElapsedTime() * 1.5, 1.0);
        const scaleFactorX = scaleProgress * 0.0947;
        const scaleFactorYZ = scaleProgress * 0.1;
        logoRef.current?.scale.set(scaleFactorX, scaleFactorYZ, scaleFactorYZ);
    });

    return (
        <primitive
            ref={logoRef}
            position={[0, 0.5, 0]}
            scale={[0.0, 0.0, 0.0]}
            object={scene}
        />
    );
}

export default Logo
