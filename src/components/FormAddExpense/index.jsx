import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Div, Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import toast from 'react-hot-toast';
import uuid from 'react-uuid'

function FormAddNames({expense, setExpense, zerarExpense}) {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    amount: yup.string().required("Quantidade Obrigatória").matches(/^(?:[1-9](?:[\d]{0,2}|[\d]+)|0)(?:,[\d]{0,4})?$/),
    unitPrice: yup.string().required("Preço5 Obrigatório").matches(/^(?:[1-9](?:[\d]{0,2}|[\d]+)|0)(?:,[\d]{0,2})?$/)
  });

  const {
    register,
    handleSubmit,
    formState: { errors },reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    data.unitPrice = data.unitPrice.replace(",", ".")
    data.amount = data.amount.replace(",", ".")
    data = {...data, id: uuid()}
    localStorage.setItem(`@Despesa-stone`, JSON.stringify([...expense, data]))
    setExpense([...expense, data])
    reset();
    toast.success("Despesa inserida com sucesso")
  };

  const resetInput = () =>{
    reset();
    zerarExpense();
  }

  return (
    
      <Div>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Insira as despesas</h1>
            <TextField
                margin="normal"
                fullWidth
                id="login-basic"
                label="Nome despesa"
                variant="outlined"
                error={!!errors.name?.message}
                {...register("name")}
            />
            <TextField
                margin="normal"
                fullWidth
                label="Quantidade"
                inputProps={{ min: 0 }}
                variant="outlined"
                error={!!errors.amount?.message}
                {...register("amount")}
              />
            <FormControl fullWidth margin="normal" >
              <InputLabel htmlFor="outlined-adornment-amount">Preço</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                label="Preço Unitário"
                error={!!errors.unitPrice?.message}
                {...register("unitPrice")}
              />
            </FormControl>
            <Button type="submit" text={"Adicionar despesa"}></Button>
            <Button className="button" onclick={resetInput} text={"Remover despesas"}></Button>
        </Form>
      </Div>
  );
}

export default FormAddNames;