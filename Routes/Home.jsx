import React from "react";
import { useNavigate } from "react-router-dom";
import ImageMagnifier from "../Components/ImageMagnifier";
<<<<<<< HEAD
import HomeERD from "../static/Home_ERD_v2.png"
=======
import HomeERD from "../Static/Home_ERD_v2.png"
import Spline from '@splinetool/react-spline';
>>>>>>> 3881e0b6f447a9f5671196a39e5a307989ab01e6

function Home() {
    const navigate = useNavigate();

    return (
            <section className="bodySection snaps-inline">
                {/* <div className="media-scroller snaps-inline">
                </div> */}
                <div className="media-element homeHero">
                    <h1>This is our Hero Section</h1>
                </div>

                <div className="media-element homeDemo1">
                    <h1>This is for our first Demo</h1>
                </div>

                <div className="media-element homeFeatures">
                    <h1>Diagram of Features</h1>
                </div>

                {/* <div className="media-element">
                </div> */}
                <div className="homeTeam">
                    <div> </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="media-element homeTechStack">
                    <Spline scene="https://prod.spline.design/jTj8tnjowJhFSwVa/scene.splinecode" />
                </div>

                <div className="media-element homeDemo2">
                    <h1>This is for our second Demo</h1>
                </div>

                <div className="media-element homeERD" id="homeERD">
                    <h1>Entity Relationship Diagram</h1>
                    <ImageMagnifier imgUrl={HomeERD} />
                </div>

                <div className="media-element homeDemo3">
                    <h1>This is for our third Demo</h1>
                </div>

            </section>

    );
}

export default Home;