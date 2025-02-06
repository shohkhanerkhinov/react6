import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Addpost from './Components/Addpost';

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(function () {

    setLoading(true)

    axios("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        // console.log('APP res',response);
        if (response.status == 200) {
          setTodos(response.data)
        }

      })
      .catch(error => {
        console.log(error);

      })
      .finally(function () {
        setLoading(false)
      })
  }, [])
  return (
    <div>

    <Addpost></Addpost>


      <div className='content'>
        {
          loading && <p class="loading">
            <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
          </p>

        }
        {
          todos.length > 0 && todos.map(function (todo, index) {
            return (
              <div key={index} className='card'>
                <h3>{todo.userId}<br />{todo.title}</h3>
                <h4>{todo.body}</h4>
                <button className='delete'>ochirish</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App