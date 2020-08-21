import React from "react";
import { render, screen, getByTestId, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { useApi as mockUseApi } from '../hooks/useApi'

jest.mock('../hooks/useApi.js')

const fakeColors = [
  {
    color: 'aliceblue',
    code: {hex: '#f0f8ff'},
    id: 1,
  }
]

test("Fetches data and renders the bubbles", async () => {
  mockUseApi.mockResolvedValueOnce([fakeColors, () => {}])
  localStorage.setItem('token', "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
  render(<BubblePage />)
  await waitFor(() => getByTestId('bubble'))
});
