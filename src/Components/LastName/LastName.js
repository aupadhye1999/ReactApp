import { useContext } from "react"
import { PatientContext } from "../Patient/Patient"

export default function LastName() {

    const {patient,FormEvent} = useContext(PatientContext)

    return (
        <div className="col-md-3">
            <label className="p-2">LastName</label>
            <input className="form-control" name="lastname" value={patient.lastname} onChange={FormEvent}></input>
        </div>
    )
}