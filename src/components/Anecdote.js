// import { useParams } from 'react-router-dom'

const Anecdote = ({ anecdote }) => {
  // const id = useParams().id
  // const anecdote = anecdotes.find((n) => n.id === Number(id))
  return (
    <div>
      <strong>{anecdote.content}</strong>
    </div>
  )
}
export default Anecdote
