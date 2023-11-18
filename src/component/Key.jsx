import "./Key.css"

function Key({data , handelkeypress , active , bigkey}) {
  return (
    <div>
         <button type="button" className="key" style={{  color : active==true && "yellow" , width : (data == "ENTER" || data =="DELETE" || data =="SHIFT") && "100px" }} onClick={()=>{

         handelkeypress(data)}
          } >{data} </button>
    </div>
  )
}

export default Key