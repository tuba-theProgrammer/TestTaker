import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

useGLTF.preload('./assets/Model/robot_playground.glb');

export const Model = () => {
  const groupRef = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF('./assets/Model/robot_playground.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const experimentAction = actions["Experiment"];
    if (experimentAction) {
      experimentAction.play().paused = true;
    }
  }, [actions]);

  useFrame((state, delta) => {
    const experimentAction = actions["Experiment"];
    if (experimentAction) {
      experimentAction.time += delta;
      experimentAction.paused = false; // Ensure animation is not paused
    }
  });

  return (
    <group ref={groupRef} scale={[2, 2, 2]} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
};
