import Residents from './residents';

const ResidentInfo = ({location}) => {

    return (
        <div className="ContainerCart">
            {
            location.residents?.map( urls =>(
                <Residents urls={urls} key = {urls}/>
            ))
            }
            
        </div>
    );
};

export default ResidentInfo;