import React, { useEffect, useRef, useState } from "react";
import Aboutus1 from "../../assets/devliveryfast.png";

export const Section5 = () => {
  const section4Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section4Ref.current) {
        const rect = section4Ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="section5_container" ref={section4Ref}>
      <div className={`section5_left  ${isVisible ? "do_animation" : ""}`}>
        <img src={Aboutus1} alt="about1" />
      </div>
      <div className={`section5_right  ${isVisible ? "do_animation2" : ""}`}>
        <div className="section5_right_title">
          Lightning-Fast Food Delivery at Your Doorstep
        </div>
        <div className="section4_right_desc1">
          Our intuitive visual designer lets you seamlessly create custom apps
          for both desktop and mobile—effortlessly and in no time.
        </div>
        <div className="section4_right_points">
          <div className="section4_right_points_svg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.03504 5.02362V7.53528L9.91879 9.41903M13.6863 7.53528C13.6863 10.6564 11.1561 13.1865 8.03504 13.1865C4.91394 13.1865 2.38379 10.6564 2.38379 7.53528C2.38379 4.41418 4.91394 1.88403 8.03504 1.88403C11.1561 1.88403 13.6863 4.41418 13.6863 7.53528Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Delivery within 30 minutes
        </div>
        <div className="section4_right_points">
          <div className="section4_right_points_svg">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.15131 7.79112L7.91881 4.02362M4.46529 4.33757H4.47157M7.60487 7.47716H7.61115M10.4305 12.1865V2.13987C10.4305 1.44629 9.86823 0.884033 9.17465 0.884033H2.89548C2.2019 0.884033 1.63965 1.44629 1.63965 2.13987V12.1865L3.83736 10.9307L6.03506 12.1865L8.23277 10.9307L10.4305 12.1865ZM4.77923 4.33757C4.77923 4.51097 4.63867 4.65153 4.46527 4.65153C4.29188 4.65153 4.15131 4.51097 4.15131 4.33757C4.15131 4.16418 4.29188 4.02362 4.46527 4.02362C4.63867 4.02362 4.77923 4.16418 4.77923 4.33757ZM7.91881 7.47716C7.91881 7.65055 7.77825 7.79112 7.60486 7.79112C7.43146 7.79112 7.2909 7.65055 7.2909 7.47716C7.2909 7.30376 7.43146 7.1632 7.60486 7.1632C7.77825 7.1632 7.91881 7.30376 7.91881 7.47716Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Best Offer & Prices
        </div>
        <div className="section4_right_points">
          <div className="section4_right_points_svg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.38379 1.88403H3.63962L3.89079 3.13987M4.89546 8.1632H11.1746L13.6863 3.13987H3.89079M4.89546 8.1632L3.89079 3.13987M4.89546 8.1632L3.45571 9.60294C3.06014 9.99851 3.3403 10.6749 3.89971 10.6749H11.1746M11.1746 10.6749C10.481 10.6749 9.91879 11.2371 9.91879 11.9307C9.91879 12.6243 10.481 13.1865 11.1746 13.1865C11.8682 13.1865 12.4305 12.6243 12.4305 11.9307C12.4305 11.2371 11.8682 10.6749 11.1746 10.6749ZM6.15129 11.9307C6.15129 12.6243 5.58903 13.1865 4.89546 13.1865C4.20188 13.1865 3.63962 12.6243 3.63962 11.9307C3.63962 11.2371 4.20188 10.6749 4.89546 10.6749C5.58903 10.6749 6.15129 11.2371 6.15129 11.9307Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Online Services Available
        </div>
      </div>
    </div>
  );
};
