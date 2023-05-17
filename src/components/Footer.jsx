import React from "react";

const date = new Date();
const copyright = date.getFullYear();

const Footer = () => {
    return (<footer>
        <p>
            Copyright &copy; {copyright}
        </p>
    </footer>)
};

export default Footer;