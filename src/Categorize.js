import './Categorize.css'
import { useContext, useEffect, useState } from "react";
import { context } from "./context";
function Categorize(props){

    const {formData, changeData} = useContext(context);

    const [form, setValue] = useState({id:props.id, type:"categorize", data:{categories:["category 1",'category 2'], items:[]}})

    let Elements = formData.Elements;
    useEffect(()=>{
        Elements[props.id] = form;
        changeData({...formData, Elements})
    },[form])


    console.log(form);

    function handleCategoryInput(event){
        let category = form.data.categories;
        category[Number(event.target.id)]=event.target.value;
       setValue({...form, data:{...form.data, categories:category}})
        console.log(event.target.id, event.target.value);
    }

    function addCategory(event){
        let category = form.data.categories;
        
        category.push('');
        setValue({...form, data:{...form.data, categories:category}});
        
    }

    let categoryInputs = [];
    let id=0;
    categoryInputs = form.data.categories.map((categoryElem)=>{
        id = categoryInputs.length++;
        return <input className="category" id={id} type="text" placeholder="enter category here" onChange={handleCategoryInput} value={categoryElem}></input>
    })
    
    function handleItemInput(event){
        let items = form.data.items;
        items[Number(event.target.id)].name=event.target.value;
       setValue({...form, data:{...form.data, items:items}})
        
    }

    let belongsTo = [];
    belongsTo = form.data.categories.map((belongs)=>{
        return <option>{belongs}</option>
    })

    function handleBelongs(event){
        let items = form.data.items;
        items[Number(event.target.id)].belongs = event.target.value;

        setValue({...form, data:{...form.data, items:items}})
    }
    let itemsInputs =[];
    let idInputs=0;
    itemsInputs = form.data.items.map((itemElem)=>{
        idInputs = itemsInputs.length++;
        return(
             <div className='items' >
                <input className='itemInput' id={idInputs} type="text" placeholder="enter item here" onChange={handleItemInput} value={itemElem.name}></input>
                <select className='belongs' id={idInputs} onChange={handleBelongs} value={itemElem.belongs}>
                    {belongsTo}
                </select>
            </div>
        )
    })
    function addItem(event){
        let items = form.data.items;
        console.log(items);
        items.push({name:"", belongs:""});
        setValue({...form, data:{...form.data, items:items}});
        
    }

    
    return (
       <div className="categorizePanel">
        <h3>please enter categories</h3>
        {categoryInputs}

        <button className="Btn" onClick={addCategory}>add category</button>

        {itemsInputs}

        <button className='Btn' onClick={addItem}>add item</button>


       </div>
    )
}
export default Categorize;