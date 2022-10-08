const Input = (props) =>{
    const {label, type, id, handleInput}=props
    return(
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input type={type || 'text'} id={id} name={id} onChange={handleInput}/>
        </div>
    )
}
export default Input