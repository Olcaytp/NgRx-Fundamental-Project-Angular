import { createReducer, on } from "@ngrx/store";
import { countIncrement } from "./counter.action";

export const initilaCount = 0;

export const counterReducer = createReducer(
  initilaCount,
  on(countIncrement, (state) => state += 1)
);
