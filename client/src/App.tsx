import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import images from "../src/Data/Images";
import Container from "./Components/Container";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden bg-slate-400"
          whileTap={{cursor: "grabbing"}}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width}}
            className="flex bg-rose-500"
          >
            {images.map((image) => (
              <motion.div
                className="min-h-[40rem] min-w-[30rem] p-[40px]"
                key={image}
              >
                <img
                  className="w-[100%] h-[100%] rounded-[2rem] object-cover pointer-events-none"
                  src={image}
                  alt=""
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

export default App;
