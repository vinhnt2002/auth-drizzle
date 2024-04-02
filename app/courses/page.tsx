import { getCourses } from "@/actions/get-courses";
import React from "react";
import CourseCard from "./_components/course-card";

const CoursePage = () => {
  const data = getCourses();

  // console.log(data)

  return (
    <div>
      <h1>TEST CALL DATA</h1>

      <React.Suspense fallback={<div>...Loading pending data</div>}>
        <CourseCard courses={data} />
      </React.Suspense>
    </div>
  );
};

export default CoursePage;
