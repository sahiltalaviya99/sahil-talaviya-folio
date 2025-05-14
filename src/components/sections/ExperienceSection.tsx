
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: "work" | "education";
}

const experiences: TimelineItemProps[] = [
  {
    title: "Frontend Developer",
    company: "iTechNotion Pvt Ltd",
    period: "2025–Present",
    description: "Working on developing responsive web applications using React.js and related technologies. Collaborating with design teams to implement UI/UX designs.",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
    icon: "work",
  },
  {
    title: "Web Development Intern",
    company: "Webs Cloud",
    period: "Jun–Oct 2024",
    description: "Developed and maintained responsive web applications. Collaborated with senior developers to implement new features and fix bugs.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    icon: "work",
  },
  {
    title: "AI/ML Intern",
    company: "IBM SkillBuild",
    period: "May–Jul 2024",
    description: "Participated in an intensive training program focused on AI and machine learning technologies. Completed hands-on projects applying ML concepts.",
    skills: ["Python", "Data Analysis", "Machine Learning", "Neural Networks"],
    icon: "education",
  },
  {
    title: "B.Tech in Information Technology",
    company: "GIT",
    period: "2021-2025",
    description: "Currently pursuing my bachelor's degree with a focus on web technologies and software development.",
    skills: ["Algorithms", "Data Structures", "OOP", "Database Systems"],
    icon: "education",
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem 
                key={index} 
                {...item} 
                isEven={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: "work" | "education";
  isEven?: boolean;
}

function TimelineItem({ title, company, period, description, skills, icon, isEven }: TimelineItemProps) {
  return (
    <div className={`relative md:flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Item Content */}
      <div className="md:w-1/2 flex-grow mb-8 md:mb-0 md:px-10">
        <Card className="shadow-md transform transition-all hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{company}</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{period}</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Timeline Center Icon - Only visible on larger screens */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-3 hidden md:block">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
          {icon === "work" ? (
            <Briefcase className="h-5 w-5" />
          ) : (
            <GraduationCap className="h-5 w-5" />
          )}
        </div>
      </div>
      
      {/* Small screen icon - Only visible on mobile */}
      <div className="absolute left-0 top-0 md:hidden">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          {icon === "work" ? (
            <Briefcase className="h-4 w-4" />
          ) : (
            <GraduationCap className="h-4 w-4" />
          )}
        </div>
      </div>
      
      {/* Empty div for layout on larger screens */}
      <div className="md:w-1/2"></div>
    </div>
  );
}
