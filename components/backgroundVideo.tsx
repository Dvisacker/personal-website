import styled, { keyframes } from "styled-components";
import { getState } from "../context";

const BackgroundVideo = (): JSX.Element => {
    const [{ layout }] = getState();
    const { currentTab } = layout;

    return (
        <>
            <VideoFrame autoPlay={true} loop={true} muted visible={currentTab === 0}>
                <source src="/seoulvid1.mp4" type="video/mp4" />
            </VideoFrame>
            <VideoFrame autoPlay={true} loop={true} muted visible={currentTab === 1}>
                <source src="/seoulvid1.mp4#t=10" type="video/mp4" />
            </VideoFrame>
            <VideoFrame autoPlay={true} loop={true} muted visible={currentTab === 2}>
                <source src="/seoulvid1.mp4#t=20" type="video/mp4" />
            </VideoFrame>
        </>
    );
};

const VideoFrame = styled.video`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    object-fit: fill;
    transition-property: opacity;
    transition-duration: 1s;
    opacity: ${(props) => (props.visible ? 1 : 0)};
`;

export default BackgroundVideo;
