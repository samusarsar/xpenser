export const BE_BASE_URL = 'http://localhost:8080/'

export const requestUrls = {
  createUser: `api/auth/signup`,
  signInUser: `api/auth/signin`,
  getAllTransactions: `api/transactions`,
  addTransaction: `api/transactions/add`,
  deleteTransaction: `api/transactions/delete`,
  getUser: (id: string) => `api/users/${id}`,
  updateUser: (id: string) => `api/users/${id}`,
  deleteUser: (id: string) => `api/users/${id}`
}
