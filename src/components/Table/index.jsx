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
                        <span>{item.name.length > 11 ? item.name.substring(0,8)+"..." : item.name}</span>
                        <span>{item.price}</span>
                    </div>
                ))
            }
        </Container>
        </Div>
    )


}

export default Table;