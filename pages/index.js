import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '../Components/resume';
import dynamic from 'next/dynamic';

function Home() {
  const data = {
    name: 'BIDUR SAPKOTA',
    fb: 'https://www.facebook.com/profile.php?id=100071062970707',
    in: 'https://www.linkedin.com/in/bidur-sapkota-3aa054203/',
    tw: '#',
    job: '',
    profile: '/profile1.jpg',
    about:
      "Motivated and detail-oriented graduate of Bachelor's degree in Electronics, Communication and Information Engineering. Skilled in Web development, Mobile app development as well as Hardware design and coding. A quick learner and strong problem-solver with a passion for exploring new technologies and finding innovative solutions. Considered hardworking, punctual and driven.",
    phone: '9865711881',
    email: 'bidursapkota00@gmail.com',
    address: 'Nakhipot, Lalitpur',
    experience: [
      {
        jobTitle: 'Web Developer',
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
        title: 'BEI (77.38%)',
        organization: 'National College of Engineering',
        startDate: 'oct 2018',
        endDate: 'Jan 2023',
      },
    ],
    skills: [
      { name: 'Electronics', rating: 4 },
      { name: 'Web Development', rating: 4 },
      { name: 'App Development', rating: 3 },
      { name: 'Hardware Coding', rating: 3 },
      { name: 'Networking', rating: 3 },
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
        link: 'https://urbanspace.com.np/',
      },
      {
        title: 'Online Job App',
        expertise: 'Entire Frontend',
        description: ['Forms', 'API Integration'],
        link: 'https://www.evereuser.co.uk/',
      },
      {
        title: 'Dallotech',
        expertise: 'Company Website',
        description: ['FullStack Development'],
        link: 'https://dallotech.com/',
      },
    ],
    trainings: [
      // {
      //   title: 'Basic Python',
      //   organization: 'Tech Axis',
      //   startDate: 'oct 2018',
      //   endDate: 'nov 2018',
      // },
    ],
    hobbies: ['Table Tennis', 'Walking'],
    interests: ['Ethical Hacking', 'App Development', 'Networking', 'Iot'],
    languages: ['Nepali', 'English', 'Hindi'],
    certificates: [
      {
        title: 'Hardware Model Exibition (First Position) - Yatra 4.0',
        images: ['/certificate.png'],
        startDate: '20 Jan 2023',
        endDate: '21 Jan 2023',
      },
    ],
    references: [
      {
        name: 'Anup Pokhrel',
        job: 'Co-Founder / QA Engineer',
        company: 'DalloTech Pvt. Ltd.',
        tel: '9847481555',
        email: 'leo22.anup@gmail.com',
      },
      {
        name: 'Sushan Maharjan',
        job: 'Graphic Designer / Content Writer',
        company: 'DalloTech Pvt. Ltd.',
        tel: '9860110973',
        email: 'sushanmaharjan21@gmail.com',
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
