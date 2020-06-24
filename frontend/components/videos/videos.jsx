import React from "react";
import { Link } from "react-router-dom";
import videosReducer from "../../reducers/videos_reducer";

class Videos extends React.Component {


    componentDidMount() {
        this.props.requestAllVideos()
    }

    onHoverPlay(e) {
        e.currentTarget.play();
        
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
        e.currentTarget.load();
    }

    render() {
        const { videos } = this.props;

        if (videos === undefined) {
            return null
        };

        return (
            <div className="browse">

                <div className="main-video">
                        {videos.map(vid => {
                            if (vid.title === "Demon Slayer: Kimetsu no Yaiba") {


                                return (
                                    <div className="main">
                                        <Link to={`/videos/${vid.id}`}>
                                            <video className="selectedVideosMain" autoPlay={true} poster={vid.picture} muted width="100%" height="100%" src={vid.video}
                                                type="video/mp4" controls={false} >
                                            </video>
                                        </Link>
                                    </div>
                                )
                            }
                        })}
                </div>
                
                
                <br/>
                <h2 className="genre">NEW</h2>
                <br/>
                <ul className="browse-new">
                {videos.map(vid => {
                    if (vid.title === "Dorohedoro" || vid.title === "One Punch Man" || vid.title === "Black Clover" || vid.title === "Tokyo Ghoul" || vid.title === "Keep Your Hands Off Eizouken!") {
                        
                    
                        return (
                            <li className="vid-row">
                                <Link to={`/videos/${vid.id}`}>
                                    <video className="selectedVideos" autoPlay={false} poster={vid.picture} muted width="20%" height="20%" src={vid.video}
                                        type="video/mp4" controls={false} onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave}>
                                    </video>
                                    <p className="list-index-button">{vid.title}</p>
                                </Link>

                            </li>
                        )
                    }
                })}
                </ul>
                <br/>
                <br/>
                <h2 className="genre">COMEDY</h2>
                <br/>
                <ul className="browse-funny">
                    {videos.map(vid => {
                        if (vid.title === "Dragon Ball" || vid.title === "Mob Psycho 100" || vid.title === "Assassination Classroom" || vid.title === "One Piece" || vid.title === "Cowboy Bebop") {


                            return (
                                <li className="vid-row">
                                    <Link to={`/videos/${vid.id}`}>
                                        <video className="selectedVideos" autoPlay={false} poster={vid.picture} muted width="20%" height="20%" src={vid.video}
                                            type="video/mp4" controls={false} onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave}>
                                        </video>
                                        <p className="list-index-button">{vid.title}</p>
                                    </Link>

                                </li>
                            )
                        }
                    })}
                </ul>
                <br />
                <h2 className="genre">ACTION</h2>
                <br />
                <ul className="browse-other">
                    {videos.map(vid => {
                        if (vid.title === "Dragon Ball Super" || vid.title === "Naruto" || vid.title === "Neon Genesis Evangelion" || vid.title === "Hunter x Hunter" || vid.title === "Parasyte") {


                            return (
                                <li className="vid-row">
                                    <Link to={`/videos/${vid.id}`}>
                                        <video className="selectedVideos" autoPlay={false} poster={vid.picture} muted width="20%" height="20%" src={vid.video}
                                            type="video/mp4" controls={false} onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave}>
                                        </video>
                                        <p className="list-index-button">{vid.title}</p>
                                    </Link>
                                    
                                </li>
                            )
                        }
                    })}
                </ul>

            </div>
        )
    }
}

export default Videos