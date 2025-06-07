import { useContext, useRef, useState } from "react";
import {v4 as uuid} from "uuid"
import { MoviesContext } from "../Context/MoviesProvider";
import { useNavigate } from "react-router";
import CelebrityPhoto from "../assets/Images/celebrity.png";
import CompanyLogo from "../assets/Images/CompanyLogo.png";
import PersonCard from "../Components/PersonCard";
import CustomCss from "../Styles/CustomCss.module.css";

let Movie={};
let Person={};
let SingleCompany={};

const AddingPage = () => {

let ImagesViewTemp={
    MainPhoto: "https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg",
    Movie1:"https://4kwallpapers.com/images/wallpapers/venom-marvel-comics-marvel-superheroes-black-background-4480x2520-7311.jpg",
    Movie2:"https://wallpapercat.com/w/full/5/e/1/169887-1920x1080-desktop-full-hd-venom-wallpaper-photo.jpg",
    Cast: CelebrityPhoto,
    Company: CompanyLogo
};


let { MoviesData,SetMoviesData }=useContext(MoviesContext);
const [ImagesView, setImagesView] = useState(ImagesViewTemp);
const [PersonsData, setPersonsData] = useState([]);
const [CompaniesData, setCompaniesData] = useState([]);
const clearInput = useRef([]);

let nav =useNavigate();

    let HandleAction = (e)=>{
        Movie[e.target.name]=e.target.value;
        
        if(e.target.name =="PersonName")
            Person['Name'] = e.target.value;

        if(e.target.name =="CompanyName")
            SingleCompany['Name'] = e.target.value;
       
        
        if(e.target.name.includes("Image"))
        {
            if(e.target.name == "ImageMain")
            {
                if(e.target.value)
                    setImagesView({...ImagesView, MainPhoto : e.target.value} );
                else
                    setImagesView({...ImagesView, MainPhoto : ImagesViewTemp.MainPhoto} );
            }
            if(e.target.name == "ImageMovie1")
            {
                if(e.target.value)
                    setImagesView({...ImagesView, Movie1: e.target.value} );
                else
                    setImagesView({...ImagesView, Movie1 : ImagesViewTemp.Movie1} );
            }
            if(e.target.name == "ImageMovie2")
            {
                if(e.target.value)
                    setImagesView({...ImagesView, Movie2 : e.target.value} );
                else
                    setImagesView({...ImagesView, Movie2 : ImagesViewTemp.Movie2} );
            }
            if(e.target.name == "ImageCast")
            {
                if(e.target.value)
                {
                    setImagesView({...ImagesView, Cast : e.target.value} );
                    Person['ImageUrl'] = e.target.value;
                }
                else
                    setImagesView({...ImagesView, Cast : ImagesViewTemp.Cast} );
            }
            if(e.target.name == "ImageCompany")
            {
                if(e.target.value)
                {
                    setImagesView({...ImagesView, Company : e.target.value} );
                    SingleCompany['ImageUrl'] = e.target.value;
                }
                else
                    setImagesView({...ImagesView, Company : ImagesViewTemp.Company} );
                
            }

        }

    };
    let AddItem=(e)=>{
        if(e.target.name == "AddCast")
        {
            Person['id']=`${PersonsData.length}P`;
            PersonsData.push({...Person});
            setPersonsData(PersonsData);
            setImagesView({...ImagesView, Cast : ImagesViewTemp.Cast} );
        }
        else{
            SingleCompany['id']=`${CompaniesData.length}C`;
            CompaniesData.push({...SingleCompany});
            setCompaniesData(CompaniesData);
            setImagesView({...ImagesView, Company : ImagesViewTemp.Company} );
        }
        // Reseting Inputs
        clearInput.current.forEach(input => {
            if (input) input.value = '';
        });
    }
    let Submit= ()=>{
        SetMoviesData([...MoviesData,{...Movie,id:uuid()}]);
        nav('/Browse', { state: { fromAddMovie: true } });
    };
    
    let RecieveID =(id)=>{

        if(id.includes('P'))
            setPersonsData(PersonsData.filter( (per)=>per.id!=id ));
        else
            setCompaniesData(CompaniesData.filter( (Com)=>Com.id!=id ));
    };
    let ClassName ={
        MainContainer:"mx-auto px-8 mt-10 flex flex-col gap-y-10 items-center",
        Title:"text-[40px] font-bold w-fit text-center",
        SectionContainer:"flex flex-wrap gap-x-4 gap-y-8 justify-center",
        PosterImage:"w-[22vw] h-auto object-contain rounded-md grow-2",
        TFieldCon:"w-full md:w-fit flex flex-col gap-y-4",
        TField :"grow-1 px-4 py-3 min-w-[300px] outline-none bg-black/15 rounded-sm",
        MovSourcesCon:"flex flex-col gap-y-4 w-[28%] min-w-[400px] items-center grow-2",
        LanscapeImage:"w-full h-auto rounded-md object-contain",
        LogBtn:"bg-[#24b1bf] rounded-md text-white font-bold text-xl w-full py-4 cursor-pointer",

        CelebrityContainer:"flex flex-col gap-y-4 items-center",
        AddedContainer:"bg-black/30 h-[650px] w-full md:w-[49vw] rounded-xl flex flex-col py-8 px-6 items-center",
        PersonsContainer:" w-full h-full pt-8 flex flex-wrap gap-8 overflow-y-auto overflow-x-hidden justify-center "+CustomCss.darkScrollbar,
        TitleMinCon:"flex flex-col items-center",
        Line:"bg-white w-full h-1.5 rounded-full"
    };
    return (
        <>
            <div className={ClassName.MainContainer}>

                <label className={ClassName.Title}>Adding Movie</label>

                <div className={ClassName.SectionContainer}>
                    <img className={ClassName.PosterImage} src={ImagesView.MainPhoto} alt="Poster Image" />
                    <div className={ClassName.TFieldCon}>
                        <input className={ClassName.TField} type="text" placeholder="Title" onBlur={HandleAction}/>
                        <input name="ImageMain" className={ClassName.TField} type="text" placeholder="Poster Image Url" onBlur={HandleAction}/>
                        <input className={ClassName.TField} type="text" placeholder="Genres" onBlur={HandleAction}/>
                        <input className={ClassName.TField} type="text" placeholder="Release Date" onBlur={HandleAction}/>
                        <input className={ClassName.TField} type="text" placeholder="Rating" onBlur={HandleAction}/>
                        <textarea name=""className={ClassName.TField} style={{flexGrow:"3"}} placeholder="Overview" onBlur={HandleAction}></textarea>
                    </div>
                    <div className={ClassName.MovSourcesCon}>
                        <img src={ImagesView.Movie1} alt="Movie Landscape Image 1" className={ClassName.LanscapeImage}/>
                        <input name="ImageMovie1" className={ClassName.TField} style={{width:"100%",flexGrow:"0"}} type="text" placeholder="Landscape Image 1 Url" onBlur={HandleAction}/>
                    </div>
                    <div className={ClassName.MovSourcesCon}>
                        <img src={ImagesView.Movie2} alt="Movie Landscape Image 2" className={ClassName.LanscapeImage}/>
                        <input name="ImageMovie2" className={ClassName.TField} style={{width:"100%",flexGrow:"0"}} type="text" placeholder="Landscape Image 2 Url" onBlur={HandleAction}/>
                        <input className={ClassName.TField} style={{width:"100%",flexGrow:"0"}} type="text" placeholder="Trailer Video Url" onBlur={HandleAction}/>
                    </div>
                </div>
            
                <label className={ClassName.Title}>Adding Cast</label>
                
                <div className={ClassName.SectionContainer}>
                     <div className={ClassName.CelebrityContainer}>
                        <img src={ImagesView.Cast} alt="Celebrity Photo" className={ClassName.PosterImage} style={{width:"295px",flexGrow:"0"}}/>
                        <input name="PersonName" className={ClassName.TField} style={{width:"100%",flexGrow:"0"}} type="text" placeholder="Actor Name" onBlur={HandleAction} ref={e1 => clearInput.current[0] =e1} />
                        <input name="ImageCast" className={ClassName.TField} style={{width:"100%",flexGrow:"0"}} type="text" placeholder="Personal Image Url" onBlur={HandleAction} ref={e1 => clearInput.current[1] =e1}/> 
                        <button name="AddCast" className={ClassName.LogBtn} onClick={AddItem}>Add</button>  
                     </div>
                     <div className={ClassName.AddedContainer}>
                        <div>
                            <label className={ClassName.Title}>Added Cast</label>
                            <div className={ClassName.Line}></div>
                        </div>
                        <div className={ClassName.PersonsContainer}>
                            {PersonsData.map((Per)=> <PersonCard uData={Per} key={Per.id} onClickClose={RecieveID}></PersonCard>)}
                        </div>
                    </div>

                </div>

                <label className={ClassName.Title}>Adding Production Compainies</label>

                    <div className={ClassName.SectionContainer}>

                     <div className={ClassName.CelebrityContainer}>
                        <img src={ImagesView.Company} alt="Company Logo" className={ClassName.LanscapeImage} style={{width:"25vw"}}/>
                        <input name="CompanyName" className={ClassName.TField} style={{width:"25vw",flexGrow:"0"}} type="text" placeholder="Company Name" onBlur={HandleAction} ref={e1 => clearInput.current[2] = e1}/>
                        <input name="ImageCompany" className={ClassName.TField} style={{width:"25vw",flexGrow:"0"}} type="text" placeholder="Company Logo Url" onBlur={HandleAction} ref={e1 => clearInput.current[3] = e1}/> 
                        <button name="AddCompany" className={ClassName.LogBtn} style={{width:"25vw"}} onClick={AddItem} >Add</button>  
                     </div>
                     <div className={ClassName.AddedContainer}>

                        <div className={ClassName.TitleMinCon}>
                            <label className={ClassName.Title}>Added Production Companies</label>
                            <div className={ClassName.Line}></div>
                        </div>
                        <div className={ClassName.PersonsContainer}>
                            {CompaniesData.map((Com)=> <PersonCard uData={Com} key={Com.id} onClickClose={RecieveID}></PersonCard>)}
                        </div>
                    </div>

                    <button className={ClassName.LogBtn} style={{margin:"100px auto"}} onClick={Submit} >Add Movie</button>

                </div>
            
            </div>
        </>
    );
}

export default AddingPage;
