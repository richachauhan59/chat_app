import React, {useState} from "react";
import { searchGif } from "./gifData";



const Gif = () => {
  
const [data, setData] = useState([])

const res = searchGif("happy");
// console.log(res, "richa");
res.then(function(result) {
    setData(result.data)
    console.log(result.data)
})

  return (
    <>
      {/* <Instructions /> */}
      <div className="filters">
        <div className="form-group">
          <input type="text" placeholder="Search Gif" />
          <button>Search</button>
          <button>-</button>
          <span> 0 </span>
          <button>+</button>
        </div>
      </div>
      <div>Gifs goes here</div>
      <div  style={{
                display:"flex", flexWrap:"wrap"
            }}>
        {
            data.map(item => (
                    <img 
                    style={{
                        width:"20pc", margin:"0.8pc", border:"2px solid black", borderRadius:"4px"
                    }} 
                    src={item.images.downsized.url} alt="img"
                     />
            ))
        }
      </div>
    </>
  );
};
export default Gif
