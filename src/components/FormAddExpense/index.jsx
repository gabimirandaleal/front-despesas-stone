import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Div, Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import toast from 'react-hot-toast';

function FormAddNames({expense, setExpense, shareExpenses}) {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    amount: yup.string().required("Quantidade Obrigatória"),
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
    data = {...data}
    setExpense([...expense, data])
    reset();
    toast.success("Despesa inserida com sucesso")
  };

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
                type="number"
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
                label="Preço"
                error={!!errors.unitPrice?.message}
                {...register("unitPrice")}
              />
            </FormControl>
            <Button type="submit" text={"Adicionar despesa"}></Button>
        </Form>
      </Div>
  );
}

export default FormAddNames;