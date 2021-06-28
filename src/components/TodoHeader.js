import React, { useState } from 'react'

function TodoHeader(props) {
    const {items, addItem } = props;
    const [HeaderInputs, setHeaderInputs] = useState({ name: "", desc: "" });

    const handleChange = (e) => {
        setHeaderInputs({
            ...HeaderInputs,
            [e.target.name]: e.target.value,                    
        })
    }

    const handelSubmit = () => {
        const inN = document.getElementById("name"),
            inD = document.getElementById("desc");

        const arrName = [];
        for(var i=0; i<document.querySelectorAll(".TodoItems__name").length; i++){
            arrName.push( document.querySelectorAll(".TodoItems__name")[i].textContent );
        }
        const arrDesc = [];
        for(var i=0; i<document.querySelectorAll(".TodoItems__desc").length; i++){
            arrDesc.push( document.querySelectorAll(".TodoItems__desc")[i].textContent );
        }               console.log( arrName, arrDesc );
        const trgnTxt = arrName.filter(function (nm) {  return nm === inN.value;  });
        const trgdTxt = arrDesc.filter(function (ds) {  return ds === inD.value;  });

        if(inN.value.length >= 3 && inD.value.length >= 5 && trgnTxt.length === 0 && trgdTxt.length === 0){
            setHeaderInputs({ name: "", desc: "" });
            addItem(HeaderInputs);
            console.log( HeaderInputs );
            const itmLns = document.querySelectorAll(".TodoItems").length + 1;

            localStorage.setItem(`Item${localStorage.length+1} name`, inN.value);
            localStorage.setItem(`Item${localStorage.length} desc`, inD.value);            
        } else{ 
            (  trgnTxt.length != 0 || trgdTxt.length != 0 )
            ? document.querySelector(".TodoInsert__span").style.display = "block"
            : console.log("Attention msg")                
        }
    }


    return (
        <>
              <h1>My Todos</h1>  
              <section id="TodoInsert">
                <div>
                    <p>Name</p>
                    <input type="text" id="name" name="name" onChange={handleChange} value={HeaderInputs.name}/>
                </div>
                <div>
                    <p>Description</p>
                    <input type="text" id="desc" name="desc" onChange={handleChange} value={HeaderInputs.desc}/>
                </div>         
                <button type="button" onClick={handelSubmit}>Add Todo</button>    
                <span className={'TodoInsert__span'} > ⚠️This name or description repeated, 🙂insert different.
                    <button type="button" onClick={(e) => {
                        e.target.parentElement.style.display = "none";
                    } }> x </button>    
                </span>
              </section>
        </>
    )
}

export default TodoHeader

