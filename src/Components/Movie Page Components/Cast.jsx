import React from 'react';
import CrewMember from '../Cast Components/Crew Member';

const Cast = () => {
    let ClassName = {
        BigLine: "mt-[10px] w-[250px] h-[50px] bg-[#1acfe1] flex items-center pl-22 text-[28px] font-bold rounded-full text-shadow-md",
        Circle: "relative top-[-60px] shadow-md w-[70px] h-[70px] bg-[#1acfe1] flex justify-center items-center text-[25px] font-bold text-shadow-md rounded-full",
        Container: "w-full flex gap-8 flex-wrap justify-center sm:justify-start sm:ml-6",
        MainContainer: "flex gap-15 flex-wrap xl:flex-nowrap"
    };
    let Cast = [
        {
            id: 0,
            Name: "Ibrahim",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 1,
            Name: "Ibrahim Medhat",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 2,
            Name: "Ibrahim Medhat Ragab",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 3,
            Name: "Omar",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 4,
            Name: "Waleed",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 5,
            Name: "Kareem",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 6,
            Name: "Eyad",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 7,
            Name: "Ibrahim",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 8,
            Name: "Ibrahim",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 9,
            Name: "Ibrahim",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 10,
            Name: "Ibrahim",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
        {
            id: 11,
            Name: "Ibrahim",
            imgURL: "https://image.tmdb.org/t/p/original/oZTIL77jVfcz8iEQnYC892jvqY3.jpg"
        },
    ]
    return (
        <>
            <div className={ClassName.MainContainer}>
                <div className='mx-auto sm:mx-0'>
                    <div className={ClassName.BigLine}>Director</div>
                    <div className={ClassName.Circle}>01</div>
                    <div className='ml-6'>
                        <CrewMember id={Cast[0].id} imgURL={Cast[0].imgURL} Name={Cast[0].Name}></CrewMember>
                    </div>
                </div>
                <div>
                    <div className='w-fit mx-auto sm:mx-0'>
                        <div className={ClassName.BigLine}>Cast</div>
                        <div className={ClassName.Circle}>02</div>
                    </div>
                    <div className={ClassName.Container}>
                        {Cast.filter((item) => item.id != 0).map((item) => (
                            <CrewMember id={item.id} imgURL={item.imgURL} Name={item.Name}></CrewMember>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cast;
