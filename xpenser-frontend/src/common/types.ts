export type NewUserData = {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export type UserData = {
  firstName: string
  lastName: string
  username: string
  email: string
}

export type Transaction = {
  id: number
  text: string
  amount: number
}

export type TransactionData = {
  text: string
  amount: number
}
