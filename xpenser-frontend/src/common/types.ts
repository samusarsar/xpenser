export type NewUserData = {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export type UserCredentials = {
  username: string
  password: string
}

export type UserData = {
  userId: string
  firstName: string
  lastName: string
  username: string
  email: string
  avatar: string
  createdAt: Date
  transactions: Transaction[]
}

export type Transaction = {
  _id: string
  text: string
  amount: number
}

export type NewTransactionData = {
  text: string
  amount: number
}
