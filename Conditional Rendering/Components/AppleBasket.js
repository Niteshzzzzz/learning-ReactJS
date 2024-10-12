
const AppleBasket = ({count, basketName}) => {
  return (
    <div className="basket">
        <h1><span className="count1">{count}</span> Apples</h1>
        <h2>{basketName} {count==10 && 'is full'} {count==0 && 'is Empty'} {(count>=5 && count<10) && 'is half full'}</h2>
    </div>
  )
}

export default AppleBasket;
