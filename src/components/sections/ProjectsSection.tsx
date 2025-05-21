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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-background"
      aria-labelledby="projects-title"
    >
      {/* Responsive background element */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 md:w-1/2 md:h-1/2 bg-accent/5 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          Projects
        </h2>

        {/* Responsive grid with better small-screen layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-xl bg-background flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardHeader className="pb-1 sm:pb-2 pt-4 sm:pt-5">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground line-clamp-2">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow pb-2 sm:pb-3">
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2 sm:pt-3 pb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onViewDetails}
          aria-label={`View details for ${project.title}`}
          className="text-xs sm:text-sm w-full sm:w-auto"
        >
          View Details
        </Button>
        
        <div className="flex gap-1 sm:gap-2">
          {project.demoLink && (
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-8 w-8"
              aria-label={`View live demo of ${project.title}`}
            >
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-8 w-8"
              aria-label={`View source code for ${project.title}`}
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </Button>
          )}
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
      <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-3xl rounded-lg p-3 sm:p-4 md:p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="space-y-1 sm:space-y-2">
          <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg bg-secondary">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">About This Project</h4>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              {project.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Features</h4>
            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm md:text-base text-muted-foreground space-y-1 sm:space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
            {project.demoLink && (
              <Button
                asChild
                size="sm"
                className="text-xs sm:text-sm"
                aria-label={`View live demo of ${project.title}`}
              >
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  View Demo
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-xs sm:text-sm"
                aria-label={`View source code for ${project.title}`}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}