import { Github, Mail, MapPin, Phone, User } from "lucide-react";
import Nang from "./assets/Nang.jpg";
import ContentSection from "./custom/content_sec";
import ListItem from "./custom/ListItem";
import SideCardItem from "./custom/SideCardItem";

function App() {
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
                <div className="flex gap-2 mt-2 items-center">
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
            </section>
          </section>
          <section className="bg-white w-full p-4 md:p6">
            <div className="mb-10">
              <h1 className="uppercase text-2xl text-[#1e56a0] font-extrabold">
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
                  className="text-[#1e56a0] cursor-pointer hover:underline transition-all duration-200 ease-in"
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

              <ContentSection title="reference">
                <div className="flex gap-2">
                  <User className="text-[#1e56a0]" />
                  <span className="text-[#1e56a0]">Mr. SOUM SOMON</span>
                </div>
              </ContentSection>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
