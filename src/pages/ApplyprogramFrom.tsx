import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import courses from "../utils/courses.json";
import AutoCompleteDropdown from "../Components/profileComponets/AutoCompleteDropdown";
import sendConfirmationEmail from "../config/emailJSConfig";

// Options
const DEGREE_OPTIONS = [
  "B.A",
  "B.Com",
  "B.Sc",
  "B.E",
  "B.Tech",
  "BBA",
  "BCA",
  "M.A",
  "M.Com",
  "M.Sc",
  "M.E",
  "M.Tech",
  "MBA",
  "MCA",
  "Ph.D",
  "Diploma",
  "Certificate",
  "Associate Degree",
];

const specializations = [
  "Computer Science",
  "Information Technology",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Electronics and Communication",
  "Artificial Intelligence",
  "Data Science",
  "Cybersecurity",
  "Software Engineering",
  "Finance",
  "Marketing",
  "Human Resources",
  "Operations Management",
  "Business Analytics",
  "Economics",
  "Psychology",
  "English Literature",
  "Sociology",
  "Political Science",
  "Journalism and Mass Communication",
  "Biotechnology",
  "Microbiology",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Others",
];

const universities = [
  "Indian Institute of Technology (IIT) Bombay",
  "IIT Delhi",
  "IIT Madras",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Roorkee",
  "IISc Bangalore",
  "NIT Trichy",
  "NIT Surathkal",
  "DTU",
  "NSUT",
  "BITS Pilani",
  "VIT",
  "SRM Institute of Science and Technology",
  "Amity University",
  "Jamia Millia Islamia",
  "JNU",
  "University of Delhi",
  "University of Mumbai",
  "Savitribai Phule Pune University",
  "Anna University",
  "Christ University",
  "Manipal Academy",
  "LPU",
  "Symbiosis",
  "BHU",
  "AMU",
  "Jadavpur University",
  "Ashoka University",
  "Shiv Nadar University",
  "IIM Ahmedabad",
  "IIM Bangalore",
  "IIM Calcutta",
  "Harvard University",
  "Stanford University",
  "MIT",
  "University of Oxford",
  "University of Cambridge",
  "Other",
];

const ApplyprogramForm = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((course) => course.id.toString() === id);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const currentDegree = formData.get("currentDegree") as string;
    const specialization = formData.get("specialization") as string;
    const university = formData.get("university") as string;
    const interest = formData.get("interest") as string;
    const terms = formData.get("terms") === "on";

    if (!terms) {
      alert("Please accept the terms and conditions.");
      setLoading(false);
      return;
    }

    const applicationData = {
      courseId: id,
      courseName: course?.title,
      firstName,
      lastName,
      email,
      phone,
      currentDegree,
      specialization,
      university,
      interest,
      agreedToTerms: terms,
    };

    console.log("Submitted Data:", applicationData);
    // Send applicationData to Firestore / Supabase / Backend here

    navigate("/success");
    sendConfirmationEmail({
      name: `${firstName} ${lastName}`,
      email,
      title: course?.title || " Application Confirmation",
    });
    setLoading(false);
  };

  if (!course) return <p>Course not found</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-4 bg-white rounded-xl shadow-md max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold">Apply for {course.title}</h2>

      <div className="flex gap-4">
        <label className="w-full">
          <p>First Name</p>
          <input
            name="firstName"
            required
            className="w-full p-3 rounded bg-gray-100"
            placeholder="Enter your first name"
          />
        </label>
        <label className="w-full">
          <p>Last Name</p>
          <input
            name="lastName"
            required
            className="w-full p-3 rounded bg-gray-100"
            placeholder="Enter your last name"
          />
        </label>
      </div>

      <label className="block">
        <p>Email</p>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 rounded bg-gray-100"
          placeholder="Enter your email"
        />
      </label>

      <label className="block">
        <p>Phone Number</p>
        <input
          name="phone"
          required
          className="w-full p-3 rounded bg-gray-100"
          placeholder="Enter your phone number"
        />
      </label>

      {/* Custom AutoCompleteDropdowns */}
      <AutoCompleteDropdown
        name="currentDegree"
        label="Current Degree"
        options={DEGREE_OPTIONS}
        placeholder="Select your current degree"
      />

      <AutoCompleteDropdown
        name="specialization"
        label="Specialization"
        options={specializations}
        placeholder="Select your specialization"
      />

      <AutoCompleteDropdown
        name="university"
        label="University"
        options={universities}
        placeholder="Select your university"
      />

      <label className="block">
        <p>Why are you interested in this course?</p>
        <textarea
          name="interest"
          rows={4}
          className="w-full p-3 rounded bg-gray-100"
          placeholder="Brief explanation"
        ></textarea>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" name="terms" className="h-4 w-4" />
        <span>I agree to the terms and conditions</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplyprogramForm;
