import { connect } from 'react-redux';
import { requestAllVideos } from "../../actions/video_actions";
import Videos from './videos';

const mapStateToProps = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos)
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestAllVideos: () => dispatch(requestAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Videos);