export type SkillCategory = 'backend' | 'frontend' | 'data' | 'cloud' | 'practices';

export interface Skill {
  name: string;
  category: SkillCategory;
}

/** Curated from LinkedIn: deduplicated, enterprise-focused, market-relevant. */
export const skills: Skill[] = [
  // Backend & .NET
  { name: 'C#', category: 'backend' },
  { name: 'ASP.NET Core', category: 'backend' },
  { name: '.NET Framework', category: 'backend' },
  { name: 'ASP.NET Web API', category: 'backend' },
  { name: 'ASP.NET MVC', category: 'backend' },
  { name: 'ASP.NET Web Forms', category: 'backend' },
  { name: 'Entity Framework', category: 'backend' },
  { name: 'Dapper', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Web Services', category: 'backend' },
  { name: 'LINQ', category: 'backend' },
  { name: 'SOLID', category: 'backend' },
  { name: 'Xamarin', category: 'backend' },
  { name: 'WPF', category: 'backend' },
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  // Data
  { name: 'Microsoft SQL Server', category: 'data' },
  { name: 'Oracle Database', category: 'data' },
  { name: 'MongoDB', category: 'data' },
  { name: 'T-SQL', category: 'data' },
  { name: 'SQLite', category: 'data' },
  // Cloud & DevOps
  { name: 'Azure DevOps', category: 'cloud' },
  { name: 'Docker', category: 'cloud' },
  { name: 'CI/CD', category: 'cloud' },
  { name: 'Jenkins', category: 'cloud' },
  // Quality, delivery & product
  { name: 'xUnit', category: 'practices' },
  { name: 'Unit Testing', category: 'practices' },
  { name: 'Integration Testing', category: 'practices' },
  { name: 'Agile', category: 'practices' },
  { name: 'Scrum', category: 'practices' },
  { name: 'Kanban', category: 'practices' },
  { name: 'Solution Design', category: 'practices' },
  { name: 'Design Thinking', category: 'practices' },
  { name: 'Product Discovery', category: 'practices' },
  { name: 'Git', category: 'practices' },
  { name: 'Jira', category: 'practices' },
  { name: 'Visual Studio', category: 'practices' },
];
