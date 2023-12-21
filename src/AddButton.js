import "./AddButton.css";
import React, { useContext, useState } from "react";
import { context } from "./context";
function AddButton() {
  const { formData, changeData } = useContext(context);

  const [addElem, changeType] = useState("text");


  function handlechange(event){
    changeType(event.target.value)
  }

  function addElement(event) {
    let id = 0;
    
      id = formData.Elements.length++;
      let Elements = formData.Elements;
      Elements[id] = { id: id, type: addElem, data: {} };
      changeData({ ...formData, Elements });

      console.log(formData.Elements);
    

  }

  return (
    <div className="addQue">
      <select onChange={handlechange} className="questionType">
        <option value="text">text question</option>
        <option value="categorize">categorize</option>
        <option value="cloze">cloze</option>
        <option value="comprehension">comprehension</option>
      </select>
      <button className="Add" onClick={addElement}>
        <i className="fa-solid fa-plus"></i> Add question
      </button>
    </div>
  );
}

export default AddButton;
