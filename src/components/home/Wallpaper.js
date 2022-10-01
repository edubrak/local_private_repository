
import axios from 'axios';
import { useEffect, useState } from 'react';


function Wallpaper() {

  // let selectInput = useRef();  //It will give a element reference
  let [locationList, setLocationList]= useState([]);
  let [disabled, setDisabled] = useState(true);

  let getLocationList = async()=>{

    try{

    let response = await axios.get('http://localhost:5003/api/get-location');
    let data = response.data;

    if(data.status === true){
      setLocationList([...data.result]);
    }else{
      setLocationList([]);
    }
    }catch(error){
      console.log(error)
      alert("Server side error");
    }
  }

  let getLocationId =  async(event)=>{
    let value = event.target.value;
    if(value !== ""){
    try{
    let url = `http://localhost:5003/api/get-restaurant-by-location-id/${value}`;
    let {data} = await axios.get(url);
    if(data.status === true){
      if(data.result.length === 0){
        setDisabled(true);
      }else{
        setDisabled(false);
      }
    }
    }catch(error){
      console.log(error);
      alert("server error");
    }
  }
  }

  useEffect(()=>{
    getLocationList();
  },[]);  //using this empty array so that it will run only once otherwise it will call the function again and again(infinite loop)



  return (
    <>
      <section className="row main-section align-content-start">
        <header className="col-12 py-3">
          <div className="container d-lg-flex justify-content-end d-none">
            <button className="btn text-white me-3">Login</button>
            <button className="btn text-white border border-white">
              Create an account
            </button>
          </div>
        </header>
        <section className="col-12 d-flex flex-column align-items-center justify-content-center">
          <p className="brand-name fw-bold my-lg-2 mb-0">e!</p>
          <p className="h1 text-white my-3 text-center">
            Find the best restaurants, cafés, and bars
          </p>
          <div className="search w-50 d-flex mt-3">
            <select className="form-control mb-3 mb-lg-0 w-50 me-lg-3 py-2 px-3"
            onChange={getLocationId}>
              <option>Please select a location</option>
              {
                locationList.map((location, index)=>{
                  return <option value={location.location_id} key={index}>
                    {location.name},{location.city}
                    </option>
                })
              }
            </select>

            <div className="w-75 input-group">
              <span className="input-group-text bg-white">
                <i className="fa fa-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control py-2 px-3"
                placeholder="Search for restaurants"
                disabled = {disabled}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Wallpaper;
