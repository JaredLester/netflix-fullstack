// import React from "react";
// import { Link } from "react-router-dom";
// // import Footer from "../../footers/footer-homepage";

// class Browse extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             selected: false,
//         }
//         this.handleLogout = this.handleLogout.bind(this);
//     }

//     componentDidMount() {
//         this.props.requestAllVideos().then(() =>
//             this.props.requestAllGenres());
//     }

//     handleLogout(e) {
//         e.preventDefault();
//         this.props.logout();
//     }

//     handleSelected() {
//         e => e.target.classList.add(" selected-nav")
//     }

//     onHoverPlay(e) {
//         e.currentTarget.play();
//     }

//     onLeave(e) {
//         e.currentTarget.pause();
//         e.currentTarget.currentTime = 0;
//     }

//     showRows(genre) {
//         // if(this.props.genres.length > 0){
//         let count = 0
//         let videos = []
//         let specShows = []
//         genre.forEach((gen) => {
//             // if(genre.showsid.length > 4){
//             gen.showsid.forEach((id) => {
//                 if (count < 4) {
//                     specShows.push(id);
//                     count++;
//                 } else {
//                     videos.push(specShows);
//                     count = 0;
//                     specShows = [id];
//                 }
//             })
//             // }
//         })
//         videos.push(specShows);
//         return videos;
//         // }
//     }

//     render() {
//         // if (this.props.genres.length === 0 || this.props.videos.length === 0 || !this.props.videos) {
//         //     return (<div></div>);
//         // }

//         const randomVideo = this.props.videos[Object.keys(this.props.videos)[Math.floor(Math.random() * Object.keys(this.props.videos).length)]];
//         return (
//             <>
//                 <div className="homepage-browse">
//                     {/* <div className="nav-bar">
//                         <div className="left-bar">
//                             <div className="nav-sub-btns">
//                                 <Link className="browse-logo hover-box nav-sub-logo" onCLick={this.handleSelected()} to="/browse">ANIFLIX</Link>
//                                 <Link className="nav-home hover-box nav-sub-c" onCLick={this.handleSelected()} to="/browse" >Home</Link>
//                                 <Link className="nav-tv-videos hover-box nav-sub-c" onCLick={this.handleSelected()} to="/tvshows" >TV Shows</Link>
//                                 <Link className="nav-movies hover-box nav-sub-c" onCLick={this.handleSelected()} to="/movies" >Movies</Link>
//                                 <Link className="nav-mylist hover-box nav-sub-c" onCLick={this.handleSelected()} to="/my-list" >My List</Link>

//                             </div>
//                         </div>

//                         <div className="right-bar">
//                             <Link className="logout-btn hover-box" onClick={this.handleLogout} to="/">Log Out</Link>
//                         </div>

//                     </div> */}

//                     {/* <div className="home-video-display">
//                         <video className="home-vid" muted width="100%" height="100%" src={randomVideo.video} type="video/mp4" autoPlay>
//                         </video>
//                         <div className="random-video-title">{randomVideo.title}</div>
//                         <Link to={`/videos/${randomVideo.id}`}>
//                             <div className="play-button">▶ Play</div>
//                         </Link>
//                     </div> */}

//                     <div className="videos-by-genres-display">
//                         {this.props.genres.map((genre, i) => (
//                             <div className="genre-tag" key={i} >{genre.genre_type}
//                                 <div className="video-list">
//                                     {genre.videosid.map((id) => (
//                                         <div className="video-pic-vid" >
//                                             <img className="video-picture" src={this.props.videos[id].picture} alt="" key={id} />
//                                             <Link to={`/videos/${id}`}>
//                                                 <video preload="none" className="video-vid" muted width="100%" height="100%" src={this.props.videos[id].video}
//                                                     type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
//                                                 </video>
//                                             </Link>
//                                         </div>
//                                     ))}
//                                     {/* {   this.showRows(genre).forEach((block) => {
//                                     block.forEach((id) => (
//                                         <div className="show-pic-vid">
//                                             <img className="show-picture" src={this.props.videos[id].picture} alt="" />
//                                             <video className="show-vid" muted width="100%" height="100%" src={this.props.videos[id].video}
//                                                 type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
//                                             </video>
//                                         </div>
//                                     ))
//                                 })} */}
//                                 </div>
//                             </div>
//                         ))}

//                     </div>

//                 </div>
//             </>
//         );
//     }
// };

// export default Browse;



import React from 'react';
import VideosContainer from '../videos/videos_container'
import GreetingContainer from "../greeting/greeting_container"
import { Link } from "react-router-dom";
class Browse extends React.Component{

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSelected() {
        e => e.target.classList.add(" selected-nav")
    }
    
    render(){
        return(
            <div className="browse-welcome">
                <header>
                    
                    <div className="nav-bar">
                        <div className="left-bar">
                            <div className="nav-sub-btns">
                                <Link className="browse-logo hover-box nav-sub-logo" onCLick={this.handleSelected()} to="/browse">OTAKUFLIX</Link>
                                <Link className="nav-home hover-box nav-sub-c" onCLick={this.handleSelected()} to="/browse" >Home</Link>
                                <Link className="nav-movies hover-box nav-sub-c" onCLick={this.handleSelected()} to="/genres" >Genres</Link>
                                <Link className="nav-mylist hover-box nav-sub-c" onCLick={this.handleSelected()} to="/my-list" >My List</Link>
                                
                            </div>
                        </div>

                        <div className="right-bar">
                            <GreetingContainer />
                        </div>

                    </div>
                </header>
                <br/>
                <br/>
                <br/>
                <br/>
                    <VideosContainer />
            </div>
        )
    }

}

export default Browse;