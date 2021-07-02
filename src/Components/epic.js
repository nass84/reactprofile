import { useState } from "react";


const Epics = (props) => {
  
  const [epics, setEpics] = useState([
    {
      title: " School of Code ",
      body: " Learnt how to create a new world ",
      years: "2021",
      link: "https://www.schoolofcode.co.uk/",
      id: 1,
    },
    {
      title: " Citizens Advice ",
      body: " If you got a problem, yo, I'll solve it! ",
      years: "2003 - Present",
      link: "https://citizensadvicesandwell-walsall.org/",
      id: 2,
      
    },
    {
      title: " Mystery Club ",
      body: " Organising mystery events to trick my friends into going tap dancing ",
      years: "2019 - Present",
      link: "https://www.facebook.com/media/set/?set=a.10161735825100151&type=3",
      id: 3,
    },

    {
      title: " Team Party Unicorn ",
      body: " Creating bespoke niche events in and around Birmingham ",
      years: "2013 - 2016",
      link: "https://www.facebook.com/teampartyunicorn",
      id: 3,
    },
    {
      title: " Roller Derby ",
      body: " ALL of the teams, ALL of the committees, ALL of the friends ",
      years: "2010 - 2016",
      link: "https://centralcityrollergirls.co.uk/",
      id: 4,
    },
  ]);

  return (
    <div className="epicdiv">
      <h1
        style={{ marginLeft: "10px", marginTop: "20px", marginBottom: "20px" }}
      >
        {/* passed from app.js as a prop */}
        {props.title}
      </h1>
      {epics.map((epic) => (
       
        <div
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            marginBottom: "20px",
            lineHeight: "30px",
          }}
          className="blog-preview"
          key={epic.id}

        >
          <h2>{epic.title}</h2>
          <p> {epic.body} </p>
          <p> Dates: {epic.years}</p>
          <a href={epic.link}>
             <button className="userButton" href="www.twitter.com" >User Story </button>
          </a>
        </div>

       
     
      ))}
    </div>
  );
};

export default Epics;
