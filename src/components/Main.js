import React, {useState,useEffect}from 'react'  
import { Title,TextInput, Text, Grid, Box } from '@mantine/core';
import axios from "axios"



const Main = () => { 
    const [image, setImage]=useState(null)   
    const [search, setSearch]=useState("")  
    // const [currentPage, setCurrentPage]=useState(1) 
    // const [postsPerPage, setPostsPerPage]=useState(12)

    let url="https://api.github.com/emojis" 
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
          console.log(response)
          setImage(response.data)})
      },[])  

const searchHandler=(e)=>{
    setSearch(e.target.value)
}   
// const lastPostIndex=currentPage*postsPerPage; 
// const firstPostIndex=lastPostIndex-postsPerPage 
// const currenPosts=image.slice(firstPostIndex,lastPostIndex) 

// const filteredData=image.filter((item)=>item.key.toLowerCase().includes(search.toLowerCase())) 
// console.log(filteredData, "filterData")
  return (
    <div>  
    <Box style={{display:"flex", padding:"10px", flexDirection:"column"}}>
    <Title align='center'> {"Emoji Application"} </Title>   
    <TextInput style={{width:"500px"}}   value={search} onChange={searchHandler}
      placeholder="Search Emoji"
    />  
    </Box> 
   
   {image && <Grid style={{padding:"25px", display:"flex", flexDirection:"row"}}>  
    {
        Object.keys(image).map((i)=> {
        return ( 

            <Grid.Col lg={2.4} md={2} sm={2} p={8} key={i}>
            
            <img src={image[i]} style={{boxSizing:"border-box", background:"#ddd", width:"150px"}}></img>  
            <Text>{i}</Text>
            </Grid.Col> 
        )
        })
    }
   </Grid> 
   }
    
    </div>
  )
}

export default Main