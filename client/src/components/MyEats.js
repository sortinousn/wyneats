import React, {useEffect,useState,Fragment} from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
        
        
    <>
        <h1>WynEats</h1>
        <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Get Eats!" onChange={handleChange} />
        </form>
        <div className="cards">
            {
                apiData && apiData.map(resturant => {
                    return(

                        resturant.image_url && resturant.location.zip_code=== '33127' &&

                        <Card style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Img variant="top" src={resturant.image_url}  className="card-img"/>
                            <Card.Body>
                            <Card.Title>{resturant.name}</Card.Title>
                            <Card.Text>
                            {`Location: ${resturant.location.address1} ${resturant.location.zip_code}`}
                            {`Services:${resturant.transactions}`}
                            </Card.Text>
                            <Button variant="primary"pnclick={resturant.url}>
                                More Details
                            </Button>
                            </Card.Body>
                            <Card.Footer>
                            <big className="text-muted">Rating: {resturant.rating}</big>
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </div>
        </>
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