import FormAddNames from "../../components/FormAddNames";
import Header from "../../components/Header";
import FormAddExpense from "../../components/FormAddExpense";
import {Div} from "./style"
import Table from "../../components/Table";
import { useState } from "react";
import { useEffect } from "react";
import TableExpense from "../../components/TableExpense";
function Home({}) {
    const [names, setNames] = useState(JSON.parse(localStorage.getItem(`@Names-stone`)) || []);
    const [expense, setExpense] = useState(JSON.parse(localStorage.getItem(`@Despesa-stone`)) || [])
    const [object, setObject] = useState(JSON.parse(localStorage.getItem(`@Dicionario-stone`)) || []);
    const [atualizar, setAtualizar] = useState(false)
    
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
        atualizarDados();
    }, [expense, atualizar]);

    function zerarNames(){
        localStorage.setItem(`@Dicionario-stone`, JSON.stringify([]))
        localStorage.setItem(`@Names-stone`, JSON.stringify([]))
        setObject([])
        setNames([])
    }

    function zerarExpense(){
        localStorage.setItem(`@Despesa-stone`, JSON.stringify([]))
        setExpense([])
    }
    
    
    function atualizarDados(){
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
        localStorage.setItem(`@Dicionario-stone`, JSON.stringify([...object]))

    }



    function shareExpenses(){
        const totalToPay = (totalExpense()/names.length).toFixed(2) 
              
        names.map((item, index) =>{
            if(object.filter((itemO) => itemO.id === item.id).length === 0){
                setObject([...object, {name: item.name, price: totalToPay, id: item.id}])
                localStorage.setItem(`@Dicionario-stone`, JSON.stringify([...object, {name: item.name, price: totalToPay, id: item.id}]))
            }
        })
        setAtualizar(!atualizar)
    }
      

    return(
        <>
            <Header/>
            <Div>
                <FormAddNames zerarNames={zerarNames} names={names} setNames={setNames}/>
                <FormAddExpense zerarExpense={zerarExpense} shareExpenses={shareExpenses} expense={expense} setExpense={setExpense} />
            </Div>
            <Div>
                <Table object={object} shareExpenses={shareExpenses} setObject={setObject} names={names} setNames={setNames}></Table>
                <TableExpense expense={expense} setExpense={setExpense}></TableExpense>
            </Div>
        </>
    )
}

export default Home;