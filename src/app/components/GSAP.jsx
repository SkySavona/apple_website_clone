// "use client";

// import { useEffect, useRef } from 'react';
// import { gsap } from "gsap";

// const GSAP = ({ videoId }) => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     if (sliderRef.current) {
//       gsap.to(sliderRef.current, {
//         transform: `translateX(${-100 * videoId}%)`,
//         duration: 2,
//         ease: "power2.inOut",
//       });
//     }
//   }, [videoId]);

//   return <div ref={sliderRef} id="slider" />;
// };

// export default GSAP;