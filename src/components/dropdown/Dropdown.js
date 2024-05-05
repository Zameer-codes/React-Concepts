
const Dropdown = () => {
    return (
        <div>
            <select onChange={(e) => console.log(e.target.value)}>
                <option value={1}>one</option>
                <option value={2}>two</option>
            </select>
        </div>
    )
}

export default Dropdown