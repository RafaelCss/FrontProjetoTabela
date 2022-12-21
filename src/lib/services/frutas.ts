import api from "./configAxios"
import qs from 'qs'
import { IFrutas } from "../../Interfaces/frutas"



const buscarDados = (filtro ?: any) =>{
  const resultado =  api
  .get('Fruta', {
   params : filtro
  })
  .then(response => response.data)
  .catch(error => ({ ...error?.response?.data, sucesso: false }));
  return resultado
  }


const executarContas =async ( valorA : number, valorB : number, operacao : string ) =>{
    api.post('buscarTodos')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  {buscarDados, executarContas}