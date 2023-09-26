import ReactPlayer from "react-player/lazy";
import Navbar from "../../components/homepage/navbar";
// import Video from "../../assets/video/GOLD-SOUK.mp4";

const Banner = () => {
  return (
    <div>
      <Navbar />
      <div className="player-container">
        <ReactPlayer
          url={
            "https://player.vimeo.com/video/828316311?h=ed2fd1fcd4&badge=0&autopause=0&player_id=0&app_id=58479"
          }
          className="w-full"
          controls={true}
        />{" "}
      </div>
    </div>
  );
};
export default Banner;
