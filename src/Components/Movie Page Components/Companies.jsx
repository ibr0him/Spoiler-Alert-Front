import{ useContext, useEffect , useState } from 'react';
import Company from '../Cast Components/Company';
import { MoviesContext } from '../../Context/MoviesProvider';

const Companies = () => {

    let {ClickedMovie} = useContext(MoviesContext);
    const [CompaniesView, setCompaniesView] = useState([]);
    useEffect(() => {
        if( ClickedMovie.id != null){
            setCompaniesView(ClickedMovie.productionCompanies);
        }
    }, [ClickedMovie]);

    let ClassName={
         Container: "w-full flex gap-8 flex-wrap justify-center lg:justify-start"
    };
    if(CompaniesView.length != 0) 
    return (
        <div className={ClassName.Container}>
            {CompaniesView.map((item)=>(
                <Company key={item.id} id={item.id} imgURL={item.imgURL} name={item.name}></Company>
            ))}
        </div>
    );
}

export default Companies;
