import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ScrollToTop(){
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);
    return null;
}

export default ScrollToTop;