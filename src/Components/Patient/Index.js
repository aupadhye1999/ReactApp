import { useEffect, useState } from "react"

export default function Index()
{
    
    const [index,setindex] = useState({
        fullname:'Jiya Ramdas Kinkar',
        age:'29',
        contactno:'123456789'
    })


    return (<div>
        <div className=" container">
            <div className=" card">
                <div className=" card-header">
                    <h5>Patient</h5>
                </div>
                <div className=" card-body">
                    <table className=" table table-bordered">
                        <thead>
                            <tr>
                                <td className="bg-light font-weight-bold">FullName</td>
                                <td className="bg-light font-weight-bold">Age</td>
                                <td className="bg-lightfont-weight-bold">Contact</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td name="fullname" value={index.fullname}>{index.fullname}</td>
                                <td name="age" value={index.age}>{index.age}</td>
                                <td name="contactno" value={index.contactno}>{index.contactno}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}