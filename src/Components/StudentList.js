import Axios from "axios";
import { useEffect,useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList(props)
{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-8k6e.onrender.com/studentRoute")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])

    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{_id,name,email,rollNo},{},{},{}]
            return <StudentListRow obj={val}/>
        })
    }

    /*const ListItems=()=>{
        return arr.map((val,ind)=>{
            return(
                <tr>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.rollNo}</td>
                    <td>
                        <button class="btn btn-primary">Edit</button>
                        <button onClick={handleClick()} class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
        })
    }*/

    return(
        <table style={{maxWidth:"60%",margin:"50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Roll Number</th>
                <th class="text-center">Action</th>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;
