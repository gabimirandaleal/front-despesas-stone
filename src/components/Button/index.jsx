import {Button} from "./style"

function Buttons ({text, onclick, type, ...rest}){

    return(
        <Button type={type} onClick={onclick}  {...rest} >{text}</Button>
    )

}

export default Buttons