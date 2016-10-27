import sum from './sum'

test('adds 1 + 2 to equal 3', () => {
  let x:number = 1
  let y:number = 2
  expect(sum(x, y)).toBe(3)
})
