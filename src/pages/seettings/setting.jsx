import Sidebar from "../../components/sidebar/sidebar"
import "./setting.css"

export default function Setting() {
  return (
    <div className="settings">
        <div className="settingswrapper">
            <div className="settingtitle">
                <span className="settingupdatetitle">Update you account</span>
                <span className="settingdeletetitle">Delete account</span>
            </div>
            <form  className="settingform">
                <label >Profile Picture</label>
                <div className="settingpp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGhyskCuj_p61-aS5y--jfnCfyROo_YN6cA&usqp=CAU" alt="" />
                    <label htmlFor="fileinput">
                    <i className="settingppicon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="xyz" />
                <label >Email</label>
                <input type="email" placeholder="xyz@gmail.com" />
                <label >Password</label>
                <input type="password"  />
                <button className="settingsubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
      
    </div>
  )
}
