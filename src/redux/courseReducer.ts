/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  allCourses: [] as any[],
  currentCourse: null,
  enrolledCourses: [] as any[],
};

const userSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    setAllCourses: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.allCourses = action.payload;
      } else {
        console.error("Payload is not an array:", action.payload);
      }
    },
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    },
    addEnrolledCourse: (state, action) => {
      if (!state.enrolledCourses) {
        state.enrolledCourses = [];
      }
      state.enrolledCourses.push(action.payload);
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(
        (c: any) => c.id === action.payload
      );
      if (course) {
        course.progress = 100;
      }
    },
  },
});

export const {
  setAllCourses,
  setCurrentCourse,
  addEnrolledCourse,
  markCourseCompleted,
} = userSlice.actions;
export default userSlice.reducer;
