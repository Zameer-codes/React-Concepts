
const CheckBox = () => {
    return (
        <div>
            <input type='checkbox' onChange={(e) => console.log(e.target.checked)} value="checkbox" />
            <span>check box</span>
        </div>
    )
}

export default CheckBox;