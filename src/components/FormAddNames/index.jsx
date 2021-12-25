import { TextField } from "@mui/material";
import { Div, Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import toast from 'react-hot-toast';
import { useState } from "react";

function FormAddNames({names, setNames, zerarNames}) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }, reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    localStorage.setItem(`@Names-stone`, JSON.stringify([...names, data]))
    setNames([...names, data]);
    reset();
    toast.success("Nome inserido com sucesso");
  };

  const resetInput = () =>{
    reset();
    zerarNames();
  }


  return (
      <Div>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Insira os nomes</h1>
            <TextField
                margin="normal"
                fullWidth
                label="Nome"
                variant="outlined"
                error={!!errors.name?.message}
                {...register("name")}
            />
            <Button type="submit" text={"Adicionar Nome"}></Button>
            <Button className="button" onclick={resetInput} text={"Remover nomes"}></Button>
        </Form>
      </Div>
 
  );
}

export default FormAddNames;