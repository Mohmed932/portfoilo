import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion/dist/framer-motion'
import {image} from '../../data'
import Navbar from '../Navbar/Navbar'

const Projects = () => {
  const Show = {
    offscreen:{
        opacity:0,
        y:40
    },
    onscreen:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    },
  }
  return (
    <div className='Projects'>
      <h1 className='Projects-title'>My Projects</h1>
      {image.map(({title,id,img,desc,code,visit})=>(
        <div 
          className='Projects-main' 
          key={id}
          >
           <motion.div  
             className='Projects-detals'
             variants={Show}
             initial={"offscreen"}
             whileInView="onscreen"
             viewport={{ once: true, amount: 0.8 }}
              >
              <img className='Projects-img'  src={img}/>
               <h3 className='Projects-detals-title'>{title}</h3>
               <p className='Projects-desc'>{desc}</p>
               <div className='Projects-word'>
                  <a 
                   href={code} 
                   target='blank' 
                   className='Projects-code'
                   >
                    <div className='Projects-code'>
                       <h4>Code</h4>
                       <i class="fa-solid fa-code"></i>
                     </div>
                  </a>
                  <a 
                   href={visit} 
                   target='blank' 
                   className='Projects-code'
                   >
                     <div className='Projects-code'>
                       <h4>Visit</h4>
                       <i class="fa-solid fa-up-right-from-square"></i>
                     </div>
                   </a>
                </div>
        </motion.div>
        <Navbar/>
      </div>
    ))}
    </div>
  )
}

export default Projects