import { Container } from "postcss";

const CrewMember = ({imgURL,Name}) => {
    
    let ClassName={
        Container:"flex flex-col items-center gap-4 w-fit",
        ImageContainer:"w-[200px] h-[250px] bg-cover bg-center rounded-xl hover:scale-[1.1]",
        Title:"text-[25px] text-white"
    };
    return (
        <>
            <div className={ClassName.Container}>
                <div className={ClassName.ImageContainer} style={{backgroundImage:`url(${imgURL})`,boxShadow:"#1acfe1 0px 0px 10px 2px"}}></div>
                <div className={ClassName.Title}>{Name}</div>
            </div>
        </>
    );
}

export default CrewMember;
