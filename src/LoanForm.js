import './FormStyles.css';
import { useState } from 'react';
import Modal from './Modal';

export default function LoanForm() {
    const [errorMessage, seterrorMessage] = useState(null);
     const [ShowModal, setShowModal] =useState(false);
    const [loanInput, setLoanInput] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salaryRange: "",
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        seterrorMessage(null);
            const {age , phoneNumber} =loanInput;
        if (age <18 || age >100)
            {
                seterrorMessage("the age is not allowed");
        }else if (phoneNumber.length<10 || phoneNumber.length>12 ){
            seterrorMessage("the phone number format is not correct");
        }
        setShowModal(true);
    }

    const btnIsDisabled = loanInput.name === "" || loanInput.phoneNumber === "" || loanInput.age === "";
    const btnClasses = btnIsDisabled ? "disabled" : "";
 function handleDiveclick(){
    if (ShowModal){
        setShowModal(false);

    }

 }
    return (
        <div  onClick={handleDiveclick}
        className="flex" style={{ flexDirection: "column" }}>
            <form id='loan-form' className="flex" style={{ flexDirection: "column" }} onSubmit={handleFormSubmit}>
                <h1>Requesting a Loan</h1>
                <hr />
                <label>Name:</label>
                <input value={loanInput.name} onChange={(event) => {
                    setLoanInput({ ...loanInput, name: event.target.value });
                }} />
                <label>Phone Number:</label>
                <input value={loanInput.phoneNumber} onChange={(event) => {
                    setLoanInput({ ...loanInput, phoneNumber: event.target.value });
                }} />
                <label>Age:</label>
                <input value={loanInput.age} onChange={(event) => {
                    setLoanInput({ ...loanInput, age: event.target.value });
                }} />
                <label style={{ marginTop: "30px" }}>Are you a student</label>
                <input type='checkbox' checked={loanInput.isEmployee} onChange={(event) => {
                    setLoanInput({ ...loanInput, isEmployee: event.target.checked });
                }} />
                <label>Salary</label>
                <select value={loanInput.salaryRange} onChange={(event) => {
                    setLoanInput({ ...loanInput, salaryRange: event.target.value });
                }}>
                    <option value="">Select Salary Range</option>
                    <option value="less than 500$">less than 500$</option>
                    <option value="between 500$ and 2000$">between 500$ and 2000$</option>
                    <option value="between 2000$ and 10000$">between 2000$ and 10000$</option>
                    <option value="above 10000$">above 10000$</option>
                </select>
                <button
                    className={btnClasses}
                    disabled={btnIsDisabled}
                    id='submit'>Submit</button>
            </form>
            <Modal errorMessage={errorMessage} isvisiable={ShowModal}/>
        </div>
    );
}
