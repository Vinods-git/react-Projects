import {useState} from 'react'
const useInputUser = (initState) =>{
const [value,setValue] = useState(initState);
const reset = (initState)=>{
  setValue(initState)
}
const bind = {
  value,
  onChange:e=>setValue(e.target.value)
}

 return [value,bind,reset]
}
export default useInputUser ;