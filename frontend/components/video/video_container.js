import { connect } from 'react-redux';
import { requestVideo } from "../../actions/video_actions";
import Video from './video';

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.videoId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestVideo: (videoId) => dispatch(requestVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);