/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Course } from "../interface/interface";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentCourse } from "../redux/courseReducer";
import { useSelector } from "react-redux";

const CourseCard: React.FC<{ courseDetail: Course }> = ({ courseDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enrolledCourses } = useSelector((state: any) => state.courses);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (enrolledCourses) {
      const isEnrolled = Array.from(enrolledCourses)?.some(
        (enrolledCourse: any) => enrolledCourse?.id === courseDetail?.id
      );
      setIsEnrolled(isEnrolled);
    }
  }, [enrolledCourses, courseDetail]);

  const navigateToDetails = () => {
    dispatch(setCurrentCourse(courseDetail));
    navigate("/c-details");
  };
  return (
    <div className={`${isEnrolled && 'border-green-300'} max-w-sm rounded overflow-hidden shadow-lg bg-white mb-5 col-span-1 bg-gray-100 border-2 border-gray-200`}>
      <img
        className="w-full h-48 object-cover"
        src={courseDetail?.thumbnail}
        alt={courseDetail?.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-950 text-xl mb-2">
          {courseDetail?.name}
        </div>
        <p className="text-gray-800 text-sm">
          Instructor: {courseDetail?.instructor}
        </p>
        <p className="text-gray-700 text-sm">
          Duration: {courseDetail?.duration}
        </p>
        {isEnrolled && (
          <p className="text-sm text-green-400 font-semibold">You already enrolled!</p>
        )}
      </div>
      <div className="px-6 pb-4">
        <button
          onClick={navigateToDetails}
          className="bg-blue text-sm text-white font-bold py-2 px-4 rounded hover:bg-primary transition duration-300">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
