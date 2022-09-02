function Button ({name, handleClick}) {



return (
<div className="">
    <button onClick={handleClick} className="button">{name}</button>
</div>    
    )
}

export default Button;