import {
  Cloud,
  OrbitControls,
  Sky,
  Sparkles,
  Stars,
  Text,
  Text3D,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useEffect, useRef } from "react";

const Scene = () => {
  const pigref = useRef(null);
  const { scene: randy, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  );

  const { scene: pig } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/skunk/model.gltf"
  );

  const randimations = useAnimations(animations, randy);

  useEffect(() => {
    randimations.actions.PortalOpen.play();
  }, []);

  useFrame((state, delta) => {
    pigref.current.rotation.y += delta * 0.4;
  });

  return (
    <>
      <OrbitControls />

      <directionalLight castShadow intensity={2} />
      <ambientLight />

      <Sparkles speed={0.5} color='orange' position-y={0.3} />
      <Sparkles speed={0.5} color='purple' position-y={0.3} />
      <Sky sunPosition={[0, -5, -200]} />
      <Cloud scale={[0.2, 0.2, 0.2]} position-y={-0.3} />
      <Stars />
      <Text3D font='/Super Spicy_Regular.json' position={[-2.1, 2, 0]}>
        Randy
        <meshNormalMaterial />
      </Text3D>
      <primitive castShadow object={randy} />

      <Text3D font='/Super Spicy_Regular.json' position={[3.5, 2, 0]}>
        Utes
        <meshNormalMaterial />
      </Text3D>
      <primitive
        castShadow
        object={pig}
        position={[5, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        ref={pigref}
      />
    </>
  );
};

export default Scene;
