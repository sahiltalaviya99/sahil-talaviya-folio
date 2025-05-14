
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, PenTool, Server } from "lucide-react";

const skills = {
  frontend: [
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Material UI", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
    { name: "RESTful APIs", level: "Intermediate" },
  ],
  tools: [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "VS Code", level: "Expert" },
    { name: "Figma", level: "Intermediate" },
    { name: "Postman", level: "Advanced" },
    { name: "JIRA", level: "Intermediate" },
  ],
  professional: [
    { name: "Web Testing", level: "Advanced" },
    { name: "Problem Solving", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Team Collaboration", level: "Advanced" },
    { name: "Communication", level: "Advanced" },
    { name: "Agile Methodology", level: "Intermediate" },
  ],
};

const badgeVariants: Record<string, string> = {
  Expert: "bg-primary text-primary-foreground hover:bg-primary/90",
  Advanced: "bg-accent text-accent-foreground hover:bg-accent/90",
  Intermediate: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  Beginner: "bg-muted text-muted-foreground hover:bg-muted/90",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard 
            title="Frontend Development" 
            icon={<Code />} 
            skills={skills.frontend} 
          />
          
          <SkillCard 
            title="Backend Development" 
            icon={<Server />} 
            skills={skills.backend} 
          />
          
          <SkillCard 
            title="Tools & Technologies" 
            icon={<PenTool />} 
            skills={skills.tools} 
          />
          
          <SkillCard 
            title="Professional Skills" 
            icon={<Briefcase />} 
            skills={skills.professional} 
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: string }[];
}

function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge-container">
              <Badge
                className={badgeVariants[skill.level] || ""}
                key={skill.name}
              >
                {skill.name}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
