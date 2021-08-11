import cartoon from "../Pictures/cartoon.png";

const Becki = () => {
  function makeBecki(e) {
    e.target.setAttribute("src", "https://i.imgur.com/WmBwIf0.png");
    e.target.setAttribute("alt", "Becki");
  }

  return (
    <div>
      <br></br>
      <div className="arrow">
      <figcaption> Psst... Try Clicking On the Picture </figcaption>
      </div>
      <img
        src={cartoon}
        alt="Cartoon of Becki"
        style={{
          maxWidth: "300px",
          height: "350px",
          float: "left",
          marginRight: "40px",
          marginTop: "20px",
          borderRadius: "30%",
        }}
        onClick={makeBecki}
      />
    </div>
  );
};

export default Becki;
