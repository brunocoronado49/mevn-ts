import { connect } from 'mongoose'

export const startConnection = async () => {
  try {
    const db = await connect("mongodb://localhost/mevn-ts-database")
    console.log("Database conectada a: ", db.connection.name)
  } catch (error) {
    console.log(error)
  }
}
