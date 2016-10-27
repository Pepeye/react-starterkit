import subtract from './subtract'

test('subtract 3 from 6 to equal 3', () => {
  let x:number = 6
  let y:number = 3
  expect(subtract(x, y)).toBe(3)
})
