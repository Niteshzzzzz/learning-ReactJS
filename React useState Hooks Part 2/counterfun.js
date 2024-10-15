import { useState } from "react"

let Counterfun = (props) => {
  console.log(props.childern)
  const [count, setCount] = useState(0);

  let change = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className="counter" style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }} onClick={change}>
      <h2>{count}</h2>
      <button>Counter</button>
      {props.childern}
    </div>
  )
}

export default Counterfun
