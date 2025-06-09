import { useContext,useState,useEffect } from 'react';
import CrewMember from '../Cast Components/Crew Member';
import { MoviesContext } from '../../Context/MoviesProvider';

const Cast = () => {
    
    let {ClickedMovie} = useContext(MoviesContext);
    const [CastCrew, setCastCrew] = useState([]);
    
     useEffect(() => {
            if (ClickedMovie.id != null) {
                setCastCrew(ClickedMovie.cast);
            }
        }
            , [ClickedMovie]);
    
    let ClassName = {
        BigLine: "mt-[10px] w-[250px] h-[50px] bg-[#1acfe1] flex items-center pl-22 text-[28px] font-bold rounded-full text-shadow-md",
        Circle: "relative top-[-60px] shadow-md w-[70px] h-[70px] bg-[#1acfe1] flex justify-center items-center text-[25px] font-bold text-shadow-md rounded-full",
        Container: "w-full flex gap-8 flex-wrap justify-center sm:justify-start sm:ml-6",
        MainContainer: "flex gap-15 flex-wrap xl:flex-nowrap"
    };
    if(CastCrew.length == 0) return(<div>Loading</div>)
    return (
        <>
            <div className={ClassName.MainContainer}>
                <div className='mx-auto sm:mx-0'>
                    <div className={ClassName.BigLine}>Director</div>
                    <div className={ClassName.Circle}>01</div>
                    <div className='ml-6'>
                        <CrewMember id={CastCrew[0].id} imgURL={CastCrew[0].imgURL} name={CastCrew[0].name}></CrewMember>
                    </div>
                </div>
                <div>
                    <div className='w-fit mx-auto sm:mx-0'>
                        <div className={ClassName.BigLine}>Cast</div>
                        <div className={ClassName.Circle}>02</div>
                    </div>
                    <div className={ClassName.Container}>
                        {CastCrew.filter((item) => item.id != '0C').map((item) => (
                            <CrewMember key={item.id} id={item.id} imgURL={item.imgURL} name={item.name}></CrewMember>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cast;
