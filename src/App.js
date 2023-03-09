import { useNavigate, useMatch } from 'react-router-dom'
import { useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'

import { Routes, Route, Link } from 'react-router-dom'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import AnecdoteList from './components/AnecdoteList'
// import Menu from './components/Menu'

const App = () => {
  const navigate = useNavigate()
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    navigate('/')
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }
  console.log('anecdotes', anecdotes)

  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null

  return (
    <div>
      <h1>Software anecdotes</h1>
      <div id='nav_bar'>
        <Link className='link' to='/anecdotes'>
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
          element={<Anecdote anecdote={anecdote} />}
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
      {/* <Menu anecdotes={anecdotes} />
      <AnecdoteList anecdotes={anecdotes} />
      <About />
      <CreateNew addNew={addNew} /> */}
      <Footer />
    </div>
  )
}

// const Menu = (props) => {
//   const anecdotes = props.anecdotes

//   console.log('menu anecdotes', anecdotes)
//   return (
//     <>
//       <div id='nav_bar'>
//         <Link className='link' to='/'>
//           Home
//         </Link>
//         <Link className='link' to='/create'>
//           Create
//         </Link>
//         <Link className='link' to='/about'>
//           About
//         </Link>
//       </div>

//       <Routes>
//         <Route
//           path='/anecdotes/:id'
//           element={<Anecdote anecdotes={anecdotes} />}
//         />
//         <Route
//           path='/anecdotes'
//           element={<AnecdoteList anecdotes={anecdotes} />}
//         />
//         <Route path='/create' element={<CreateNew />} />
//         <Route path='/about' element={<About />} />
//       </Routes>

//       <div>
//         <i>Anecdotes app, Department of Computer Science 2023</i>
//       </div>
//     </>
//   )
// }

export default App
