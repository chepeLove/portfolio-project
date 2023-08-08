import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Styles} from "./Skills_Styles"
import {Fade} from "react-awesome-reveal";


const skillData = [
    {
        iconId: 'html',
        tittle: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        tittle: 'CSS3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        tittle: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typeScript',
        tittle: 'TypeScrips',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styledComponents',
        tittle: 'Styled Components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        tittle: 'WEB Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]

export const Skills: React.FC = () => {
    return (
        <Styles.Skills id={"skills"}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Fade cascade damping = {0.2}>
                        {skillData.map((skill, index) => {
                            return <Skill iconId={skill.iconId} key={index}
                                          tittle={skill.tittle}
                                          description={skill.description}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </Styles.Skills>
    );
};

