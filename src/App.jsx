import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import Experience from "./Experience";
import { SectionFive } from "./Sections/SectionFive";
import { SectionFour } from "./Sections/SectionFour";
import { SectionOne } from "./Sections/SectionOne";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense } from "react";
import { SectionSix } from "./Sections/SectionSix";
import { SectionSeven } from "./Sections/SectionSeven";
import { Section8 } from "./Sections/Section8";
import { Section9 } from "./Sections/Section9";
import { Section10 } from "./Sections/Section10";
import { Section11 } from "./Sections/Section11";
import { Section12 } from "./Sections/Section12";
import { Section13 } from "./Sections/Section13";
import { Section14 } from "./Sections/Section14";
import { Section15 } from "./Sections/Section15";
import { Section16 } from "./Sections/Section16";
import { Section17 } from "./Sections/Section17";
import { Section18 } from "./Sections/Section18";
import { Section19 } from "./Sections/Section19";
import { Section20 } from "./Sections/Section20";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">CHESS FACTS</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {

    return (
      <body>
        <div className="nav" >
          <h2>I I I</h2>
          <h1>CHESS FACTS</h1>
          <h2>Rainer</h2>
        </div>
        <div className="footer" ></div>
        <div className="background-box">
          <div className="circle" />
          <div className="box" />
        </div>
        <main className="main" >
            <LoadingScreen />
            <div  className="experience">
                <Suspense>
                <CanvasContainer />
                </Suspense>
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            <Section14 />
            <Section15 />
            <Section16 />
            <Section17 />
            <Section18 />
            
        </main>
        </body>
    )
}

export default App;