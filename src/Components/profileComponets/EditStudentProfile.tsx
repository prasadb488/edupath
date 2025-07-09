import { collection, doc, updateDoc } from "firebase/firestore";
import AutoCompleteDropdown from "./AutoCompleteDropdown";
import { db } from "../../config/firebaseconfig";
import { useContext, useState } from "react";
import authContext from "../../context/authContext";
import supabase from "../../config/suprabaseconfig";
import { useNavigate } from "react-router";

const EditStudentProfile = () => {
  const navigate = useNavigate();
  const [resumeurl, setresumeurl] = useState<string | null>(null);
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
    "Indian Institute of Technology (IIT) Delhi",
    "Indian Institute of Technology (IIT) Madras",
    "Indian Institute of Technology (IIT) Kanpur",
    "Indian Institute of Technology (IIT) Kharagpur",
    "Indian Institute of Technology (IIT) Roorkee",
    "Indian Institute of Science (IISc) Bangalore",
    "National Institute of Technology (NIT) Trichy",
    "National Institute of Technology (NIT) Surathkal",
    "Delhi Technological University (DTU)",
    "Netaji Subhas University of Technology (NSUT)",
    "Birla Institute of Technology and Science (BITS) Pilani",
    "Vellore Institute of Technology (VIT)",
    "SRM Institute of Science and Technology",
    "Amity University",
    "Jamia Millia Islamia",
    "Jawaharlal Nehru University (JNU)",
    "University of Delhi",
    "University of Mumbai",
    "Savitribai Phule Pune University",
    "Anna University",
    "Christ University",
    "Manipal Academy of Higher Education",
    "Lovely Professional University (LPU)",
    "Symbiosis International University",
    "Banaras Hindu University (BHU)",
    "Aligarh Muslim University (AMU)",
    "Jadavpur University",
    "Ashoka University",
    "Shiv Nadar University",
    "IIM Ahmedabad",
    "IIM Bangalore",
    "IIM Calcutta",
    "Harvard University",
    "Stanford University",
    "Massachusetts Institute of Technology (MIT)",
    "University of Oxford",
    "University of Cambridge",
    "Other",
  ];
  const user = useContext(authContext).user;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const ProfilePic = formData.get("profilePicture") as File;
    const fullName = formData.get("fullName") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const currentDegree = formData.get("currentDegree") as string;
    const specialization = formData.get("specialization") as string;
    const university = formData.get("university") as string;
    const interests = formData.get("interests") as string;
    const shortBio = formData.get("shortBio") as string;
    const resume = formData.get("resume") as File | null;
    console.log(ProfilePic.size);

    if (ProfilePic.size > 6 * 1024 * 1024) {
      alert("Profile picture size exceeds 6MB. Please upload a smaller image.");
      return;
    }
    if (resume && resume.size > 6 * 1024 * 1024) {
      alert("Resume size exceeds 6MB. Please upload a smaller file.");
      return;
    }

    const usercollection = collection(db, "users");
    const userRef = doc(usercollection, user?.uid);
    if (!userRef) {
      console.error("User document not found");
      return;
    }

    const { error } = await supabase.storage
      .from("painfulpike")
      .upload(`users/profile/${user?.uid}`, ProfilePic, {
        upsert: true,
      });
    if (error) {
      console.error("Error uploading profile picture:", error);
      alert("Failed to upload profile picture. Please try again.");
      return;
    }
    if (resume) {
      const { error } = await supabase.storage
        .from("painfulpike")
        .upload(`users/resume/Resume_${user?.uid}`, resume, {
          upsert: true,
        });
      if (error) {
        console.error("Error uploading resume:", error);
        alert("Failed to upload resume. Please try again.");
        return;
      }
    }
    const { data } = supabase.storage
      .from("painfulpike")
      .getPublicUrl(`users/profile/${user?.uid}`);
    console.log(data.publicUrl);

    if (resume) {
      const resumeData = supabase.storage
        .from("painfulpike")
        .getPublicUrl(`users/resume/Resume_${user?.uid}`);
      setresumeurl(resumeData.data.publicUrl);
    }
    const profileData = {
      profilePicture: data.publicUrl,
      fullName,
      dateOfBirth,
      phoneNumber,
      currentDegree,
      specialization,
      university,
      interests: interests.split(",").map((interest) => interest.trim()),
      shortBio,
      resume: resumeurl ? resumeurl : null,
      isProfileComplete: true,
    };
    try {
      await updateDoc(userRef, profileData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
      return;
    }
  };
  return (
    <div>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8f9fb] group/design-root overflow-x-hidden"
        style={
          {
            "--select-button-svg":
              "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(80,102,149)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
            fontFamily: 'Inter, "Noto Sans", sans-serif',
          } as React.CSSProperties & Record<string, string>
        }
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <form
              className="layout-content-container flex flex-col w-[512px]  py-5  flex-1"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#0e121b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Complete Your Student Profile
                </p>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Profile Picture{" "}
                    <span className="text-[#506695] text-xs font-normal">
                      *
                    </span>
                  </p>
                  <input
                    placeholder="Upload your profile picture"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] h-14 placeholder:text-[#506695] p-[15px] text-base font-normal leading-normal"
                    type="file"
                    accept="image/*"
                    name="profilePicture"
                    title="Upload your profile picture"
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Full Name{" "}
                    <span className="text-[#506695] text-xs font-normal">
                      *
                    </span>
                  </p>
                  <input
                    placeholder="Enter your full name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] h-14 placeholder:text-[#506695] p-[15px] text-base font-normal leading-normal"
                    name="fullName"
                    title="Only letters, numbers or dash"
                    pattern="[A-Za-z0-9\s\-]+"
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Date of Birth{" "}
                    <span className="text-[#506695] text-xs font-normal">
                      *
                    </span>
                  </p>
                  <div className="flex w-full flex-1 items-stretch rounded-xl">
                    <input
                      placeholder="Select your date of birth"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] h-14 placeholder:text-[#506695] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                      name="dateOfBirth"
                      type="date"
                      required
                    />
                    <div
                      className="text-[#506695] flex border border-[#d1d7e6] bg-[#f8f9fb] items-center justify-center pr-[15px] rounded-r-xl border-l-0"
                      data-icon="Calendar"
                      data-size="24px"
                      data-weight="regular"
                    ></div>
                  </div>
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Phone Number{" "}
                    <span className="text-[#506695] text-xs font-normal">
                      *
                    </span>
                  </p>
                  <input
                    placeholder="Enter your phone number"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] h-14 placeholder:text-[#506695] p-[15px] text-base font-normal leading-normal"
                    type="tel"
                    name="phoneNumber"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <AutoCompleteDropdown
                  name="currentDegree"
                  label="Current Degree"
                  options={DEGREE_OPTIONS}
                  placeholder="Select your current degree"
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <AutoCompleteDropdown
                  name="specialization"
                  label="Specialization"
                  options={specializations}
                  placeholder="Select your specialization"
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <AutoCompleteDropdown
                  name="university"
                  label="University"
                  options={universities}
                  placeholder="Select your university"
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Interests{" "}
                    <span className="text-[#506695] text-xs font-normal">
                      *
                    </span>
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] h-14 placeholder:text-[#506695] p-[15px] text-base font-normal leading-normal"
                    type="text"
                    name="interests"
                    title="Enter your interests, separated by commas"
                    pattern="^[a-zA-Z0-9\s,]+$"
                    required
                    placeholder="e.g., AI, Data Science, Web Development"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Short Bio{" "}
                    <span className="text-[#506695] text-xs font-normal">
                      *
                    </span>
                  </p>
                  <textarea
                    placeholder="Write a short bio about yourself (max 500 characters)"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] min-h-36 placeholder:text-[#506695] p-[15px] text-base font-normal leading-normal"
                    name="shortBio"
                    maxLength={500}
                    title="Write a short bio about yourself (max 500 characters)"
                    required
                  ></textarea>
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0e121b] text-base font-medium leading-normal pb-2">
                    Resume (Optional)
                  </p>
                  <input
                    placeholder="Upload your resume (PDF/DOC)"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e121b] focus:outline-0 focus:ring-0 border border-[#d1d7e6] bg-[#f8f9fb] focus:border-[#d1d7e6] h-14 placeholder:text-[#506695] p-[15px] text-base font-normal leading-normal"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    name="resume"
                    title="Upload your resume (PDF/DOC)"
                    required={false}
                  />
                </label>
              </div>
              <div className="flex px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#2c66e2] text-[#f8f9fb] text-sm font-bold leading-normal tracking-[0.015em]"
                  type="submit"
                >
                  <span className="truncate">Save Profile</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentProfile;
