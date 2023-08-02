import { useState } from "react"

function Evenodds() {
    const [input, setInput] = useState({
        evenodd: '',
    })
    const [data, setData] = useState({
        evenodd: ''
    })
    const even = () => {
        if (input.evenodd % 2 == 0) {
            setData({ ...input, evenodd: `${input.evenodd} is even number` })
            setInput({ evenodd: '' })
        } else {
            setData({ ...input, evenodd: `${input.evenodd} is odd number` })
            setInput({ evenodd: '' })
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
            <input type="number" name="evenodd" placeholder="enter the name" onChange={handleChange} value={input?.evenodd} />
            <button type="submit" onClick={even}>Click</button>
            <h3>{data.evenodd}</h3>

        </div>
    )
}
export default Evenodds;