
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <Avatar className="w-64 h-64">
              <AvatarImage src="/placeholder.svg" alt="Sahil Talaviya" />
              <AvatarFallback className="bg-primary/10">
                <User className="h-24 w-24 text-primary" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer & Web Tester based in India
            </h3>
            
            <div className="text-muted-foreground space-y-4">
              <p>
                I'm Sahil Talaviya, a passionate frontend developer and web tester currently pursuing my B.Tech in Information Technology at GIT, graduating in 2025. With a keen eye for detail and a strong foundation in web technologies, I specialize in creating responsive and user-friendly interfaces.
              </p>
              <p>
                My journey in web development started during my college years, and I've since honed my skills through various projects and internships. I enjoy solving complex problems through clean, efficient code and am constantly learning new technologies to stay updated in this fast-evolving field.
              </p>
              <p>
                When I'm not coding, you can find me exploring new web design trends, participating in hackathons, or contributing to open-source projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in Information Technology, GIT, 2025
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    iTechNotion Pvt Ltd, Frontend Developer
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Gujarat, India
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Interests</h4>
                  <p className="text-sm text-muted-foreground">
                    Web Development, UI Design, Testing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
