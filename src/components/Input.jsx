/* eslint-disable react/prop-types */
function Input({type, name, label}){
    return (
        <label>
            {label}
            <input type={type} name={name} />
        </label>
    )
}

export default Input;