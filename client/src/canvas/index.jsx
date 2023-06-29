import { Canvas } from "@react-three/fiber";
import { Environment,Center } from "@react-three/drei";
import Model from "./Model";
import CameraRig from "./CameraRig";
import { OrbitControls,Stats } from '@react-three/drei'

const CanvasModel = () => {
  return (
    <Canvas 
     shadows
    camera={{ position: [ 0, 0, 0], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    className="w-full max-w-full h-full transition-all ease-in"
    
    >
      <ambientLight intensity={0.5}/>
      {/* Preset must be one of: apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
      <Environment preset="studio" background blur={0.01} />

      <CameraRig>
        <Center>
          <Model />
        </Center>
      </CameraRig>
      {/* <OrbitControls/> */}
    </Canvas>

    
  )
}

export default CanvasModel