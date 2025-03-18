import { useEffect } from "react";
import {useLocation} from "react-router-dom";

const ScrollToSection = () => {
    const { hash } = useLocation();
    
    useEffect(() => {
        if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [hash]);
    
    return null; // This component doesn't render anything
    }

export default ScrollToSection;