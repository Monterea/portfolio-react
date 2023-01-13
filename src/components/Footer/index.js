import React from "react";
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

export default function Footer() {
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
          <H1 name="socials">Socials</H1>
          <NewTabLink
            href="https://github.com/Monterea"
            target="_blank"
            name="github"
          >
            GitHub
          </NewTabLink>
          <NewTabLink
            href="https://linkedin.com/in/michaela-stuchlikova999"
            target="_blank"
            name="linkedin"
          >
            LinkedIn
          </NewTabLink>
        </FooterItem>
      </FooterBody>
    </FooterContainer>
  );
}
