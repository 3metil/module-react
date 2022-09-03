function Button ({name, handleClick}) {

const onMouseEnter = () => {
    console.log('onMouseEnter')
}

return (
<div className="">
    <button onClick={handleClick} className="button">{name}</button>
</div>    
    )
}

export default Button;