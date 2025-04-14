import React, { useEffect, useRef, useState } from "react";

import { h2fMenu, h2fMenuTypes } from "../../utils/menuData";
import { isPlainObject } from "../../utils/isPlainObject";


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
        // setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menuActive, setMenuActive] = useState("All");

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
        <div
          className={
            menuActive === "All" ? "section3_menu_list_item_active" : ""
          }
          onClick={() => {
            setMenuActive("All");
          }}
        >
          All
        </div>
        {h2fMenuTypes?.map((el, i) => (
          <div
            key={i}
            className={
              "section3_menu_list_item" + (menuActive === el ? "_active" : "")
            }
            onClick={() => {
              setMenuActive(el);
            }}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="section3_list">
        {h2fMenu
          ?.filter((item) => menuActive === "All" || item?.type === menuActive)
          .map((el, i) => (
            <div className="section3_box" key={i}>
              <div
                style={{
                  backgroundImage: `url(${el?.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                  width: "100%",
                }}
                className="section3_box_img"
              ></div>
              <div className="section3_box_price">
                {isPlainObject(el.price)
                  ? ` Full: ₹${el.price.full} ${el?.sub_rate} / Half: ₹${el.price.half} ${el?.sub_rate}`
                  : `₹${el?.price} ${el?.sub_rate}`}
              </div>
              <div className="section3_box_name">{el?.title}</div>
              <div className="section3_box_desc">{el?.desc}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
