import "./App.css"
const Detail=({title,content,pic})=>{
    return(
        <>
        <div className="d1">
        <img src={pic}/>
        <br></br>
        <h1>{title}</h1>
        <br></br>
        <div style={{textAlign:"left"}}>
        <h2>{content}</h2>
        </div>
        </div>
        
        </>
    )
}
export default Detail