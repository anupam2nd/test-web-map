import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AnimatePageWrapper from "./component/AnimatePageWrapper";
import { useLocation, useNavigate } from "react-router-dom";

export default function Rootlayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  const handleNav = (path) => {
    if (path !== location.pathname) {
      setNextPath(path);
      setIsExiting(true); // start fade-out
    }
  };

  useEffect(() => {
    console.log(nextPath);
  }, [nextPath]);

  return (
    <div>
      <div className="h-fit">
        <Navbar onNav={handleNav} />
      </div>
      <div>
        {/* <AnimatePresence mode="wait" initial={false}>
          <AnimatePageWrapper key={location.pathname}>
            <Outlet />
          </AnimatePageWrapper>
        </AnimatePresence> */}

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1  }}
            transition={{ duration: 0.4 }}
            onAnimationComplete={() => {
              if (isExiting && nextPath) {
                navigate(nextPath);
                setIsExiting(false);
              }
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
