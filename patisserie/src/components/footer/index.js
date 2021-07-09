import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    Address,
    SocialIcons,
    SocialIconLink
} from "./FooterStyle";

const Footer = () => {

    const lattitude = "50.869720";
    const longitude = "4.305420";
    const addressInMap = `https://maps.google.com?q=${lattitude},${longitude}`
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    <Address href={addressInMap} target="_blank">Rue Laurent Heirbaut, 1083 Bruxelles</Address>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        )
    }


export default Footer
