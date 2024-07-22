import './FormStyles.css';
export default function Modal({isvisiable ,errorMessage=null}){
    if(isvisiable){
        return (
            <div id="modal">
                <div id="modal-contnt">
                    <h1 style={{color: errorMessage ? "red" : "green"}}>{errorMessage != null
                        ? errorMessage :
                        "The Form Has Been Submitted Successfully"}
                    </h1>
                    
                </div>
            </div>
            
                )
    }else{
        return (<></>)
    }
 
}