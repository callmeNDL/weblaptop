import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://lh3.googleusercontent.com/K6UgrEP3iD1iE3twiMM0EVy-9FsmK5OTqcyix94GJ3NrO5YeWRN_kvigHj1qp4ignF7etBISeiNj8dcKDrhMmFRaw9gTe6c=w1920-rw"
          alt="img"
        />
      </div>
      <div>
        <img
          src="https://lh3.googleusercontent.com/FeE-2OLVlgr0rLqJcHXyzuvEEpgnYp1XBJ60hZq6YD4sZgHlzYJMFcAS66_79y-rBWOFhvamh5zKy8jjIuHuhhuIOJ2pA_Q=w1920-rw"
          alt="img"
        />
      </div>
      <div>
        <img
          src="https://lh3.googleusercontent.com/38VYfGRFwWmHsd9kSzW3Dp86ir87GrQ2QYO5QrnUMNQNKcq8wriHChwsim9NSZaAg-eNAPPHl-lQq8LxeAV9PZUzAPiI1udK=w1920-rw"
          alt="img"
        />
      </div>
      <div>
        <img
          src="https://lh3.googleusercontent.com/vkMMX2cvl_1ii0c_vw5TGy4ixhRc-l7OlMWnmx4-oxquqHo_A9aET_lWxDmxbh-GMZTr3O5JS4kGNa0Ka7hcctxo2lj0xoUR=w1920-rw"
          alt="img"
        />
      </div>
      <div>
        <img
          src="https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw"
          alt="img"
        />
      </div>
    </Slider>
  );
}
