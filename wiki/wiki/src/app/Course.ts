import { Teacher } from './Teacher';
import { Rating } from './Rating';
import { CommentCategory } from './Comment';

export interface Course {
    courseID: string;
    courseName: string;
    ETCS: number;
    term: number;
    courseForm: string;
    maxAttendees: number;
    rate: Rating[];
    imgSrc: string;
    description: string;
    teachers: number[];
    courseTeachers: CourseTeacher[];
    enrolledStudentsIDs: string[];
}

export interface CourseTeacher {
    teacher: Teacher;
    commentCategory: CommentCategory[];
}