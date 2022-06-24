import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';

function Sliders() {
  const item = [
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' },
    { id: 5, title: 'item #5' },
    { id: 5, title: 'item #5' },
  ];
  const [width, setWidth] = useState(0);
  const carousel = React.useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <div className='bg-black'>
        {
          <motion.div ref={carousel} className="bg-red-500" whileTap={{cursor:"grabbing"}}>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex flex-row gap-10 bg-gray-500 h-52"
            >
              {item.map((item) => {
                return <motion.div className='h-full w-52 bg-yellow-300' key={item.id}>{item.title}</motion.div>;
              })}
            </motion.div>
          </motion.div>
        }
      </div>
    </>
  );
}

export default Sliders;
