import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {Styles} from "../Works_Styles"

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <Styles.Work>
            <Styles.ImageWrapper>
                <Styles.Image src={props.src} alt=''/>
                <Button>view project</Button>
            </Styles.ImageWrapper>
            <Styles.Description>
                <Styles.Title>{props.title}</Styles.Title>
                <Styles.Text>{props.text}</Styles.Text>
                <Link active ={true} href='#'>Demo</Link>
                <Link href='#'>Code</Link>
            </Styles.Description>
        </Styles.Work>
    );
};

