import { createElement } from "react-native";

const Video = (props) => {
  const attrs = {
    width: props.width,
    height: props.height,
    src: props.source,
    poster: props.poster,
    autoPlay: true,
    preLoad: true,
    onEnded: props.ended,
  }
  return createElement("video", attrs)
}

export default Video