
const Button = ({arrow, title, className, clickHendler}) => {
  return (
    <button onClick={clickHendler} className={className} title={title}>{arrow}</button>
  )
}

export default Button;
