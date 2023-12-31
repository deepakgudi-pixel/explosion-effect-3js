/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/heart.glb -o src/components/Heart.jsx -r public -k
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Heart(props) {
  const { nodes, materials } = useGLTF("/models/heart.glb");
  const group = useRef();

  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      //calculate distance
      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(3));
    });
  }, []);

  const scrollData = useScroll();

  useFrame(()=>{
    group.current.children.forEach((mesh)=>{


      //removing the core model
      if(scrollData.offset < 0.0001){
        if(mesh.name === 'origin'){
          mesh.visible = true;
        } else {
          mesh.visible = false;
        } 
      } else {
        if(mesh.name === 'origin'){
          mesh.visible = false;
        }else{
          mesh.visible = true;
        }
      }

      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset,
      )

      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset,
      )

      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset,
      )

    })
  })

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        name="Heart_Full_cell001"
        geometry={nodes.Heart_Full_cell001.geometry}
        material={materials.Red}
        position={[0.66, -0.14, 0.32]}
      />
      <mesh
        name="Heart_Full_cell002"
        geometry={nodes.Heart_Full_cell002.geometry}
        material={materials.Red}
        position={[0.32, -0.47, -0.27]}
      />
      <mesh
        name="Heart_Full_cell003"
        geometry={nodes.Heart_Full_cell003.geometry}
        material={materials.Red}
        position={[-0.45, -0.03, 0.43]}
      />
      <mesh
        name="Heart_Full_cell004"
        geometry={nodes.Heart_Full_cell004.geometry}
        material={materials.Red}
        position={[-0.55, 0.24, 0.41]}
      />
      <mesh
        name="Heart_Full_cell005"
        geometry={nodes.Heart_Full_cell005.geometry}
        material={materials.Red}
        position={[0.14, 0.02, -0.16]}
      />
      <mesh
        name="Heart_Full_cell006"
        geometry={nodes.Heart_Full_cell006.geometry}
        material={materials.Red}
        position={[-0.38, 0.02, -0.44]}
      />
      <mesh
        name="Heart_Full_cell007"
        geometry={nodes.Heart_Full_cell007.geometry}
        material={materials.Red}
        position={[-0.67, 0.34, 0.23]}
      />
      <mesh
        name="Heart_Full_cell008"
        geometry={nodes.Heart_Full_cell008.geometry}
        material={materials.Red}
        position={[-0.44, 0.46, -0.25]}
      />
      <mesh
        name="Heart_Full_cell009"
        geometry={nodes.Heart_Full_cell009.geometry}
        material={materials.Red}
        position={[-0.15, -0.11, 0.25]}
      />
      <mesh
        name="Heart_Full_cell010"
        geometry={nodes.Heart_Full_cell010.geometry}
        material={materials.Red}
        position={[-0.26, -0.37, -0.25]}
      />
      <mesh
        name="Heart_Full_cell013"
        geometry={nodes.Heart_Full_cell013.geometry}
        material={materials.Red}
        position={[0.75, -0.27, 0]}
      />
      <mesh
        name="Heart_Full_cell014"
        geometry={nodes.Heart_Full_cell014.geometry}
        material={materials.Red}
        position={[-0.56, 0.19, -0.32]}
      />
      <mesh
        name="Heart_Full_cell015"
        geometry={nodes.Heart_Full_cell015.geometry}
        material={materials.Red}
        position={[0.43, 0.13, -0.16]}
      />
      <mesh
        name="Heart_Full_cell016"
        geometry={nodes.Heart_Full_cell016.geometry}
        material={materials.Red}
        position={[-0.14, 0.19, -0.36]}
      />
      <mesh
        name="Heart_Full_cell017"
        geometry={nodes.Heart_Full_cell017.geometry}
        material={materials.Red}
        position={[0.44, -0.54, 0.16]}
      />
      <mesh
        name="Heart_Full_cell019"
        geometry={nodes.Heart_Full_cell019.geometry}
        material={materials.Red}
        position={[-0.03, -0.73, 0.2]}
      />
      <mesh
        name="Heart_Full_cell020"
        geometry={nodes.Heart_Full_cell020.geometry}
        material={materials.Red}
        position={[-0.03, 0.35, 0]}
      />
      <mesh
        name="Heart_Full_cell021"
        geometry={nodes.Heart_Full_cell021.geometry}
        material={materials.Red}
        position={[-0.16, 0.26, 0.31]}
      />
      <mesh
        name="Heart_Full_cell022"
        geometry={nodes.Heart_Full_cell022.geometry}
        material={materials.Red}
        position={[-0.43, -0.44, 0.3]}
      />
      <mesh
        name="Heart_Full_cell023"
        geometry={nodes.Heart_Full_cell023.geometry}
        material={materials.Red}
        position={[0.65, 0.08, 0.24]}
      />
      <mesh
        name="Heart_Full_cell024"
        geometry={nodes.Heart_Full_cell024.geometry}
        material={materials.Red}
        position={[-0.71, 0.09, 0]}
      />
      <mesh
        name="Heart_Full_cell026"
        geometry={nodes.Heart_Full_cell026.geometry}
        material={materials.Red}
        position={[0.51, 0.39, 0.04]}
      />
      <mesh
        name="Heart_Full_cell027"
        geometry={nodes.Heart_Full_cell027.geometry}
        material={materials.Red}
        position={[0.62, -0.3, -0.27]}
      />
      <mesh
        name="Heart_Full_cell028"
        geometry={nodes.Heart_Full_cell028.geometry}
        material={materials.Red}
        position={[-0.75, -0.16, 0.28]}
      />
      <mesh
        name="Heart_Full_cell030"
        geometry={nodes.Heart_Full_cell030.geometry}
        material={materials.Red}
        position={[0.13, -0.75, -0.08]}
      />
      <mesh
        name="Heart_Full_cell031"
        geometry={nodes.Heart_Full_cell031.geometry}
        material={materials.Red}
        position={[-0.45, 0.45, -0.08]}
      />
      <mesh
        name="Heart_Full_cell033"
        geometry={nodes.Heart_Full_cell033.geometry}
        material={materials.Red}
        position={[0.29, -0.31, 0.47]}
      />
      <mesh
        name="Heart_Full_cell035"
        geometry={nodes.Heart_Full_cell035.geometry}
        material={materials.Red}
        position={[0.28, -0.31, 0.01]}
      />
      <mesh
        name="Heart_Full_cell036"
        geometry={nodes.Heart_Full_cell036.geometry}
        material={materials.Red}
        position={[-0.3, -0.71, 0.2]}
      />
      <mesh
        name="Heart_Full_cell037"
        geometry={nodes.Heart_Full_cell037.geometry}
        material={materials.Red}
        position={[0.25, 0.01, 0.39]}
      />
      <mesh
        name="Heart_Full_cell039"
        geometry={nodes.Heart_Full_cell039.geometry}
        material={materials.Red}
        position={[0.39, 0.35, -0.28]}
      />
      <mesh
        name="Heart_Full_cell040"
        geometry={nodes.Heart_Full_cell040.geometry}
        material={materials.Red}
        position={[-0.2, -0.71, -0.05]}
      />
      <mesh
        name="Heart_Full_cell041"
        geometry={nodes.Heart_Full_cell041.geometry}
        material={materials.Red}
        position={[0.77, 0.05, -0.17]}
      />
      <mesh
        name="Heart_Full_cell042"
        geometry={nodes.Heart_Full_cell042.geometry}
        material={materials.Red}
        position={[0.1, -0.2, -0.41]}
      />
      <mesh
        name="Heart_Full_cell043"
        geometry={nodes.Heart_Full_cell043.geometry}
        material={materials.Red}
        position={[0.42, -0.01, -0.41]}
      />
      <mesh
        name="Heart_Full_cell044"
        geometry={nodes.Heart_Full_cell044.geometry}
        material={materials.Red}
        position={[-0.16, -0.44, 0.48]}
      />
      <mesh
        name="Heart_Full_cell045"
        geometry={nodes.Heart_Full_cell045.geometry}
        material={materials.Red}
        position={[0.09, -0.57, 0.4]}
      />
      <mesh
        name="Heart_Full_cell046"
        geometry={nodes.Heart_Full_cell046.geometry}
        material={materials.Red}
        position={[0.49, -0.34, 0.41]}
      />
      <mesh
        name="Heart_Full_cell047"
        geometry={nodes.Heart_Full_cell047.geometry}
        material={materials.Red}
        position={[-0.71, -0.33, -0.06]}
      />
      <mesh
        name="Heart_Full_cell048"
        geometry={nodes.Heart_Full_cell048.geometry}
        material={materials.Red}
        position={[-0.38, 0.35, 0.18]}
      />
      <mesh
        name="Heart_Full_cell049"
        geometry={nodes.Heart_Full_cell049.geometry}
        material={materials.Red}
        position={[0.74, -0.14, -0.33]}
      />
      <mesh
        name="Heart_Full_cell050"
        geometry={nodes.Heart_Full_cell050.geometry}
        material={materials.Red}
        position={[0.06, 0.31, -0.31]}
      />
      <mesh
        name="Heart_Full_cell051"
        geometry={nodes.Heart_Full_cell051.geometry}
        material={materials.Red}
        position={[0.72, 0.15, -0.01]}
      />
      <mesh
        name="Heart_Full_cell052"
        geometry={nodes.Heart_Full_cell052.geometry}
        material={materials.Red}
        position={[0.04, -0.6, -0.27]}
      />
      <mesh
        name="Heart_Full_cell053"
        geometry={nodes.Heart_Full_cell053.geometry}
        material={materials.Red}
        position={[0.86, 0, 0.14]}
      />
      <mesh
        name="Heart_Full_cell054"
        geometry={nodes.Heart_Full_cell054.geometry}
        material={materials.Red}
        position={[0.78, 0.27, 0.24]}
      />
      <mesh
        name="Heart_Full_cell055"
        geometry={nodes.Heart_Full_cell055.geometry}
        material={materials.Red}
        position={[-0.06, -0.33, 0.5]}
      />
      <mesh
        name="Heart_Full_cell056"
        geometry={nodes.Heart_Full_cell056.geometry}
        material={materials.Red}
        position={[0.7, 0.19, -0.31]}
      />
      <mesh
        name="Heart_Full_cell057"
        geometry={nodes.Heart_Full_cell057.geometry}
        material={materials.Red}
        position={[-0.63, -0.2, -0.37]}
      />
      <mesh
        name="Heart_Full_cell058"
        geometry={nodes.Heart_Full_cell058.geometry}
        material={materials.Red}
        position={[0.51, 0.24, -0.4]}
      />
      <mesh
        name="Heart_Full_cell059"
        geometry={nodes.Heart_Full_cell059.geometry}
        material={materials.Red}
        position={[0.54, 0.25, 0.34]}
      />
      <mesh
        name="Heart_Full_cell060"
        geometry={nodes.Heart_Full_cell060.geometry}
        material={materials.Red}
        position={[-0.14, 0.14, 0.44]}
      />
      <mesh
        name="origin"
        geometry={nodes.origin.geometry}
        material={materials.Red}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={179.94}
      />
    </group>
  );
}

useGLTF.preload("/models/heart.glb");
