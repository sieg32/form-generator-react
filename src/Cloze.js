import { useContext, useState, useEffect } from "react";
import { context } from "./context";
import './Cloze.css'


function Cloze(props){

    const {formData, changeData} = useContext(context);

    const [form, setValue] = useState({id:props.id, type:"cloze", data:{textPhrase:"", values:[], extra:[]}})

    let Elements = formData.Elements;
    useEffect(()=>{
        Elements[props.id] = form;
        changeData({...formData, Elements})
    }, [form])


    function handleheight(event) {
        let numberOfLineBreaks = (event.target.value.match(/\n/g) || []).length;
       
        let newHeight = 20 + numberOfLineBreaks * 20;
        event.target.style.height = newHeight+'px';
        console.log(event.target.style.height, newHeight)
      }

    function handleInput(event){
        setValue({...form,data:{...form.data, textPhrase:event.target.value}})
        
    }
    function highlight(event){
        if(event.target.id!== "true"){

            event.target.classList.add('select')
            event.target.id = "true";
            console.log(event.target.classList)
            let values = form.data.values;
            values.push(event.target.textContent);
            setValue({...form, data:{...form.data, values:values}})
        }else{

            event.target.classList.remove('select');
            event.target.id=false;
            let values = form.data.values;
            let index = values.indexOf(event.target.textContent)
            values.splice(index,1);
            console.log(values)
            setValue({...form, data:{...form.data, values:values}})
            
        }
        

    }

    let text = form.data.textPhrase.split(/\s+/);
    let PopulateTextArea = text.map((word)=>{
        return <span onClick={highlight}>{word}</span>
    })

    function addWordInput(word){
        
        return (
            <input type="text" readOnly={true} value={word} ></input>
        )

    }
    let WordsSelected = [];
    WordsSelected = form.data.values.map((word)=>{
        return addWordInput(word);
    })

    function handleExtrasChange(event){
        let extra = form.data.extra;
        extra[Number(event.target.id)]=event.target.value;
       
        setValue({...form, data:{...form.data, extra:extra}});
    }
    let extras=[];
    let count=0;
     extras = form.data.extra.map(item=>{
        count= extras.length++;
        return <input id={count} value={item} onChange={handleExtrasChange}></input>
    })

    function addExtra(){
        
        let extra = form.data.extra;
        
        extra.push("")
        setValue({...form, data:{...form.data, extra:extra}});
    }
    
      
    return (
       <div className="cloze"> 
       <h2>enter text here</h2>
        <textarea onInput={handleheight} onChange={handleInput} value={form.data.textPhrase}></textarea>
        <h2>select word</h2>
        <div className="selectionArea" >
            {PopulateTextArea}
        </div>
        <div className="words">

        {WordsSelected}

        {extras}
        </div>
        <button className="addBtn" onClick={addExtra}>extra words</button>
       </div>

    )
}

export default Cloze;