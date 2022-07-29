import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion/dist/framer-motion'
import Navbar from '../Navbar/Navbar'
// import Mohmed from '../../../public/img/Mohmed.jpg'

const Contact = () => {
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
  return (
    <div className='Contact'>
       <motion.h1
          variants={Animation}
          initial="hidden"
          animate="visible"
          className="Contect-title"
       >The Stage is Yours</motion.h1>
       <motion.p
          variants={Animationdelay5}
          initial="hidden"
          animate="visible"
          className="Contect-desc"
       >I’m always looking to collaborate on interesting projects with great people. Need a supportive hand?
       </motion.p>
       <motion.div 
          variants={Animationdelay10}
          initial="hidden"
          animate="visible"
          className='Contact-detales'
          >
          <img className='Contact-image' src="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/294482155_774031590450119_3149169569704181092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEF1dYaGYIt8ZjDoPDtJj94jxu3Av5x8biPG7cC_nHxgcwtM0vdhNFxsLU9qhCGcC2kbJBEUgjJ-QtnL0Ffsq4&_nc_ohc=7EGt-jPlZuYAX8p8YEA&_nc_ht=scontent.fcai20-5.fna&oh=00_AT9k1haBeV8oJZqXKGu96AaUSaaZ3V5_g4UI9iF4Bp74tA&oe=62E6808B"/>
          <h1>Mohmed Mahmoud</h1>
          <p>Front-End Developer</p>
          <div className='Contact-me'>
            <button className='btn'>
              <a 
              href="https:wa.me/+201157068530" 
              target='blank' 
              style={{color:'#fff',textDecoration:'none'}}
              >
                Whatsapp
              </a>
            </button>
            <button className='btn'>
              <a 
              href="https://drive.google.com/file/d/14b_enbuLTcgxxLIhS9FpkpU15NvRrUa7/view?usp=drivesdk" 
              target="blank"
              style={{color:'#fff',textDecoration:'none'}}
              >
                 Download CV
              </a>
            </button>
          </div>
          <div className='scoial'>
             <a 
             href='https://www.facebook.com/Anamohmed135' 
             target="blank"
             >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
             <a
               href='https://twitter.com/Anamohmed00' 
               target="blank"
               >
               <i class="fa-brands fa-twitter"></i>
              </a>
             <a 
             href='https://www.linkedin.com/in/mohmedmahmoudfouad' 
             target="blank"
             >
               <i class="fa-brands fa-linkedin-in"></i>
             </a>
             <a 
             href='https://github.com/Mohmed932' 
             target="blank"
             >
               <i class="fa-brands fa-github"></i>
             </a>
          </div>
       </motion.div>
       <Navbar/>
    </div>
  )
}

export default Contact