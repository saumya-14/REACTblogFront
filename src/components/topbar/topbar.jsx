import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">
         
      <div className="topleft">
      <i className="topicon fa-brands fa-facebook"></i>
      <i className="topicon fa-brands fa-pinterest"></i>
      <i className="topicon fa-brands fa-twitter"></i>
      <i className="topicon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
       <ul className="toplist">
       <li className="toplistitem" >HOME</li>
       <li className="toplistitem" >ABOUT</li>
       <li className="toplistitem" >CONTACT</li>
       <li className="toplistitem" >WRITE</li>
       <li className="toplistitem" >LOGOUT</li>
       </ul>
        </div>
      <div className="topright">

      <img 
      className="topimg"
      src="https://picsum.photos/seed/picsum/200/300" alt=""/>
      <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    
      
    </div>
  )
}
