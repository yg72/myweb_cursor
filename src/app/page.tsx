export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI & Mental Health Research
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Exploring the intersection of artificial intelligence and mental health to create
          innovative solutions for better mental well-being.
        </p>
      </section>

      {/* Main Content */}
      <section className="prose lg:prose-xl mx-auto">
        <h2>About Me</h2>
        <p>
          I am a researcher and developer focused on leveraging artificial intelligence
          to advance mental health care and accessibility. My work combines cutting-edge
          AI technology with evidence-based psychological approaches to create practical
          solutions for mental health challenges.
        </p>

        <h2>My Focus Areas</h2>
        <ul>
          <li>
            <strong>Research:</strong> Investigating AI applications in mental health
            diagnosis and treatment
          </li>
          <li>
            <strong>Development:</strong> Creating tools like OSAT to make mental health
            support more accessible
          </li>
          <li>
            <strong>Education:</strong> Sharing knowledge through articles and tutorials
            about AI in healthcare
          </li>
        </ul>

        <h2>Latest Work</h2>
        <p>
          Currently, I am working on OSAT, an innovative application that uses AI to
          provide personalized mental health support. Through my articles and video
          posts, I share insights about the latest developments in AI and mental health,
          along with practical tutorials and troubleshooting guides.
        </p>

        <h2>Connect & Learn</h2>
        <p>
          Subscribe to my newsletter to stay updated on the latest developments in AI
          and mental health. I regularly share research findings, technical insights,
          and practical applications that bridge the gap between artificial intelligence
          and mental healthcare.
        </p>
      </section>
    </div>
  );
} 