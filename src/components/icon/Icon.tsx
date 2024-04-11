// styles
import './Icon.css'
// icons

const Icon = ({img, name} : {img:string, name:string}) => {

    return (
        <div className='desktop-icon'>
            <img className='icon-img' src={img} alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export default Icon;
