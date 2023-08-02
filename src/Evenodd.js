import { useState } from "react";

function Evenodd() {

    const [input, setInput] = useState({
        num: ''
    });
    const odd = () => {

        if (input.num % 2 == 0) {
            setInput({ ...input, num: `${input.num} is even  number` })
        } else {
            setInput({ ...input, num: `${input?.num} is odd number` })
        }
    }
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (

        <div>
            <input type="text" name="num" onChange={handleChange} value={input?.num} />
             <button onClick={odd}>Click</button>
            <h3>{input.num}</h3>
        </div>
    )
}
export default Evenodd;