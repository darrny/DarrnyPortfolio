import React from 'react';
import { motion } from 'framer-motion';

// Import assets
import profileImg from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';

// Import project images
import jobuImg from '../assets/projects/jobu.png';
import spotifyouImg from '../assets/projects/spotifyou.png';
import feinalpha from '../assets/projects/feinalpha.png';
import howthefeelsImg from '../assets/projects/howthefeels.png';
import darrnydotcomImg from '../assets/projects/darrnydotcom.png';
import querysenseImg from '../assets/projects/querysense.png';
import imageinationImg from '../assets/projects/imageination.png';
import gymmyImg from '../assets/projects/gymmy.png';
import resumegrillerImg from '../assets/projects/resumegriller.png';

const Section = ({ children, id, className }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`py-16 ${className}`}
    >
        {children}
    </motion.section>
);

const SocialLink = ({ href, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="text-blue-400 hover:text-blue-300 transition-colors"
    >
        {children}
    </motion.a>
);

const Portfolio = () => {
    const featuredProjects = [
        {
            name: "Jobu",
            url: "https://jobu-jat.netlify.app/",
            description: "Full-stack job application tracking system with categorization, progress tracking, and event logging",
            tech: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
            image: jobuImg
        },
        {
            name: "Spotifyou",
            url: "https://spotifyou.vercel.app/",
            description: "Spotify companion with AI integration for listening statistics and recommendations",
            tech: ["React", "Supabase", "Gemini AI", "JavaScript", "Spotify API"],
            image: spotifyouImg
        },
        {
            name: "FeinAlpha",
            url: "https://feinalpha.vercel.app/",
            description: "Portfolio management application with secure authentication and management features",
            tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
            image: feinalpha
        }
    ];

    const petProjects = [
        {
            name: "HowTheFeels",
            url: "https://how-the-feels.vercel.app/",
            description: "Natural language processing application",
            tech: ["React", "JavaScript", "Tailwind CSS", "Hugging Face API"],
            image: howthefeelsImg
        },
        {
            name: "DarrnyDotCom",
            url: "https://darrny.netlify.app/",
            description: "Personal portfolio website",
            tech: ["CSS", "HTML"],
            image: darrnydotcomImg
        },
        {
            name: "QuerySense",
            url: "https://querysense.vercel.app/",
            description: "Data analysis application with AI integration",
            tech: ["React", "JavaScript", "Tailwind CSS", "Google Generative AI"],
            image: querysenseImg
        },
        {
            name: "Imageination",
            url: "https://imageination.netlify.app",
            description: "AI image generation application",
            tech: ["CSS", "React", "JavaScript", "Hugging Face API"],
            image: imageinationImg
        },
        {
            name: "Gymmy",
            url: "https://gymmythegymbuddy.netlify.app/",
            description: "Workout planning and motivation app",
            tech: ["CSS", "React", "JavaScript"],
            image: gymmyImg
        },
        {
            name: "TheResumeGriller",
            url: "https://the-resume-griller.vercel.app/",
            description: "Resume analysis and feedback tool",
            tech: ["React", "JavaScript", "Tailwind CSS", "Hugging Face API"],
            image: resumegrillerImg
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold text-blue-500"
                    >
                        Darrny
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ scale: 1.1 }}
                                className="hover:text-blue-400 transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <Section id="hero" className="flex items-center justify-center min-h-screen">
                <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <h1 className="text-5xl font-bold">
                            Hi, I'm <span className="text-blue-500">Darren</span><br />
                        </h1>
                        <p className="text-xl text-gray-400 mt-4">
                            "I dance and I code."
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <SocialLink href="https://github.com/darrny">GitHub</SocialLink>
                            <SocialLink href="https://linkedin.com/in/darrny">LinkedIn</SocialLink>
                            <SocialLink href="mailto:darren.lim.off@gmail.com">Email</SocialLink>
                        </div>

                        <motion.a
                            href={resumePDF}
                            download="Darren_Lim_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download Resume
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-center"
                    >
                        <img
                            src={profileImg}
                            alt="Darren Lim"
                            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* About Section */}
            <Section id="about" className="bg-background-light">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <p className="text-xl text-gray-300 mb-12">
                        I'm a Software Engineer based in <span className="text-blue-500">Singapore</span> and I plan to specialise in <span className="text-blue-500">AI/ML</span> and <span className="text-blue-500">Database Systems</span>.
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Languages */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-background p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Python',
                                    'JavaScript',
                                    'SQL',
                                    'VBA'
                                ].map((skill) => (
                                    <span key={skill} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-background p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'React',
                                    'React Native',
                                    'Node.js',
                                    'Firebase',
                                    'Supabase',
                                    'MongoDB',
                                    'Tailwind CSS',
                                    'Express',
                                    'Pandas',
                                    'NumPy'
                                ].map((skill) => (
                                    <span key={skill} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* APIs */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-background p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">APIs</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Spotify API',
                                    'Hugging Face API',
                                    'Google Generative AI',
                                    'Gemini AI',
                                    'OpenAI AI',
                                    'AISStream API'
                                ].map((skill) => (
                                    <span key={skill} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Experience Section */}
            <Section id="experience" className="bg-background">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Experience</h2>
                    <div className="space-y-8">
                        {[
                            {
                                role: "Software Engineer Intern",
                                company: "Golden Island",
                                period: "Dec 2024 - Present",
                                description: [
                                    "Developed a Fleet Tracker with Pandas to track locations of 1000 ships with 320,000 lines of data daily",
                                    "Implemented algorithm to track ship proximity using Haversine Formula, achieving over 90% accuracy in docking detection",
                                    "Developed Fleet Simulation System for 1000 ships"
                                ],
                                tech: "Python, Node.js, Supabase, RESTful API"
                            },
                            {
                                role: "Software Developer",
                                company: "Sheares Web",
                                period: "Aug 2023 - Present",
                                description: [
                                    "Developed Full-Stack Hostel Management Web Application (468 users)",
                                    "Developing Mobile Hostel Application (targeting 500 users)",
                                    "Implemented Newsletter Feature and Authentication with access control"
                                ],
                                tech: "React, Firebase, React Native, Tailwind CSS"
                            },
                            {
                                role: "Finance Executive Intern",
                                company: "Biz IQ Academy",
                                period: "Apr 2023 - Jun 2023",
                                description: [
                                    "Automated financial payment receipt processing, improving efficiency by 8x"
                                ],
                                tech: "VBA"
                            }
                        ].map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background-lighter p-6 rounded-lg hover:bg-background-light transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                                        <p className="text-gray-400">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-500">{exp.period}</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="mt-4 text-blue-400">
                                    Technologies: {exp.tech}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Featured Projects */}
            <Section id="projects" className="bg-background-light">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-background-lighter rounded-lg overflow-hidden group"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.name}</h3>
                                    <p className="text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Pet Projects */}
            <Section id="pet-projects">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Pet Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {petProjects.map((project, index) => (
                            <motion.a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-background-lighter rounded-lg overflow-hidden group"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2 text-blue-400">{project.name}</h3>
                                    <p className="text-gray-400 text-sm mb-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Education Section */}
            <Section id="education" className="bg-background-light">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Education</h2>

                    {/* Degree Information */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-background-lighter p-6 rounded-lg mb-8"
                    >
                        <h3 className="text-2xl font-semibold text-blue-400 mb-2">Computer Science</h3>
                        <p className="text-xl text-gray-300 mb-1">National University of Singapore (NUS)</p>
                        <p className="text-gray-400 mb-4">Year 2 Student</p>
                    </motion.div>

                    {/* Relevant Coursework */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    name: "Programming Methodology",
                                    url: "https://nusmods.com/courses/CS1101S/programming-methodology"
                                },
                                {
                                    name: "Programming Methodology II",
                                    url: "https://nusmods.com/courses/CS2030S/programming-methodology-ii"
                                },
                                {
                                    name: "Discrete Structures",
                                    url: "https://nusmods.com/courses/CS1231S/discrete-structures"
                                },
                                {
                                    name: "Data Structures and Algorithms",
                                    url: "https://nusmods.com/courses/CS2040S/data-structures-and-algorithms"
                                },
                                {
                                    name: "Computer Organisation",
                                    url: "https://nusmods.com/courses/CS2100/computer-organisation"
                                },
                                {
                                    name: "Introduction to Computer Networks",
                                    url: "https://nusmods.com/courses/CS2105/introduction-to-computer-networks"
                                },
                                {
                                    name: "Introduction to Information Security",
                                    url: "https://nusmods.com/courses/CS2107/introduction-to-information-security"
                                },
                                {
                                    name: "Linear Algebra for Computing",
                                    url: "https://nusmods.com/courses/MA1522/linear-algebra-for-computing"
                                },
                                {
                                    name: "Calculus for Computing",
                                    url: "https://nusmods.com/courses/MA1521/calculus-for-computing"
                                }
                            ].map((course, index) => (
                                <motion.a
                                    key={index}
                                    href={course.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-background-lighter p-4 rounded text-gray-300 hover:bg-background transition-colors"
                                >
                                    {course.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    name: "Introduction to Structured Query Language (SQL)",
                                    issuer: "Coursera",
                                    url: "https://www.coursera.org/account/accomplishments/verify/O416L1SSDRPD"
                                },
                                {
                                    name: "Platform Thinking: what's beyond Uber?",
                                    issuer: "Coursera",
                                    url: "https://www.coursera.org/account/accomplishments/verify/5GY6RHTSE4XQ"
                                }
                            ].map((cert, index) => (
                                <motion.a
                                    key={index}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-background-lighter p-4 rounded-lg"
                                >
                                    <h4 className="font-semibold text-blue-400">{cert.name}</h4>
                                    <p className="text-gray-400">{cert.issuer}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Hackathons */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Hackathons</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    name: "CatalystX",
                                    position: "Finalist",
                                },
                                {
                                    name: "PSA Codesprint",
                                    position: "Participant",
                                }
                            ].map((hackathon, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-background-lighter p-4 rounded-lg"
                                >
                                    <h4 className="font-semibold text-blue-400">{hackathon.name}</h4>
                                    <p className="text-green-400 font-medium">{hackathon.position}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-background-lighter p-6 rounded-lg max-w-xl mx-auto"
                    >
                        <p className="text-gray-400 mb-4">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                        <motion.a
                            href="mailto:darren.lim.off@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 px-8 py-3 rounded-full hover:bg-blue-600 transition-colors inline-block mb-4"
                        >
                            Say Hello
                        </motion.a>
                        <div className="flex justify-center space-x-6">
                            <SocialLink href="https://github.com/darrny">GitHub</SocialLink>
                            <SocialLink href="https://linkedin.com/in/darrny">LinkedIn</SocialLink>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="bg-background-lighter py-4 text-center text-sm text-gray-400">
                <div className="max-w-6xl mx-auto px-4">
                    Designed & Built by Darren Lim © 2024
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;