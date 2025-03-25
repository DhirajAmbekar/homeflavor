import React, { useEffect, useRef, useState } from "react";
import Testimonial1 from "../../assets/teste1.png";
import Testimonial2 from "../../assets/teste2.png";
import Testimonial3 from "../../assets/teste3.png";

const testemonial_list = [
  {
    name: "“The best restaurant”",
    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    pro_img: Testimonial1,
    pro_name: "Sophire Robson",
    pro_desc: "Los Angeles, CA",
  },
  {
    name: "“The best restaurant”",
    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    pro_img: Testimonial2,
    pro_name: "Sophire Robson",
    pro_desc: "Los Angeles, CA",
  },
  {
    name: "“The best restaurant”",
    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    pro_img: Testimonial3,
    pro_name: "Sophire Robson",
    pro_desc: "Los Angeles, CA",
  },
];

export const Section8 = () => {
  const section8Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section8Ref.current) {
        const rect = section8Ref.current.getBoundingClientRect();
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
    <div
      className={`section8_container ${isVisible ? "fade-in" : "hidden"}`}
      ref={section8Ref}
    >
      <div className="section8_title">What Our Customers Say</div>
      <div className="section8_list">
        {testemonial_list.map((el, i) => (
          <div key={i} className="section8_box">
            <div className="section8_name">{el.name}</div>
            <div className="section8_desc">{el.desc}</div>
            <div className="section8_line"></div>
            <div className="section8_profile">
              <img src={el.pro_img} alt="" />
              <div>
                <div className="section8_profile_name">{el.pro_name}</div>
                <div className="section8_profile_desc">{el.pro_desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
