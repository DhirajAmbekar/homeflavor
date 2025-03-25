import React, { useState } from "react";
import Slide1 from "../../assets/whomeframe1.png";
import Slide2 from "../../assets/whomeframe2.png";
import Slide3 from "../../assets/whomeframe3.png";
import Slider from "react-slick";

const sliderdata = [
  {
    img: Slide1,
    title: "Bringing the Taste of Home to Your Table",
    subtitle:
      "Delicious home-cooked meals, made with love. Fresh ingredients, authentic flavors, and the warmth of home in every bite.",
  },
  {
    img: Slide2,
    title: "Savor the Flavor of Homemade Goodness",
    subtitle:
      "From our kitchen to your heart—fresh, flavorful, and just like home. One bite, and you’ll feel the love!",
  },
  {
    img: Slide3,
    title: "Home-Cooked Happiness, Delivered!",
    subtitle:
      "Craving a homemade meal? We bring you the comfort of home, served fresh and hot—because nothing beats the taste of love.",
  },
];

export const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipe: true,
    beforeChange: (_, next) => setCurrentSlide(next), // Track active slide
  };

  return (
    <div className="section1_container">
      <Slider {...settings}>
        {sliderdata?.map((el, i) => (
          <div className="inner_box_slider" key={i}>
            <div
              className="slider_img"
              style={{
                backgroundImage: `url(${el?.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="slider_title"
                key={currentSlide} // This forces re-render
              >
                {el?.title}
              </div>
              <div className="slider_desc" key={`desc-${currentSlide}`}>
                {el?.subtitle}
              </div>
              <div
                className="slider_btns_collection"
                key={`btn-${currentSlide}`}
              >
                <div className="slider_btns1">Order Now</div>
                <div className="slider_btns2">Explore Menu</div>
              </div>
            </div>
            <div className="mobile_view_slider">
              <img src={el?.img} alt="" />
              <div
                className="slider_title"
                key={currentSlide} // This forces re-render
              >
                {el?.title}
              </div>
              <div className="slider_desc" key={`desc-${currentSlide}`}>
                {el?.subtitle}
              </div>
              <div
                className="slider_btns_collection"
                key={`btn-${currentSlide}`}
              >
                <div className="slider_btns1">Order Now</div>
                <div className="slider_btns2">Explore Menu</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
