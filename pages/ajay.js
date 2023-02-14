import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '../Components/resume';
import dynamic from 'next/dynamic';

function Home() {
  const data = {
    name: 'Ajay Poudel',
    fb: 'https://www.facebook.com/profile.php?id=100071062970707',
    in: 'https://www.linkedin.com/in/bidur-sapkota-3aa054203/',
    tw: '#',
    job: 'System Intern',
    profile: '/profile.jpg',
    about:
      "Motivated and detail-oriented student of Bachelor's degree in Electronics, Communication and Information Engineering. Skilled in programming languages including Javascript, web development as well as Hardware design and coding. A quick learner and strong problem-solver with a passion for exploring new technologies and finding innovative solutions. Considered hardworking, punctual and driven.",
    phone: '9865711881',
    email: 'bidursapkota00@gmail.com',
    address: 'Shovahiti, Lalitpur',
    experience: [
      {
        jobTitle: 'React Developer',
        organization: 'Dallotech pvt. ltd.',
        description: [
          'Worked on projects like Pdf generation, Webflow, Landing Pages, Online job Application',
          'GSAP Animations, FullStack Development',
          'Convert figma design to code',
          'API Integration',
        ],
        startDate: 'Oct 2021',
        endDate: 'Jun 2022',
      },
    ],
    education: [
      {
        title: 'SEE (A+)',
        organization: 'Hindu vidhya-peeth Nepal',
        startDate: 'Mar 2015',
        endDate: 'Apr 2016',
      },
      {
        title: '+2 (A+)',
        organization: 'Advanced H.S.S',
        startDate: 'Aug 2016',
        endDate: 'Aug 2018',
      },
      {
        title: 'BEI',
        organization: 'National College of Engineering',
        startDate: 'oct 2018',
        endDate: 'now',
      },
    ],
    skills: [
      { name: 'Electronics', rating: 4 },
      { name: 'Web Development', rating: 4 },
      { name: 'App Development', rating: 3 },
    ],
    projects: [
      {
        title: 'Smart Water Meter',
        expertise: 'College Major Project',
        description: [
          'Circuit Design and Implementation',
          'Web Development',
          'Apk Development',
        ],
        link: '#',
      },
      {
        title: 'UrbanSpace',
        expertise: 'Animations',
        description: ['Animation with GSAP'],
        link: 'https://urbanspace.vercel.app/',
      },
      {
        title: 'Online Job App',
        expertise: 'Entire Frontend',
        description: ['Forms', 'API Integration'],
        link: 'https://everestwebtest.vercel.app/',
      },
      {
        title: 'Dallotech',
        expertise: 'Company Website',
        description: ['FullStack Development'],
        link: 'https://dallotech.com/',
      },
      {
        title: 'E-commerce',
        expertise: 'College Minor Project',
        description: ['FullStack Development', 'Khalti Payment Integration'],
        link: 'https://college-project-gamma.vercel.app/',
      },
    ],
    trainings: [
      {
        title: 'Basic Python',
        organization: 'Tech Axis',
        startDate: 'oct 2018',
        endDate: 'nov 2018',
      },
    ],
    hobbies: ['Guitar', 'Guitar', 'Guitar', 'Guitar'],
    interests: ['Guitar', 'Guitar', 'Guitar', 'Guitar'],
    languages: ['Guitar', 'Guitar', 'Guitar', 'Guitar'],
    certificates: [
      {
        title: 'Level of study',
        images: ['/certificate.png', '/certificate.png'],
        startDate: 'Jun 2021',
        endDate: 'Jan 2022',
      },
    ],
    references: [
      {
        name: 'JOHNS MICHAEL',
        job: 'Director',
        company: 'Matrix media limited',
        tel: '1438470',
        email: 'email@gmail.com',
      },
      {
        name: 'JOHNS MICHAEL',
        job: 'Director',
        company: 'Matrix media limited',
        tel: '1438470',
        email: 'email@gmail.com',
      },
    ],
  };
  return (
    <div>
      <PDFViewer
        width="100%"
        height="600px"
        style={{ backgroundColor: '#c0c0c0' }}
      >
        <Resume data={data} />
      </PDFViewer>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
