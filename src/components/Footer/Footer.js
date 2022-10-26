import React from 'react';
import { Icon } from '@iconify/react';
const Footer = ()=>{
    return (
        <footer>
        <div>
            <ul>
            <h5 className="footer"> Created by: <span className="span2">Joel</span>
            <span className="span"> Rivera</span></h5>
            <a href='https://github.com/reinholz36' title='GitHub' rel='noreferrer' target='_blank'>
                <Icon icon="akar-icons:github-outline-fill" height="20" />
                </a>
                <a href='https://stackoverflow.com/users/19249840/joel' title='Stack Overflow' rel='noreferrer' target='_blank'>
                <Icon icon="bi:stack-overflow" height="20" />
                </a>
                <a href='https://www.linkedin.com' title='LinkedIn' rel='noreferrer' target='_blank'>
                <Icon icon="feather:linkedin" height="20" />
                </a>
           </ul>
        </div>
        </footer>
    )
}

export default Footer;