import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Box, ChakraProvider, Heading, Center } from "@chakra-ui/react";
import Scene from "./scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ChakraProvider>
      <Box
        pos='fixed'
        top='0'
        left='0'
        w='100%'
        h='100%'
        overflow='hidden'
        bgColor='#666'
      >
        <Canvas
          camera={
            {
              // position: [0, 2.3, 2.5],
            }
          }
          shadows
        >
          <Scene />
        </Canvas>
      </Box>
    </ChakraProvider>
  </>
);
