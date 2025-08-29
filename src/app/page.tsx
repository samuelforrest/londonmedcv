import { motion } from "framer-motion";
import React from "react";

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, BriefcaseMedical, BookOpen, CheckCircle, ArrowRight, Linkedin, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const experiences = [
  {
    title: "Clinical Placement - St. Mary&apos;s Hospital",
    date: "Sep 2023 - Dec 2023",
    icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
    description:
      "Assisted in daily ward rounds, patient assessments, and multidisciplinary team meetings. Gained hands-on experience in acute medicine and emergency care.",
  },
  {
    title: "Medical Research Intern - Imperial College London",
    date: "Jun 2023 - Aug 2023",
    icon: <BookOpen className="w-6 h-6 text-green-600" />,
    description:
      "Contributed to clinical research on cardiovascular health. Presented findings at the university&apos;s summer research symposium.",
  },
  {
    title: "Volunteer - London Health Clinic",
    date: "Jan 2022 - May 2023",
    icon: <BriefcaseMedical className="w-6 h-6 text-purple-600" />,
    description:
      "Supported patient intake and health promotion events. Developed communication and patient advocacy skills.",
  },
];

const references = [
  {
    name: "Dr. Amelia Carter",
    position: "Consultant Physician, St. Mary&apos;s Hospital",
    contact: "amelia.carter@stmarys.nhs.uk",
  },
  {
    name: "Prof. Henry Wallace",
    position: "Professor of Medicine, Imperial College London",
    contact: "henry.wallace@imperial.ac.uk",
  },
  {
    name: "Dr. Priya Singh",
    position: "Senior GP, London Health Clinic",
    contact: "priya.singh@londonhc.uk",
  },
];

const LandingPage: React.FC = () => {
  return (
    <main className="font-sans">
      {/* HERO SECTION */}
      <section id="hero" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-blue-700" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Alex Morgan
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              London Medical Student | Driven, Compassionate, Experienced
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full md:w-auto">
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
                <a href="#experience">See Experience</a>
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">
              Professional Experience
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {experiences.map((exp, idx) => (
                <Card key={idx} className="h-full flex flex-col shadow-md border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    {exp.icon}
                    <CardTitle className="text-lg md:text-xl font-medium">
                      {exp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="block text-sm text-gray-500 mb-2">{exp.date}</span>
                    <p className="text-gray-700 text-base">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">
              Education
            </h2>
            <div className="max-w-xl mx-auto">
              <Card className="shadow-md border-0">
                <CardHeader className="flex items-center gap-3 pb-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-lg md:text-xl font-medium">
                    MBBS, Imperial College London
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="block text-sm text-gray-500 mb-2">Expected Graduation: 2025</span>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Distinction in Pre-Clinical Medicine</li>
                    <li>Student Representative, Medical Society</li>
                    <li>Lead Organizer, Health Innovation Conference 2023</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REFERENCES SECTION */}
      <section id="references" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">
              References
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {references.map((ref, idx) => (
                <Card key={idx} className="shadow-md border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-lg font-medium">{ref.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{ref.position}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      <span className="font-semibold">Email: </span>
                      <a href={`mailto:${ref.contact}`} className="hover:underline">
                        {ref.contact}
                      </a>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">
              Contact Me
            </h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  placeholder="Type your message here"
                  as="textarea"
                  className="h-24"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;