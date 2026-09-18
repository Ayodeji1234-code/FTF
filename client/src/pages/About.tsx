
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Scale,
  Lightbulb,
  Handshake,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Compassion",
    text: "We serve with empathy, kindness, and genuine concern.",
    icon: HeartHandshake,
  },
  {
    title: "Integrity",
    text: "We uphold honesty, transparency, accountability, and ethical leadership.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    text: "We pursue high standards in our programmes, management, and impact.",
    icon: Award,
  },
  {
    title: "Equity",
    text: "We believe every child deserves meaningful opportunities regardless of circumstance.",
    icon: Scale,
  },
  {
    title: "Empowerment",
    text: "We equip children, families, and communities with knowledge, skills, and opportunities.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    text: "We believe meaningful change is strengthened through purposeful partnerships.",
    icon: Handshake,
  },
  {
    title: "Stewardship",
    text: "We manage resources responsibly and transparently to create sustainable impact.",
    icon: Leaf,
  },
];

function About() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050817]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              About Favored Tribe Foundation
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Creating the conditions for children to{" "}
              <span className="text-[#4DD0E1]">thrive.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              Favored Tribe Foundation is a child-focused nonprofit
              organisation committed to creating opportunities for vulnerable
              and disadvantaged children to learn, grow, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Who We Are
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                A foundation built around child development.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#AEB9CD]">
              <p>
                Favored Tribe Foundation is committed to advancing the
                development and well-being of children, particularly those
                experiencing vulnerability and disadvantage.
              </p>

              <p>
                We recognise that the circumstances surrounding a child can
                influence their development and future opportunities. Poverty,
                limited access to education, family challenges, poor nutrition,
                and unsafe environments can all create barriers to potential.
              </p>

              <p>
                FTF exists to help address these challenges by working with
                children, families, communities, and partners to create
                stronger foundations for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="max-w-2xl">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              What Guides Us
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              These values shape how we serve, make decisions, manage
              resources, and work with others.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="ftf-card p-6 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                    <Icon className="h-5 w-5 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-5 font-['Poppins'] text-lg font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Founder photo */}
            <div className="relative">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#5E35B1] to-[#32156F] p-2 shadow-2xl">
                <div className="overflow-hidden rounded-[26px] bg-[#11182B]">
                  <img
                    src="/founder/founder.jpeg"
                    alt="Sunday Caleb, Founder and President of Favored Tribe Foundation"
                    className="aspect-[4/5] h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[#4DD0E1]/10 blur-2xl" />
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#5E35B1]/20 blur-2xl" />
            </div>

            {/* Founder content */}
            <div>
              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Meet Our Founder
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Sunday Caleb
              </h2>

              <p className="mt-2 font-['Poppins'] font-semibold text-[#4DD0E1]">
                Founder & President
              </p>

              <div className="mt-7 space-y-5 leading-8 text-[#AEB9CD]">
                <p>
                  Sunday Caleb is the Founder and President of Favored Tribe
                  Foundation, a child-focused nonprofit organisation committed
                  to supporting vulnerable children and strengthening the
                  conditions around them.
                </p>

                <p>
                  A graduate of Philosophy (B.Sc.), Caleb is an event planner,
                  decorator, consultant, and founder of Prime Events Services.
                  His experience also includes serving as a Program Intern at
                  Ovie Brume Foundation from 2019 to 2022, working in the
                  hospitality industry, and training in International Human
                  Resource Management.
                </p>

                <p>
                  His commitment to leadership and service has been reflected
                  throughout his academic and professional journey, including
                  his recognition as{" "}
                  <strong className="text-white">
                    Best Platoon Leader
                  </strong>{" "}
                  during the NYSC 2025 Batch A Stream I Orientation Camp in
                  Bayelsa State.
                </p>
              </div>

              {/* Origin story */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#1D293E] p-6 md:p-7">
                <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.15em] text-[#4DD0E1]">
                  Where It Began
                </p>

                <h3 className="mt-3 font-['Poppins'] text-xl font-bold text-white">
                  From the classroom to a wider vision.
                </h3>

                <p className="mt-4 leading-7 text-[#AEB9CD]">
                  The vision for Favored Tribe Foundation was born during
                  Caleb's NYSC service as a teacher at Ogoni Central School,
                  Amassoma, a public primary school in Bayelsa State.
                  Witnessing children face poverty, hunger, poor health, and
                  limited access to basic educational needs inspired the idea
                  of building a platform that could create lasting support and
                  opportunities beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <HeartHandshake className="mx-auto h-10 w-10 text-[#4DD0E1]" />

            <h2 className="mt-6 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
              A foundation with a simple purpose.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              To help create the conditions in which children can learn, grow,
              thrive, and realise their potential.
            </p>

            <Link to="/mission" className="ftf-btn-primary mt-8">
              Explore Our Mission
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

