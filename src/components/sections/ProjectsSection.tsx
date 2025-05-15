import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  detailedDescription: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website built with React.js.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoLink: "https://yourportfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
    detailedDescription:
      "A responsive personal portfolio website showcasing my skills, projects, and experience. Built using React.js and Tailwind CSS for modern UI design.",
    features: [
      "Responsive design for all device sizes",
      "Interactive UI elements with smooth animations",
      "Smooth scroll navigation between sections",
    ],
  },
  
  // Uncomment or add more projects here
  {
    id: 6,
    title: "ForkFleet - Food Delivery App",
    description: "A modern food delivery web app built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Vite", "Tailwind CSS", "Food Delivery"],
    demoLink: "https://peshphjexjg6k.mocha.app/",
    githubLink: undefined,
    detailedDescription:
      "ForkFleet is a responsive food delivery web application that allows users to browse food menus, explore restaurants, and place online orders seamlessly. Built with React, Vite, and Tailwind CSS.",
    features: [
      "Clean and user-friendly UI for food browsing",
      "Responsive layout for all devices",
      "Interactive restaurant and menu listings",
      "Order placement and checkout workflow",
    ],
  },
  {
    id: 7,
    title: "Fresh Harvest - Grocery Store",
    description: "E-commerce site for selling dairy products, vegetables, biscuits, and more.",
    image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?t=st=1747324600~exp=1747328200~hmac=fb7193d9987840ebfb2d58ac8ea920e03b8a469bc74dba860435ceca29ee3474&w=826",
    tags: ["React", "Vite", "Tailwind CSS", "E-commerce"],
    demoLink: "https://your-fresh-harvest-site.com",
    githubLink: "https://github.com/yourusername/fresh-harvest-frontend",
    detailedDescription:
      "Fresh Harvest is an online store for fresh groceries including dairy, vegetables, biscuits, and other daily essentials. It provides a smooth shopping experience with categorized product listings and responsive UI.",
    features: [
      "Dynamic product listings for various categories",
      "Responsive grid layout for all screen sizes",
      "Shopping cart and quantity management",
      "Modern UI with React and Tailwind CSS",
    ],
  },{
    id: 2,
    title: "vDoctor Testing Report",
    description: "Comprehensive testing report for a telehealth application.",
    image: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?semt=ais_hybrid&w=740",
    tags: ["QA Testing", "Documentation", "Healthcare"],
    demoLink: undefined,
    githubLink: undefined,
    detailedDescription:
      "Performed comprehensive testing for a telehealth application named vDoctor. Created detailed reports on UI/UX issues, functional bugs, and performance bottlenecks.",
    features: [
      "User experience evaluation",
      "Cross-browser compatibility testing",
      "Performance metrics analysis",
      "Detailed bug reporting with screenshots",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <ProjectDetailsDialog
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      />
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group shadow-sm hover:shadow-md transition-all">
      <div className="h-48 overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </CardHeader>

      <CardContent className="pb-0">
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-4">
        <Button variant="outline" onClick={onViewDetails}>
          View Details
        </Button>

        <div className="flex gap-2">
          {/* {project.demoLink && (
            <Button size="icon" variant="ghost" asChild>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}

          {project.githubLink && (
            <Button size="icon" variant="ghost" asChild>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )} */}
        </div>
      </CardFooter>
    </Card>
  );
}

interface ProjectDetailsDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ProjectDetailsDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailsDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="h-64 overflow-hidden rounded-md bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">About this project</h4>
            <p className="text-muted-foreground">{project.detailedDescription}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Features</h4>
            <ul className="list-disc pl-5 text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* {project.demoLink && (
              <Button asChild>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}

            {project.githubLink && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              </Button>
            )} */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
