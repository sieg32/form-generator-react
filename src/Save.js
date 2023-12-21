import './Save.css'
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { context } from "./context";


function Save(){
    const {formData, changeData} = useContext(context);

    function saveForm(){
        console.log(formData)
       
           axios.post('http://localhost:5000/save', formData).then((response)=>{
                window.alert('saved');
           }).catch((error)=>{
            console.log(error)
           })
      
    }

    function previewForm(){
        axios.get('http://localhost:5000/', formData).then((response)=>{
            window.alert('saved');
       }).catch((error)=>{
        console.log(error)
       })

    }

    return (
        <div className='saving'>
            <button onClick={saveForm} className='saveBtn'>save</button>
            <button onClick={previewForm} className='previewBtn'>preview</button>

        </div>
    )
}
export default Save;