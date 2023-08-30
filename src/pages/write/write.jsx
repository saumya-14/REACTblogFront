import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeimg" src="https://wallpaperaccess.com/full/4908709.jpg "alt="" />
      <form className="writeform">
         <div className="writeformgroup">
          <label htmlFor="fileinput">
          <i className="writeicon fa-solid fa-plus"></i>
          </label>
              <input type="file" id="fileinput" style={{display:"none"}}/>
            <input type="text" placeholder="title" className="writeinput" autoFocus={true}/>
         </div>
         <div className="writeformgroup">
          <textarea placeholder="tell your story " type="text" className="writeinputwritetext"></textarea>
         </div>
         <button className="writesubmit">publish</button>
      </form>
    </div>
  )
}
