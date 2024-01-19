'use client'
import React,{useEffect,useState,useRef} from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { AiFillWechat, AiOutlineReload, AiOutlineWhatsApp } from "react-icons/ai";

const Widgets = () => {

  const [showIcons, setShowIcons] = useState(!true); // State to control icon display
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const handleButtonClick = () => {
    setShowIcons(!showIcons); // Toggle icons visibility
    setScriptLoaded(!scriptLoaded);
    // setShowIcons(false); 
  }

  useEffect(() => {
    const script = document.createElement("script");
      script.src = "//code.tidio.co/odeqz2udkdegmjduyvpmylge6iijdb3b.js";
      script.onload = () => {
        // console.log('TidioChat script loaded');
        setScriptLoaded(true); // Mark script as loaded
        // console.log('first')
      };
      script.onerror = () => {
        // console.log('Error loading TidioChat script');
      };
      document.body.appendChild(script);
  }, [showIcons]);

  const handleIconClick = (iconType:any) => {
    if (iconType === 'whatsapp') {
      const phoneNumber = '9899144488'; // Replace with your phone number
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
      // setShowIcons(false);
    }
  }

  return (
    <div className="fixed bottom-20 left-8">
     
    </div>
  );
};

export default Widgets;
