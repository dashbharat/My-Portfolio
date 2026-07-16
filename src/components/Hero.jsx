// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Bharat</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             MERN Stack Developer
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//-------------------------------

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import profilePic from "../assets/profile.png";


// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div
//         className={`absolute inset-0 top-[-150px] max-w-7xl mx-auto ${styles.paddingX}
//         flex flex-col md:flex-row items-center justify-between gap-10`}
//       >
//         {/* Left Content */}
//         <div className="flex flex-row items-start gap-5">
//           <div className="flex flex-col justify-center items-center mt-5">
//             <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//             <div className="w-1 sm:h-80 h-40 violet-gradient" />
//           </div>

//           <div>
//             {/* <h1 className={`${styles.heroHeadText} text-white`}>
//               Hi, I'm <span className="text-[#915EFF]">Bharat</span>
//             </h1> */}
    

// <h1 className={`${styles.heroHeadText} text-white`}>
//   Hi,
//   <motion.span
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{
//       duration: 0.8,
//       ease: "easeOut",
//     }}
//     className="ml-3 inline-block bg-gradient-to-r from-[#915EFF] via-[#B983FF] to-[#E879F9] bg-clip-text text-transparent"
//   >
//     I'm Bharat
//   </motion.span>
// </h1>

//             {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//               MERN Stack Developer <br className="sm:block hidden" />
//               Building modern web applications
//             </p> */}

//              <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1}}
//               transition={{
//                 duration: 1,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//               className="mt-1 text-[30px] font-bold text-[#915EFF]"
//             >
//               MERN Stack Developer
//             </motion.p>
//             <p className={`${styles.heroSubText}  text-white-100`}> Building modern web applications</p>











//           </div>
//         </div>

//         {/* Right Profile Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             y: [0, -10, 0],
//           }}
//           transition={{
//             opacity: { duration: 1 },
//             x: { duration: 1 },
//             y: {
//               duration: 3,
//               repeat: Infinity,
//               repeatType: "loop",
//             },
//           }}
//           className="hidden md:flex justify-center items-center -mr-24"
//         >
//           <div className="relative">
//             {/* Glow Effect */}
//             <div className="absolute inset-0 bg-[#915EFF] rounded-full blur-3xl opacity-30 scale-110"></div>

//             {/* Profile Image */}
//             <img
//               src={profilePic}
//               alt="Bharat"
//               className="relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-[#915EFF] shadow-[0_0_30px_rgba(145,94,255,0.6)]"
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* 3D Canvas Background */}
//       <ComputersCanvas />

//       {/* Scroll Down Indicator */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


//-------------------------------------------------------------
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profilePic from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:flex absolute top-[-170px] inset-0 max-w-7xl mx-auto ${styles.paddingX}
        items-center justify-between`}
      >
        {/* Left Content */}
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-80 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi,
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="ml-3 inline-block bg-gradient-to-r from-[#915EFF] via-[#B983FF] to-[#E879F9] bg-clip-text text-transparent"
              >
                I'm Bharat
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-1 text-[30px] font-bold text-[#915EFF]"
            >
              Frontend(MERN) Developer
            </motion.p>

            <p className={`${styles.heroSubText} text-white-100`}>
              Building modern web applications
            </p>
          </div>
        </div>

        {/* Desktop Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="relative z-0 -mr-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#915EFF] rounded-full blur-3xl opacity-30 scale-110" />

            <img
              src={profilePic}
              alt="Bharat"
              className="relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-[#915EFF] shadow-[0_0_30px_rgba(145,94,255,0.6)] "
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden flex flex-col items-center pt-28 px-6 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 3,
              repeat: Infinity,
            },
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#915EFF] rounded-full blur-3xl opacity-30 scale-110 " />

            <img
              src={profilePic}
              alt="Bharat"
              className="relative w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-[#915EFF] "
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="mt-8">
          <h1 className="text-white font-black text-[42px] sm:text-[60px] leading-tight">
            Hi,
            <span className="text-[#915EFF] ml-2">
              I'm Bharat
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mt-2 text-xl sm:text-3xl font-bold text-[#915EFF]"
          >
            MERN Stack Developer
          </motion.p>

          <p className="mt-2 text-secondary text-base sm:text-lg">
            Building modern web applications
          </p>
        </div>

        {/* Computer Model */}
        <div className="w-full h-[350px] sm:h-[450px] mt-10">
          <ComputersCanvas />
        </div>

    

      
      </div>



      {/* Desktop Computer Model */}
      <div className="hidden lg:block absolute inset-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      
      <div className="absolute bottom-[280px] md:bottom-[240px] lg:bottom-[40px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;