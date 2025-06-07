import { IoIosClose } from "react-icons/io";


const PersonCard = ({uData,onClickClose}) => {
    
    let ClassName={
        Container:"flex flex-col gap-y-4 w-fit items-center",
        AnkerImageCon:"relative",
        ImageContainer:"bg-amber-50/50 h-[150px] w-[150px] rounded-lg overflow-hidden",
        Image:"w-full h-auto object-contain",
        Name:"text-white text-bold text-lg w-fit",
        Close:"bg-red-800 flex justify-center items-center w-10 h-10 rounded-full absolute top-[-15px] right-[-20px] cursor-pointer"
    };
    let SendPersonData =()=>{
        onClickClose(uData.id);
    }
    
    return (
        <>
            <div className={ClassName.Container}>
                
                <div className={ClassName.AnkerImageCon} onClick={SendPersonData}>
                    <div className={ClassName.ImageContainer} style={{boxShadow:"white 0px 0px 7px 1px"}}>
                            <div className={ClassName.Close}>
                                <IoIosClose size={50} color="white"></IoIosClose>        
                            </div>
                        <img src={uData.ImageUrl} alt="Person Image"/>
                    </div>
                </div>

                <label className={ClassName.Name}>{uData.Name}</label>
            </div>
        </>
    );
}

export default PersonCard;
