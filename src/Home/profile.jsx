import { useSelector } from "react-redux";

const Profile = () => {

    const data=useSelector((store) =>store?.Token?.data) ;

    return (
        <div style={{ alignItems: 'center', textAlign: "center", display: "flex" }}>
            <div style={{ borderStyle: "double", width: 500, marginLeft: 250 }}>
                <div style={{ paddingTop: 20 }}>
                    <img
                        width={90}
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                </div>
                <div>
                    <div><h1 style={{ textAnchor: "middle", textJustify: "auto" }}>User Name  :  {data?.username} </h1></div>
                    <div><h1 style={{ textAnchor: "middle", textJustify: "auto" }}>User Email :  {data?.email} </h1></div>
                    <div><h1 style={{ paddingLeft: "5px", textAnchor: "middle", textJustify: "auto" }}>User Role  : {data?.role} </h1></div>
                </div>
            </div>
        </div>)
}
export default Profile;
