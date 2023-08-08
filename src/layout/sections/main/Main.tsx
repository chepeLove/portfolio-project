import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {Container} from '../../../components/Container';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Styles} from "./Main_Styles"
import Tilt from 'react-parallax-tilt';
import {Fade} from "react-awesome-reveal";


export const Main:React.FC = () => {
    return (
        <Styles.Main id={"home"}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <Fade cascade damping = {0.6}>
                            <Styles.SmallText>Hi There</Styles.SmallText>
                            <Styles.Name>I am <span>Ilya Chepelov</span></Styles.Name>
                            <Styles.MainTitle>
                                A Frontend Developer
                            </Styles.MainTitle>
                        </Fade>
                    </div>
                    <Tilt>
                        <Styles.PhotoWrapper>
                            <Styles.Photo src={photo}/>
                        </Styles.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>

        </Styles.Main>
    );
};

