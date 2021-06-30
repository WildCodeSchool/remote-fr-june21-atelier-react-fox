import Fox from './Fox'
import './FoxContainer.css';

const foxs = [
    {name:"Fox 1", image:"https://randomfox.ca/images/1.jpg", description:"I'm fox 1", isCool: true},
    {name:"Fox 2", image:"https://randomfox.ca/images/2.jpg", description:"I'm fox 2"},
    {name:"Fox 3", image:"https://randomfox.ca/images/3.jpg", description:"I'm fox 3", isCool: true},
    {name:"Fox 4", image:"https://randomfox.ca/images/4.jpg", description:"I'm fox 4", isCool: true},
    {name:"Fox 5", image:"https://randomfox.ca/images/5.jpg", description:"I'm fox 5", isCool: true},
    {name:"Fox 6", image:"https://randomfox.ca/images/6.jpg", description:"I'm fox 6", isCool: true},
    {name:"Fox 7", image:"https://randomfox.ca/images/7.jpg", description:"I'm fox 7"},
    {name:"Fox 8", image:"https://randomfox.ca/images/8.jpg", description:"I'm fox 8", isCool: true},
    {name:"Fox 9", image:"https://randomfox.ca/images/9.jpg", description:"I'm fox 9"},
]

const FoxContainer = () => {

    return (
        <div className="fox-container">
            {foxs.map((fox) => {
                return <Fox name={fox.name} image={fox.image} description={fox.description} isCool={fox.isCool}/>
            })}
        </div>
    )
}

export default FoxContainer;
