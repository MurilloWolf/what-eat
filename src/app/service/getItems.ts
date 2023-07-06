import awnserDb from './db/awnser-db'
import foodDb from './db/food-db'

export function generateAwnsersAndFoods() {
  return awnserDb.map((awnser) => {
    const food = foodDb[Math.floor(Math.random() * foodDb.length)]
    return { awnser, food }
  })
}

export default function getItems() {
  return generateAwnsersAndFoods()
}
