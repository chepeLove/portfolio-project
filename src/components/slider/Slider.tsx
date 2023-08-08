import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Styles} from "./Slider_Styles";
import "../../styles/slider.css"

type SlidePropsType = {
    text:string
    userName:string
}

const Slide = (props:SlidePropsType) => {
    return (
        <Styles.Slide>
            <Styles.Text>{props.text}</Styles.Text>
            <Styles.Name>@{props.userName}</Styles.Name>
        </Styles.Slide>
    )
}

const items = [
    <Slide text={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    } userName={'ivan ivanow'}/>,
    <Slide text={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    } userName={'petr petrov'}/>,
    <Slide text={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    } userName={'igor igorev'}/>,
];

export const Slider = () => (
    <Styles.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </Styles.Slider>
);


