import React, { useEffect, useRef, useState } from "react";
import Aboutus1 from "../../assets/aboutus1.png";
import Aboutus2 from "../../assets/aboutus2.png";
export const Section4 = () => {
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
    <div className="section4_container" ref={section4Ref}>
      <div className={`section4_left  ${isVisible ? "do_animation" : ""}`}>
        <img src={Aboutus1} alt="about1" />
        <img src={Aboutus2} alt="about2" className="about2_img" />
      </div>
      <div className={`section4_right  ${isVisible ? "do_animation2" : ""}`}>
        <div className="section4_right_title">
          We provide healthy food for <br></br>your family.
        </div>
        <div className="section4_right_desc1">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </div>
        <div className="section4_right_desc2">
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </div>
        <div className="section4_right_btn">More About Us</div>
      </div>
    </div>
  );
};
