import { Suspense, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows, Effects } from '@react-three/drei'
import { easing } from 'maath'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import CustomEffects from './Effects'
import HouseModel from './House'
import { Loading } from './Loading'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const { camera, scene } = useThree()

  const controlsRef = useRef()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <SoftShadows intensity={ 20 } />
      <Suspense fallback={ <Loading /> } >  
        <HouseModel position={ [ isMobile ? -3 :14, isMobile ? -10 : 0.75, 6 ] } scale={ 0.5 } />
      </Suspense>
      <OrbitControls target0={ [ -0.01, 0.4, 0.2 ] } ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
      <directionalLight />
      <ambientLight intensity={ 0.55 } />
      </>
  )
}