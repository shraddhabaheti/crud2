import { useState } from "react"

function Lessthan() {
    const [input, setInput] = useState({
        num1: '',
        num2: '',
    })
    const [item, setItem] = useState({
        num1: '',
        num2: ''
    })
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const lessgrater = () => {
        
        if (input.num1 >= input.num2 || input.num1 <= input.num2) {
            if (input.num1 >= input.num2) {
                setItem({ ...input, num1: `${input.num1} is grater than` })
                setInput({ num1: '', num2: '' })
            } else {
                setItem({ ...input, num1: `${input.num1}is less than` })
                setInput({ num1: '', num2: '' })
            }
        }
    }
    console.log(input)
    return (
        <div>

            <input type="number" name="num1" onChange={handleChange} value={input?.num1} /><br />
            <input type="number" name="num2" onChange={handleChange} value={input?.num2} /><br />
            <h3>{item?.num1}</h3>

            <button type="submit" onClick={lessgrater}>Check</button>
        </div>
    )
}
export default Lessthan;
