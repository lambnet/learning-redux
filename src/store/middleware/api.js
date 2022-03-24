import axios from "axios"
import { apiUsersRequestSucceeded } from "../user"

const api = store => next => async action => {

  if (action.type !== "apiRequest") return next(action)

  next(action)
  const { url, method, data, onSuccess, onError } = action.payload
  const response = await axios.request({
    baseURL: 'https://jsonplaceholder.typicode.com', // handle cors
    url,
    method,
    data
  })

  // 

  store.dispatch(apiUsersRequestSucceeded(response.data))
}

export default api