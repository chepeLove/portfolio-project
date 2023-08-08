import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {Styles} from "../HeaderMenu_Styles"


export const MobileMenu:React.FC = () => {
    const [menuIsOpen,setMenuIsOpen] = useState(false)
    const onBurgerButtonClick = () => { setMenuIsOpen(!menuIsOpen) }
    return (
        <Styles.MobileMenu>
            <Styles.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}>
                <span></span>
            </Styles.BurgerButton>
            <Styles.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
               <Menu />
            </Styles.MobileMenuPopup>
        </Styles.MobileMenu>
    );
};

