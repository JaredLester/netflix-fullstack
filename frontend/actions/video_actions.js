import * as VideoAPIUtil from "../util/video_api_util.js";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveAllVideos = (videos) => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
});

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

export const requestAllVideos = () => dispatch => (
    VideoAPIUtil.fetchVideos()
        .then((videos) => dispatch(receiveAllVideos(videos)))
);

export const requestVideo = (videoId) => dispatch => (
    VideoAPIUtil.fetchVideo(videoId)
        .then((video) => dispatch(receiveVideo(video)))
);