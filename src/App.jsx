import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe/:id" element={<RecipeDetails/>}/>
      </Routes>
    
  )
}

export default App
