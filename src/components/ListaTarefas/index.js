import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

import styled from 'styled-components'

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaResolvida, setListaResolvida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionaTarefaEnter =(event)=> {
    if (event.charCode === 13){
      const novaLista = [...lista, novaTarefa]
      setLista(novaLista)
      setNovaTarefa("")
    }
  }

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);

    const novaListaResvolvida = [...listaResolvida]
    novaListaResvolvida.push(tarefa)
    setListaResolvida(novaListaResvolvida)
  };

  const TaskDone = styled.p `
    text-decoration: line-through;
    opacity: 0.7;
  `

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={(event)=>adicionaTarefaEnter(event)}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaContainer>
      <ul>
          {listaResolvida.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <TaskDone>{tarefa}</TaskDone>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
