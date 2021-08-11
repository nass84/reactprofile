import Navbar from "./Components/navbar";
import H1 from "./Components/h1";
import Button from "./Components/button";
import Epics from "./Components/epic";
import Becki from "./Components/becki";

function App() {
  const name = "Becki Floyd";
  const title = "UX Developer";

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

            <p
              style={{
                fontWeight: "700",
                marginTop: "20px",
                fontSize: "1.5em",
                marginBottom: "20px",
              }}
            >
              Hi, I'm Becki!
            </p>
            <p>
              I am currently studying with the School of Code to learn how to
              become a front end developer.
              <br></br>
              <br></br>I am passionate about the UX design process and love
              coming up with creative solutions to solve problems.
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
