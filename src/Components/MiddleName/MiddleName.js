import { useContext } from "react"
import { PatientContext } from "../Patient/Patient"

export default function MiddleName() {
    
    const {patient,FormEvent} = useContext(PatientContext)

    return (
    <div className="col-md-3">
        <label className="p-2">MiddleName</label>
        <input className="form-control" name="middlename" value={patient.middlename} onChange={FormEvent}></input>
    </div>)
}