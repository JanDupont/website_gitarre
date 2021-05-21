import React from 'react';
import Icon5 from '../../images/svg-5.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My personal song list</ServicesH1>
            <ServicesH2>List of songs I can play or that I used to play once.<br/><br/></ServicesH2>
            <ServicesWrapper>
                <ServicesCard href="https://www.instagram.com/p/CMKyyQZh9TO/" target="_blank" rel="noopener noreferrer">
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Unravel</ServicesH2>
                    <ServicesP>Tokyo Ghoul</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Numb</ServicesH2>
                    <ServicesP>Linkin Park</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>La Casa de Papel - Intro</ServicesH2>
                    <ServicesP>Haus des Geldes</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Attention</ServicesH2>
                    <ServicesP>Charlie Puth</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Stitches</ServicesH2>
                    <ServicesP>Shawn Mendes</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Friends</ServicesH2>
                    <ServicesP>Marshmello & Anne-Marie</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>The one that got away</ServicesH2>
                    <ServicesP>Katy Perry</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Lucid Dreams</ServicesH2>
                    <ServicesP>Juice WRLD</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>One More Light</ServicesH2>
                    <ServicesP>Linkin Park</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Safe and Sound</ServicesH2>
                    <ServicesP>Taylor Swift</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Listen to your heart</ServicesH2>
                    <ServicesP>Roxette</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>The A Team</ServicesH2>
                    <ServicesP>Ed Sheeran</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Wolves</ServicesH2>
                    <ServicesP>Marshmello & Selena Gomez</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>I see fire</ServicesH2>
                    <ServicesP>Ed Sheeran</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
