import Navbar from "./Components/navbar";
import H1 from "./Components/h1";
import Button from "./Components/button";
import Epics from "./Components/epic";
import Becki from "./Components/becki";

function App() {
  const name = "Becki Floyd";
  const title = "Front End Developer";

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <div className="about">
       
          <h1 className="backgroundheading">
            {" "}
            {name} - {title}{" "}
          </h1>

          {/* image goes here */}
          <Becki />
          <div className="aboutme">
            <H1 heading="About Me" />
            
            <p>Hi, I'm Becki!  
              I am currently studying with the School of Code. 
              <br></br>
              <br></br>They are teaching me how to be
              a front end developer aswell as all the skills that are needed to work the tech industry.
              <br></br>
              <br></br>
              When im not coding I work at Citizens Advice, trying to make the world a better place. One day I hope to be able to use my new skills to help more people. 
              
            </p>
            
            
          </div>
                  
        </div>
        <div className="backgroundheading">
          <H1
            heading="Initiative - Having a lovely time!"
            className="backgroundheading"
          />
        </div>
        <Epics title="Epics of my Life!" />
       
        <Button />
        
      </div>
    </div>
  );
}

export default App;
