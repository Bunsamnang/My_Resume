import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  repoUrl,
}: ProjectCardProps) => {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-primary group-hover:text-primary/80 transition-colors">
          {title}
        </h3>
        <div className="flex gap-2 flex-shrink-0">
          {repoUrl && (
            <button
              aria-label={`${title} source code`}
              onClick={() => window.open(repoUrl, "_blank")}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </button>
          )}
          {liveUrl && (
            <button
              aria-label={`${title} live demo`}
              onClick={() => window.open(liveUrl, "_blank")}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-3 text-xs font-semibold">
        {liveUrl && (
          <button
            onClick={() => window.open(liveUrl, "_blank")}
            className="flex items-center gap-1 text-primary hover:gap-2 transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </button>
        )}
        {repoUrl && (
          <button
            onClick={() => window.open(repoUrl, "_blank")}
            className="flex items-center gap-1 text-gray-500 hover:text-primary hover:gap-2 transition-all"
          >
            <Github className="h-3.5 w-3.5" /> Source Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
