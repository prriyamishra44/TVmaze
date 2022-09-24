import { React, useState } from "react";
import Shows from "./Shows";
import Actor from "./Actor";
import "./index.css";

const HomePage = () => {
  const [radio, setradio] = useState("");
  const [input, setinput] = useState("");
  const [error, seterror] = useState(false);
  // const [flag, setflag] = useState(false);

  function SetRediobtn() {
    // console.log(e.target.value);

    if (radio === "Shows" && input) {
      return <Shows input={input} error={seterror} />;
    } else if (radio === "Actors" && input) {
      return <Actor input={input} error={seterror} />;
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="Homepage" style={{fontsize:40}}>
        <div className="inputBox">
          <div className="Tvmaza">
            <i className="fa-solid fa-tv"></i>
            TV-maza
          </div>
          <div className="SearchText">Search Your Favourite Movies/Shows</div>
          <div>
            <form>
              <div className="rdo" onChange={(e) => setradio(e.target.value)}>
                <input type="radio" value="Actor" id="people" name="radio" />
                Actor <br />
                <input
                  type="radio"
                  value="Shows"
                  id="shows"
                  name="radio"
                  error={seterror}
                />{" "}
                Show
              </div>

              <div>
                <input
                  className="input"
                  onChange={(e) => setinput(e.target.value)}
                  placeholder={ "Search movies/shows"}
                />
                <br></br>
                {error ? <p style={{ color: "red" }}>Not Found</p> : <></>}
                {console.log(radio)}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {console.log(typeof radio)} */}
      {/* {radio === "Show" && input ? <Shows input={input} /> : <Actor />} */}
      {/* {<Shows input={input} />} */}
      {SetRediobtn()}
    </>
  );
};

export default HomePage;