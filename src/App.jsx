import { useState , useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function App() {
  let navigate = useNavigate()
  const [state, setState] = useState({
    url:""
  })
  const {url} = state

  const [data,setData] = useState([])

  //set value state
  const inputValue = name => event =>{
    setState({...state,[name]:event.target.value})
  }

  const fetchData =()=>{
    axios.get('https://railway-api-new-production.up.railway.app/url/history')
    .then(response=>{
      setData(response.data)
    })
    .catch(err=>alert(err))
  }

  useEffect(()=>{
    fetchData()
  },[data])
  
  //SENT DATA
  const submitForm=(e)=>{
    e.preventDefault();
    axios.post('https://railway-api-new-production.up.railway.app/url',{url})
    .then(response=>{
      console.log(response)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className='bg-gray-50 h-screen w-screen'>
      <div className="container mx-auto py-10  grid justify-items-center">
        <p className="text-8xl text-center text-amber-500">Short URL</p>
        <div className="bg-white mt-10 w-1/2 rounded-lg py-10 drop-shadow-lg">
          <p className="text-4xl text-center mb-10">Paste the URL to be shortened</p>
          <form onSubmit={submitForm} className="text-center h-full">
            <input 
              className="px-4 h-1/4 w-9/12 border-gray-500 border-solid border-2 rounded-md"  
              type="text"
              placeholder="Enter Link Here" 
              id="linkInput" 
              name="linkInput"
              value={url}
              required
              onChange={inputValue("url")}
            />
            <button className="bg-amber-500 m-2 h-1/4 rounded px-4 py-2 text-white" type="submit">
              Shorten URL
            </button>
            <p className="text-xl text-center mt-10">ShortURL เป็นเครื่องมือฟรีในการย่อ URL และสร้างลิงค์สั้น ๆ</p>
          </form>
        </div>
        <div className="bg-white mt-10 w-3/6 rounded-lg py-10 drop-shadow-lg">
          <p className="text-xl text-center">ประวัติการสร้าง ShortURL</p>
          {data.map((url) => (
            <div>
              <p className="mt-1 text-lg font-medium text-gray-900 text-center">Full URL : {url.redirectURL}</p>
              <p className="mt-1 text-lg font-medium text-gray-900 text-center">Short URL : https://railway-api-new-production.up.railway.app/{url.shortId}</p>
              <p className="mt-1 text-lg font-medium text-gray-900 text-center">TotalClicks : {url.visitHistory.length}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
