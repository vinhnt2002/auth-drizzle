'use client'

import { getCourses } from "@/actions/get-courses";
import React from "react";

interface CourseCardProps {
  courses: ReturnType<typeof getCourses>;
}

const CourseCard = ({ courses }: CourseCardProps) => {
  const data = React.use(courses);

  if(!data) console.log("LOADING ????")

  return (
    <div>
      {data.map((course) => (
        <div key={course.id}>
          <span>{course.title}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
