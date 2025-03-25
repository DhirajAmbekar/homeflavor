import React, { useEffect, useRef, useState } from "react";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import Blog4 from "../../assets/blog4.png";
import Blog5 from "../../assets/blog5.png";

const section7_blogs = [
  {
    name: "How to prepare the perfect french fries in an air fryer",
    img: Blog2,
    date: "January 3, 2023",
  },
  {
    name: "How to prepare delicious chicken tenders",
    img: Blog3,
    date: "January 3, 2023",
  },
  {
    name: "7 delicious cheesecake recipes you can prepare",
    img: Blog4,
    date: "January 3, 2023",
  },
  {
    name: "5 great pizza restaurants you should visit this city",
    img: Blog5,
    date: "January 3, 2023",
  },
];

export const Section7 = () => {
  const section7Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section7Ref.current) {
        const rect = section7Ref.current.getBoundingClientRect();
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
      ref={section7Ref}
      className={`section7_container ${isVisible ? "fade-in" : "hidden"}`}
    >
      <div className="section7_top">
        <div className="section7_title">Our Blog & Articles</div>
        <div className="section7_btn">Read All Articles</div>
      </div>
      <div className="section7_blogs">
        <div className="section7_blog_left">
          <img src={Blog1} alt="blog1" />
          <div className="section7_blog_left_box">
            <div className="section7_blog_span">January 3, 2023</div>
            <div className="section7_blog_title">
              The secret tips & tricks to prepare a perfect burger & pizza for
              our customers
            </div>
            <div className="section7_blog_desc">
              Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
              semper adipiscing massa gravida nisi cras enim quis nibholm varius
              amet gravida ut facilisis neque egestas.
            </div>
          </div>
        </div>
        <div className="section7_blogs_right">
          {section7_blogs.map((el, i) => (
            <div key={i} className="sec7_blogs_box">
              <img src={el.img} alt={el.name} />
              <div className="sec7_blogs_date">{el.date} </div>
              <div className="sec7_blogs_name">{el.name} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
