

const stateLift = (props) => {
  return (
    <div>
        <input type="text" placeholder="Enter text here"  value={props.state}
        onChange={(e)=>props.fun(e.target.value)}

        ></input>
        <h1>{props.children}  </h1>
      
    </div>
  )
}

export default stateLift
