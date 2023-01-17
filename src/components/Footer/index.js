import React from "react";
//import { useState } from "react";
import {
  City,
  Email,
  FullName,
  Phone,
  PSC,
  Street,
} from "../../assets/text/infoText";
import {
  FooterBody,
  FooterContainer,
  FooterItem,
  H1,
  P,
  B,
  NewTabLink,
} from "./footerStyles";
import GitHub from "../../assets/pictures/contact/gitHub.svg";
import LinkedIn from "../../assets/pictures/contact/linkedIn.svg";
//import myCvPdf from "../../assets/files/Stuchlikova_CV.pdf";

export default function Footer() {
  // const [cvDownloaded, setCvDownloaded] = useState(false);

  /*  const Button = ({ onClick }) => {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Click me!
      </motion.button>
    );
  }; */
  //<Button onClick={() => console.log('Button was clicked!')} />
  return (
    <FooterContainer name="footer container">
      <FooterBody name="footer body">
        <FooterItem name="footer adress">
          <H1 name="name">{FullName}</H1>
          <P name="adress street">{Street}</P>
          <P name="adress city">{City}</P>
          <P name="adress psc">{PSC}</P>
        </FooterItem>
        <FooterItem name="footer contact">
          <H1 name="contact">Kontakty</H1>
          <B name="contact email label">email:</B>
          <P name="contact email">{Email}</P>
          <B name="contact telefon">telefon:</B>
          <P name="contact number">{Phone}</P>
        </FooterItem>
        <FooterItem name="footer socials">
          <NewTabLink
            href="https://github.com/Monterea"
            target="_blank"
            name="github"
          >
            <img
              src={GitHub}
              alt="Git hub link"
              name="Git hub link"
              height="50px"
            />
          </NewTabLink>
          <NewTabLink
            href="https://linkedin.com/in/michaela-stuchlikova999"
            target="_blank"
            name="linkedin"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn link"
              name="LinkedIn link"
              height="50px"
            />
          </NewTabLink>

          {/*           <CvButton
            name="download cv button"
            href={myCvPdf}
            onClick={() => {
              setCvDownloaded(true);
            }}
            download="Stuchlikova_CV.pdf"
          >
            {cvDownloaded ? "CV staženo!" : "Stáhni CV"}
          </CvButton> */}
        </FooterItem>
      </FooterBody>
    </FooterContainer>
  );
}
