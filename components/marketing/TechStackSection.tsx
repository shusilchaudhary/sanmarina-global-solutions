'use client';

const categories = [
  {
    title: 'Frontend',
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    title: 'Mobile',
    tools: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'iOS (Swift)', icon: '🍎' },
      { name: 'Android (Kotlin)', icon: '🤖' },
    ],
  },
  {
    title: 'Backend',
    tools: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    tools: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Vercel', icon: '▲' },
      { name: 'GitHub Actions', icon: '⚙️' },
    ],
  },
  {
    title: 'Design',
    tools: [
      { name: 'Figma', icon: '🎯' },
      { name: 'Adobe CC', icon: '🅰️' },
      { name: 'After Effects', icon: '🎬' },
      { name: 'Premiere Pro', icon: '🎞️' },
    ],
  },
  {
    title: 'Marketing',
    tools: [
      { name: 'Google Ads', icon: '📊' },
      { name: 'Meta Ads', icon: '📘' },
      { name: 'SEMrush', icon: '🔍' },
      { name: 'Analytics', icon: '📈' },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="py-24 md:py-32 border-y bg-dark-900 border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Tech Stack</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>

        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-100">
            Built With the <span className="text-gradient">Best Tools</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We use industry-leading technologies to deliver fast, scalable, and maintainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 bg-dark-800 border-zinc-700 hover:border-violet-500/30">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-zinc-400">
                {cat.title}
              </h3>
              <div className="space-y-2.5">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2.5">
                    <span className="text-base">{tool.icon}</span>
                    <span className="text-sm font-medium text-zinc-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
