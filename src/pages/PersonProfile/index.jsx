import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people }) {
  const [person, setPerson] = useState(null)
  const params = useParams()

  useEffect(() =>{
    const someone = people.find(p => p.index === Number(params.index))
    setPerson(someone)
  }, [people, params.index])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
