import { Container } from "postcss";

const CrewMember = ({imgURL,name}) => {
    
    let ClassName={
        Container:"flex flex-col items-center gap-4 w-fit",
        ImageContainer:"w-[200px] h-[250px] bg-cover bg-center rounded-xl hover:scale-[1.1]",
        Title:"text-[20px] text-white text-center"
    };
    return (
        <>
            <div className={ClassName.Container}>
                <div className={ClassName.ImageContainer} style={{backgroundImage:`url(${imgURL})`,boxShadow:"#1acfe1 0px 0px 10px 2px"}}></div>
                <div className={ClassName.Title}>{name}</div>
            </div>
        </>
    );
}

export default CrewMember;
