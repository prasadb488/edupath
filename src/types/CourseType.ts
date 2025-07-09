export type CourseType = {
    id: number;
    title: string;
    description: string;
    category: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    rating: number;
    instructorName: string;
    language: string;
    price: number;
    studentsEnrolled: number;
    tags: string[];
    thumbnail: string;
}