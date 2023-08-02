import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
function Edits() {
    const [users, setUser] = useState([]);
    
    const [state, setState] = useState({
        name: '',
        email: '',
        dob: '',
        position: '',
        technologies_known: '',
        technologie_type: '',

    })
  
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
       setState({
            ...state,
            [name]: value
        });
    }
    
    useEffect(() => {
        getData()
    }, [])
   
      const getData = async () => {
        const token1 = localStorage.getItem("token")
        let response = await fetch('http://192.168.1.11:8000/api/employees/', {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                'Authorization': `${token1}`
            },
        });
        let user = await response.json();
        setUser(user);

    }

    const deleteUser = async (id) => {
        const token1 = localStorage.getItem("token")
        let response = await fetch(`http://192.168.1.11:8000/api/employees/${id}`, {

            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                'Authorization': `${token1}`
            },
        });
        let user = await response.json();

        getData()
     
    }

    function selectUser(inputData) {
        console.log(inputData)
        setState(inputData)
       
    }

  // console.log("form values", state)


    const updateUser = async (e) => {
       
        e.preventDefault();
        
        const { name, email, dob, position, technologie_type, technologies_known, _id } = state;
        const token1 = localStorage.getItem("token")
        

        let inputData = {
            name: name,
            email: email,
            dob:dob,
            position: position,
            technologies_known: technologies_known,
            technologie_type: technologie_type,
        }
        let response = await fetch(`http://192.168.1.11:8000/api/employees/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                'Authorization': `${token1}`
            },
            body: JSON.stringify(inputData)
              
     
        });

        let user = await response.json();
        getData()
       
        setState({
            ...state,
            ['name']: '',
            ['email']:'',
            ['dob']:'',
            ['position']:'',
            ['technologies_known']: '',
            ['technologie_type']:'' 
        });
    }

    return (
        <div>

            <table border="1px" >
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>email</td>
                        <td>dob</td>
                        <td>position</td>
                        <td> technologies_known</td>
                        <td>technolgie_type</td>
                        <td>button</td>
                    </tr>
                    {
                        users.map((item, i) =>

                            <tr key={i}>
                               
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{moment(item.dob).format("DD/MM/YYYY")}</td>
                                <td>{item.position}</td>
                                <td>{item.technologies_known}</td>
                                <td>{item.technologie_type}</td>
                                <td><button onClick={() => deleteUser(item._id)}>Delete</button>
                                    <button onClick={() => selectUser(item)}>Edit</button>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>

            <form onSubmit={updateUser}>

                <label>name</label>
                <input type="text" name="name" value={state.name} onChange={handleChange} ></input><br /><br />
                <label>email</label>
                <input type="text" name="email" value={state.email} onChange={handleChange} ></input><br /><br />
                <label>dob</label>
                <input type="text" name="dob" value={state.dob} onChange={handleChange} ></input><br /><br />
                <label>position</label>
                <input type="text" name="position" value={state.position} onChange={handleChange} ></input><br /><br />
                <label>technologies_known</label>
                <input type="text" name="technologies_known" value={state.technologies_known} onChange={handleChange}></input><br /><br />
                <label>technologie_type</label>
                <input type="text" name="technologie_type" value={state.technologie_type} onChange={handleChange}></input><br /><br />
                <button type="submit">UpdateUser</button>
            </form>
        </div>
    )
}
export default Edits;