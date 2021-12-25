import { Container, Div} from "./style"

function Table({object}){
    
    return(
        <Div>
        <Container>
            <div>
                <span>Nome</span>
                <span>Total(R$) </span>

            </div>
            {
                object.map((item, index)=>(
                    <div key={index} className="value">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                ))
            }
        </Container>
        </Div>
    )


}

export default Table;