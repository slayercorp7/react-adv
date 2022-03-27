import { useState } from "react"


export const useProduct = ( initState: number = 0) => {
  const [counter, setcounter] = useState(initState);
    
  const increaseBy = (value: number) => {
    setcounter(prev => Math.max(prev +  value, 0))
  }

  return  {counter, increaseBy};
}
