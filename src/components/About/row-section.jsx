const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 p-8 border-blue-500 border-2">
      <div className="w-full md:w-1/3">
        <h1 className="text-2xl font-bold mb-4">
          Curious about me? Here you have it:
        </h1>
        <p className="mb-4">
          I'm a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code.
        </p>
        <p className="mb-4">
          Since starting my web development journey in 2015, I've embraced
          challenges and kept up with the latest tech trends. Now in my early
          thirties, seven years in, I'm building cutting-edge web apps using
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
        </p>
        <p className="mb-4">
          With a progressive mindset, I enjoy the entire product development
          process, from ideation to execution. Off duty, you'll find me on
          Twitter, tracking startup journeys, or unwinding. Follow me for tech
          insights and public project updates on Twitter or GitHub.
        </p>
        <h2 className="text-xl font-bold mb-2">
          Finally, some quick bits about me:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>B.E. in Computer Engineering</li>
          <li>Avid learner</li>
          <li>Full time freelancer</li>
        </ul>
        <p>
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😊
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
