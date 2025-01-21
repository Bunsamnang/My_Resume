import {
  ArrowUp,
  Briefcase,
  Github,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Nang from "./assets/Nang.jpg";
import ContentSection from "./custom/content_sec";
import ListItem from "./custom/ListItem";
import SideCardItem from "./custom/SideCardItem";
import { useEffect, useState } from "react";

function App() {
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  useEffect(() => {
    const toggleShowFloatBtn = () => {
      if (window.scrollY >= 200) {
        setShowFloatBtn(true);
      } else {
        setShowFloatBtn(false);
      }
    };

    window.addEventListener("scroll", toggleShowFloatBtn);

    return () => window.removeEventListener("scroll", toggleShowFloatBtn);
  }, [showFloatBtn]);

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-[#eaeffc] p-2 md:p-5 lg:p-16">
        <main className="max-w-[1200px] flex flex-col md:flex-row shadow m-auto rounded-lg overflow-hidden">
          <section className="md:w-[360px]">
            <div className=" w-40 h-40 overflow-hidden m-auto">
              <img
                src={Nang}
                alt="author picture"
                className="rounded-full h-full w-full object-cover"
              />
            </div>

            <section className="space-y-2">
              <SideCardItem title="contact">
                <div className="flex gap-2  items-center">
                  <Phone className="text-[#1e56a0]" size={15} />
                  <span className="text-sm">(+855) 15 982 772</span>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <Mail className="text-[#1e56a0]" size={15} />
                  <span className="text-sm">bunsamnangk@gmail.com</span>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <MapPin className="text-[#1e56a0]" size={15} />
                  <span className="text-sm">Sen Sok, Phnom Penh, Cambodia</span>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <Github className="text-[#1e56a0]" size={15} />
                  <span
                    className="text-sm text-[#1e56a0] hover:underline cursor-pointer transition-all duration-200 ease-in"
                    onClick={() => {
                      window.open("https://github.com/Bunsamnang", "_blank");
                    }}
                  >
                    https://github.com/Bunsamnang
                  </span>
                </div>
              </SideCardItem>

              <SideCardItem title="education">
                <div>
                  <p className="text-primary font-bold">
                    Methodist School of Cambodia
                  </p>
                  <p>
                    High School /
                    <span className="text-primary text-sm"> Phnom Penh</span>
                  </p>
                  <p className="text-gray-500 text-sm">2016 - 2022</p>
                </div>

                <div>
                  <p className="text-primary font-bold">
                    American University of Phnom Penh
                  </p>
                  <p>
                    University /
                    <span className="text-primary text-sm"> Phnom Penh</span>
                  </p>
                  <p className="text-gray-500 text-sm">2023 - Present</p>
                </div>
              </SideCardItem>

              <SideCardItem title="skills">
                <ListItem title="HTML, CSS" />
                <ListItem title="ReactJS" />
                <ListItem title="JavaScript, TypeScript" />
                <ListItem title="Tailwind CSS" />
                <ListItem title="Git, Github" />
              </SideCardItem>

              <SideCardItem title="hobbies">
                <ListItem title="💪🏻 Gym, Home Workout" />
                <ListItem title="📽️ Watching Anime" />
                <ListItem title="🎵 Listen to Music" />
                <ListItem title="💻 Learning new Technologies" />
              </SideCardItem>
            </section>
          </section>
          <section className="bg-white w-full p-4 md:p6">
            <div className="mb-10">
              <h1 className="uppercase text-2xl text-primary font-extrabold">
                khut bunsamnang
              </h1>
            </div>

            <section className="space-y-7">
              <ContentSection title="introduction">
                <p>
                  I am a junior pursuing a Bachelor’s in Software Development at
                  AUPP on a full scholarship. Passionate about learning and
                  problem-solving, I thrive in collaborative environments and
                  enjoy tackling challenges while growing personally and
                  professionally.
                </p>
              </ContentSection>

              <ContentSection title="achievements">
                <ListItem title="Grade B in Cambodia’s National High School Exams (2022)" />
                <ListItem title="Awarded a 100% scholarship for Bachelor’s Degree in Software Development at AUPP (Techo Digital Talent Scholarship 2023)" />
              </ContentSection>

              <ContentSection title="online certificate">
                <span
                  className="text-primary cursor-pointer hover:underline transition-all duration-200 ease-in"
                  onClick={() => {
                    window.open(
                      "https://www.udemy.com/certificate/UC-daecab60-a3f7-472d-82a8-20f3dd564a01/",
                      "_blank"
                    );
                  }}
                >
                  The ultimate React JS Course - Build 3 Real-world Projects
                  (udemy)
                </span>
              </ContentSection>

              <ContentSection title="projects">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex items-center gap-2">
                    <Github className="text-primary h-4 w-4" />
                    <span
                      className="text-primary cursor-pointer hover:underline transition-all duration-200 ease-in"
                      onClick={() => {
                        window.open(
                          "https://cart-wish-frontend.vercel.app/",
                          "_blank"
                        );
                      }}
                    >
                      CartWish(E-commerce)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Github className="text-primary h-4 w-4" />
                    <span
                      className="text-primary cursor-pointer hover:underline transition-all duration-200 ease-in"
                      onClick={() => {
                        window.open(
                          "https://react-movie-maniac.vercel.app/",
                          "_blank"
                        );
                      }}
                    >
                      Movie Maniac
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Github className="text-primary h-4 w-4" />
                    <span
                      className="text-primary cursor-pointer hover:underline transition-all duration-200 ease-in"
                      onClick={() => {
                        window.open(
                          "https://react-todo-tailwind-rho.vercel.app/",
                          "_blank"
                        );
                      }}
                    >
                      React Todo
                    </span>
                  </div>
                </div>
              </ContentSection>

              <ContentSection title="reference">
                <div className="flex gap-2 items-center text-xs">
                  <User className="text-primary  h-4 w-4" />
                  <span className="text-primary">Mr. SOUM SOMON</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <Briefcase className="text-primary h-4 w-4" />
                  <span>Senior Developer at Ministry of Commerce</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <Phone className="text-primary h-4 w-4" />
                  <span>Phone: (+855) 99 965 943</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <Mail className="text-primary h-4 w-4" />
                  <span>somon.soum9@gmail.com</span>
                </div>
              </ContentSection>
            </section>
          </section>
        </main>

        {showFloatBtn && (
          <button
            className="fixed bottom-4 right-4 rounded-full bg-primary p-3 transition-all duration-300 ease-in-out animate-bounce"
            onClick={handleScrollToTop}
          >
            <ArrowUp className="text-white h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
