import { useState } from 'react';

const Button = () => {
 
  const [welcome, setWelcome] = useState('Built with React - Click Me ');

  const handleClick = () => {
    setWelcome("Thank you for visiting my website. I hope you have a lovely day!");
  };

  return (
    
  
    <button className="button"
      onClick={(e) => handleClick('Everyone', e)}
      style={{
        textAlign: "center",
        backgroundColor: "white",
        color: "#27757Dff",
        borderRadius: "8px",
        padding: "20px",
        fontWeight: "700",
        fontSize: "1.4rem",
        display: "flex",
        alignItems: "center",  
        margin: "auto", 
        marginBottom: "20px",
        width: "330px",
        
      }}
    >
      {welcome}

    </button> 

  );
};

export default Button;
