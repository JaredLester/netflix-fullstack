import React from "react";
import { Link } from "react-router-dom";

class Video extends React.Component {


    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId)
    }

    render() {
        if (!this.props.video) {
            return (<div></div>)
        }

        return (
            <div className="video">
                <Link to={`/browse`}>
                    <div className="back">
                        <div className="back-icon">←
                    <div className="back-browse">Back to Browse</div>
                        </div>
                    </div>
                </Link>
                <video className="selectedVideo" autoPlay={true} width="90%" height="90%" src={this.props.video.video}
                    type="video/mp4" controls={true} >
                </video>
            </div>
        )
    }
}

export default Video