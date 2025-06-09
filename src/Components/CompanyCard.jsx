import { IoIosClose } from "react-icons/io";

const CompanyCard = ({uData,onClickClose}) => {
    
    let ClassName={
        Container:"flex flex-col gap-y-4 w-fit items-center",
        AnkerImageCon:"relative",
        ImageContainer:"bg-[#fbf7f2] h-[150px] w-[150px] rounded-lg overflow-hidden p-4",
        Image:"w-full h-full object-contain object-center",
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
                    <div className={ClassName.ImageContainer}>
                            <div className={ClassName.Close}>
                                <IoIosClose size={50} color="white"></IoIosClose>        
                            </div>
                        <img className={ClassName.Image} src={uData.imgURL} alt="Company Image"/>
                    </div>
                </div>

                <label className={ClassName.Name}>{uData.name}</label>
            </div>
        </>
    );
}


export default CompanyCard;
