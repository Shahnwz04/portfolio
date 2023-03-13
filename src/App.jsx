import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-primary">
        <div className="my-bg bg-cover bg-center">
          <Navbar />
          <Hero />
          <About />
        </div>
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
