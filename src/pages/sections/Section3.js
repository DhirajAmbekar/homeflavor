import React, { useEffect, useRef, useState } from "react";
import Menu1 from "../../assets/menu1.png";
import Menu2 from "../../assets/menu2.png";
import Menu3 from "../../assets/menu3.png";
import Menu4 from "../../assets/menu4.png";

const section3_list = [
  {
    name: "Fried Eggs",
    price: "$ 9.99",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    img: Menu1,
  },
  {
    name: "Hawaiian Pizza",
    price: "$ 15.99",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    img: Menu2,
  },
  {
    name: "Martinez Cocktail",
    price: "$ 7.25",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    img: Menu3,
  },
  {
    name: "Butterscotch Cake",
    price: "$ 20.99",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    img: Menu4,
  },
];

export const Section3 = () => {
  const section3Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section3Ref.current) {
        const rect = section3Ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={section3Ref}
      className={`section3_container ${isVisible ? "fade-in" : "hidden"}`}
    >
      <div className="section3_title">Our Menu</div>
      <div className="section3_desc">
        We consider all the drivers of change gives you the components
        <br></br>
        you need to change to create a truly happens.
      </div>
      <div className="section3_menu_list">
        <div>All</div>
        <div>Breakfast</div>
        <div>Main Dishes</div>
        <div>Drinks</div>
        <div>Desserts</div>
      </div>
      <div className="section3_list">
        {section3_list.map((el, i) => (
          <div className="section3_box">
            <img src={el.img} alt="section3_img" />
            <div className="section3_box_price">{el.price}</div>
            <div className="section3_box_name">{el.name}</div>
            <div className="section3_box_desc">{el.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
