/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 src/models/NSX.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function NSX(props) {
  const { nodes, materials } = useGLTF('./src/models/NSX.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.691, 0.72, 1.748]} rotation={[-0.63, 0, Math.PI / 2]} scale={0.157}>
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.023']} />
      </group>
      <group position={[0.691, 0.72, 0.035]} rotation={[-0.63, 0, Math.PI / 2]} scale={0.157}>
        <mesh geometry={nodes.Object_41.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_42.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_43.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_44.geometry} material={materials['Material.023']} />
      </group>
      <group position={[-0.688, 0.72, 0.035]} rotation={[-2.511, 0, -Math.PI / 2]} scale={0.157}>
        <mesh geometry={nodes.Object_46.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_47.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_48.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_49.geometry} material={materials['Material.023']} />
      </group>
      <group position={[-0.688, 0.72, 1.748]} rotation={[-2.511, 0, -Math.PI / 2]} scale={0.157}>
        <mesh geometry={nodes.Object_51.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_52.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_53.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_54.geometry} material={materials['Material.023']} />
      </group>
      <group position={[0, 0.962, 2.039]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.010']} />
      </group>
      <group position={[0, 0.962, 2.039]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.013']} />
      </group>
      <group position={[0, 0.962, 2.039]}>
        <mesh geometry={nodes.Object_22.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0, 0.962, 2.039]}>
        <mesh geometry={nodes.Object_35.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Object_36.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.material_0} />
      </group>
      <mesh geometry={nodes.Object_29.geometry} material={materials['Material.017']} position={[0, 0.02, 0]} scale={[1.054, 1, 1]} />
      <mesh geometry={nodes.Object_31.geometry} material={materials['Material.016']} position={[0, 0.764, -0.429]} rotation={[-3.032, 0, -Math.PI]} scale={[-0.061, -0.053, -0.061]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Object_39.geometry} material={materials['Material.016']} position={[0, 0.739, 2.188]} rotation={[-0.006, 0, 0]} scale={[-0.061, -0.053, -0.061]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials['Material.010']} position={[-0.001, 0.701, 2.192]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.241, -0.093, -0.093]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials['Material.010']} position={[-0.001, 0.686, 2.178]} scale={[0.484, 0.124, 0.124]} />
    </group>
  )
}

useGLTF.preload('./src/models/NSX.gltf')
