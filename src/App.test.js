import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {fetchShow as mockFetchEpisodes} from './api/fetchShow.js'

jest.mock("./api/fetchShow.js");

console.log(mockFetchEpisodes)

test("renders episodes data when the API call finishes", () => {
    render(<App />)
});
