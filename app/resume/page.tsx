import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'

export default function Page(){
  return (
    <div className="max-w-4xl mx-auto p-8  shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Yeswanth Chinnam Naidu</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91-6281827437</div>
          <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /> curiousyeswanth003@gmail.com</div>
          <div className="flex items-center"><Linkedin className="w-4 h-4 mr-2" /> yeswanthchinnamnaidu</div>
          <div className="flex items-center"><Github className="w-4 h-4 mr-2" /> yeswanth08</div>
          <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Jalandhar City, Punjab, India</div>
        </div>
      </header>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Backend Engineer</h3>
          <div className="text-sm">
            <p className="font-medium">Macbease Connections</p>
            <p>Jalandhar, India | June 2025 - Present </p>
          </div>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Developed Various Internal Tools that power day-to-day company operations.</li>
            <li>Implemented robust and scalable cloud infrastructure for the organization.</li>
            <li>Reduced cloud expenses by 50% through migration and optimization of the cloud infrastructure.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">B.Tech In Computer Science And Engineering</h3>
          <div className="text-sm">
            <p className="font-medium">Lovely Professional University</p>
            <p>Jalandhar, India | Aug 2022 - Present</p>
            <p>GPA: 8.3/10.00</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Secondary Education</h3>
          <div className="text-sm">
            <p className="font-medium">Narayana School</p>
            <p>AP, India </p>
            <p>GPA: 10/10</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Runx: A high-speed online code compiler service engine</h3>
          <p className="text-sm font-medium">Oct 2023 - Nov 2023</p>
          <p className="text-sm">Tools: Docker, Nodejs, Express, Linux, Shellscript</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Implemented isolated environments for secure and interference-free code execution using containerization</li>
            <li>Added support for multiple languages including C, C++, Python, and JavaScript</li>
            <li>Optimized for near-local compilation and runtime speeds</li>
            <li>Engineered truly parallel code execution for multiple requests simultaneously</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">SKILLS</h2>
        <ul className="list-disc list-inside text-sm">
          <li><span className="font-medium">Programming Languages:</span> Javascript/Typescript, NodeJs, C/C++, Python, Golang, HTML/CSS, SQL, Shell</li>
          <li><span className="font-medium">Web Technologies:</span> ReactJs, NextJS, ExpressJs, REST APIs, API Development</li>
          <li><span className="font-medium">Database Systems:</span> PostgreSQL, MySQL, MongoDB, SQLite, Redis</li>
          <li><span className="font-medium">Cloud Technologies:</span> Google Cloud, Azure, AWS, Cloudflare Stack, DigitalOcean</li>
          <li><span className="font-medium">DevOps & Version Control:</span> Git/Github, CI/CD, Github Actions, Docker, Docker Compose</li>
          <li><span className="font-medium">Specialized Area:</span> API Development, Database Design And Development, Realtime Systems, Microservice Architecture, Linux</li>
          <li><span className="font-medium">Other Skills:</span> API Security, Backend Security, Cybersecurity</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">HONORS AND AWARDS</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Winter School Of Engineering Science Conference</h3>
          <p className="text-sm font-medium">St.Petersburg , Russia | Nov 2024</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Attended to the winter school of Engineering Science Conference at russia </li>
            <li>which is a fully funded Conference</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
