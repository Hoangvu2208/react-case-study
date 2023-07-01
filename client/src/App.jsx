import CanvasModel from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { useAuth } from "./contexts/AuthContext";
import { useSnapshot } from "valtio";
import state from "./store";
import { NavLink } from "react-router-dom";

function App() {
  const captureRef = useRef(null);
  const { user } = useAuth();
  const snap = useSnapshot(state);

  const captureScreenshot = () => {
    html2canvas(captureRef.current).then((canvas) => {
      // Create Url
      const screenshotUrl = canvas.toDataURL();

      // create <a> element
      const link = document.createElement("a");
      link.href = screenshotUrl;
      link.download = `${user.name}'s_shirt.png`;

      // add click event
      link.click();
    });
  };

  return (
    <main className="app transition-all ease-in flex-row">
      <Home />
      <div className="w-full h-full" ref={captureRef}>
        <CanvasModel />
      </div>
      <Customizer />

      <button
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute top-36 right-5 ${
          snap.intro ? "hidden" : ""
        }`}
        onClick={captureScreenshot}
      >
        Take a shot
      </button>

      <NavLink to="/about">
        <button
          className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute top-36 left-5 ${
            snap.intro ? "hidden" : ""
          }`}
         
        >
          view 360
        </button>
      </NavLink>
    </main>
  );
}

export default App;
