import React from "react";
import styled from "styled-components";
import {
  Row,
  rowFlex,
  TextCont,
  Container,
  Div,
  Image,
  generalPadding,
} from "../utility/utilities";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

const StyledSection = styled.section`
  ${generalPadding};
  ${"" /* height:100vh; */}
  display: flex;
  justify: center;
  background: ${(props) => (props.bg ? props.bg : "")};

  .image-cont {
  }
`;

export default function Section() {
  const navigate = useNavigate();

  return (
    <>
      <StyledSection>
        <Row id="breack-point" style={{ height: "100hv" }}>
          <Container>
            <TextCont>
              <h1>
                Everything you will need to <span>excel</span> in life
              </h1>
              <p>
                We've curated a list of valuable resources to geet you going in
                life, all for free
              </p>
            </TextCont>
            <Button
              bg="#EA7052"
              onClick={() => navigate("/login")}
              text="Get Stared"
            />
          </Container>
          <Container>
            <Div className="image-cont">
              <Image src="images/rasheed-kemy-oqY09oVTa3k-unsplash 1.png" />
            </Div>
          </Container>
        </Row>
      </StyledSection>

      <StyledSection bg="#E5E5E5">
        <Row id="breack-point">
          <Container>
            <TextCont>
              <h1>Contact Us</h1>
              <p>
                Got any questions, feedback, request and complains ? Reach
                out...
              </p>
              
                <Div className="contact-us-icon">
                  <Image src="images/whatsapp.png" style={{   'maxWidth': '7rem'}} />
                  <span>+2348232323892</span> 
                </Div>
                <Div className="contact-us-icon">
                  <Image src="images/mail_icon.png" style={{   'maxWidth': '7rem'}}/>
                  <span>contact@us.com</span> 
                </Div>
    
            </TextCont>
          </Container>
          <Container className="image-cont">
            <Image src="images/undraw_calling_re_mgft 1.png" />
          </Container>
        </Row>
      </StyledSection>
    </>
  );
}
