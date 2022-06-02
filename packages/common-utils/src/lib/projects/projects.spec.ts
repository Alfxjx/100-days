import { computedIndex } from './projects'
describe("projects", () => {
  it('computedIndex', () => {
    expect(computedIndex(0)).toBe('001')
    expect(computedIndex(9)).toBe('010')
    expect(computedIndex(20)).toBe('021')
    expect(computedIndex(98)).toBe('099')
    expect(computedIndex(99)).toBe('100')
  })
})