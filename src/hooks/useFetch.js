import React ,{useState , useEffect}from 'react'



const useFetch = (url) => {
  const [data,setData] = useState([])
  const [loading , setLoading]= useState(false)
  const[error,setError]= useState(null)
  let fetchData = async ()=>{
    try{
      setData(true)
      let fetchRequest = await fetch(url)
      let response = await fetchRequest.json()
      setData(response)
    }catch(error){
      setError(error)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div>useFetch</div>
  )
  useEffect(()=>{
    fetchData()
  })
}

export default useFetch