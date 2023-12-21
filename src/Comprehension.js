import { useContext, useState, useEffect } from "react";
import { context } from "./context";
import './Comprehension.css'


function Comprehension(props){
    const {formData, changeData} = useContext(context);
    const [form, setValue] = useState({id:props.id, type:"comprehension", data:{summary:"", questions:[]}})

    function handleheight(event) {
        let numberOfLineBreaks = (event.target.value.match(/\n/g) || []).length;
       
        let newHeight = 20 + numberOfLineBreaks * 20;
        event.target.style.height = newHeight+'px';
        console.log(event.target.style.height, newHeight)
      }


    function handleInput(event){
        setValue({...form,data:{...form.data, summary:event.target.value}})
        
    }
    function handleQuestionInput(event){
        let questions = form.data.questions;
        console.log(event.target, event.target.value);

        questions[event.target.id].question = event.target.value; 
        setValue({...form, data:{...form.data, questions:questions}})
    }
    function handleOptionInput(event){
        console.log(event.target.id, event.target.getAttribute('optionKey'), event.target.value)
        let questions = form.data.questions;
        console.log(form.data)
        questions[event.target.id].options[event.target.getAttribute('optionKey')] = event.target.value; 
        setValue({...form, data:{...form.data, questions:questions}})
    }
    function addOption(event){
            let questions = form.data.questions;
            
            questions[event.target.id].options.push("");
            setValue({...form, data:{...form.data, questions:questions}})
    }
    
    let questionPanels = [];
    
    questionPanels = form.data.questions.map((value, index)=>{
       let id = index;
      
        
        let option = [];
        option = value.options.map((option, index)=>{
            
            return (
                <input className="options" id={id} optionKey={index} type='text' onChange={handleOptionInput} value={form.data.questions[id].options[index]}></input>
                
            )
        })

       return(<div>
          <input className="questions" value={value.question} id={index} placeholder={index+1 + " question"} onChange={handleQuestionInput} ></input>
          <div>{option}</div>
          <button className="optionBtn" id={index} onClick={addOption}>add option</button>
       </div> 
        )
    })


    function addQuestion(event){
            let questions = form.data.questions;
            questions.push({question:"", options:[]});
            setValue({...form,data:{...form.data, questions:questions}})
            console.log('question created', form.data)
    }

    return(
        <div className="comprehension">

        <h2>enter passage here</h2>
        <textarea onInput={handleheight} onChange={handleInput} value={form.data.summary}></textarea>
        <div>
            {questionPanels}
        </div>
        <button className="questionBtn" onClick={addQuestion}>add question</button>

        </div>

    )
}

export default Comprehension;