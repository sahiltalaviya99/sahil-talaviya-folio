
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
    image: "/placeholder.svg",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#",
    detailedDescription: "A responsive personal portfolio website showcasing my skills, projects, and experience. Built using React.js and Tailwind CSS for modern UI design.",
    features: [
      "Responsive design for all device sizes",
      "Interactive UI elements with smooth animations",
      "Contact form with validation",
      "Project showcase with detailed modal views"
    ]
  },
  {
    id: 2,
    title: "vDoctor Testing Report",
    description: "Comprehensive testing report for a telehealth application.",
    image: "/placeholder.svg",
    tags: ["QA Testing", "Documentation", "Healthcare"],
    demoLink: "#",
    detailedDescription: "Performed comprehensive testing for a telehealth application named vDoctor. Created detailed reports on UI/UX issues, functional bugs, and performance bottlenecks.",
    features: [
      "User experience evaluation",
      "Cross-browser compatibility testing",
      "Performance metrics analysis",
      "Detailed bug reporting with screenshots"
    ]
  },
  {
    id: 3,
    title: "LinkedIn UI Clone",
    description: "A faithful recreation of LinkedIn's user interface.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "#",
    demoLink: "#",
    detailedDescription: "A pixel-perfect recreation of LinkedIn's user interface using vanilla HTML, CSS, and JavaScript. Implemented responsive design to ensure compatibility across all devices.",
    features: [
      "Responsive layout matching LinkedIn's design",
      "Interactive components like dropdown menus and modals",
      "Dark/light mode toggle",
      "Feed post interactions"
    ]
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    description: "Interactive game built with React.js.",
    image: "/placeholder.svg",
    tags: ["React", "CSS", "Game Development"],
    githubLink: "#",
    demoLink: "#",
    detailedDescription: "An interactive Tic-Tac-Toe game built with React.js featuring game history, move tracking, and winner detection algorithm.",
    features: [
      "Two-player gameplay",
      "Game history and move tracking",
      "Winner detection algorithm",
      "Responsive design for mobile play"
    ]
  },
  {
    id: 5,
    title: "Spotify UI Replica",
    description: "A replica of Spotify's user interface using modern web technologies.",
    image: "/placeholder.svg",
    tags: ["React", "CSS", "API Integration"],
    githubLink: "#",
    detailedDescription: "A replica of Spotify's user interface built with React. Features include playlist management, music player controls, and responsive design.",
    features: [
      "Music player controls with progress bar",
      "Playlist management interface",
      "Artist and album pages",
      "Responsive design matching Spotify's mobile and desktop layouts"
    ]
  }
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
          {project.demoLink && (
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

function ProjectDetailsDialog({ project, open, onOpenChange }: ProjectDetailsDialogProps) {
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
            {project.demoLink && (
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
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
