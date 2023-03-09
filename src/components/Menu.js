import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import CreateNew from './CreateNew'
import About from './About'
import Anecdote from './Anecdote'
import AnecdoteList from './AnecdoteList'

const Menu = (props) => {
  const anecdotes = props.anecdotes

  console.log('menu anecdotes', anecdotes)
  return (
    <>
      <div id='nav_bar'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/create'>
          Create
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
      </div>

      <Routes>
        <Route
          path='/anecdotes/:id'
          element={<Anecdote anecdotes={anecdotes} />}
        />
        <Route
          path='/anecdotes'
          element={<AnecdoteList anecdotes={anecdotes} />}
        />
        <Route path='/create' element={<CreateNew />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <div>
        <i>Anecdotes app, Department of Computer Science 2023</i>
      </div>
    </>
  )
}
export default Menu
