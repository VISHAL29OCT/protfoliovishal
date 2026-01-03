const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
]

export default function Skills() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex justify-center flex-wrap gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-5 py-2 border border-gray-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
