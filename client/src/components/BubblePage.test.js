import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from './fetchColors'

jest.mock('./fetchColors')

const fakeColors = {
  data: [
    {
      color: 'aliceblue',
      code: {hex: '#f0f8ff'},
      id: 1,
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {
  mockFetchColors.mockResolvedValueOnce(fakeColors)
  localStorage.setItem('token', "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
  //const { getByTestId } = render(<BubblePage />)
  render(<BubblePage />)
  await waitFor(() => {expect(screen.getByTestId(/bubble/i))})
});
