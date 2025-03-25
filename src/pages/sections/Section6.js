import React, { useEffect, useRef, useState } from "react";
import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";
import Service4 from "../../assets/service4.png";

const section6_container = [
  {
    name: "Caterings",
    desc: "In the new era of technology we look in the future with certainty for life.",
    img: Service4,
  },
  {
    name: "Birthdays",
    desc: "In the new era of technology we look in the future with certainty for life.",
    img: Service1,
  },
  {
    name: "Weddings",
    desc: "In the new era of technology we look in the future with certainty for life.",
    img: Service2,
  },
  {
    name: "Events",
    desc: "In the new era of technology we look in the future with certainty for life.",
    img: Service3,
  },
];
export const Section6 = () => {
  const section6Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section6Ref.current) {
        const rect = section6Ref.current.getBoundingClientRect();
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
      ref={section6Ref}
      className={`section6_container ${isVisible ? "fade-in" : "hidden"}`}
    >
      <div className="section6_title">
        We also offer unique services <br></br> for your events
      </div>
      <div className="section6_lists">
        {section6_container.map((service, index) => (
          <div key={index} className="service_card">
            <img src={service.img} alt={service.name} />
            <div className="service_card_title">{service.name}</div>
            <div className="service_card_desc">{service.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
