import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartitle">ABOUT ME</span>
                <img className="img" src="https://i.pinimg.com/550x/87/19/ba/8719ba47c181771b79d01e8a3041f0bc.jpg"  alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum quidem reiciendis eligendi quae. 
                    Ad ipsum quo laborum ratione quas rem officiis id numquam harum voluptas, magnam architecto asperiores error assumenda autem a quos?</p>
            </div>
        <div className="sidebaritem">
        <span className="sidebartitle">CATAGORIES</span>
         <ul className="sidebarlist">
            <li className="sidebarlistitem">LIFE</li>
            <li className="sidebarlistitem"> MUSIC</li>
            <li className="sidebarlistitem">STYLE</li>
            <li className="sidebarlistitem">SPORT</li>
            <li className="sidebarlistitem">TECH</li>
            <li className="sidebarlistitem">CINEMA</li>
         </ul>
        </div>
        <div className="sidebaritem">
                <span className="sidebartitle">FOLLOW</span>
        <div className="sidebarsocial">
        <i className="sidebaricon fa-brands fa-facebook"></i>
      <i className="sidebaricon fa-brands fa-pinterest"></i>
      <i className="sidebaricon fa-brands fa-twitter"></i>
      <i className="sidebaricon fa-brands fa-instagram"></i>

        </div>
    </div>
        </div>
    )
}
