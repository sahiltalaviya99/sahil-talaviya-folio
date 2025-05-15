import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, PenTool } from "lucide-react";

// Skill type definition
type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";
type Skill = { name: string; level: SkillLevel };

// Skill categories
const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Material UI", level: "Intermediate" },
  ],
  programmingLanguages: [
    { name: "C", level: "Advanced" },
    { name: "C++", level: "Advanced" },
  ],
  tools: [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "VS Code", level: "Expert" },
    { name: "Figma", level: "Intermediate" },
  ],
  professional: [
    { name: "Web Testing", level: "Intermediate" },
    { name: "Problem Solving", level: "Advanced" },
    { name: "Team Collaboration", level: "Advanced" },
    { name: "Communication", level: "Advanced" },
  ],
  aiTools: [
    { name: "GitHub Copilot", level: "Intermediate" },
    { name: "Replit", level: "Advanced" },
    { name: "CodeSandbox", level: "Advanced" },
    { name: "StackBlitz", level: "Intermediate" },
    { name: "Loveable", level: "Intermediate" },
  ],
};

// Badge style variants based on skill level
const badgeVariants: Record<SkillLevel, string> = {
  Expert: "bg-primary text-primary-foreground hover:bg-primary/90",
  Advanced: "bg-accent text-accent-foreground hover:bg-accent/90",
  Intermediate: "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-border",
  Beginner: "bg-muted text-muted-foreground hover:bg-muted/90 border border-border",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Decorative background blob */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-section relative z-10">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard title="Frontend Development" icon={<Code />} skills={skills.frontend} />
          <SkillCard title="Programming Languages" icon={<Code />} skills={skills.programmingLanguages} />
          <SkillCard title="AI Tools & Online IDEs" icon={<Code />} skills={skills.aiTools} />
          <SkillCard title="Tools & Technologies" icon={<PenTool />} skills={skills.tools} />
          <SkillCard title="Professional Skills" icon={<Briefcase />} skills={skills.professional} />
        </div>
      </div>
    </section>
  );
}

// Props for SkillCard
interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

// Card component for each skill category
function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-md bg-primary/10 text-primary">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              className={`${badgeVariants[skill.level]} text-sm py-1.5 px-3 cursor-default`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
