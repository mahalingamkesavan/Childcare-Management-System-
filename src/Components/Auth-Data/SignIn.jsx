import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../../APIService/Authservicess";
import StorageKey from "../../Variables/LocalStorageKey";

function SingIn() {
  
  const nav = useNavigate();

  const [data, setData] = useState({ Username: "", Password: "" });

  async function Submit(e) {
   
        e.preventDefault(); await LoginData(data);
        
        if (localStorage.getItem(StorageKey.Token) !== null)  nav("/home");
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

      return (
            <div className="bodyContainer">
                <div className="container">
                    <div style={{ textAlign: "center" }}>
                        <img
                          width={250}
                          src="https://www.pngall.com/wp-content/uploads/5/Account-Login-Button-PNG-Clipart.png"
                        />
                    </div>
                    <div className="title">Login</div>
                    <div className="content">
                          <form onSubmit={(e) => Submit(e)} action="#">
                            <div className="user-details">
                              <div className="input-box">
                                <span className="details">Username</span>
                                <input
                                  type="text"
                                  onChange={(e) => handle(e)}
                                  id="Username"
                                  value={data.Username}
                                  placeholder="Enter your Username"
                                  required
                                />
                              </div>
                              <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                  type="password"
                                  onChange={(e) => handle(e)}
                                  id="Password"
                                  required
                                  value={data.Password}
                                  placeholder="Enter your Password"
                                />
                              </div>
                              <div className="input-box">
                                <Link to={"../ParentSignUp"}>
                                  {"Don't have an account? Creat One"}
                                </Link>
                              </div>
                              <div className="input-box">
                                <Link to={"../ParentSignUp"}>{"forgot password ?"}</Link>
                              </div>
                            </div>
                            <div className="button">
                              <input type="submit" value="login" />
                            </div>
                          </form>
                    </div>
                </div>
            </div>
      );
  
}
export default SingIn;
