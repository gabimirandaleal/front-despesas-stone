import FormAddNames from "../../components/FormAddNames";
import Header from "../../components/Header";
import FormAddExpense from "../../components/FormAddExpense";
import {Div} from "./style"
import Table from "../../components/Table";
import { useState } from "react";
import { useEffect } from "react";
function Home({}) {
    const [names, setNames] = useState([]);
    const [expense, setExpense] = useState([])
    const [object, setObject] = useState([]);
    const [atualizar, setAtualizar] = useState(false)
    const [priceToPerson, setPriceToPerson] = useState(0)
    const totalExpense = () =>{
        if(expense.length !== 0){
            return expense.reduce(function(acumulador, valorAtual) {
                return acumulador + (Number(valorAtual.unitPrice)*Number(valorAtual.amount));
            }, 0);
        }else{return 0}
    }

    useEffect(() => {
      shareExpenses() 
    }, [names]);

    useEffect(() => {
        aux();
    }, [expense, atualizar]);
    
    
    function aux(){
        const totalToPay = (totalExpense()/names.length).toFixed(2)  
        object.map((item)=>{
            item.price = totalToPay
        })
        if(totalToPay*names.length !== totalExpense() && names.length > 0){  
            if(totalExpense() < totalToPay*names.length){
                object[names.length-1].price = (Number(totalToPay) - Number((Number(totalToPay)*names.length - totalExpense()).toFixed(2)))
            }else{
                object[names.length-1].price = (Number(totalToPay) + Number((totalExpense() - Number(totalToPay)*names.length).toFixed(2)))
            }
        }
        setObject([...object])
    }



    function shareExpenses(){
        const totalToPay = (totalExpense()/names.length).toFixed(2) 
              
        names.map((item, index) =>{
            setObject([...object, {name: item.name, price: totalToPay}])
        })
        setAtualizar(!atualizar)
    }
      

    return(
        <>
            <Header/>
            <Div>
                <FormAddNames shareExpenses={shareExpenses} names={names} setNames={setNames}/>
                <FormAddExpense shareExpenses={shareExpenses} expense={expense} setExpense={setExpense} />
            </Div>
            <Table object={object}></Table>
        </>
    )
}

export default Home;