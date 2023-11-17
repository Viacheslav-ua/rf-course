import classes from './RdButton.module.css' 

const RdButton = ({ children, ...props }) => {
  return (
    <button {...props} className={[classes.rdBtn, classes.red].join(' ')}>
      {children}
    </button>
  )
}

export default RdButton;