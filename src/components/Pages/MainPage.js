import { Fragment } from "react";
import "./MainPage.css";
import character from "../../assets/character.png";
import Card from "../UI/Card";

function MainPage() {
  return (
    <Fragment>
      <div className="backgroundContainer">
        <div className="mainPage grid grid-cols-1 lg:grid-cols-2 pt-20 m-auto">
          {/* Div 1 without the character image. */}
          <div className="mt-12 px-5 lg:pt-20 lg:pl-20 ">
            <div className="mainHeading">What are you looking for?</div>
            <div className="lg:mr-10">
              <Card
                heading={"Help me create a Marketing Plan!"}
                paragraph={
                  "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that"
                }
              />
              <Card
                heading={"I know what i am looking for."}
                paragraph={
                  "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that"
                }
              />
            </div>
          </div>
          <div className="mover">
            {/* Div 2 with the character image */}
            <div className="flex -ml-20">
              <img
                src={character}
                alt="character"
                width= "100%"
                className="-mx-40 w-full h-full character"
              />
              {/* Captions' div */}
              <div className="mt-5">
                {/* Div with upper caption */}
                <div class="caption upperCaption text-comet-500 w-56 md:w-64 lg:w-72">
                  <span className="captionWeight">Hi there!</span> Need help in
                  creating a Marketing plan for your business? I can help you to
                  create one using{" "}
                  <span className="captionWeight">Retink AI engine.</span>
                </div>
                {/* Div with lower caption */}
                <div class="caption w-44 -ml-10 lowerCaption text-comet-500">
                  Click on the options to get started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
