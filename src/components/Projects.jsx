import React, { useEffect, useState } from 'react';
import { FolderGit2, ExternalLink, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = 'cyphare';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          setRepos([]);
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const featuredProjects = [
    {
      title: "Chili-Hub",
      date: "Jul 2025 - Jan 2026",
      description: "An automated IoT system with an integrated dashboard to maintain optimal environment for chili cultivation.",
      tags: ["IoT", "Hardware", "Dashboard"]
    },
    {
      title: "Cassava Leaf Disease Detection",
      date: "Jul 2025 - Aug 2025",
      description: "A deep learning model (and website) that can scan for leaf diseases in cassava using only leaf pictures.",
      tags: ["Deep Learning", "AI", "Web"]
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="py-12 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <div className="h-px flex-1 bg-border"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {featuredProjects.map((project, index) => (
          <div key={index} className="clean-card group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-textMain mb-2">{project.title}</h3>
            <p className="text-xs text-accent mb-4 font-medium">{project.date}</p>
            <p className="text-textMuted mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 border border-border rounded-md text-textMuted font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <FolderGit2 className="text-textMain" /> GitHub Repositories
        </h3>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-8 h-8 border-4 border-textMain border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : repos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="clean-panel p-6 rounded-xl hover:-translate-y-1 hover:border-accent/50 transition-all group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <FolderGit2 className="w-8 h-8 text-textMain group-hover:text-accent transition-colors" />
                <ExternalLink className="w-5 h-5 text-textMuted group-hover:text-accent transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-textMain mb-2 truncate" title={repo.name}>
                {repo.name}
              </h4>
              <p className="text-sm text-textMuted line-clamp-3 mb-4 flex-1">
                {repo.description || 'No description provided.'}
              </p>
              <div className="flex items-center justify-between text-xs text-textMuted mt-auto pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  {repo.language || 'Mixed'}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="clean-panel p-8 rounded-xl text-center">
          <p className="text-textMuted mb-2">Could not load repositories for username: {GITHUB_USERNAME}</p>
          <p className="text-sm text-textMuted/70">Change the username in Projects.jsx to fetch real data.</p>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
