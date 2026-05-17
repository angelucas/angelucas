export type SkillCategory = 'backend' | 'frontend' | 'cloud' | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Backend
  { name: 'C#', category: 'backend' },
  { name: '.NET Framework', category: 'backend' },
  { name: 'ASP.NET', category: 'backend' },
  { name: 'ASP.NET MVC', category: 'backend' },
  { name: 'ASP.NET Web Forms', category: 'backend' },
  { name: 'ASP.NET Web API', category: 'backend' },
  { name: 'Entity Framework', category: 'backend' },
  { name: 'Dapper', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Web Services', category: 'backend' },
  { name: 'LINQ', category: 'backend' },
  { name: 'Xamarin', category: 'backend' },
  { name: 'WPF', category: 'backend' },
  { name: 'Microsoft SQL Server', category: 'backend' },
  { name: 'Oracle Database', category: 'backend' },
  { name: 'SQLite', category: 'backend' },
  { name: 'T-SQL', category: 'backend' },
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'jQuery', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'XAML', category: 'frontend' },
  // Cloud & DevOps
  { name: 'Azure DevOps', category: 'cloud' },
  { name: 'Docker', category: 'cloud' },
  { name: 'CI/CD', category: 'cloud' },
  { name: 'Jenkins', category: 'cloud' },
  // Tools & methods
  { name: 'Git', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Visual Studio', category: 'tools' },
  { name: 'Scrum', category: 'tools' },
  { name: 'Agile', category: 'tools' },
];
