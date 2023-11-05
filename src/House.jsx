import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";

export default function HouseModel(props) {
  const { nodes, materials } = useGLTF("./chess.glb");

  const { camera, scene } = useThree()

  const whitePawn5 = useRef()
  const blackPawn5 = useRef()
  const whiteHorse2 = useRef()
  const blackHorse = useRef()
  const whiteBishop2 = useRef()
  const blackHorse2 = useRef()
  const blackPawn4 = useRef()
  const blackPawn6 = useRef()
  const blackKing = useRef()
  const whiteQueen = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    // 1 MOVE E4

    tl
    .to(whitePawn5.current.position, {
      z: 0.43,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(".aone", { yPercent:'-10' , opacity: 0,
    scrollTrigger: {
        trigger: ".second-section",
        start:"top bottom",
        end: "top 90%", scrub: 1,
        immediateRender: false
     }})

     .to(".atwo", { yPercent:'-10' , opacity: 1,
     scrollTrigger: {
         trigger: ".second-section",
         start:"top center",
         end: "top 10%", scrub: 1,
         immediateRender: false
     }})

    // 2 MOVE E5

    .to(blackPawn5.current.position, {
      z: 0.43,
      scrollTrigger: {
        trigger: ".third-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(".athree", { yPercent:'-10' , opacity: 1,
    scrollTrigger: {
        trigger: ".third-section",
        start:"top center",
        end: "top 10%", scrub: 1,
        immediateRender: false
    }})

        // 3 MOVE KNIGHT F3

        .to(whiteHorse2.current.position, {
          z: -2.3,
          x: -8.8,
          scrollTrigger: {
            trigger: ".forth-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".afour", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".forth-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 4 MOVE KNIGHT C6

        .to(blackHorse.current.position, {
          z: 14.3,
          x: 7.65,
          scrollTrigger: {
            trigger: ".fifth-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".afive", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".fifth-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 5 MOVE BISHOP C4

        .to(whiteBishop2.current.position, {
          z: 3.3,
          x: 7.7,
          scrollTrigger: {
            trigger: ".sixth-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".asix", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".sixth-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        
        // 6 MOVE KNIGHT F6

        .to(blackHorse2.current.position, {
          z: 14.3,
          x: -8.75,
          scrollTrigger: {
            trigger: ".seventh-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".aseven", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".seventh-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

          // 7 MOVE KNIGHT G5

        .to(whiteHorse2.current.position, {
          z: 8.7,
          x: -14.3,
          scrollTrigger: {
            trigger: ".eight-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".aeight", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".eight-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 8 MOVE D5

        .to(blackPawn4.current.position, {
          z: 0.43,
          scrollTrigger: {
            trigger: ".nine-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".anine", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".nine-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 9 MOVE EXD5

        .to(whitePawn5.current.position, {
          z: 0.645,
          x: 0.215,
          scrollTrigger: {
            trigger: ".ten-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(blackPawn4.current.position, {
          y: -1,
          scrollTrigger: {
            trigger: ".ten-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(whitePawn5.current.position, {
          y: -1,
          scrollTrigger: {
            trigger: ".eleven-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".aten", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".ten-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 10 MOVE KNIGHT XD5

        .to(blackHorse2.current.position, {
          z: 8.7,
          x: 2,
          scrollTrigger: {
            trigger: ".eleven-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".aeleven", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".eleven-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 11 MOVE KNIGHT XF7

        .to(whiteHorse2.current.position, {
          z: 19.75,
          x: -8.8,
          scrollTrigger: {
            trigger: ".twelve-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(blackPawn6.current.position, {
          y: -1,
          scrollTrigger: {
            trigger: ".twelve-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".atwelve", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".twelve-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 12 MOVE KING XF7

        .to(blackKing.current.position, {
          z: 19.75,
          x: -8.8,
          scrollTrigger: {
            trigger: ".thirdteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(whiteHorse2.current.position, {
          y: -10,
          scrollTrigger: {
            trigger: ".thirdteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".athirdteen", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".thirdteen-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 13 MOVE QUEEN F3

        .to(whiteQueen.current.position, {
          z: -2.3,
          x: -8.8,
          scrollTrigger: {
            trigger: ".fourteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".afourteen", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".fourteen-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 14 MOVE KING E8

        .to(blackKing.current.position, {
          z: 25.3,
          x: -3.3,
          scrollTrigger: {
            trigger: ".fifthteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".afifthteen", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".fifthteen-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 15 MOVE BISHOP XD5

        .to(whiteBishop2.current.position, {
          z: 8.85,
          x: 2,
          scrollTrigger: {
            trigger: ".sixthteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(blackHorse2.current.position, {
          y: -10,
          scrollTrigger: {
            trigger: ".sixthteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".asixteen", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".sixthteen-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 16 MOVE KNIGHT D4

        .to(blackHorse.current.position, {
          z: 3.3,
          x: 2.2,
          scrollTrigger: {
            trigger: ".seventeen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".aseventeen", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".seventeen-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        // 17 MOVE QUEEN F7
        .to(whiteQueen.current.position, {
          z: 19.8,
          scrollTrigger: {
            trigger: ".eigthteen-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".aeightteen", { yPercent:'-10' , opacity: 1,
        scrollTrigger: {
            trigger: ".eightteen-section",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})


  }, [])

  return (
<group {...props} dispose={null}>
      <group
        position={[-19.802, 4.184, 19.746]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={25.581}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn1.geometry}
          material={materials.BlackNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn2.geometry}
          material={materials.BlackNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn3.geometry}
          material={materials.BlackNew}
        />
        <mesh
          ref={ blackPawn4 }
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn4.geometry}
          material={materials.BlackNew}
        />
        <mesh
          ref={ blackPawn5 }
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn5.geometry}
          material={materials.BlackNew}
        />
        <mesh
          ref={ blackPawn6 }
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn6.geometry}
          material={materials.BlackNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn7.geometry}
          material={materials.BlackNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn8.geometry}
          material={materials.BlackNew}
        />
      </group>
      <group position={[18.684, 4.184, -7.76]} scale={25.581}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn1.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn2.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn3.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn4.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          ref={ whitePawn5 }
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn5.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn6.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn7.geometry}
          material={materials.WhiteNew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn8.geometry}
          material={materials.WhiteNew}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-0.547, 3.182, 5.972]}
        scale={[25.1, 1, 25.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["BlackNew.001"]}
        position={[-19.874, 4.145, 3.272]}
        scale={[2.775, 0.299, 2.775]}
      />
      <mesh
        ref={ blackKing }
        castShadow
        receiveShadow
        geometry={nodes.BlackKing.geometry}
        material={materials.BlackNew}
        position={[-3.392, 4.184, 25.226]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={113.43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlackQueen.geometry}
        material={materials.BlackNew}
        position={[2.145, 4.184, 25.226]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={113.42}
      />
      <mesh
        ref={ blackHorse2 }
        castShadow
        receiveShadow
        geometry={nodes.BlackHorse2.geometry}
        material={materials.BlackNew}
        position={[-14.327, 4.184, 25.226]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[25.581, 24.128, 25.581]}
      />
      <mesh
        ref={ blackHorse }
        castShadow
        receiveShadow
        geometry={nodes.BlackHorse.geometry}
        material={materials.BlackNew}
        position={[13.09, 4.184, 25.226]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[25.581, 24.128, 25.581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlackRook.geometry}
        material={materials.BlackNew}
        position={[18.693, 4.184, 25.226]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={30.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlackBishop.geometry}
        material={materials.BlackNew}
        position={[7.602, 4.184, 25.226]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={30.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlackRook2.geometry}
        material={materials.BlackNew}
        position={[0, 4.184, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={30.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlackBishop2.geometry}
        material={materials.BlackNew}
        position={[-8.839, 4.184, 25.226]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={30.014}
      />
      <mesh
        ref={ whiteQueen }
        castShadow
        receiveShadow
        geometry={nodes.WhiteKing.geometry}
        material={materials.WhiteNew}
        position={[2.158, 4.184, -13.24]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={113.43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WhiteQueen.geometry}
        material={materials.WhiteNew}
        position={[0, 4.184, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={113.42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WhiteHorse.geometry}
        material={materials.WhiteNew}
        position={[0, 4.184, 0]}
        scale={[25.581, 24.128, 25.581]}
      />
      <mesh
        ref={ whiteHorse2 }
        castShadow
        receiveShadow
        geometry={nodes.WhiteHorse2.geometry}
        material={materials.WhiteNew}
        position={[-14.324, 4.184, -13.24]}
        scale={[25.581, 24.128, 25.581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WhiteRook2.geometry}
        material={materials.WhiteNew}
        position={[-19.927, 4.184, -13.24]}
        scale={30.014}
      />
      <mesh
        ref={ whiteBishop2 }
        castShadow
        receiveShadow
        geometry={nodes.WhiteBishop2.geometry}
        material={materials.WhiteNew}
        position={[-8.836, 4.184, -13.24]}
        scale={30.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WhiteRook.geometry}
        material={materials.WhiteNew}
        position={[18.696, 4.184, -13.24]}
        scale={30.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WhiteBishop.geometry}
        material={materials.WhiteNew}
        position={[7.605, 4.184, -13.24]}
        scale={30.014}
      />
    </group>
  );
}

useGLTF.preload("./chess.glb");