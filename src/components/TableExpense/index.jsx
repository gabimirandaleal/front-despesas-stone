import { Container, Div} from "./style"
import { AiFillCloseCircle } from "react-icons/ai";

function TableExpense({expense, setExpense}){
    const removeExpense = (id) =>{
        setExpense(expense.filter((item) => item.id !== id))
    }

    return(
        <Div>
        <Container>
            <div>
                <span>Despesa(nome)</span>
                <span>Quantidade </span>
                <span>Preço unitário </span>
                <span className="name">
                    <AiFillCloseCircle />
                </span>
            </div>
            {
                expense.map((item, index)=>(
                    <div key={index} className="value">
                        <span>{item.name.length > 15 ? item.name.substring(0,8)+"..." : item.name}</span>
                        <span>{item.amount}</span>
                        <span>{item.unitPrice}</span>
                        <AiFillCloseCircle onClick={() => removeExpense(item.id)}/>
                    </div>
                ))
            }
        </Container>
        </Div>
    )


}

export default TableExpense;