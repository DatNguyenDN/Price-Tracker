import React from "react";
//import clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
//clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
//import video
import VideoBg from "../Assets/HomeVideo/video.mp4";
// import css
import "./HomeStyles.css";
const Home = () => {
    return (
        <section className="page h-screen">
            {/**overlay */}
            <div className="overlay"></div>
            {/**video */}
            <video src={VideoBg} autoPlay={true} loop={true} muted={true}></video>
            {/** content */}
            <div className="page__content">
                <h1 className="animate__animated animate__backInLeft ">Comming Soon</h1>
                <h3 className="animate__animated animate__backInRight">Leave your email and we'll let you know once the site gose live.</h3>
                {/**Clock */}
                <FlipClockCountdown
                    to={new Date("2024-01-01").getTime() + 24 * 3600 * 1000 + 5000}
                    className="flip-clock max-sm:w-full "
                    labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
                    duration={0.5}
                    showSeparators={true}
                ></FlipClockCountdown>
                {/** button */}
                <button className="btn  btn-primary btn__home animate__animated  animate__backInLeft">Notify me</button>
            </div>
        </section>
    );
};

export default Home;
