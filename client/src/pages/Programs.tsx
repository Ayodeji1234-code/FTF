import {
  BookOpen,
  Users,
  ShieldCheck,
  HeartHandshake,
  Target,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    number: "01",
    title: "Education",
    description:
      "Creating opportunities for children to access, participate in, and benefit from quality education, learning resources, mentorship, skills development, and other opportunities that strengthen their capabilities and confidence.",
    icon: BookOpen,
    points: [
      "Quality learning opportunities",
      "Learning resources",
      "Mentorship",
      "Skills development",
      "Confidence and capability building",
    ],
  },
  {
    number: "02",
    title: "Family Empowerment",
    description:
      "Strengthening parents, caregivers, and families with relevant knowledge, skills, resilience, and opportunities to provide stable, supportive, and nurturing environments for children.",
    icon: Users,
    points: [
      "Parent and caregiver capacity",
      "Family resilience",
      "Knowledge and skills",
      "Supportive home environments",
      "Family well-being",
    ],
  },
  {
    number: "03",
    title: "Child Protection",
    description:
      "Promoting children's rights, safety, dignity, and well-being while contributing to the prevention and response to abuse, neglect, exploitation, violence, and other forms of harm.",
    icon: ShieldCheck,
    points: [
      "Children's rights",
      "Safety and dignity",
      "Abuse prevention",
      "Protection from exploitation",
      "Safe environments",
    ],
  },
];

const approach = [
  {
    title: "Understand",
    text: "We seek to understand the needs and circumstances affecting children, families, and communities.",
  },
  {
    title: "Collaborate",
    text: "We work with communities, schools, institutions, partners, and other stakeholders to develop appropriate responses.",
  },
  {
    title: "Deliver",
    text: "We aim to develop responsible, evidence-informed programmes that address identified needs.",
  },
  {
    title: "Learn",
    text: "We monitor, evaluate, and learn from our work so that programme quality and impact can continuously improve.",
  },
];

function Programs() {
  return (
    <main className="ftf-page">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050817] py-24 md:py-32">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative">

          <div className="max-w-4xl">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Our Programmes
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Creating stronger conditions for
              <span className="text-[#4DD0E1]"> child development.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD]">
              Favored Tribe Foundation advances Child Development through
              three interconnected areas: Education, Family Empowerment,
              and Child Protection.
            </p>

          </div>

        </div>
      </section>


      {/* STRATEGIC FOCUS */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Strategic Focus
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-5xl">
              Child Development
            </h2>

            <p className="mt-5 leading-8 text-[#AEB9CD]">
              We believe that children are more likely to thrive when they
              have meaningful opportunities to learn, families are equipped
              to provide stability and support, and children are protected
              within safe and nurturing environments.
            </p>

          </div>


          {/* THREE PILLARS */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="ftf-card flex flex-col p-7 md:p-8"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-['Poppins'] text-4xl font-extrabold text-[#4DD0E1]/20">
                      {pillar.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                      <Icon className="h-7 w-7 text-[#4DD0E1]" />
                    </div>

                  </div>


                  <h3 className="mt-8 font-['Poppins'] text-2xl font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#AEB9CD]">
                    {pillar.description}
                  </p>


                  <div className="mt-7 border-t border-white/10 pt-6">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
                      Focus Areas
                    </p>

                    <ul className="mt-4 space-y-3">

                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-[#AEB9CD]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DD0E1]" />
                          <span>{point}</span>
                        </li>
                      ))}

                    </ul>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* HOW THE THREE AREAS CONNECT */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                An Integrated Approach
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                The three areas work together.
              </h2>

              <p className="mt-6 leading-8 text-[#AEB9CD]">
                FTF's approach is intentionally interconnected. Education
                creates opportunities, empowered families create enabling
                environments, and child protection creates the safety
                necessary for children to thrive.
              </p>

            </div>


            <div className="space-y-4">

              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                    <BookOpen className="h-5 w-5 text-[#4DD0E1]" />
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-bold text-white">
                      Education creates opportunities
                    </h3>

                    <p className="mt-1 text-sm text-[#AEB9CD]">
                      Children develop knowledge, skills, confidence, and
                      capabilities.
                    </p>
                  </div>

                </div>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                    <Users className="h-5 w-5 text-[#4DD0E1]" />
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-bold text-white">
                      Families create enabling environments
                    </h3>

                    <p className="mt-1 text-sm text-[#AEB9CD]">
                      Families and caregivers gain knowledge, skills, and
                      resilience to support children.
                    </p>
                  </div>

                </div>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                    <ShieldCheck className="h-5 w-5 text-[#4DD0E1]" />
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-bold text-white">
                      Protection creates safety
                    </h3>

                    <p className="mt-1 text-sm text-[#AEB9CD]">
                      Children are supported within safe and protective
                      environments.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* HOW WE WORK */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              How We Work
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Responsible programmes. Meaningful results.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              As an emerging organisation, FTF is committed to building
              sustainable programmes and partnerships while continuously
              learning and improving.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {approach.map((item, index) => (

              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#1D293E] p-6"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5E35B1]/20 font-['Poppins'] font-bold text-[#4DD0E1]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 font-['Poppins'] text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* THEORY OF CHANGE */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="mx-auto max-w-4xl">

            <div className="text-center">

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Theory of Change
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                From stronger conditions to greater potential.
              </h2>

            </div>


            <div className="mt-12 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-7">

                <span className="text-sm font-bold uppercase tracking-wider text-[#4DD0E1]">
                  Conditions
                </span>

                <p className="mt-4 leading-7 text-[#AEB9CD]">
                  Meaningful learning opportunities, strengthened families,
                  and safe and protective environments.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-7">

                <span className="text-sm font-bold uppercase tracking-wider text-orange-400">
                  Development
                </span>

                <p className="mt-4 leading-7 text-[#AEB9CD]">
                  Children develop knowledge, skills, confidence, resilience,
                  and capabilities.
                </p>

              </div>


              <div className="rounded-2xl border border-[#4DD0E1]/20 bg-[#5E35B1]/10 p-7">

                <span className="text-sm font-bold uppercase tracking-wider text-[#4DD0E1]">
                  Long-Term Change
                </span>

                <p className="mt-4 leading-7 text-white">
                  Improved well-being, stronger developmental outcomes, and
                  greater opportunities for children to realise their
                  potential.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* PARTNERSHIP */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1D293E] to-[#11182B] p-8 md:p-12">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                  <HeartHandshake className="h-7 w-7 text-[#4DD0E1]" />
                </div>

                <h2 className="mt-7 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                  Stronger together.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-[#AEB9CD]">
                  FTF seeks purposeful partnerships with government
                  institutions, schools, healthcare providers, corporate
                  organisations, development partners, civil society
                  organisations, community leaders, philanthropists,
                  academic institutions, volunteers, and other stakeholders.
                </p>

              </div>


              <Link
                to="/get-involved"
                className="ftf-btn-primary whitespace-nowrap"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="mx-auto max-w-3xl text-center">

            <Target className="mx-auto h-12 w-12 text-[#4DD0E1]" />

            <h2 className="mt-6 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Every child deserves the opportunity to thrive.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Join us in creating stronger conditions for children, families,
              and communities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/get-involved"
                className="ftf-btn-primary"
              >
                Get Involved
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:bg-white/5"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Programs;