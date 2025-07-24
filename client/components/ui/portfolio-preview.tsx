import { useState } from "react";
import { X, ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { Button } from "./button";

interface PortfolioPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    gradient: string;
    fullDescription: string;
    technologies: string[];
    features: string[];
    duration: string;
    teamSize: string;
    liveUrl?: string;
    githubUrl?: string;
  } | null;
}

export function PortfolioPreview({
  isOpen,
  onClose,
  project,
}: PortfolioPreviewProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Main Content */}
        <div className="glass-effect rounded-3xl overflow-hidden border border-glass-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Image & Visual */}
            <div className="relative bg-gradient-to-br from-card to-secondary/50">
              {/* Hero Image */}
              <div className="relative h-full min-h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`}
                ></div>

                {/* Floating Elements */}
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {project.category}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-white/80">Duration</div>
                      <div className="text-sm font-bold text-white">
                        {project.duration}
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 text-center">
                      <Users className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-white/80">Team Size</div>
                      <div className="text-sm font-bold text-white">
                        {project.teamSize}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-8 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold gradient-text mb-3">
                  {project.title}
                </h2>
                <p className="text-foreground/80 text-lg">
                  {project.description}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="mb-6 flex-1">
                <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {project.fullDescription}
                </p>

                {/* Key Features */}
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-primary mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground/80 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/50 border border-glass-border rounded-full text-sm text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                {project.liveUrl && (
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="glass-effect border-glass-border flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
