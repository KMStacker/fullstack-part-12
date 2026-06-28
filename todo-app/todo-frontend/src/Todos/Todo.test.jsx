import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import React from 'react'
import Todo from './Todo'

test('renders todo text and done correctly', () => {
  const todo = {
    text: 'Test Case UNO',
    done: false
  }

  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  expect(screen.getByText('Test Case UNO')).toBeDefined()
  expect(screen.getByText('This todo is not done')).toBeDefined()
})

test('does not render not done text when done is true', () => {
  const todo = {
    text: 'Test Case DOS',
    done: true
  }

  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  expect(screen.getByText('Test Case DOS')).toBeDefined()
  expect(screen.queryByText('This todo is not done')).toBeNull()
})