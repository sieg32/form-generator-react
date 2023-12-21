
import './App.css'
import './AddButton.js'
import { useState } from 'react';
import {context} from './context';
import AddButton from './AddButton';
import Save from './Save'
import TextQuestion from './TextQuestion';
import Categorize from './Categorize';
import Cloze from './Cloze'
import Comprehension from './Comprehension'

function App(){
  const [formData, changeData] = useState({name:"name",
           Description:"description",
          Elements:[] });


  let panels = [];

  panels = formData.Elements.map((value)=>{
    if(value.type==='text'){
      return <TextQuestion id={value.id} />
    }else if(value.type === 'categorize'){
      return <Categorize id={value.id} />
    }else if(value.type === 'cloze'){
      return <Cloze id={value.id} />
    }else if(value.type === 'comprehension'){
      return <Comprehension id={value.id} />
    }
    

   
    

    
  })

function handleNameChange(event){
  changeData({...formData, name:event.target.value});
  


}
function handleDescriptionChange(event){

  changeData({...formData, Description:event.target.value});
}
  

  return (
    <div className='main'>
     <context.Provider value={{formData,changeData}}> 

      <div className='formEditor'>
        <div className='formHead'>
          <input type='text' className='formName' placeholder="name" onChange={handleNameChange} value={formData.name}></input>
          <input type='text' className='formDescription' placeholder='description' onChange={handleDescriptionChange} value={formData.Description}></input>
        </div>

        {panels}  




        <Save />
        <AddButton />

        

      
      </div>

     </context.Provider>
    </div>
  )
}

export default App;
