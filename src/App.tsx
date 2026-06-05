import {
  ArrowUp,
  Award,
  Briefcase,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Nang from "./assets/Nang.png";
import ContentSection from "./custom/content_sec";
import ListItem from "./custom/ListItem";
import SideCardItem from "./custom/SideCardItem";
import ProjectCard from "./custom/ProjectCard";
import { useEffect, useState } from "react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "PostgreSQL",
  "Git & GitHub",
];

function App() {
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  useEffect(() => {
    const toggleShowFloatBtn = () => {
      setShowFloatBtn(window.scrollY >= 200);
    };

    window.addEventListener("scroll", toggleShowFloatBtn);

    return () => window.removeEventListener("scroll", toggleShowFloatBtn);
  }, []);

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#eaeffc] via-[#dde7fb] to-[#eaeffc] p-2 md:p-5 lg:p-16">
        <main className="max-w-[1200px] flex flex-col md:flex-row shadow-3xl m-auto rounded-2xl overflow-hidden bg-white animate-fade-in">
          {/* ---------------- Sidebar ---------------- */}
          <aside className="md:w-[360px] bg-gradient-to-b from-[#1e56a0] via-[#16386b] to-[#0f2747] pb-6">
            <div className="flex justify-center pt-8 pb-4">
              <div className="w-56 h-56 overflow-hidden rounded-full ring-4 ring-white/30 shadow-2xl transition-transform duration-500 hover:scale-105 hover:ring-white/60">
                <img
                  src={Nang}
                  alt="Khut Bunsamnang"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <section className="space-y-1">
              <SideCardItem title="contact">
                <div className="flex gap-3 items-center group">
                  <Phone className="text-white/70 group-hover:text-white transition-colors" size={15} />
                  <span className="text-sm">(+855) 15 982 772</span>
                </div>
                <div className="flex gap-3 items-center group">
                  <Mail className="text-white/70 group-hover:text-white transition-colors" size={15} />
                  <span className="text-sm break-all">bunsamnangk@gmail.com</span>
                </div>
                <div className="flex gap-3 items-center group">
                  <MapPin className="text-white/70 group-hover:text-white transition-colors" size={15} />
                  <span className="text-sm">Sen Sok, Phnom Penh, Cambodia</span>
                </div>
                <div className="flex gap-3 items-center group">
                  <Github className="text-white/70 group-hover:text-white transition-colors" size={15} />
                  <span
                    className="text-sm text-white/90 hover:text-white hover:underline cursor-pointer transition-all break-all"
                    onClick={() =>
                      window.open("https://github.com/Bunsamnang", "_blank")
                    }
                  >
                    github.com/Bunsamnang
                  </span>
                </div>
              </SideCardItem>

              <SideCardItem title="education">
                <div className="border-l-2 border-white/30 pl-3">
                  <p className="font-bold text-white">
                    American University of Phnom Penh
                  </p>
                  <p className="text-sm text-white/80">
                    BSc Software Development
                  </p>
                  <p className="text-white/60 text-xs mt-0.5">2023 - 2026</p>
                </div>

                <div className="border-l-2 border-white/30 pl-3">
                  <p className="font-bold text-white">
                    Methodist School of Cambodia
                  </p>
                  <p className="text-sm text-white/80">High School Diploma</p>
                  <p className="text-white/60 text-xs mt-0.5">2016 - 2022</p>
                </div>
              </SideCardItem>

              <SideCardItem title="skills">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 transition-all duration-200 hover:bg-white/25 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SideCardItem>

              <SideCardItem title="hobbies">
                <ListItem title="💪🏻 Gym & Home Workout" />
                <ListItem title="📽️ Watching Anime" />
                <ListItem title="🎵 Listening to Music" />
                <ListItem title="💻 Learning new Technologies" />
              </SideCardItem>
            </section>
          </aside>

          {/* ---------------- Main content ---------------- */}
          <section className="bg-white w-full p-5 md:p-8">
            <div className="mb-8">
              <h1 className="uppercase text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
                khut bunsamnang
              </h1>
              <p className="text-gray-500 font-semibold mt-1 tracking-wide">
                Junior Full-Stack Developer
              </p>
            </div>

            <div className="space-y-8">
              <ContentSection title="introduction">
                <p className="text-gray-700 leading-relaxed">
                  I am a recent graduate with a Bachelor's degree in Software
                  Development from AUPP, completed on a full scholarship.
                  Passionate about building clean, user-friendly web
                  applications, I love solving problems, learning new
                  technologies, and growing both personally and professionally
                  in collaborative team environments.
                </p>
              </ContentSection>

              <ContentSection title="achievements">
                <div className="flex gap-3 items-start mt-1">
                  <Award className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Awarded a <span className="font-semibold">100% scholarship</span>{" "}
                    for a Bachelor's Degree in Software Development at AUPP (Techo
                    Digital Talent Scholarship, 2023)
                  </p>
                </div>
                <div className="flex gap-3 items-start mt-2">
                  <GraduationCap className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Grade B in Cambodia's National High School Exams (2022)
                  </p>
                </div>
              </ContentSection>

              <ContentSection title="experience">
                <div className="relative pl-5 border-l-2 border-primary/20 space-y-6">
                  <div className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15" />
                    <p className="text-primary font-bold">
                      Junior Full-Stack Developer
                    </p>
                    <p className="text-sm text-gray-600">
                      Bamnang ·{" "}
                      <span className="text-gray-500">
                        Phnom Penh, Cambodia
                      </span>
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Jul 2025 – Present
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-700 marker:text-primary">
                      <li>
                        Building and maintaining two admin dashboards with
                        different stacks — one with a React + Node.js/Express +
                        PostgreSQL backend, and a second built full-stack with
                        Next.js (App Router, server actions &amp; API routes)
                      </li>
                      <li>
                        Crafting responsive UIs with React, Next.js and Tailwind
                        CSS using reusable component patterns
                      </li>
                      <li>
                        Designing and integrating backend APIs and managing
                        database operations with PostgreSQL
                      </li>
                      <li>
                        Collaborating with the team on new features, bug fixes,
                        and deployments
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-primary/60 ring-4 ring-primary/10" />
                    <p className="text-primary font-bold">
                      Web Developer Intern
                    </p>
                    <p className="text-sm text-gray-600">
                      Bamnang ·{" "}
                      <span className="text-gray-500">
                        Phnom Penh, Cambodia
                      </span>
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Feb 2025 – Jun 2025 · 4 months
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-700 marker:text-primary">
                      <li>
                        Worked on frontend development of the admin dashboard
                        using React and Tailwind CSS
                      </li>
                      <li>
                        Implemented responsive UI components and reusable design
                        patterns
                      </li>
                      <li>
                        Collaborated with senior developers on debugging and
                        feature improvements
                      </li>
                      <li>
                        Gained hands-on experience with the Git/GitHub workflow
                        in a team environment
                      </li>
                    </ul>
                  </div>
                </div>
              </ContentSection>

              <ContentSection title="projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ProjectCard
                    title="Full-Stack E-Commerce"
                    description="A complete online store with product catalog, cart, user authentication, order management and integrated online payment checkout. My final-year project."
                    tech={["React", "Node.js", "Express", "MongoDB", "Payment"]}
                    liveUrl="https://nang-e-com-frontend.vercel.app/"
                    repoUrl="https://github.com/Bunsamnang/final-year-project"
                  />
                  <ProjectCard
                    title="CartWish"
                    description="A responsive e-commerce frontend featuring product browsing, filtering, cart management and a smooth shopping experience."
                    tech={["React", "Tailwind CSS", "REST API"]}
                    liveUrl="https://cart-wish-frontend.vercel.app/"
                    repoUrl="https://github.com/Bunsamnang/cart-wish-frontend"
                  />
                  <ProjectCard
                    title="Movie Maniac"
                    description="A movie discovery app to browse and search films with details and posters, powered by a movies API."
                    tech={["React", "Tailwind CSS", "API"]}
                    liveUrl="https://react-movie-maniac.vercel.app/"
                    repoUrl="https://github.com/Bunsamnang/react-movie_maniac"
                  />
                  <ProjectCard
                    title="Kanban Board"
                    description="A drag-and-drop Kanban task board where tasks move across columns (To Do, In Progress, Done) to track workflow, with state persisted locally."
                    tech={["React", "Tailwind CSS", "Drag & Drop"]}
                    liveUrl="https://react-todo-tailwind-rho.vercel.app/"
                  />
                </div>
              </ContentSection>

              <ContentSection title="certification">
                <button
                  className="text-primary cursor-pointer hover:underline transition-all flex items-center gap-2 text-sm font-medium"
                  onClick={() =>
                    window.open(
                      "https://www.udemy.com/certificate/UC-daecab60-a3f7-472d-82a8-20f3dd564a01/",
                      "_blank"
                    )
                  }
                >
                  <Award className="h-4 w-4" />
                  The Ultimate React JS Course – Build 3 Real-world Projects
                  (Udemy)
                </button>
              </ContentSection>

              <ContentSection title="reference">
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-2">
                  <div className="flex gap-2 items-center text-sm">
                    <User className="text-primary h-4 w-4" />
                    <span className="font-bold text-gray-800">
                      Mr. SOUM SOMON
                    </span>
                  </div>
                  <div className="flex gap-2 items-center text-sm text-gray-600">
                    <Briefcase className="text-primary h-4 w-4" />
                    <span>Senior Developer at Ministry of Commerce</span>
                  </div>
                  <div className="flex gap-2 items-center text-sm text-gray-600">
                    <Phone className="text-primary h-4 w-4" />
                    <span>(+855) 99 965 943</span>
                  </div>
                  <div className="flex gap-2 items-center text-sm text-gray-600">
                    <Mail className="text-primary h-4 w-4" />
                    <span>somon.soum9@gmail.com</span>
                  </div>
                </div>
              </ContentSection>
            </div>
          </section>
        </main>
      </div>

      {showFloatBtn && (
        <button
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 rounded-full bg-primary p-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary/90 animate-fade-in z-50"
          onClick={handleScrollToTop}
        >
          <ArrowUp className="text-white h-6 w-6" />
        </button>
      )}
    </>
  );
}

export default App;
