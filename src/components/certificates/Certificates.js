import React, { Fragment, useState } from 'react'
import './Certificates.css'
import { motion } from 'framer-motion/dist/framer-motion'
import Challenger from '../../img/Challenger.jpg'
import Nanodegree from '../../img/Nanodegree.jpg'
import Mohmed from '../../img/Mohmed.jpg'
import Navbar from '../Navbar/Navbar'

const Certificates = () => {
   const [rotate,setrotate] = useState(false)
   const handelrotate = () => {
       setrotate(!rotate)
   }
   const [rotateone,setrotateone] = useState(false)
   const handelrotateone = () => {
       setrotateone(!rotateone)
   }
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
    <Fragment>
    <div className='Certificates'>
      <div className='Certificates-detales'>
         <motion.h1 
          className='Certificates-title'
          variants={Animation}
          initial="hidden"
          animate="visible"
          >Certificates</motion.h1>
         <motion.p 
           className='Certificates-desc'
           variants={Animationdelay5}
           initial="hidden"
           animate="visible"
           >I attend many events such as the Egyptian Career Fair under the auspices of the Egyptian Ministry of Communications and I am working hard to increase my excellence
         </motion.p>
         <motion.img 
           className='Certificates-image' 
           variants={Animationdelay10}
           initial="hidden"
           animate="visible"
           src={Mohmed}/>
      </div>
      <motion.div 
         variants={Animationdelay15}
         initial="hidden"
         animate="visible"
        className='Gool-alldetales'
       >
        <div className='Gool-detales'>
           <h4 className='Gool-detales-title'>Competitor certificate from Udacity</h4>
           <div className='Certificates-mover' onClick={handelrotate}>
              <span 
               className={rotate?'Certificates-span one':'Certificates-span'}
               >
              </span>
              <span 
               className={rotate?'Certificates-span two':'Certificates-span'}
               >
              </span>
           </div>
        </div>
        <div className='Gool-image'>
          <img 
           className={rotate?'Certificates-mover-image add':'Certificates-mover-image'} 
           src={Challenger}
           />
        </div>
     </motion.div>
      <motion.div 
        variants={Animationdelay20}
        initial="hidden"
        animate="visible"
        className='Gool-alldetales'
       >
        <div className='Gool-detales'>
           <h4 className='Gool-detales-title'>React Nanodegree from Udacity</h4>
           <div className='Certificates-mover' onClick={handelrotateone}>
              <span className={rotateone?'Certificates-span one':'Certificates-span'}></span>
              <span className={rotateone?'Certificates-span two':'Certificates-span'}></span>
           </div>
        </div>
        <div className='Gool-image'>
          <img 
           className={rotateone?'Certificates-mover-image add':'Certificates-mover-image'}
           src={Nanodegree}
          />
        </div>
     </motion.div>
     <Navbar/>
    </div>
    </Fragment>
  )
}

export default Certificates