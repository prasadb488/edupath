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

export type userType = {
      
      profilePicture: string | null,
      fullName: string | null,
      dateOfBirth: string | null,
      phoneNumber: string | null,
      currentDegree: string | null,
      specialization: string | null,
      university: string | null,
      interests: string[] | null,
      shortBio: string | null,
      resume: string | null,
      isProfileComplete: boolean | null,
      userType: 'student' | 'mentor' | null,
}