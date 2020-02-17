import React, {useEffect,useState,Fragment} from "react"
import axios from "axios"

function Resturant() {
    const [apiData, setApiData] = useState([])
    const [query, setQuery]=useState("")
    const [search, setSearch]=useState("")
    

    useEffect ( () => {
        if (query === "") return
        const getApiData = async () => {
            const result = await axios.get(`/api/restaurants/search/:wynwood/${query}`);
            setApiData(result.data);
            console.log(result.data)
        }
        getApiData();



    },[query]);

const handleChange = event => {
setSearch(event.target.value)
}

const handleSubmit = event => {
event.preventDefault()
setQuery(search)



}






    return(
        
        
    <Fragment>
        <h1>Wynwood Eats</h1>
        <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Search for some wynwood eats!" onChange={handleChange} />
        </form>
        <ul>
            apiData.map()
        </ul>
        </Fragment>
    )
};
    
// }
//     const handleChan
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setQuery(search);
//     }
// ge = (event) => {
//         setSearch(event);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setQuery(search);
//     }

//     return (
//         <React.Fragment>
//             <h1>MyEats</h1>
//             <form onSubmit={handleSubmit}> 
//                 <input type="text" placeholder="MyEats" 
//                 onChange={handleChange}></input>
//             </form>
//             <ul>
//             {apiData.map((result) => {
//                         <div key={}>
//                             <img alt="resturant-pic" 
//                             src={`https://s3-media1.fl.yelpcdn.com/bphoto/Z14GLdIxNJ1XsuQdYUdOuA/o.jpg`}></img>
//                         </div>
                    
//                 }
//             )}
//             </ul> 
//         </React.Fragment>
//     )
// };
//  Resturant() 
export default Resturant;