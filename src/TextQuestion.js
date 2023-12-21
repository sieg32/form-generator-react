import { useContext, useEffect, useState } from 'react';
import {context} from "./context"
import './TextQuestion.css';

function TextQuestion(props){
    const {formData, changeData} = useContext(context);

    console.log(formData, props);
    let Elements = formData.Elements;
    
    
    const [form, setvalue] = useState({type:'text', question:'',
    description:'', radio:{1:"", 2:"", 3:"", 4:""}, checkBox:{1:"", 2:"", 3:"", 4:""}, drop:{1:"", 2:"", 3:"", 4:""}})
    
    useEffect(()=>{
        
        
        Elements[props.id] = {"id":props.id, 'type':'text', "data":form};
        changeData({...formData, Elements})
        

    }, [form])
    
const handleOptionChange = (event) => {
    console.log(event.target.value);
    setvalue({
        ...form,
        'type':event.target.value
    })
   
  };

  const handleQuestion = (event)=>{
    setvalue({
        ...form,
        question:event.target.value
    })
  }
  const handleDescription = (event)=>{
    setvalue({
        ...form,
        description:event.target.value
    })
  }

  
function handleheight(event) {
    let numberOfLineBreaks = (event.target.value.match(/\n/g) || []).length;
   
    let newHeight = 20 + numberOfLineBreaks * 20;
    event.target.style.height = newHeight+'px';
    console.log(event.target.style.height, newHeight)
  }


 
function handleinput(event){
   console.log( event.target.id, event.target.value)
   let count = event.target.id;
   let value= event.target.value;
   console.log(form.radio)
   
   setvalue({...form, radio:{...form.radio, [count]:value}});

}

function handleinputcheck(event){
    console.log( event.target.id, event.target.value)
   let count = event.target.id;
   let value= event.target.value;
   console.log(form.radio)
   
   setvalue({...form, checkBox:{...form.checkBox, [count]:value}});
}
 
function handleinputdrop(event){
    console.log( event.target.id, event.target.value)
   let count = event.target.id;
   let value= event.target.value;
   console.log(form.drop)
   
   setvalue({...form, drop:{...form.drop, [count]:value}});


}

const handleFileChange = (e) => {
    setvalue({ ...form, image:e.target.files[0]});
  };


    return(
        <div className="textQuestion">
            <div className='top'>
            <select className="queType" value={form.type} onChange={handleOptionChange}>
                <option value='text' >text</option>
                <option value="paragraph">paragraph</option>
                <option  value="radio">multiple choice</option>
                <option value="check">checkbox</option>
                <option value="Dropdown">dropdown</option>
            
            </select>
            <label htmlFor="file-input" className="custom-upload">
              Choose a file
             </label>
            <input htmlFor='file-input' type="file" accept="image/*"  onChange={handleFileChange}/>

            </div>

            <input className='question' placeholder='question' type='text' value={form.question} onInput={handleQuestion}></input>
            <input className='description' placeholder='description' value={form.description} onInput={handleDescription}></input>

             {(form.type === 'text') && <input className='answer' placeholder='answer here'></input>}

             {form.type ==='paragraph'&&  <textarea onInput={handleheight}></textarea> }  
            {form.type ==='radio' &&           
            
            <div className='radio'>
                <input id='1' className='value' onInput={handleinput} placeholder="checkbox answer " type='text' value={form.radio[1]}></input>
                <input id='2' className='value' onInput={handleinput} placeholder="checkbox answer " type='text' value={form.radio[2]} ></input>
                <input id='3' className='value' onInput={handleinput} placeholder="checkbox answer " type='text' value={form.radio[3]} ></input>
                <input id='4' className='value' onInput={handleinput} placeholder="checkbox answer " type='text' value={form.radio[4]} ></input>
            
               </div>  
            }
            {form.type==='check'&& 
            
            <div className='checkbox'>
                <input id='1' className='value' placeholder="checkbox answer 1 " onInput={handleinputcheck} type='text' value={form.checkBox[1]}></input>
                <input id='2' className='value' placeholder="checkbox answer 2 " onInput={handleinputcheck} type='text' value={form.checkBox[2]} ></input>
                <input id='3' className='value' placeholder="checkbox answer 3 " onInput={handleinputcheck} type='text' value={form.checkBox[3]} ></input>
                <input id='4' className='value' placeholder="checkbox answer 4 " onInput={handleinputcheck} type='text' value={form.checkBox[4]} ></input>
        
           </div>
           
            }
            {form.type === 'Dropdown' && 
            
            <div className='drop' >
                <input id='1' className='value' placeholder="dropdown answer 1" onInput={handleinputdrop} type='text' value={form.drop[1]}></input>
                <input id='2' className='value' placeholder="dropdown answer 2" onInput={handleinputdrop} type='text' value={form.drop[2]} ></input>
                <input id='3' className='value' placeholder="dropdown answer 3" onInput={handleinputdrop} type='text' value={form.drop[3]} ></input>
                <input id='4' className='value' placeholder="dropdown answer 4" onInput={handleinputdrop} type='text' value={form.drop[4]} ></input>
            

            </div>
            }

        </div>
    )
}


export default TextQuestion;