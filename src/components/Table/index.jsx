import { Container, Div} from "./style"
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect } from "react";

function Table({object, setObject, names, setNames, shareExpenses}){

    const removeNames = (id) =>{
        console.log(id)
        setObject(object.filter((item) => item.id !== id))
        localStorage.setItem(`@Dicionario-stone`, JSON.stringify([...object.filter((item) => item.id !== id)]))
        setNames(names.filter((item) => item.id !== id))
        localStorage.setItem(`@Names-stone`, JSON.stringify([...names.filter((item) => item.id !== id)]))
    }

    
    return(
        <Div>
        <Container>
            <div>
                <span>Nome</span>
                <span>Total(R$) </span>
                {  
                    object.length > 0 && 
                    <>
                        <span className="name">
                            <AiFillCloseCircle />
                        </span>
                    </>
                }
            </div>
            {
                object.map((item, index)=>(
                    <div key={index} className="value">
                        <span>{item.name.length > 11 ? item.name.substring(0,8)+"..." : item.name}</span>
                        <span>{item.price}</span>
                        <AiFillCloseCircle onClick={() => removeNames(item.id)}/>
                    </div>
                ))
            }
        </Container>
        </Div>
    )


}

export default Table;