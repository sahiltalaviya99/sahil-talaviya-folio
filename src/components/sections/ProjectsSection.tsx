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
  // {
  //   id: 1,
  //   title: "Portfolio Website",
  //   description: "Personal portfolio showcasing skills and projects.",
  //   image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  //   tags: ["React", "Tailwind CSS", "JavaScript"],
  //   demoLink: "https://yourportfolio.com",
  //   githubLink: "https://github.com/yourusername/portfolio",
  //   detailedDescription:
  //     "A responsive portfolio website highlighting my skills, projects, and experience, built with React.js and Tailwind CSS for a modern, accessible UI.",
  //   features: [
  //     "Fully responsive across all devices",
  //     "Smooth animations and interactive UI",
  //     "Seamless section navigation",
  //   ],
  // },
  {
    id: 2,
    title: "ForkFleet - Food Delivery App",
    description: "A food delivery web app with intuitive browsing.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Vite", "Tailwind CSS", "Food Delivery"],
    demoLink: "https://peshphjexjg6k.mocha.app/",
    githubLink: undefined,
    detailedDescription:
      "ForkFleet enables users to browse menus, explore restaurants, and place orders seamlessly, with a responsive UI built using React, Vite, and Tailwind CSS.",
    features: [
      "User-friendly menu browsing",
      "Responsive layout for all devices",
      "Interactive restaurant listings",
      "Streamlined order and checkout flow",
    ],
  },
  {
    id: 3,
    title: "Fresh Harvest - Grocery Store",
    description: "E-commerce platform for fresh groceries and essentials.",
    image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?t=st=1747324600~exp=1747328200~hmac=fb7193d9987840ebfb2d58ac8ea920e03b8a469bc74dba860435ceca29ee3474&w=826",
    tags: ["React", "Vite", "Tailwind CSS", "E-commerce"],
    demoLink: "https://your-fresh-harvest-site.com",
    githubLink: "https://github.com/yourusername/fresh-harvest-frontend",
    detailedDescription:
      "Fresh Harvest offers a seamless shopping experience for groceries like dairy, vegetables, and essentials, featuring a responsive UI and categorized product listings.",
    features: [
      "Dynamic product categorization",
      "Responsive grid layout",
      "Shopping cart and quantity management",
      "Modern UI with React and Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "vDoctor Testing Report",
    description: "Detailed testing report for a telehealth application.",
    image: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?semt=ais_hybrid&w=740",
    tags: ["QA Testing", "Documentation", "Healthcare"],
    demoLink: undefined,
    githubLink: undefined,
    detailedDescription:
      "Comprehensive testing for the vDoctor telehealth app, including detailed reports on UI/UX, functionality, and performance issues.",
    features: [
      "In-depth UI/UX evaluation",
      "Cross-browser compatibility testing",
      "Performance analysis",
      "Detailed bug reports with visuals",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 lg:py-24 bg-background"
      aria-labelledby="projects-title"
    >
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* <h2
          id="projects-title"
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 lg:text-left"
        >
          Projects
        </h2> */}
        <h2 className="section-title"> Projects </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

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
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl bg-background flex flex-col">
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow pb-4">
        <p className="text-sm sm:text-base text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs sm:text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onViewDetails}
          aria-label={`View details for ${project.title}`}
        >
          View Details
        </Button>
        {/* <div className="flex gap-2">
          {project.demoLink && (
            <Button
              size="icon"
              variant="ghost"
              asChild
              aria-label={`View live demo of ${project.title}`}
            >
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button
              size="icon"
              variant="ghost"
              asChild
              aria-label={`View source code for ${project.title}`}
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div> */}
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
      <DialogContent className="max-w-[95vw] sm:max-w-3xl rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            {project.title}
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="h-48 sm:h-64 overflow-hidden rounded-lg bg-secondary">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">About This Project</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              {project.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Features</h4>
            <ul className="list-disc pl-5 text-sm sm:text-base text-muted-foreground space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* <div className="flex flex-wrap gap-4 pt-4">
            {project.demoLink && (
              <Button
                asChild
                size="sm"
                aria-label={`View live demo of ${project.title}`}
              >
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
              <Button
                variant="outline"
                size="sm"
                asChild
                aria-label={`View source code for ${project.title}`}
              >
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
            )}
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}