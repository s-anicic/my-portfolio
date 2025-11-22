import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiTableau, 
  SiPostgresql, 
  SiPowers 
} from "react-icons/si";

export default function Skills() {
  const webDev = [
    { name: "NextJS", icon: <SiNextdotjs size={32} /> },
    { name: "React", icon: <SiReact size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  ];

  const dataAnalytics = [
    { name: "SQL", icon: <SiPostgresql size={32} /> },
    { name: "Python", icon: <SiPython size={32} /> },
    { name: "Tableau", icon: <SiTableau size={32} /> },
    { name: "PowerBI", icon: <SiPowers size={32} /> },
  ];

  const softwareEng = [
    { name: "Python", icon: <SiPython size={32} /> },
  ];

  const renderSkills = (skills: { name: string; icon: JSX.Element }[]) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg dark:bg-zinc-900 hover:scale-105 transform transition-transform duration-200"
        >
          {skill.icon}
          <p className="mt-2 text-sm font-medium text-[var(--color-foreground)]">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-[var(--color-foreground)] inline-block">
        Skills
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">
           Web Development
          </h3>
          {renderSkills(webDev)}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">
            Data Analytics
          </h3>
          {renderSkills(dataAnalytics)}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-foreground)]">
           Software Engineering
          </h3>
          {renderSkills(softwareEng)}
        </div>
      </div>
    </section>
  );
}
