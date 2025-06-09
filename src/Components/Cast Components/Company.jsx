
const Company = ({imgURL,name}) => {
    
    let ClassName={
        Container:"flex flex-col items-center gap-4 w-fit",
        ImageContainer:"w-[300px] h-[200px] p-4 bg-[#fbf7f2] rounded-xl hover:scale-[1.1]",
         ImageStyle: "w-full h-full object-contain object-center",
        Title:"text-[25px] text-white"
    };
    return (
        <>
            <div className={ClassName.Container}>
                <div className={ClassName.ImageContainer}>
                    <img className={ClassName.ImageStyle} src={imgURL}/>
                </div>
                <div className={ClassName.Title}>{name}</div>
            </div>
        </>
    );
}

export default Company;
