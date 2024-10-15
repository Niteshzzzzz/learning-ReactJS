
const AppleBasket = ({count, basketName}) => {
  return (
    <div className="basket">
        <h1><span className="count1">{count}</span> Apples</h1>
        <h2>{basketName}</h2>
    </div>
  )
}

export default AppleBasket;
