import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Video from "./components/video";

export default function App() {
  const [videoEnd, setVideoEnd] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [currentVideoA, setCurrentVideoA] = useState(0);
  const [collectedCoin, setCollectedCoin] = useState(false);
  const [points, setPoints] = useState(0);

  const collectYourCoins = () => {
    setCollectedCoin(!collectedCoin);
    setPoints(points + 1);
    (currentVideoA != (mediaJSON.categories[0].videos.length - 1)) ? setCurrentVideoA(currentVideoA + 1) : setCurrentVideoA(0);
  }

  const nextVideo = () => {
    setVideoEnd(!videoEnd);
    setCollectedCoin(!collectedCoin);
    (currentVideo != (mediaJSON.categories[0].videos.length - 1)) ? setCurrentVideo(currentVideo + 1) : setCurrentVideo(0);
  }

  var mediaJSON = { "categories" : [ { "name" : "Movies",
        "videos" : [
        { "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
          "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ],
          "subtitle" : "By Google",
          "thumb" : "https://d6u22qyv3ngwz.cloudfront.net/ad/76Ab/google-chromecast-bigger-blazes-small-7.jpg",
          "title" : "For Bigger Blazes"
        },
        { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
          "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
          "subtitle" : "By Google",
          "thumb" : "https://i.ytimg.com/vi/ww3L56FTd1E/maxresdefault.jpg",
          "title" : "For Bigger Escape"
        },
        { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
          "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ],
          "subtitle" : "By Google",
          "thumb" : "https://www.cnet.com/a/img/resize/d917290bcbf175da001f554d648d8b0f653bc7b8/hub/2014/07/24/d855013b-a958-4e64-bd7e-4e7b412a7f59/google-chromecast-98031.jpg?auto=webp&width=768",
          "title" : "For Bigger Fun"
        },
        { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
          "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ],
          "subtitle" : "By Google",
          "thumb" : "https://d6u22qyv3ngwz.cloudfront.net/ad/7TK8/google-chromecast-bigger-joyrides-small-6.jpg",
          "title" : "For Bigger Joyrides"
        },
        { "description" :"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.", 
          "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ],
          "subtitle" : "By Google",
          "thumb" : "https://d6u22qyv3ngwz.cloudfront.net/ad/75GS/google-chromecast-bigger-meltdowns-small-5.jpg",
          "title" : "For Bigger Meltdowns"
        },
        { "description" : "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
          "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" ],
          "subtitle" : "By Garage419",
          "thumb" : "https://www.automotiveaddicts.com/wp-content/uploads/2009/04/porsche-gt3-rsr.jpg",
          "title" : "We Are Going On Bullrun"
        },
    ]}]};
    
  return (
    <View style = {{display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center"}}>
      <View style={styles.topContainer}>      
        <StatusBar style="auto" />
        <View style = {styles.textInTopContainer}>
          <Text>Your Points: {points}</Text>
        </View>
      </View>
      <View style={styles.videoContainer}>
        <Video
          width = {"80%"}
          height = {"100%"}
          source = {`${mediaJSON.categories[0].videos[currentVideo]["sources"]}`}
          ended = {() => setVideoEnd(!videoEnd)}
        />
        {collectedCoin && <Image source = {{uri: `${mediaJSON.categories[0].videos[currentVideoA]["thumb"]}`}} style = {{width: "60%", height: "100%", minWidth: "300px", position: "absolute",}}/>}
      </View>
      <View style={styles.container}>      
        <Text style = {{fontWeight: "bold"}}>{`${mediaJSON.categories[0].videos[currentVideoA]["title"]}`}</Text>
        <Text>{`${mediaJSON.categories[0].videos[currentVideoA]["subtitle"]}`}</Text>
        <View style = {{display: "flex", flexDirection: "column", width: "60%", marginTop: "2rem", rowGap: "1rem"}}>
          {<Button title = "Get Your Point" color = "blue" disabled = {(!videoEnd || collectedCoin)} onPress = {() => collectYourCoins()}/>}
          {collectedCoin && <Button title = "Watch Another Video" color = "blue" onPress = {() => nextVideo()} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInTopContainer: {
    flex: .5,
    width: "100%",
    alignItems: 'end',
    justifyContent: 'center',
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  topContainer: {
    marginTop: "1rem",
    marginBottom: "1rem",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: "2rem",
    alignItems: 'center',
    justifyContent: 'start',
  },
  videoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
