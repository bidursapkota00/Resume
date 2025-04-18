import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Resume from "../Components/resume";
import dynamic from "next/dynamic";

function Home() {
  const data = {
    name: "BIDUR SAPKOTA",
    fb: "https://www.facebook.com/bdur.sapkota",
    in: "https://www.linkedin.com/in/bidur-sapkota-3aa054203/",
    web: "https://www.bidursapkota.com.np/",
    tw: "#",
    job: "Lecturer",
    profile: "/profile1.jpg",
    about:
      "Lecturer at Asian College of Higher Studies. Previously worked as a web developer, specializing in modern JavaScript frameworks and scalable applications. Graduated in Electronics, Communication, and Information Engineering, combining technical expertise with a commitment to education and innovation. Adept at mentoring students, developing curriculum, and bridging the gap between theoretical concepts and real-world applications.",
    phone: "9865711881",
    email: "bidursapkota00@gmail.com",
    address: "Chunikhel, Lalitpur",
    experience: [
      {
        jobTitle: "Lecturer",
        organization: "Asian College of Higher Studies",
        description: [
          "Preparing and delivering lectures, tutorials, workshops, and seminars.",
          "Collaborating with other academics to improve teaching methods and knowledge base.",
          "Setting and grading assignments, tests, and exams.",
          "Supervising students on their projects.",
          "Providing support to students and other colleagues.",
          "Staying current by reading widely and producing published work in the field.",
        ],
        startDate: "Oct 2023",
        endDate: "Now",
      },
      {
        jobTitle: "Web Developer",
        organization: "Dallotech pvt. ltd.",
        description: [
          "Develop full stack websites with Nextjs",
          "Worked on projects like Pdf generation, Webflow, Landing Pages, Online job Application",
          "GSAP Animations, FullStack Development",
          "Convert figma design to code",
          "API Integration",
        ],
        startDate: "Oct 2021",
        endDate: "Jun 2022",
      },
    ],
    education: [
      {
        title: "SEE (A+)",
        organization: "Hindu vidhya-peeth Nepal",
        startDate: "Mar 2015",
        endDate: "Apr 2016",
      },
      {
        title: "+2 (A+)",
        organization: "Advanced H.S.S",
        startDate: "Aug 2016",
        endDate: "Aug 2018",
      },
      {
        title: "BEI (77.38%)",
        organization: "National College of Engineering",
        startDate: "oct 2018",
        endDate: "Jan 2023",
      },
    ],
    skills: [
      { name: "Electronics", rating: 4 },
      { name: "Web Development", rating: 4 },
      { name: "App Development", rating: 4 },
      { name: "Hardware Coding", rating: 3 },
    ],
    projects: [
      {
        title: "Smart Water Meter",
        expertise: "College Major Project",
        description: [
          "Circuit design and implementation for measuring household drinking water consumption",
          "Apk Development with integrated khalti payment gateway for clients",
          "Web Development with dashboard for water service providers",
        ],
        link: "#",
      },
      {
        title: "Online Job App",
        expertise: "Entire Frontend",
        description: [
          "Created overall frontend for job application website",
          "Implemented user friendly Forms for job posting and applying",
          "API integration with backend",
        ],
        link: "https://www.evereuser.co.uk/",
      },
      {
        title: "Dallotech",
        expertise: "Company Website",
        description: [
          "Fully dynamic fullStack development of a company landing page",
        ],
        link: "https://dallotech.com/",
      },
      {
        title: "UrbanSpace",
        expertise: "Animations",
        description: [
          "Developed a landing page for a Hotel",
          "Animation with GSAP",
        ],
        link: "https://urbanspace.com.np/",
      },
    ],
    trainings: [
      {
        title: "Basic Python",
        organization: "Tech Axis",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        organization: "Udemy",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "FastAPI - The Complete Course 2025 (Beginner + Advanced)",
        organization: "Udemy",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "Flutter & Dart - The Complete Guide",
        organization: "Udemy",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "Next JS: The Complete Developer's Guide",
        organization: "Udemy",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        organization: "Udemy",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "Build a Backend REST API with Python & Django - Advanced",
        organization: "Udemy",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "The Ultimate Java Mastery Series",
        organization: "codewithmosh.com",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
      {
        title: "Next Auth V5 - Advanced Guide",
        organization: "Youtube",
        startDate: "oct 2018",
        endDate: "nov 2018",
      },
    ],
    hobbies: ["Table Tennis", "Walking"],
    interests: ["Ethical Hacking", "Iot"],
    languages: ["Nepali", "English"],
    certificates: [
      {
        title: "Hardware Model Exibition (First Position) - Yatra 4.0",
        images: ["/certificate.png"],
        startDate: "20 Jan 2023",
        endDate: "21 Jan 2023",
      },
    ],
    references: [
      {
        name: "Pranaya Nakarmi",
        job: "Academic coordinator",
        company: "Asian College of Higher Studies",
        tel: "9841205966",
        email: "pranayanakarmi@gmail.com",
      },
      {
        name: "Anup Pokhrel",
        job: "Co-Founder / QA Engineer",
        company: "DalloTech Pvt. Ltd.",
        tel: "9847481555",
        email: "leo22.anup@gmail.com",
      },
      // {
      //   name: "Sushan Maharjan",
      //   job: "Graphic Designer / Content Writer",
      //   company: "DalloTech Pvt. Ltd.",
      //   tel: "9860110973",
      //   email: "sushanmaharjan21@gmail.com",
      // },
    ],
  };
  return (
    <div>
      <PDFViewer
        width="100%"
        height="600px"
        style={{ backgroundColor: "#c0c0c0" }}
      >
        <Resume data={data} />
      </PDFViewer>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
