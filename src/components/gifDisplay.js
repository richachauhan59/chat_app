import React, {useState} from "react";
import { searchGif } from "./gifData";
import './gifDisplay.css'



const Gif = () => {
  
const [data, setData] = useState([])
const [query, setQuery] = useState("default")

const search = (e) => {
  const res = searchGif(query);
// console.log(res, "richa");
  res.then((result) => {
      setData(result.data)
      console.log(result.data)
  })
}


  return (
    <>
      <div className="filters">
        <div 
          style={{
            textAlign:"center",
            margin:"20px"
          }}
        >
          <input 
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text" 
            placeholder="Search Gif" 
          />
          <button className="button" onClick={search} >Search</button>
          {/* <button>-</button>
          <span> 0 </span>
          <button>+</button> */}
        </div>
      </div>
      <div  
          style={{
              display:"flex", flexWrap:"wrap"
          }}
      >
        {
          data.map(item => (
                  <img 
                  className="image"
                  src={item.images.downsized.url} alt="img"
                  />
          ))
        }
      </div>
    </>
  );
};
export default Gif
