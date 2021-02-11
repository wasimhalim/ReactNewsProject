import React,{useState,useEffect} from 'react'
import axios from "axios"

function News() {
    const [content,setContent]=useState("")
    const [news,setNews]=useState([])
    const [count,setCount]=useState(0)
    useEffect(()=>{
        axios.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=14e88762b4e84ef38beb993992ac328f")
        .then(res=>{
            setNews(res.data.articles)
        })
    },[])
    return (
        <div className="max-w-5xl h-full  mx-auto mt-5 rounded-md flex flex-row flex-wrap">
          {news.map(new_=>(
              
              <div className="mb-3 bg-gray-300 hover:bg-gray-100  m-2 p-4 rounded-md w-52" key={new_.url} onClick={()=>window.open(new_.url,"_blank")}>
                  <h6 className="text-sm">{new_.title}</h6>
                    <p className="text-xs mb-2">{new_.content}</p>   
                    <p className="text-xs">{new_.author  ? "Author: "+new_.author :"" }</p>   
              </div>
            
          ))}
        </div>
    )
}

export default News
