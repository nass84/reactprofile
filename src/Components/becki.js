const Becki = () => {
  function makeBecki(e) {
    e.target.setAttribute( 'src', 'https://scontent.fbhx3-1.fna.fbcdn.net/v/t31.18172-8/13418558_10157131313395151_5649767827097924711_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=ZGONqOxP6gEAX8dgJZ5&_nc_ht=scontent.fbhx3-1.fna&oh=bd7522c0f0670a60effe995369ef4d8a&oe=60E3B535');
    e.target.setAttribute('alt', 'dog');
  }
  
  return (
  
    <div>
    <br></br>
    <figcaption> Psst... Try Clicking On the Picture </figcaption>
  <img 
            src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/199969082_10166027799320151_7150298100143503879_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zbf7J8A8zswAX_wvHJs&tn=BJEcE2LDxKTlylcE&_nc_ht=scontent-lcy1-1.xx&oh=91eed009dbd9eb770e8a714a90d2915e&oe=60E46D2E"
            alt="Cartoon of Becki"
            style={{
              maxWidth: "320px",
              float: "left",
              marginRight: "40px",
              marginTop: "20px",
            }}
          onClick={makeBecki}
          
    />
    
      
    </div>
  );
  
}
 
export default Becki;

