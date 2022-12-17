import React, { useState } from "react";
import axiox from "axios";
const MainPage = () => {
    const [data, setdata] = useState([])

  const getData = async () => {
    const {data} = await axiox.get("http://localhost:5000/User")
    console.log("data", data)
    setdata(data)
  };

  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-2 ml-5">
            <div
              id="a1"
              style={{ height: 820, width: 150, border: "3px solid black" }}
            >
              <i class="bi bi-github"></i> Lorem ipsum
              <div className="ms-2">
              <div>
              
              <button className="btn btn-light" data-bs-toggle="collapse" data-bs-target="#demo">
              <i class="bi bi-globe"></i> Net
              </button>

              <div id="demo" className="collapse">
                 
                  <p className="btn btn-light">Domain</p> <br />
                  <p className="btn btn-light" onClick={getData}style={{  border: "1px solid black" }} >URL<span class="badge text-bg-secondary">{data.id} 999+</span></p> <br />
                  <p className="btn btn-light">I2p</p> <br />
                  <p className="btn btn-light">Deep</p> <br />
                  <p className="btn btn-light">Deep URL</p> <br />
                  <p className="btn btn-light">Hoisting</p> <br />
                  <p className="btn btn-light">Browser</p> <br />
                  <p className="btn btn-light">Wifi</p> <br />
              </div>
            </div>
              <div>
              <button className="btn btn-light" data-bs-toggle="collapse" data-bs-target="#file">
              <i class="bi bi-file-earmark"></i> File
              </button>

              <div id="file" className="collapse">
                  <p className="btn btn-light">Image</p>
                  <p className="btn btn-light">Documents</p>
                  <p className="btn btn-light">Other Files</p>
              </div>
            </div>
              <div>
              <button className="btn btn-light" >
              <i class="bi bi-file-earmark-lock2"></i> Fileen 
              </button>
              <button className="btn btn-light" >
              <i class="bi bi-messenger"></i> Sms 
              </button>
              <button className="btn btn-light" >
              <i class="bi bi-octagon"></i> tag
              </button>
              <button className="btn btn-light" >
              <i class="bi bi-people"></i> people
              </button>

             
            </div>
               
              </div> 
            </div>
          </div>
       { data &&  <div className="col-sm-6 offset-2 m-4" style={{border:"4px solid black", width:1000}}>
             {
                data
              ? 
                data.map(item => <div>
                  <p key={item.id}>{item.url}</p> <p><i class="bi bi-plus-circle-dotted"></i></p>
                </div> 
                
                )
                
              : ""
              }
          </div>}
        </div>
      </div>
    </div>
  );
};

export default MainPage;