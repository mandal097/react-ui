/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addEnrolledCourse } from "../redux/courseReducer";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import NoData from "../components/NoData";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { currentCourse, enrolledCourses } = useSelector(
    (state: any) => state.courses
  );
  const [expandedSyllabusIndex, setExpandedSyllabusIndex] = useState<
    number | null
  >(null);

  const [isEnrolled, setIsEnrolled] = useState(false);

  const toggleSyllabus = (index: number) => {
    setExpandedSyllabusIndex(expandedSyllabusIndex === index ? null : index);
  };

  useEffect(() => {
     document.title = "CourseShala - course details"
    if (enrolledCourses) {
      const isEnrolled = Array.from(enrolledCourses)?.some(
        (enrolledCourse: any) => enrolledCourse?.id === currentCourse?.id
      );
      setIsEnrolled(isEnrolled);
    }
  }, [enrolledCourses, currentCourse]);

  const handleEnroll = () => {
    if (isEnrolled) {
      return toast.error(
        `You already enrolled for course : ${currentCourse?.name}`
      );
    }
    setLoading(true);
    const duration = currentCourse?.duration?.split(" ")[0];
    const progress = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    const today = new Date();
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + duration * 7);
    const courseToEnroll = { ...currentCourse, progress, dueDate };
    setTimeout(() => {
      dispatch(addEnrolledCourse(courseToEnroll));
      setLoading(false);
      toast.success("You enrolled this course.");
    }, 1000);

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };
  return (
    <>
      {currentCourse ? (
        <div className="pt-[var(--padding)] max-w-4xl mx-auto p-4">
          <ToastContainer />
          {loading && <Loader />}
          {isEnrolled && (
            <div className="flex items-center justify-center py-4 bg-green-100">
              <p className="text-gray-500">
                Already enrolled for course : {currentCourse?.name}
              </p>
            </div>
          )}
          <ToastContainer />
          {/* Banner Image */}
          <img
            src={currentCourse?.thumbnail}
            alt={currentCourse?.name}
            className="w-full h-64 object-cover rounded-lg my-4"
          />
          {/* Course Details */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl text-primary font-bold mb-2">
                {currentCourse?.name}
              </h1>
              <button
                // disabled={isEnrolled ? true : false}
                onClick={handleEnroll}
                className={`text-sm text-white font-bold py-2 px-4 rounded transition duration-300 ${
                  isEnrolled
                    ? "bg-light-gray hover:bg-gray-700 cursor-not-allowed"
                    : "bg-primary hover:bg-blue cursor-pointer"
                }`}>
                Enroll course
              </button>
            </div>
            <h2 className="text-xl text-gray-900 font-semibold mb-2">
              Instructor: {currentCourse?.instructor}
            </h2>
            <p className="text-gray-700 mb-4">{currentCourse?.description}</p>
          </div>
          {/*  */}
          <div className="border border-gray-200 p-4 rounded-md my-4">
            <div className="mb-4 text-sm">
              <span className="font-semibold text-base">
                Enrollment Status:
              </span>{" "}
              {currentCourse?.enrollmentStatus}
            </div>
            <div className="mb-4 text-sm">
              <span className="font-semibold text-base">Duration:</span>{" "}
              {currentCourse?.duration}
            </div>
            <div className="mb-4 text-sm">
              <span className="font-semibold text-base">Schedule:</span>{" "}
              {currentCourse?.schedule}
            </div>
            <div className="mb-4 text-sm">
              <span className="font-semibold text-base">Location:</span>{" "}
              {currentCourse?.location}
            </div>
          </div>
          <div className="mb-4 text-sm border border-gray-200 p-4 rounded-md">
            <span className="font-semibold text-base">Prerequisites:</span>
            <ul className="list-disc list-inside">
              {currentCourse?.prerequisites.map((item: any, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Expandable Syllabus */}
          <div className="border border-gray-200 p-4 rounded-md my-4">
            <h2 className="text-xl  font-semibold">Syllabus</h2>
            <ul className="mt-2">
              {currentCourse?.syllabus?.map((item: any, index: number) => (
                <li
                  key={index}
                  className="flex flex-col border border-gray-200 p-4 rounded-md">
                  <button
                    className={`${
                      expandedSyllabusIndex === index && "bg-gray-100"
                    } text-left w-full py-2 px-4 hover:bg-gray-200  flex items-center rounded-lg focus:outline-none text-blue`}
                    onClick={() => toggleSyllabus(index)}>
                    Week {item.week}: {item.topic}
                    <span className="ml-auto">
                      {expandedSyllabusIndex === index ? (
                        <MdOutlineArrowDropUp
                          color="var(--primary)"
                          size={25}
                        />
                      ) : (
                        <MdArrowDropDown color="var(--primary)" size={25} />
                      )}
                    </span>
                  </button>
                  {expandedSyllabusIndex === index && (
                    <div className="bg-gray-50 p-4 rounded-lg mt-2">
                      <p>{item.content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Students List */}
          <div className="border border-gray-200 p-4 rounded-md my-4">
            <h2 className="text-xl font-semibold">Students</h2>
            <ul className="list-disc list-inside mt-2">
              {currentCourse?.students?.map((student: any) => (
                <li key={student.id}>
                  {student.name} - {student.email}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
       <NoData text="No data found!"/>
      )}
    </>
  );
};

export default CourseDetails;
