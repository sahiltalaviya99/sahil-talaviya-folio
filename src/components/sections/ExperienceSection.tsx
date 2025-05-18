import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: "work" | "education";
  isEven?: boolean;
}

const experiences: TimelineItemProps[] = [
  {
    title: "Frontend Developer Intern",
    company: "iTechNotion Pvt Ltd",
    period: "2025–Present",
    description:
      "Working on developing responsive web applications using React.js and related technologies. Collaborating with design teams to implement UI/UX designs.",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
    icon: "work",
  },
  {
    title: "AI/ML Intern (15-day Bootcamp)",
    company: "IBM SkillBuild",
    period: "May 2024",
    description:
      "Completed a 15-day intensive internship focused on AI and machine learning. Created a chatbot using IBM Watson AI and gained hands-on experience with AI tools and technologies.",
    skills: ["IBM Watson AI", "Chatbot Development", "Machine Learning", "Python"],
    icon: "education",
  },
  {
    title: "B.Tech in Information Technology",
    company: "GIT",
    period: "2021-2025",
    description:
      "Currently pursuing my bachelor's degree with a focus on web technologies and software development.",
    skills: ["Algorithms", "Data Structures", "OOP", "Database Systems"],
    icon: "education",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.icon === activeTab);

  return (
    <section
      id="experience"
      className="py-12 xs:py-16 sm:py-20 bg-secondary/30"
      aria-labelledby="experience-heading"
      role="region"
    >
      <div className="container-section px-4 xs:px-5 sm:px-6 md:px-8">
  <h2 id="experience-heading" className="section-title mb-12">
    Experience & Education
  </h2>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-6 xs:mb-8 sm:mb-10">
            <TabsList className="grid grid-cols-3 w-full max-w-[18rem] xs:max-w-[22rem] sm:max-w-md">
              <TabsTrigger
                value="all"
                className="text-xs xs:text-sm data-[state=active]:bg-primary data-[state=active]:text-white focus:ring-2 focus:ring-primary"
                aria-label="View all experiences"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="work"
                className="text-xs xs:text-sm data-[state=active]:bg-primary data-[state=active]:text-white focus:ring-2 focus:ring-primary"
                aria-label="View work experiences"
              >
                <Briefcase className="mr-1 xs:mr-2 h-3 xs:h-4 w-3 xs:w-4" />
                Work
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="text-xs xs:text-sm data-[state=active]:bg-primary data-[state=active]:text-white focus:ring-2 focus:ring-primary"
                aria-label="View education experiences"
              >
                <GraduationCap className="mr-1 xs:mr-2 h-3 xs:h-4 w-3 xs:w-4" />
                Education
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 xs:left-6 w-1 h-full bg-primary/20 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-10 xs:space-y-12">
                {filteredExperiences.map((item, index) => (
                  <TimelineItem
                    key={index}
                    {...item}
                    isEven={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TimelineItem({
  title,
  company,
  period,
  description,
  skills,
  icon,
  isEven,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col md:flex-row",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Timeline Item Content */}
      <div className="md:w-1/2 flex-grow mb-8 md:mb-0 pl-12 xs:pl-14 sm:pl-16 md:px-6 lg:px-10">
        <Card className="shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div>
                <h3 className="text-lg xs:text-xl font-semibold">{title}</h3>
                <p className="text-sm xs:text-base text-muted-foreground">
                  {company}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs xs:text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                <Calendar className="h-3 xs:h-4 w-3 xs:w-4" />
                <span>{period}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-2">
            <p className="mb-4 text-sm xs:text-base text-muted-foreground max-w-lg">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-xs xs:text-sm bg-primary/5 hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Center Icon */}
      <div className="absolute left-2 xs:left-3 top-4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="w-8 xs:w-10 h-8 xs:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md z-10">
          {icon === "work" ? (
            <Briefcase className="h-4 xs:h-5 w-4 xs:w-5" />
          ) : (
            <GraduationCap className="h-4 xs:h-5 w-4 xs:w-5" />
          )}
        </div>
      </div>

      {/* Empty div for layout on larger screens */}
      <div className="md:w-1/2 hidden md:block"></div>
    </div>
  );
}