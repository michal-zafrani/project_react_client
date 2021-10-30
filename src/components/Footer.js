import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <>
            <footer className="fixed-bottom bg-light text-body text-center initialism p-0">
                <p className="m-0 p-0 iconsHover">React Project | Michal Ulihel-Zafrani | 01/08/2021</p>
                <Icon.Facebook size={15} className="m-1 iconsHover" />
                <Icon.Instagram size={15} className="m-1 iconsHover" />
                <Icon.Twitter size={15} className="m-1 iconsHover" />
            </footer>
        </>
    )
}
