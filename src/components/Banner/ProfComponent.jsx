import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { BsFacebook } from "react-icons/bs";
import profilepic from "../../Assets/pic.jpg";
import pic from "../../Assets/Picture.png";
import pic2 from "../../Assets/pic2.png";
import pic3 from "../../Assets/pic3.png";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Muhammad Hamza</h1>
          <h3>Software Engineer(Frontend Developer)</h3>
          <p>
            I am Muhammad Hamza, a professional Software Engineer with expertise
            in Frontend development.I have a proven track record of designing
            and developing high-performance, scalable web applications using
            technologies such as JavaScript and React.
          </p>
          <button>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a
                  href="https://www.instagram.com/muhammadhamza4522/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=100005975265745&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/muhammad-hamza-027a94226"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right" id="righta">
        <div id="righta" style={{ display: "flex", justifyContent: "center" }}>
          <Profile>
            <img src={pic3} alt="profile" />
          </Profile>
        </div>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
// const Slide = styled.div`
//   #righta {
//     display: flex;
//     justify-content: center;
//   }
// `;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
  @media (max-width: 1180px) {
    p {
      font-weight: 200;
    }
    button {
      margin-top: 2rem;
    }
  }
  @media (max-width: 750px) {
    p {
      font-weight: 150;
    }
    button {
      margin-top: 1rem;
    }
    h3 {
      font-weight: 500;
      font-size: 1rem;
      padding-bottom: 1rem;
    }
    h1 {
      font-size: 1.6rem;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media (max-width: 1180px) {
    margin-top: 2rem;
  }
  @media (max-width: 750px) {
    margin-top: 1rem;
  }
`;
const Profile = styled.div`
  z-index: -1;

  width: 22rem;
  height: 31rem;
  position: relative;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  background-color: #01be96;
  @media (max-width: 790px) {
    width: 18rem;
    height: 27rem;
  }
  @media (max-width: 1180px) {
    width: 16rem;
    height: 25rem;
  }

  img {
    top: 20px;

    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
