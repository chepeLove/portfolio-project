import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Styles} from "./Contact_Styles";


export const Contact = () => {
    return (
        <Styles.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <Styles.Form>
                    <Styles.Field placeholder={"name"}/>
                    <Styles.Field  placeholder={"subject"}/>
                    <Styles.Field  placeholder={"message"} as={'textarea'}/>
                    <Button type='submit'>Send Message</Button>
                </Styles.Form>
            </Container>
        </Styles.Contacts>
    );
};




