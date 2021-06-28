import React  from 'react';
import '../styles/Todo.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

function TodoItem({items})  {
    
    const handelComplete = (e) => {
        let trgt = e.target;    
        if ( trgt.classList.contains("comp") ) {
            trgt.classList.remove("comp");  trgt.classList.add("und");
            trgt.setAttribute("title", "Undo");
            trgt.parentElement.firstChild.children[0].style.color = "gray";
            trgt.parentElement.firstChild.children[0].style.textDecoration = "line-through";
            trgt.parentElement.firstChild.children[1].style.color = "gray";
            trgt.parentElement.firstChild.children[1].style.textDecoration = "line-through";    
        }else{ 
            trgt.classList.remove("und");  trgt.classList.add("comp"); 
            trgt.setAttribute("title", "Complete");
            trgt.parentElement.firstChild.children[0].style.color = "#ff9a8d";
            trgt.parentElement.firstChild.children[0].style.textDecoration = "none";
            trgt.parentElement.firstChild.children[1].style.color = "black";
            trgt.parentElement.firstChild.children[1].style.textDecoration = "none";
        }
    }

    const handelDelete = (e) => {
        let trgt = e.target;
        let pr = document.querySelector(".App");
        const sibn = trgt.previousElementSibling.children[0].textContent, sibd = trgt.previousElementSibling.children[1].textContent;
        for(var i=0; i<=localStorage.length; i++){
            if( localStorage.getItem(`Item${i} name`) === sibn  ){
                localStorage.removeItem(`Item${i} name`);
                localStorage.setItem(`Item${i} name-rmv`, `${i}`);
            }          
            if( localStorage.getItem(`Item${i} desc`) === sibd ){
                localStorage.removeItem(`Item${i} desc`);
                localStorage.setItem(`Item${i} desc-rmv`, `${i}`);
            }          
        }

        for(var i=1; i<=pr.children.length; i++){
            if ( pr.children[i] === trgt.parentElement ){
            pr.removeChild(trgt.parentElement);
            // console.log(i, sibn, sibd);
            } //else{ console.log('no',i-1, localStorage.getItem(`Item${i-1} name`) , localStorage.getItem(`Item${i-1} desc`) )  }
        }
    }

    console.log( items );

    return(
        <>
        {
            items.map((item, index) => {
                return (
                    <section className="TodoItems" key={index}>                        
                        <div>
                            <h1 className={'TodoItems__name'}>{item.name}</h1>
                            <p className={'TodoItems__desc'}>{item.desc}</p>
                        </div>
                        <button type="button" className={"dlt"} title="remove" onClick={ handelDelete}></button>
                        <button type="button" className={"comp"} title="Complete" onClick={ handelComplete}></button>
                    </section>  
                );
            })
        }
        </>
    )
}


export default TodoItem;
