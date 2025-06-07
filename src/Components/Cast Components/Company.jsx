
const Company = ({imgURL,Name}) => {
    
    let ClassName={
        Container:"flex flex-col items-center gap-4 w-fit",
        ImageContainer:"w-[300px] h-[200px] bg-cover bg-center rounded-xl hover:scale-[1.1]",
        Title:"text-[25px] text-white"
    };
    return (
        <>
            <div className={ClassName.Container}>
                <div className={ClassName.ImageContainer} style={{backgroundImage:`url(${imgURL})`}}></div>
                <div className={ClassName.Title}>{Name}</div>
            </div>
        </>
    );
}

export default Company;
