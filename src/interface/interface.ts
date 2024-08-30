/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SyllabusItem {
  week: number;
  topic: string;
  content: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  _id: any;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: SyllabusItem[];
  students: Student[];
}
