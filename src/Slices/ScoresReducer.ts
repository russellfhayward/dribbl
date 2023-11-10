import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Score {
  user: string;
  score: number;
}

// Define a type for the slice state
export type ScoreState = {
	score?: Score;
};

// Define the initial state using that type
const initialState: ScoreState = {};

export const scoreSlice = createSlice({
	name: "score",
	initialState,
	reducers: {
		Score: (state, action: PayloadAction<Score | undefined>) => {
			state.score = action.payload;
		},
	},
});

export const { Score } = scoreSlice.actions;

export default scoreSlice.reducer;