/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import { setAllCourses } from "../redux/courseReducer";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import NoData from "../components/NoData";
import { ax } from "../config/axios";

const Home = () => {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state: any) => state.courses);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "CourseShala - Courses";
    const fetch = async () => {
      setLoading(true);
      const res = await ax.get("/course/get-course");
      if (res?.data.status === "success") {
        dispatch(setAllCourses(res?.data?.data));
      }
      setLoading(false);
    };
    fetch();
  }, [dispatch]);

  if (loading) return <Loader />;
  return (
    <>
      {allCourses?.length < 1 ? (
        <NoData text="No data found!" />
      ) : (
        <div className="pt-[var(--padding)] flex flex-col items-center">
          <div className="w-full h-auto md:h-72 relative mb-8">
            <img
              src="https://img-c.udemycdn.com/notices/web_carousel_slide/image_responsive/14e73470-f757-48f0-832b-723607e79763.png"
              alt="banner"
              className="md:hidden w-full h-full bg-cover"
            />
            <img
              src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/96d1a103-258f-42fe-ae28-fd5bdea55a38.png"
              alt="banner"
              className="hidden md:block w-full h-full bg-cover"
            />
            <div className="w-full md:absolute inset-0 flex items-center">
              <div className="p-4 md:w-[30%] bg-gray-200 md:ml-12 w-full">
                <h1 className="text-gray-600 text-2xl font-serif">
                  It's the last day to save
                </h1>
                <p className="text-gray-700 font-semibold">
                  Our big sales ends today. Add to your soft skills & tech
                  skills.
                </p>
              </div>
            </div>
          </div>
          <div className="px-8 lg:w-[1024px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from(allCourses)?.map((course: any, idx: number) => (
              <CourseCard key={idx} courseDetail={course} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
