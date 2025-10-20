import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import khwateenwebsite from "../../Assets/khwateen.png";
import charj from "../../Assets/charj.png";
import facebook from "../../Assets/facebook.png";
import food from "../../Assets/food.png";

import weather from "../../Assets/weather.png";
import netflix from "../../Assets/Netflix.png";
import styled from "styled-components";

let data = [
  {
    img: khwateenwebsite,
    disc: "Its a real time social project related to women jobs which we develop during my job.I have worked on UI building and integration of API'S.",
    link: "https://www.khawateenrozgar.com/",
  },
  {
    img: charj,
    disc: "Here you can visit and see which services available by charging company and also you can contact to the company and also you can partner with company and invest option.",
    link: "https://charjco.netlify.app/",
  },
  // {
  //   img: dubai,
  //   disc: "This website is develop for UAE clients here user can register and login to booked an order.Through this website everyone can exxplore dubai.",
  //   link: "https://www.seadubai.com/en",
  // },
  {
    img: facebook,
    disc: "This is facebook clone developed during internship where user can login through google and share there post.Its backend is done in firebase. ",
    link: "https://hamza117.vercel.app/",
  },
  {
    img: weather,
    disc: "This is small task for develop for freelance client where user can take weather update by city name.",
    link: "https://subtle-buttercream-8c614b.netlify.app/",
  },
  {
    img: food,
    disc: "This is food web app develop during internship period for practise.",
    link: "https://neon-melomakarona-89bd63.netlify.app/",
  },
  {
    img: netflix,
    disc: "This is netflix clone where user can see latest movies and also created at internship for practising api integration.",
    link: "https://singular-quokka-106d19.netlify.app/",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
