import React from 'react';

import './p-slide.css';
import Slider from 'react-slick';

const ProjectsSlide = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <Slider Slider {...settings}>
      {data.map((item) => {
        return (
          <div>
            <img
              src={item.img}
              className=" img-fluid object-fit-cover"
              alt="img"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ProjectsSlide;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         background: '#5e87eb',
//         borderRadius: '100%',
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         background: '#5e87eb',
//         borderRadius: '100%',
//       }}
//       onClick={onClick}
//     />
//   );
// }
