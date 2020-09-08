import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

  const deletePerson = (props) => {
      const request = axios.delete(`${baseUrl}/${props.id}`)
      return request.then(response => response.data)
  }

  const updatePerson = (props) => {
      const request = axios.put(`${baseUrl}/${props.id}`, props)
      return request.then(response => response.data)
      
  }

  export default { getAll, create, deletePerson, updatePerson }