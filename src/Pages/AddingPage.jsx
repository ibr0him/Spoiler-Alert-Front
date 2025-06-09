import { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid"
import { MoviesContext } from "../Context/MoviesProvider";
import { useNavigate } from "react-router";
import CelebrityPhoto from "../assets/Images/celebrity.png";
import CompanyLogo from "../assets/Images/CompanyLogo.png";
import PersonCard from "../Components/PersonCard";
import CustomCss from "../Styles/CustomCss.module.css";
import MovieDetailsModel from "../Models/Movie Models/MovieDetailsModel";
import MovieModel from "../Models/Movie Models/MovieModel";
import CompanyCard from "../Components/CompanyCard";
import MovieService from "../Services/movieService";

let Movie = {};
let Person = {};
let SingleCompany = {};

const AddingPage = () => {

    let ImagesViewTemp = {
        MainPhoto: "https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg",
        Movie1: "https://4kwallpapers.com/images/wallpapers/venom-marvel-comics-marvel-superheroes-black-background-4480x2520-7311.jpg",
        Movie2: "https://wallpapercat.com/w/full/5/e/1/169887-1920x1080-desktop-full-hd-venom-wallpaper-photo.jpg",
        Cast: CelebrityPhoto,
        Company: CompanyLogo
    };

    const [ImagesView, setImagesView] = useState(ImagesViewTemp);
    const [PersonsData, setPersonsData] = useState([]);
    const [CompaniesData, setCompaniesData] = useState([]);
    const [NewMovie, setNewMovie] = useState(new MovieDetailsModel({ BasicData: new MovieModel({}) }));
    const { message, MoviesData, SetMoviesData } = useContext(MoviesContext);
    const [Loading, setLoading] = useState(false);
    const [LoadingMsg, setLoadingMsg] = useState("");
    const clearInput = useRef([]);

    let nav = useNavigate();

    useEffect(() => {
        if (LoadingMsg === "Movie Added Successfully") {
            message.showMessage("Movie Added Successfully");
            nav('/');
        }
    }, [LoadingMsg]);
    let HandleAction = (e) => {
        Movie[e.target.name] = e.target.value;

        if (e.target.name == "PersonName")
            Person['name'] = e.target.value;

        if (e.target.name == "CompanyName")
            SingleCompany['name'] = e.target.value;


        if (e.target.name.includes("Image")) {
            if (e.target.name == "ImageMain") {
                if (e.target.value)
                    setImagesView({ ...ImagesView, MainPhoto: e.target.value });
                else
                    setImagesView({ ...ImagesView, MainPhoto: ImagesViewTemp.MainPhoto });
            }
            if (e.target.name == "ImageMovie1") {
                if (e.target.value)
                    setImagesView({ ...ImagesView, Movie1: e.target.value });
                else
                    setImagesView({ ...ImagesView, Movie1: ImagesViewTemp.Movie1 });
            }
            if (e.target.name == "ImageMovie2") {
                if (e.target.value)
                    setImagesView({ ...ImagesView, Movie2: e.target.value });
                else
                    setImagesView({ ...ImagesView, Movie2: ImagesViewTemp.Movie2 });
            }
            if (e.target.name == "ImageCast") {
                if (e.target.value) {
                    setImagesView({ ...ImagesView, Cast: e.target.value });
                    Person['imgURL'] = e.target.value;
                }
                else
                    setImagesView({ ...ImagesView, Cast: ImagesViewTemp.Cast });
            }
            if (e.target.name == "ImageCompany") {
                if (e.target.value) {
                    setImagesView({ ...ImagesView, Company: e.target.value });
                    SingleCompany['imgURL'] = e.target.value;
                }
                else
                    setImagesView({ ...ImagesView, Company: ImagesViewTemp.Company });

            }

        }

    };
    let AddItem = (e) => {
        if (e.target.name == "AddCast") {
            Person['id'] = `${PersonsData.length}C`;
            PersonsData.push({ ...Person });
            setPersonsData([...PersonsData]);
            setImagesView({ ...ImagesView, Cast: ImagesViewTemp.Cast });
        }
        else {
            SingleCompany['id'] = `${CompaniesData.length}Com`;
            CompaniesData.push({ ...SingleCompany });
            setCompaniesData([...CompaniesData]);
            setImagesView({ ...ImagesView, Company: ImagesViewTemp.Company });
        }
        // Reseting Inputs
        clearInput.current.forEach(input => {
            if (input) input.value = '';
        });
    }
    let Submit = async () => {
        NewMovie.cast = [...PersonsData];
        NewMovie.productionCompanies = [...CompaniesData];
        setNewMovie({ ...NewMovie });
        await MovieService.AddMovie({ NewMovie,setLoading, setLoadingMsg,MoviesData, SetMoviesData });

    };

    let RecieveID = (id) => {

        if (id.includes('C'))
            setPersonsData(PersonsData.filter((per) => per.id != id));
        else
            setCompaniesData(CompaniesData.filter((Com) => Com.id != id));
    };
    let ClassName = {
        MainContainer: "mx-auto px-8 mt-10 flex flex-col gap-y-10 items-center",
        Title: "text-[40px] font-bold w-fit text-center",
        SectionContainer: "flex flex-wrap gap-x-4 gap-y-8 justify-center",
        PosterImage: "w-[22vw] h-auto object-contain rounded-md grow-2",
        TFieldCon: "w-full md:w-fit flex flex-col gap-y-4",
        TField: "grow-1 px-4 py-3 min-w-[300px] outline-none bg-black/15 rounded-sm",
        MovSourcesCon: "flex flex-col gap-y-4 w-[28%] min-w-[400px] items-center grow-2",
        LanscapeImage: "w-full h-auto rounded-md object-contain",
        LogBtn: "bg-[#24b1bf] rounded-md text-white font-bold text-xl w-full py-4 cursor-pointer",

        CelebrityContainer: "flex flex-col gap-y-4 items-center",
        AddedContainer: "bg-black/30 h-[650px] w-full md:w-[49vw] rounded-xl flex flex-col py-8 px-6 items-center",
        PersonsContainer: " w-full h-full pt-8 flex flex-wrap gap-8 overflow-y-auto overflow-x-hidden justify-center " + CustomCss.darkScrollbar,
        TitleMinCon: "flex flex-col items-center",
        Line: "bg-white w-full h-1.5 rounded-full",
        CompanyLanscapeImageContainer: "w-[440px] h-[440px] p-4 rounded-md bg-[#fbf7f2]",
        CompanyLanscapeImage: "w-full h-full object-center object-contain"
    };
    if (Loading) return (
        <div className="flex w-full mt-[-100px] h-[100vh] p-8 justify-center items-center">
            <div className="text-center space-y-6 w-fit h-fit">
                <div
                    className="w-24 h-24 border-4 border-t-[#24b1bf] border-gray-700 rounded-full animate-spin mx-auto"
                ></div>
                <div className="text-white font-semibold text-4xl opacity-90 animate-fadeIn">
                    {LoadingMsg}
                </div>
                <div className="text-[#9e9e9e] text-sm opacity-80 animate-fadeIn">
                    <p>Sit tight for just a moment.</p>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className={ClassName.MainContainer}>

                <label className={ClassName.Title}>Adding Movie</label>

                <div className={ClassName.SectionContainer}>
                    <img className={ClassName.PosterImage} src={ImagesView.MainPhoto} alt="Poster Image" />
                    <div className={ClassName.TFieldCon}>
                        <input className={ClassName.TField} type="text" placeholder="Title"
                            value={NewMovie.title} onChange={(e) => setNewMovie({ ...NewMovie, title: e.target.value })} onBlur={HandleAction} />

                        <input name="ImageMain" className={ClassName.TField} type="text"
                            value={NewMovie.posterImage} onChange={(e) => setNewMovie({ ...NewMovie, posterImage: e.target.value })}
                            placeholder="Poster Image Url" onBlur={HandleAction} />

                        <input className={ClassName.TField} type="text" placeholder="Genres" onBlur={HandleAction}
                            value={NewMovie.genres} onChange={(e) => setNewMovie({ ...NewMovie, genres: e.target.value })} />

                        <input className={ClassName.TField} type="text" placeholder="Release Date" onBlur={HandleAction}
                            value={NewMovie.releaseDate} onChange={(e) => setNewMovie({ ...NewMovie, releaseDate: e.target.value })} />

                        <input className={ClassName.TField} type="text" placeholder="Rating" onBlur={HandleAction}
                            value={NewMovie.rating} onChange={(e) => setNewMovie({ ...NewMovie, rating: e.target.value })} />

                        <textarea className={ClassName.TField} style={{ flexGrow: "3" }} placeholder="Overview" onBlur={HandleAction}
                            value={NewMovie.overview} onChange={(e) => setNewMovie({ ...NewMovie, overview: e.target.value })}></textarea>

                    </div>
                    <div className={ClassName.MovSourcesCon}>
                        <img src={ImagesView.Movie1} alt="Movie Landscape Image 1" className={ClassName.LanscapeImage} />
                        <input name="ImageMovie1" className={ClassName.TField} style={{ width: "100%", flexGrow: "0" }} type="text"
                            placeholder="Landscape Image 1 Url"
                            onBlur={HandleAction} value={NewMovie.sources.img1} onChange={(e) => setNewMovie({
                                ...NewMovie,
                                sources: {
                                    ...NewMovie.sources,
                                    img1: e.target.value
                                }
                            })} />
                    </div>
                    <div className={ClassName.MovSourcesCon}>
                        <img src={ImagesView.Movie2} alt="Movie Landscape Image 2" className={ClassName.LanscapeImage} />
                        <input name="ImageMovie2" className={ClassName.TField} style={{ width: "100%", flexGrow: "0" }}
                            type="text" placeholder="Landscape Image 2 Url" onBlur={HandleAction} value={NewMovie.sources.img2}
                            onChange={(e) => setNewMovie({
                                ...NewMovie, sources: {
                                    ...NewMovie.sources, img2: e.target.value
                                }
                            })} />
                        <input className={ClassName.TField} style={{ width: "100%", flexGrow: "0" }}
                            type="text" placeholder="Trailer Video Url" onBlur={HandleAction}
                            value={NewMovie.sources.video}
                            onChange={(e) => setNewMovie({
                                ...NewMovie, sources: {
                                    ...NewMovie.sources, video: e.target.value
                                }
                            })} />
                    </div>
                </div>

                <label className={ClassName.Title}>Adding Cast</label>

                <div className={ClassName.SectionContainer}>
                    <div className={ClassName.CelebrityContainer}>
                        <img src={ImagesView.Cast} alt="Celebrity Photo" className={ClassName.PosterImage} style={{ width: "295px", flexGrow: "0" }} />
                        <input name="PersonName" className={ClassName.TField} style={{ width: "100%", flexGrow: "0" }} type="text" placeholder="Actor Name" onBlur={HandleAction} ref={e1 => clearInput.current[0] = e1} />
                        <input name="ImageCast" className={ClassName.TField} style={{ width: "100%", flexGrow: "0" }} type="text" placeholder="Personal Image Url" onBlur={HandleAction} ref={e1 => clearInput.current[1] = e1} />
                        <button name="AddCast" className={ClassName.LogBtn} onClick={AddItem}>Add</button>
                    </div>
                    <div className={ClassName.AddedContainer}>
                        <div>
                            <label className={ClassName.Title}>Added Cast</label>
                            <div className={ClassName.Line}></div>
                        </div>
                        <div className={ClassName.PersonsContainer}>
                            {PersonsData.map((Per) => <PersonCard uData={Per} key={Per.id} onClickClose={RecieveID}></PersonCard>)}
                        </div>
                    </div>

                </div>

                <label className={ClassName.Title}>Adding Production Compainies</label>

                <div className={ClassName.SectionContainer}>

                    <div className={ClassName.CelebrityContainer}>

                        <div className={ClassName.CompanyLanscapeImageContainer}>
                            <img src={ImagesView.Company} alt="Company Logo" className={ClassName.CompanyLanscapeImage} />
                        </div>

                        <input name="CompanyName" className={ClassName.TField} style={{ width: "100%" }} type="text" placeholder="Company Name" onBlur={HandleAction} ref={e1 => clearInput.current[2] = e1} />
                        <input name="ImageCompany" className={ClassName.TField} style={{ width: "100%" }} type="text" placeholder="Company Logo Url" onBlur={HandleAction} ref={e1 => clearInput.current[3] = e1} />
                        <button name="AddCompany" className={ClassName.LogBtn} onClick={AddItem} >Add</button>
                    </div>
                    <div className={ClassName.AddedContainer}>

                        <div className={ClassName.TitleMinCon}>
                            <label className={ClassName.Title}>Added Production Companies</label>
                            <div className={ClassName.Line}></div>
                        </div>
                        <div className={ClassName.PersonsContainer}>
                            {CompaniesData.map((Com) => <CompanyCard uData={Com} key={Com.id} onClickClose={RecieveID}></CompanyCard>)}
                        </div>
                    </div>

                    <button className={ClassName.LogBtn} style={{ margin: "100px auto", height: "70px" }} onClick={Submit} >Add Movie</button>

                </div>

            </div>
        </>
    );
}

export default AddingPage;
