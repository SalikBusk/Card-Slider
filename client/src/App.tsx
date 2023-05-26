import "./App.css";

import {motion} from 'framer-motion'

// images
import images from "../src/Data/Images";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <motion.div className="cursor-grab overflow-hidden bg-slate-400">
          <motion.div drag="x" className="flex bg-rose-500">
            {images.map((image) => {
              return (
                <motion.div className="min-h-[40rem] min-w-[30rem] p-[40px]">
                  <img
                    className="w-[100%] h-[100%] rounded-[2rem] object-cover pointer-events-none"
                    src={image}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

export default App;
