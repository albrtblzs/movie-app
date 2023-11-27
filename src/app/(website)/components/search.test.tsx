const mockOnRefetch = jest.fn()

import { render, fireEvent } from '@testing-library/react'

import Search from './search'

describe('Search component', () => {
  it('calls onRefetch with input value when Enter key is pressed', () => {
    const { getByPlaceholderText } = render(
      <Search onRefetch={mockOnRefetch} />
    )
    const input = getByPlaceholderText('Search...')

    fireEvent.change(input, { target: { value: 'test query' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(mockOnRefetch).toHaveBeenCalledWith('test query')
  })

  it('calls onRefetch with input value when search button is clicked', () => {
    const { getByPlaceholderText, getByText } = render(
      <Search onRefetch={mockOnRefetch} />
    )
    const input = getByPlaceholderText('Search...')
    const button = getByText('Search')

    fireEvent.change(input, { target: { value: 'test query' } })
    fireEvent.click(button)

    expect(mockOnRefetch).toHaveBeenCalledWith('test query')
  })

  it('disables the search button when input is empty', () => {
    const { getByText } = render(<Search onRefetch={mockOnRefetch} />)
    const button = getByText('Search')

    expect(button).toBeDisabled()
  })
})

afterEach(() => {
  jest.clearAllMocks()
})
