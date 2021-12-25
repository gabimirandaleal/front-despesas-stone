import { Container, Div, DivItem} from "./style"
import { AiFillCloseCircle } from "react-icons/ai";

function TableExpense({expense, setExpense}){
    const removeExpense = (id) =>{
        setExpense(expense.filter((item) => item.id !== id))
        localStorage.setItem(`@Despesa-stone`, JSON.stringify([...expense.filter((item) => item.id !== id)]))
    }

    return(
        <Div>
        <Container>
            <div>
                <DivItem>
                    <span>Despesa(nome)</span>
                    {
                        expense.map((item, index)=>(
                            <div key={index}>
                                <span>{item.name.length > 11 ? item.name.substring(0,8)+"..." : item.name}</span>
                            </div>
                        ))
                    }
                </DivItem>
                <DivItem>
                    <span>Quantidade </span>
                    {
                        expense.map((item, index)=>(
                            <div key={index}>
                                <span>{item.amount}</span>
                            </div>
                        ))
                    }
                </DivItem>
                <DivItem>
                    <span>Preço unitário </span>
                    {
                        expense.map((item, index)=>(
                            <div key={index}>
                                <span  className="priceUnit">{item.unitPrice}</span>
                                <AiFillCloseCircle onClick={() => removeExpense(item.id)}/>
                            </div>
                        ))
                    }
                </DivItem>
            </div>
           
        </Container>
        </Div>
    )


}

export default TableExpense;