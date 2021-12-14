import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const { hireAPerson } = props

  const [person, setPerson] = useState(null)

  const location = useLocation()

  console.log({ person, location })

  useEffect(() => {
    if (location.state) {
      const { person } = location.state

      setPerson(person)
    }
  }, [location])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hireAPerson={hireAPerson} />
    </article>
  )
}

export default PersonProfile