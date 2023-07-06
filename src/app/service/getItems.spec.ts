import { describe, it, expect, vi, afterEach } from 'vitest'
import * as ItemsAPI from './getItems'

describe('Service: getItem', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return a list of items', () => {
    const items = ItemsAPI.default()
    expect(items).toHaveLength(ItemsAPI.generateAwnsersAndFoods().length)
  })

  it('should return a list of items with awnser and food', () => {
    const items = ItemsAPI.default()
    expect(items[0]).toHaveProperty('awnser')
    expect(items[0]).toHaveProperty('food')
  })

  it('getItems: should return a list of items with awnser and food', () => {
    const spy = vi.spyOn(ItemsAPI, 'default').mockImplementation(() => {
      return [
        { awnser: 'awnser', food: 'food' },
        { awnser: 'awnser', food: 'food' },
        { awnser: 'awnser', food: 'food' },
      ]
    })

    ItemsAPI.default()
    expect(spy).toHaveBeenCalled()
    expect(ItemsAPI.default()).toHaveLength(3)
  })

  it('generateAwnsersAndFoods: should return a list of items with awnser and food.', () => {
    const spy = vi.spyOn(ItemsAPI, 'generateAwnsersAndFoods').mockReturnValue([
      { awnser: 'awnser', food: 'food' },
      { awnser: 'awnser', food: 'food' },
      { awnser: 'awnser', food: 'food' },
    ])

    const result = ItemsAPI.default()
    expect(result).toHaveLength(3)
  })
})
