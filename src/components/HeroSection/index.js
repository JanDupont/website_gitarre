import React, { useState } from 'react';
import Video from '../../videos/Gitarrenspieler.mp4';
import { Button } from '../buttonElement.js';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Jan Dupont - Fingerstyle Guitar</HeroH1>
                <HeroP>
                    Welcome!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="services" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        My Recordings {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
