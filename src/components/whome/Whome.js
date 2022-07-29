import React from 'react'
import './Whome.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'

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
            <motion.img className='parenthyper-img' src="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/294482155_774031590450119_3149169569704181092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEF1dYaGYIt8ZjDoPDtJj94jxu3Av5x8biPG7cC_nHxgcwtM0vdhNFxsLU9qhCGcC2kbJBEUgjJ-QtnL0Ffsq4&_nc_ohc=7EGt-jPlZuYAX8p8YEA&_nc_ht=scontent.fcai20-5.fna&oh=00_AT9k1haBeV8oJZqXKGu96AaUSaaZ3V5_g4UI9iF4Bp74tA&oe=62E6808B"/>
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
