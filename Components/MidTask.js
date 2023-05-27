import React from 'react'
import { useEffect,useState } from 'react'
function MidTask() {
 const [users, setUsers] = useState([])
const [count, setCount] = useState(2)
 const [show,setShow] = useState(true)
  const fetchUserData = () => {
    fetch('https://hn.algolia.com/api/v1/search?query=')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  function HandleChange(i){
    setUsers(users=>[...users.slice(0, i), ...users.slice(i+1)])
    setCount(count=>count-1)
  }

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.slice(0, count).map((user, i) => (
            <li key={user.id}>{user.name} <button onClick={()=>{HandleChange(i)}} id={i}>Dismiss</button></li>
          ))}
        </ul>
      )}
      { show ? <button onClick={()=>
        {count != users.length? setCount(count=>count+2):setShow(false)}
        
        }>More</button>:<h3>No more values</h3>
        }
    </div>
  );

}

export default MidTask