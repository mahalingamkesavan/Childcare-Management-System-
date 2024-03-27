import React from 'react';
import { useSelector } from 'react-redux';
import { Admin,Customer } from '../../../Variables/ConstantVariable';

const ParentregistrationForm = (props) => {

  const { data, onSubmit, onChange} = props;

  const datas=useSelector((store) =>store?.Token?.data) ; const role=datas?.role.toString();
  
  return (
  <>
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <img
          width={250}
          src="https://1coresolution.com/images/1corelogo-opti.png" />
      </div>
      <div className="title">Registration Parent</div>
      <div className="content">
        <form onSubmit={(e) => onSubmit(e)} action="#" >
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" onChange={onChange} id="firstName" value={data?.firstName} placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" onChange={onChange} id="lastName" value={data?.lastName} placeholder="Enter your lastname" required />
            </div>
            {(role === Admin || role === Customer)  && <div className="input-box">
              <span className="details">Login UserName</span>
              <input type="text" onChange={onChange} id="loginname" value={data?.loginname} placeholder="Login UserName" required />
            </div>}
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" onChange={onChange} id="email" value={data?.email} placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="number" onChange={onChange} id="phoneNumber" value={data?.phoneNumber} placeholder="Enter your number" required />
            </div>
            <div className="input-box">
              <span className="details">State</span>
              <input type="text" onChange={onChange} id="State" value={data?.state} placeholder="Chelect your State" required />
            </div>
            <div className="input-box">
              <span className="details">City</span>
              <input type="text" onChange={onChange} id="City" value={data?.city} placeholder="Chelect your City" required />
            </div>
            <div className="input-box">
              <span className="details">Pincode</span>
              <input type="number" onChange={onChange} id="Pincode" value={data?.pincode} placeholder="Enter Your Pincode" required />
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" onChange={onChange} id="Address" value={data?.address} placeholder="Enter Your Address" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    </>
  )

}

export default ParentregistrationForm;
