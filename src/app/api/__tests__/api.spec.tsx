import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { GET } from '../route'
import * as ItemsAPI from '../../service/getItems'

describe('Service: getItem', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  beforeEach(() => {
    vi.spyOn(ItemsAPI, 'default').mockReturnValue([
      { awnser: 'sei la', food: 'pizza' },
      { awnser: 'tanto faz', food: 'hambuger' },
      { awnser: 'você que sabe', food: 'sushi' },
    ])
  })

  it('should return a list of items', async () => {
    const response = await GET()
    const { data } = await response.json()

    expect(response).toHaveProperty('status', 200)

    expect(data).toHaveLength(3)
    expect(data[0]).toHaveProperty('food', 'pizza')
    expect(data[0]).toHaveProperty('awnser', 'sei la')
  })
})
