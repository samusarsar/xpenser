import { BE_BASE_URL, requestUrls } from '@/common/constants'
import type { NewUserData, UserCredentials } from '@/common/types'

export const createUser = async (userData: NewUserData) => {
  const fetchURL = BE_BASE_URL + requestUrls.createUser

  return await fetch(fetchURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(userData)
  })
}

export const signInUser = async (userCredentials: UserCredentials) => {
  const fetchURL = BE_BASE_URL + requestUrls.signInUser

  return await fetch(fetchURL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(userCredentials)
  })
}
