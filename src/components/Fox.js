import './Fox.css';

const Fox = ({name, image, description, isCool}) => {
    return (
        <div className="fox">
            <h3>{name} {isCool ? "🔵" : "🔴"}</h3>
            <img src={image} alt={`fox-${name}`}/>
            <p>{description}</p>
        </div>
    );
}

export default Fox;
