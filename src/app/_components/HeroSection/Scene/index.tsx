'use client';
import { Canvas } from "@react-three/fiber";
import { Model } from "../Model";
import { Suspense } from "react";
import { OrbitControls, useProgress, Html } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % Loading</Html>;
}

export default function Scene() {
  return (
    <>
      {/* Container for the scene */}
      <div className="h-[500px] w-[500px] flex items-center justify-center">
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <directionalLight position={[-5, -5, 5]} intensity={10} />
          <Suspense fallback={<Loader />}>
            {/* Display the Model with larger size */}
            <Model />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
