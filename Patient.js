import react from "react"
import { useState } from "react"

export default function Patient() {

    const state = ["Maharashtra","Karnataka","Goa"]
    const [ patient, setpatient ] = useState({ 
        firstname: '', 
        middlename:'',
        lastname:'',
        age: 0, 
        birthdate: new Date().toJSON().toString().substring(0,10),
        gender:'male',
        workfromhome:'',
        remote:'',
        state:'',
        Address:{
            pincode:'',
            contact: ''
        }
         })

    function FormEvent(e) {
        debugger;

        const { name, value, checked,type } = e.target;

        setpatient((p) => {

            if(name in p)
            {
                return{
                    ...p,
                    [name] : type === 'checkbox' ? checked : value
                };
            }
            else if (name in p.Address)
            {
                return{
                    ...p,
                    Address:
                    {
                        ...p.Address,
                        [name]:value
                    }
                    
                };
            }

            
        })
    }

    return (<div>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg">
                    <h5>Patient Form</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className='col-md-3'>
                            <label className="p-2">FirstName</label>
                            <input className="form-control" name="firstname" value={patient.firstname} onChange={FormEvent}></input>
                        </div>
                        <div className="col-md-3">
                            <label className="p-2">MiddleName</label>
                            <input className="form-control" name="middlename" value={patient.middlename} onChange={FormEvent}></input>
                        </div>
                        <div className="col-md-3">
                            <label className="p-2">LastName</label>
                            <input className="form-control" name="lastname" value={patient.lastname} onChange={FormEvent}></input>
                        </div>
                        <div className="col-md-3">
                            <label className="p-2">Date Of Birth</label>
                            <input className="form-control" type="date" name="birthdate" value={patient.birthdate} onChange={FormEvent}></input>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label className="p-2">Age</label>
                            <input className="form-control" name="age" value={patient.age} onChange={FormEvent}></input>
                        </div>
                        <div className="col-md-3">
                            <label className="p-2">Gender</label>
                            <div className="d-flex">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="radiomale">Male</label>
                                    <input className="form-check-input" type="radio" name="gender" value={patient.gender} onChange={FormEvent} id="radiomale"></input>
                                </div>

                                <div className=" form-check" style={{marginLeft:'10px'}}>
                                    <label className="form-check-label" htmlFor="radiofemale">Female</label>
                                    <input className=" form-check-input" type="radio" name="gender" value={patient.gender} onChange={FormEvent}></input>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="p-2">Contact No</label>
                            <input className=" form-control" name="contact" value={patient.Address.contact} onChange={FormEvent}></input>
                        </div>
                        <div className="col-md-3">
                            <label className="p-2">State</label>
                            <select className=" form-select" name="state" value={patient.state} onChange={FormEvent}>
                            {
                                state.map((x) => {
                                    return (<option key={x} value={x}>{x}</option>);
                                }
                            )
                            }
                            </select>
                        </div>
                        <div className="row d-inline">
                            <div className="col-md-2">
                            <label className="mt-4">Job Preference</label>
                            <div className=" form-check">
                                <label className="form-check-label" htmlFor='job'>Work From Office</label>
                                <input className=" form-check-input" type="checkbox" name="workfromhome" value={patient.workfromhome} onChange={FormEvent}></input>
                            </div>
                            <div className=" form-check">
                                <label className=" form-check-label" htmlFor='job'>Remote</label>
                                <input className=" form-check-input" type="checkbox" name="remote" value={patient.remote} onChange={FormEvent}></input>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3">
                            <button className=" btn btn-primary" onClick={()=> {console.log(patient)}}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
