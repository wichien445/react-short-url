import App from './App'

//Router
import { BrowserRouter , Routes, Route } from "react-router-dom";
//Components
import redirectComponents from './components/redirectComponents';

function MyRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={App}/>
            <Route path="/shorturl" exact Component={redirectComponents}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoute