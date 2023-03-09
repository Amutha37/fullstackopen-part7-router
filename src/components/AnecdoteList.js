import { Link } from 'react-router-dom'
import React from 'react'
// import PropTypes from 'prop-types'

// const AnecdoteList = ({ anecdotes }) => {
//   return (
//     <div>
//       <h2>Anecdotes</h2>

//       <table>
//         {anecdotes.map((anecdote) => (
//           <tbody key={anecdote.id}>
//             <tr>
//               <td>{anecdote.id}</td>
//               <td>
//                 {/* <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link> */}
//                 {anecdote.content}
//               </td>
//             </tr>
//           </tbody>
//         ))}
//       </table>
//     </div>
//   )
// }

const AnecdoteList = ({ anecdotes }) => {
  console.log('list', anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// AnecdoteList.propTypes = {
//   anecdotes: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default AnecdoteList
