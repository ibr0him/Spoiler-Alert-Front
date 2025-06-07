import { useState } from "react";
import CSS from "../Styles/CustomCss.module.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link, Outlet, useParams } from "react-router";

const MoviePage = () => {

    let Images =
        [
            "https://4kwallpapers.com/images/wallpapers/venom-marvel-comics-marvel-superheroes-black-background-4480x2520-7311.jpg",
            "https://wallpapercat.com/w/full/5/e/1/169887-1920x1080-desktop-full-hd-venom-wallpaper-photo.jpg",
            "https://img.youtube.com/vi/VWqJifMMgZE/hqdefault.jpg"
        ];
    const {id} = useParams();
    let MenuItems=["Description","Crew Members","Production Companies","Reviews"];
    const [MenuIndex, setMenuIndex] = useState(0);
    const [Index, setIndex] = useState(0);

    let ClassName = {
        Container: "absolute top-0 w-full h-[90%] bg-cover bg-center "+ CSS.mainBoxShadow,
        ThumbnailContainer: "absolute top-[85%] left-[50%] translate-x-[-50%] flex gap-8 w-[90%] xl:w-[60%] h-[180px] mx-auto",
        Thumbnail: "w-[30%] h-full rounded-2xl bg-cover bg-center cursor-pointer overflow-hidden " + CSS.mainBoxShadow,
        Menu: "flex flex-col mt-[100vh] mb-[50px] w-[95%] gap-4 pl-8",
        MenuItem: "text-[15px] md:text-[20px] lg:text-[30px] font-bold text-center",
        Line: "relative z-1 w-full h-2 rounded-full bg-[#22ebff]",
        DynamicSec: "w-[95%] pl-8 mb-[100px]"
    };

    return (
        <>
            <div className={ClassName.Container} style={{ backgroundImage: `url(${Images[Index]})` }}>

                {Index === 2 && (
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/VWqJifMMgZE"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}

                <div className={ClassName.ThumbnailContainer}>
                    {
                        Images.map((img, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    outline: Index === i ? "5px solid #24b1bf" : "none"
                                }}
                                className={ClassName.Thumbnail}
                                onClick={() => setIndex(i)}

                            >
                                {
                                    i === 2 && (
                                        <div className="flex justify-center items-center w-full h-full bg-black/50">
                                            <IoPlayCircleOutline size={100}></IoPlayCircleOutline>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className={ClassName.Menu}>
                <div className="flex items-center gap-10">
                    {MenuItems.map((item,i)=>(
                        <div className="flex flex-col gap-4">
                            <Link 
                            className={ClassName.MenuItem}
                            key={i}
                            to = {item=="Description"?`/Movie/${id}`:item}
                            style={{color: MenuIndex==i ? "#22ebff" : "white"}}
                            onClick={()=>setMenuIndex(i)}
                            >{item}</Link>
                            <div className={ClassName.Line} style={{visibility:MenuIndex==i ? "visible":"hidden"}}></div>
                        </div>
                    ))}
                </div>
                <div className="relative top-[-20px] w-full h-0.5 rounded-full bg-white/40"></div>
            </div>
            <div className={ClassName.DynamicSec}>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default MoviePage;
