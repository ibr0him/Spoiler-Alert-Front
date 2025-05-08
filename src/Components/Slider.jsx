
import { useRef, useState } from "react";
import Slide1 from "../assets/Images/Slide1.png"
import Slide2 from "../assets/Images/Slide2.jpg"
import Slide3 from "../assets/Images/Slide3.jpg"
import Slide4 from "../assets/Images/Slide4.jpg"
import Rarrow from "../assets/Images/Rarrow.png"
import Larrow from "../assets/Images/Larrow.png"
import '../Styles/Slider.css'

import Navbar from "./Navbar"


function Slider(){
    let ImagesData=[
        {URL:Slide1,Title:"Rogue One: A Star Wars Story",Des:"Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance."},
        {URL:Slide2,Title:"Ghostbusters",Des:"After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become ghostbusters to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that will release evil upon the city. The Ghostbusters must now save New York from complete destruction."},
        {URL:Slide3,Title:"Godzilla",Des:"Ford Brody (Aaron Taylor-Johnson), a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe (Bryan Cranston). Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco."},
        {URL:Slide4,Title:"Pacific Rim",Des:"Long ago, legions of monstrous creatures called Kaiju arose from the sea, bringing with them all-consuming war. To fight the Kaiju, mankind developed giant robots called Jaegers, designed to be piloted by two humans locked together in a neural bridge. However, even the Jaegers are not enough to defeat the Kaiju, and humanity is on the verge of defeat. Mankind's last hope now lies with a washed-up ex-pilot, an untested trainee and an old, obsolete Jaeger."}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    let [Show,SetShow] = useState(false);
    
    let Timer=useRef(null);

    const Next = () => {
        const nextIndex = (currentIndex + 1) % ImagesData.length; 
        setCurrentIndex(nextIndex); 
    };
    const Prev = () => {

        let PrevIndex;
        if(currentIndex==0)
            PrevIndex=ImagesData.length-1;
        else
            PrevIndex = currentIndex - 1; 
        setCurrentIndex(PrevIndex); 
    };
    const SlideShow = () => {
        SetShow((old) => !old);
        if (Timer.current) {
            clearInterval(Timer.current);
            Timer.current = null;
        } else {
            Timer.current = setInterval(() => {
                setCurrentIndex((Following) => (Following + 1) % ImagesData.length);
            }, 1000);
        }
    };

    return(
        <div id="Slider" style={{backgroundImage:`url(${ImagesData[currentIndex].URL})`}} >
            <Navbar id="Navbar"></Navbar>
            <div id="HeadlineContainer">
                <div id="TitleContainer">
                    <p id="Heading">{ImagesData[currentIndex].Title}</p>
                    <div id="Line"></div>
                </div>
                <p id="Describtion">{ImagesData[currentIndex].Des}</p>
            </div>

            <div id="Controls">
                <img className="Arrow" src={Larrow} onClick={Prev}></img>
                <button id="SlideShow" onClick={SlideShow}>{Show?'Pause':'Play'}</button>
                <img className="Arrow" src={Rarrow} onClick={Next}></img>
            </div>
        </div>
    )
}
export default Slider;