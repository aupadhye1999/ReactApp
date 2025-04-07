import { createContext, useEffect, useRef,useState } from "react"
import FullName from "../FullName/FullName";
import { Link } from "react-router-dom";


export const PatientContext = createContext();

export default function Patient() {

    const state = [{id:"1",name:"Maharashtra"}, {id:"2",name:"Karnataka"},{id:"3",name:"Goa"}]

    const city = [{id:"1",name:"Kolhapur",stateid:"1"},
        {id:"2",name:"Sangli",stateid:"1"},
        {id:"3",name:"Belgaum",stateid:"2"},
        {id:"4",name:"Panjim",stateid:"3"}]

    const [citylist,setcitylist] = useState([]) 


    const [patient, setpatient] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        age: 0,
        birthdate: new Date().toJSON().toString().substring(0, 10),
        gender: 'male',
        workfromhome: '',
        remote: '',
        state: '1',
        city:'',
        Address: {
            pincode: '',
            contact: ''
        }
    })

    const [errors,seterrors] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
    })

    let FirstNameValid = useRef(null)
    let errormessages={}


    function ValidateForm()
    {
        let valid = true;

        if(patient.firstname == '')
        {
            valid = false;
            errormessages.firstname = "This Field is required";
            FirstNameValid.current.classList.add("is-invalid");

        }
        else{
            FirstNameValid.current.classList.remove("is-invalid");

        }

        seterrors(errormessages)
        return valid;
    }

    useEffect(()=>{
        debugger;
        var list = city.filter((x)=> x.stateid == parseInt(patient.state))

        setcitylist(list)
        ValidateForm();
    },[patient.state])

    function FormEvent(e) {
        debugger;

        const { name, value, checked, type } = e.target;

        ValidateForm()

        setpatient((p) => {

            if (name in p) {
                return {
                    ...p,
                    [name]: type === 'checkbox' ? checked : value
                };
            }
            else if (name in p.Address) {
                return {
                    ...p,
                    Address:
                    {
                        ...p.Address,
                        [name]: value
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
                            <input className="form-control" ref={FirstNameValid} name="firstname" value={patient.firstname} onChange={FormEvent}></input>
                            {errors.firstname && <p style={{color:'red'}}>{errors.firstname}</p>}
                        </div>
                        <PatientContext.Provider value={{patient,FormEvent}}>
                            <FullName></FullName>
                        </PatientContext.Provider>
                        
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

                                <div className=" form-check" style={{ marginLeft: '10px' }}>
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
                                        return (<option key={x.id} value={x.id}>{x.name}</option>);
                                    }
                                    )
                                }
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label className="p-2">City</label>
                                <select className=" form-select" name="city" value={patient.city} onChange={FormEvent}>
                                    {
                                        citylist.map((x)=>(
                                            (<option key={x.id} value={x.id}>{x.name}</option>)
                                        ))
                                    }
                                </select>
                            </div>

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
                            <button className=" btn btn-primary" onClick={() => { console.log(patient) }}>Submit</button>
                        </div>
                        <div className="col-md-3">
                            {/* <button className=" btn btn-secondary" onClick={() => {window.location.href = '/Index';}}>Cancel</button> */}
                            <Link to="/Index">
                                <button className="btn btn-secondary">Cancel</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}