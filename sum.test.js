import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 2 + 1 to equal 3', () => {
  expect(sum(2, 1)).toBe(3)
})

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5)
})