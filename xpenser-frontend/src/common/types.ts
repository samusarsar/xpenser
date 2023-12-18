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
}

export type Transaction = {
  transactionId: number
  text: string
  amount: number
}

export type TransactionData = {
  text: string
  amount: number
}
