import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'




function Mid() {
    // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
    const [search, setSearch]= useState("js")
    const [story, setStory]= useState([])

    useEffect(()=>{
        axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
            .then((res)=>{
                console.log(res.data.hits)
                setStory(res.data.hits)
            }).catch((err)=>{
                console.log(err)
            })
        
    },[])

   
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Fetch data or perform other actions
      };

    const handleDismiss = (objId) =>{
        const updatedStories = story.filter((item)=>item.objectID!==objId)
        setStory(updatedStories)
    }


  return (
    <>
    <form onSubmit={handleSubmit}> 
    <label>Search Stories</label>
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}></input> 
    <button type='submit'>Submit</button>
    
    </form>
    {story.map((item)=><div key={item.objectID}>
        <div>
            <a href=''>{item.title}</a>
            {` ${item.author}, ${item.num_comments}, ${item.points} `}
            <button onClick={()=>handleDismiss(item.objectID)}>Dismiss</button>
        </div>
        </div>)}
    </>
    
  )
}

export default Mid