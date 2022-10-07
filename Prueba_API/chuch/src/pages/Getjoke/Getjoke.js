import '/home/andrespardo/Desktop/react chuck/chuch/src/App.css';
import React, { useState, useEffect } from 'react';


function Getjoke() {
  const url = "http://127.0.0.1:8000/api/jokeschuck/"
  const [todos, setTodos] = useState()
  const fetcApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    // const value = responseJSON['value']
  }

  useEffect(() => {
    fetcApi()
  }, [])
  return (
    <div className="App">
      Hola Mundo
      
      <form>
        <ul>

          { !todos ? 'cargando' :
            [todos].map((todo, index)=>{
              console.log(todo)
                return <li> {todo} <input type="submit" value="favorite" /></li>
            })
          }
        </ul>
  
      </form>
    </div>
  );
}
export { Getjoke };