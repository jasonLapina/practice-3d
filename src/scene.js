import {
  CameraControls,
  Cloud,
  Sky,
  Sparkles,
  Stars,
  Text3D,
  useAnimations,
  useGLTF,
} from "@react-three/drei";

import { useEffect, useRef } from "react";

const Scene = () => {
  const { scene: randy, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  );
  const camera = useRef(null);
  const { scene: jfc } = useGLTF(
    "https://d1bh4bdsrj0ehq.cloudfront.net/Worlds/world1.glb"
  );

  const randimations = useAnimations(animations, randy);

  useEffect(() => {
    randimations.actions.PortalOpen.play();
  }, []);

  return (
    <>
      <CameraControls ref={camera} />

      <directionalLight castShadow intensity={2} />
      <ambientLight />

      <Sparkles speed={0.5} color='orange' position-y={0.3} />
      <Sparkles speed={0.5} color='purple' position-y={0.3} />
      <Sky sunPosition={[0, -5, -200]} />
      <Cloud color='red' scale={[0.2, 0.2, 0.2]} position-y={-0.3} />
      <Stars />
      <Text3D font='/Super Spicy_Regular.json' position={[-3.5, 2, 0]}>
        Randiverse
        <meshNormalMaterial />
      </Text3D>
      <primitive castShadow object={randy} />

      {/* <Text3D font='/Super Spicy_Regular.json' position={[3.5, 2, 0]}>
        Utes
        <meshNormalMaterial />
      </Text3D> */}
      {/* <primitive
        castShadow
        object={pig}
        position={[5, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        ref={pigref}
      /> */}
      <primitive
        object={jfc}
        scale={[0.3, 0.3, 0.3]}
        position={[0, -1, -0.55]}
      />
    </>
  );
};

export default Scene;
