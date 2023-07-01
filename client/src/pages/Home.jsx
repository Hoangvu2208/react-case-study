import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { useAuth } from "../contexts/AuthContext";
import state from "../store";
import CustomButton from "../components/CustomButton";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { NavLink } from 'react-router-dom';

const Home = () => {
  const snap = useSnapshot(state);
  const { user } = useAuth();

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.div {...slideAnimation("down")}>
            <p className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-black to-yellow-400">
             <span className="text-sm"> Hello</span> <br />
              {user.name}
            </p>
          </motion.div>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h2 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-black to-pink-600">
                Make <br />
                Your T shirt
              </h2>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
              <NavLink
            to="/profile"
            
          >
           <CustomButton 
                type="filled"
                title="My profile"
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </NavLink>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
