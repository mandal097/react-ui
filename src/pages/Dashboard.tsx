/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setEnrolledCourse,
  markCourseCompleted,
  setCurrentCourse,
} from "../redux/courseReducer";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import NoData from "../components/NoData";
import { toast } from "react-toastify";
import { ax } from "../config/axios";
import Loader from "../components/Loader";

const CourseCard: React.FC<{
  courseDetail: any;
}> = ({ courseDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>();
  const [showMessage, setShowMessage] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<any>();
  const { currentUser } = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const student = Array.from(courseDetail?.students)?.filter(
      (student: any) => student?.id === currentUser?._id
    );
    setCurrentStudent(student[0]);
  }, [courseDetail, currentUser]);

  useEffect(() => {
    if (currentStudent?.progress === 100) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [currentStudent]);

  const navigateToDetails = () => {
    dispatch(setCurrentCourse(courseDetail));
    navigate("/c-details");
  };

  const handleCompleteCoures = async () => {
    try {
      setLoading(true);
      await ax.put(
        `/course/enroll-course/${courseDetail?._id}`,
        { markCompletion: true },
        {
          headers: {
            token: `Bearer ${currentUser?.token}`,
          },
        }
      );
      dispatch(
        markCourseCompleted({
          courseId: courseDetail?._id,
          studentId: currentStudent?.id,
        })
      );
      setChecked(true);
      if (!checked) {
        setShowMessage(true);
      }
      setLoading(false);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="sm:flex bg-gray-100 shadow-md rounded-lg overflow-hidden mt-4 border border-gray-300">
        <div className="mx-auto w-auto sm:w-40">
          <img
            className="h-40 w-full sm:h-auto sm:w-auto object-cover"
            src={courseDetail?.thumbnail}
            alt={courseDetail?.name}
          />
        </div>
        <div className="p-4 flex flex-col justify-between w-full">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h2 className="text-xl font-semibold">{courseDetail?.name}</h2>
              <p className="text-gray-500">
                Due Date:{" "}
                {new Date(currentStudent?.dueDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <p className="text-gray-500">
            Instructor: {courseDetail?.instructor}
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-4 ">
            <div className="mt-2 flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                {currentStudent && (
                  <div
                    className={`${
                      currentStudent?.progress === 100
                        ? "bg-green-300"
                        : "bg-blue"
                    } h-2 rounded-full`}
                    style={{ width: `${currentStudent?.progress}%` }}></div>
                )}
              </div>
              {currentStudent && (
                <p className="text-sm text-gray-500 mt-1">
                  {currentStudent?.progress}% completed
                </p>
              )}
            </div>
            <button
              onClick={navigateToDetails}
              className="text-sm  w-fit text-white font-bold h-fit py-2 px-4 rounded transition duration-300 bg-primary hover:bg-blue cursor-pointer">
              View course
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleCompleteCoures}
              className="h-5 w-5 rounded-md border-2 border-gray-400 flex items-center justify-center">
              {checked && <IoCheckmarkDoneOutline size={20} color="green" />}
            </button>
            <span className="text-gray-500 text-sm font-semibold">
              {" "}
              {checked
                ? "You marked this course completed!"
                : "Marked as completed"}
            </span>
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="bg-green-200 h-10 w-full flex justify-center items-center">
          <p className="text-gray-600 font-semibold">Marked as completed</p>
        </div>
      )}
    </>
  );
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { enrolledCourses } = useSelector((state: any) => state.courses);
  const { currentUser } = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "CourseShala - student dashboard";
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await ax.get("/course/enrolled-courses", {
          headers: {
            token: `Bearer ${currentUser?.token}`,
          },
        });
        if (res?.data?.status === "err") {
          toast.error(res?.data?.message);
          setLoading(false);
        }
        if (res?.data?.status === "success") {
          dispatch(setEnrolledCourse(res?.data?.data));
          setLoading(false);
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [dispatch, currentUser]);
  if (loading) return <Loader />;
  return (
    <>
      {/* {loading && <Loader />} */}
      {Array.from(enrolledCourses)?.length < 1 ? (
        <NoData text="You have not enrolled in any course yet!" />
      ) : (
        <div className="pt-[var(--padding)] max-w-4xl mx-auto p-4 min-h-screen">
          <h1 className="text-2xl font-bold mb-4 text-blue">My Courses</h1>
          <div className="grid grid-cols-1 gap-4">
            {Array.from(enrolledCourses)?.map((course: any, index: number) => (
              <CourseCard key={index} courseDetail={course} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
