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
    setEnrolledCourse: (state, action) => {
      if (!state.enrolledCourses) {
        state.enrolledCourses = [];
      }
      state.enrolledCourses = action.payload;
    },
    addEnrolledCourse: (state, action) => {
      if (!state.enrolledCourses) {
        state.enrolledCourses = [];
      }
      state.enrolledCourses.push(action.payload);
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(
        (course: any) => course._id === action.payload.courseId
      );

      if (course) {
        const student = course.students.find(
          (student: any) => student.id === action.payload.studentId
        );
        if (student) {
          student.progress = 100;
        }
      }
    },
  },
});

export const {
  setAllCourses,
  setCurrentCourse,
  addEnrolledCourse,
  markCourseCompleted,
  setEnrolledCourse,
} = userSlice.actions;
export default userSlice.reducer;
