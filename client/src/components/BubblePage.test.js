import React from "react";
import { render, screen, getByTestId, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from './fetchColors'

jest.mock('./fetchColors')

const fakeColors = [
  {
    color: 'aliceblue',
    code: {hex: '#f0f8ff'},
    id: 1,
  }
]

test("Fetches data and renders the bubbles", async () => {
  mockFetchColors.mockResolvedValueOnce(fakeColors)
  localStorage.setItem('token', "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
  render(<BubblePage />)
  await waitFor(() => getByTestId('bubble'))
});
