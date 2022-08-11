import React from 'react'
import './Whome.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'
import Mohmed from '../../img/Mohmed.jpg'

const Whome = () => {
  const Animation = {
    hidden:{
      opacity:0,
      y:900,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration: .8,
      }
    }
  }
  const Animationdelay5 = {
    hidden:{
      opacity:0,
      y:900,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration: .8,
        delay:.5
      }
    }
  }
  const Animationdelay10 = {
    hidden:{
      opacity:0,
      y:900,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration: .8,
        delay:.7
      }
    }
  }
  const Animationdelay15 = {
    hidden:{
      opacity:0,
      y:900,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration: .8,
        delay:.9
      }
    }
  }
  const Animationdelay20 = {
    hidden:{
      opacity:0,
      y:900,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration: .8,
        delay:1.2
      }
    }
  }
  return (
    <motion.div className="Whome" >
       <motion.div className="ChildWhome">
         <motion.div
            variants={Animation}
            initial="hidden"
            animate="visible"
            className="parenthyper">
            <h1>Hey, I’m</h1>
            <motion.img className='parenthyper-img' src={Mohmed}/>
            <h1>Mohmed</h1>
         </motion.div>
         <motion.h1
         variants={Animationdelay5}
         initial="hidden"
         animate="visible"
         className='title-help'
         >
           How can I help you?
           </motion.h1>
         <motion.div>
            <Link to='/Projects'>
              <motion.div 
                className="detales"
                variants={Animationdelay10}
                initial="hidden"
                animate="visible"
                >
                <motion.h3> My projects</motion.h3>
                <i class="fa-solid fa-angles-right"></i>
             </motion.div>
           </Link>
            <Link to='/Certificates'>
              <motion.div 
                 className="detales"
                 variants={Animationdelay15}
                 initial="hidden"
                 animate="visible"
                 >
                 <motion.h3>Certificates</motion.h3>
                 <i class="fa-solid fa-angles-right"></i>
             </motion.div>
          </Link>
          <Link to='/Contact'>
             <motion.div 
               className="detales"
               variants={Animationdelay20}
               initial="hidden"
               animate="visible"
               >
               <motion.h3>Contact with me</motion.h3>
               <i class="fa-solid fa-angles-right"></i>
             </motion.div>
          </Link>
         </motion.div>
       </motion.div>
    </motion.div>
  )
}

export default Whome
