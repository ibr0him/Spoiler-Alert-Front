import { useEffect, useRef, useState } from "react";
import Slide1 from "../assets/Images/Slide1.png";
import Slide2 from "../assets/Images/Slide2.jpg";
import Slide3 from "../assets/Images/Slide3.jpg";
import Slide4 from "../assets/Images/Slide4.jpg";
import CSSAnimation from "../Styles/Animation.module.css";

function Slider() {
   const ImagesData = [
        {
            URL: Slide1,
            Title: "Rogue One: A Star Wars Story",
            Des: "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance."
        },
        {
            URL: Slide2,
            Title: "Ghostbusters",
            Des: "After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become ghostbusters to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that will release evil upon the city. The Ghostbusters must now save New York from complete destruction."
        },
        {
            URL: Slide3,
            Title: "Godzilla",
            Des: "Ford Brody (Aaron Taylor-Johnson), a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe (Bryan Cranston). Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco."
        },
        {
            URL: Slide4,
            Title: "Pacific Rim",
            Des: "Long ago, legions of monstrous creatures called Kaiju arose from the sea, bringing with them all-consuming war. To fight the Kaiju, mankind developed giant robots called Jaegers, designed to be piloted by two humans locked together in a neural bridge. However, even the Jaegers are not enough to defeat the Kaiju, and humanity is on the verge of defeat. Mankind's last hope now lies with a washed-up ex-pilot, an untested trainee and an old, obsolete Jaeger."
        }
    ];

     const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const timeoutRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => {
            if (sliderRef.current) observer.unobserve(sliderRef.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            clearInterval(timeoutRef.current);
            return;
        }

        timeoutRef.current = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prev) => (prev + 1) % ImagesData.length);
            setAnimating(true);
        }, 4000);

        return () => clearInterval(timeoutRef.current);
    }, [currentIndex, isVisible]);

    const ClassName = {
        Overlay: `top-0 left-0 w-full h-full bg-black/40 z-1`,
        HeadlineContainer: "relative flex flex-col top-[40%] z-2 w-full h-[60%] gap-[8%] pl-[50px] pb-[50px] overflow-hidden",
        TitleContainer: "flex flex-col w-fit gap-[20px]",
        Heading: "text-[30px] md:text-[40px] xl:text-[60px] font-bold text-color",
        Line: "w-full h-[7px] rounded-full bg-white",
        Description: "text-[15px] md:text-[20px] top-[70%] max-w-[95%] xl:max-w-[60%] max-h-full",
    };

    return (
        <div  ref={sliderRef} className="absolute top-0 w-full h-screen overflow-hidden" style={{boxShadow: "0px 3px 30px 7px black"}}>
            {prevIndex !== null && animating && (
                <div
                    key={`prev-${prevIndex}`}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${CSSAnimation.slideOut}`}
                    style={{ backgroundImage: `url(${ImagesData[prevIndex].URL})` }}
                >
                    <div className={ClassName.Overlay}>
                        <div className={ClassName.HeadlineContainer}>
                            <div className={ClassName.TitleContainer}>
                                <p className={ClassName.Heading}>{ImagesData[prevIndex].Title}</p>
                                <div className={ClassName.Line}></div>
                            </div>
                            <p className={ClassName.Description}>{ImagesData[prevIndex].Des}</p>
                        </div>
                    </div>
                    
                </div>
                
            )}

            <div
                key={`curr-${currentIndex}`}
                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${animating ? CSSAnimation.slideIn : ""}`}
                style={{ backgroundImage: `url(${ImagesData[currentIndex].URL})` }}
                onAnimationEnd={() => setAnimating(false)}
            >
                <div className={ClassName.Overlay}>
                    <div className={ClassName.HeadlineContainer}>
                        <div className={ClassName.TitleContainer}>
                            <p className={ClassName.Heading}>{ImagesData[currentIndex].Title}</p>
                            <div className={ClassName.Line}></div>
                        </div>
                        <p className={ClassName.Description}>{ImagesData[currentIndex].Des}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
