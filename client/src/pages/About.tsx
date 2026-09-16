
import {
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Target,
  Eye,
  Users,
  Handshake,
  Lightbulb,
  Scale,
  Award,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Creating opportunities for children to access quality education, learning resources, mentorship and skills development.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    text: "Strengthening parents, caregivers and families to provide stable, supportive and nurturing environments for children.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    text: "Promoting children's rights, safety, dignity and well-being while contributing to safer environments.",
  },
];

const values = [
  {
    title: "Compassion",
    text: "We serve with empathy, kindness and genuine concern.",
    icon: HeartHandshake,
  },
  {
    title: "Integrity",
    text: "We uphold honesty, transparency, accountability and ethical leadership.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    text: "We pursue high standards in our programmes, management and impact.",
    icon: Award,
  },
  {
    title: "Equity",
    text: "We believe every child deserves meaningful opportunities regardless of circumstance.",
    icon: Scale,
  },
  {
    title: "Empowerment",
    text: "We equip children, families and communities with knowledge, skills and opportunities.",
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

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#050817] py-24 md:py-32">

        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative">

          <div className="max-w-4xl">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              About Favored Tribe Foundation
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Creating the conditions for children to
              <span className="text-[#4DD0E1]"> thrive.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD]">
              Favored Tribe Foundation is a child-focused, non-profit
              organisation committed to creating the conditions that enable
              vulnerable and disadvantaged children to learn, grow and thrive.
            </p>

          </div>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Who We Are
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Child development is at the heart of our work.
              </h2>

            </div>

            <div className="space-y-5 leading-8 text-[#AEB9CD]">

              <p>
                Favored Tribe Foundation is committed to advancing child
                development and creating opportunities for children,
                particularly those experiencing vulnerability and disadvantage.
              </p>

              <p>
                We recognise that poverty, limited access to quality education,
                inadequate family support, poor nutrition, violence and unsafe
                environments can affect children's development and future
                opportunities.
              </p>

              <p>
                Our approach therefore looks beyond individual needs. We work
                towards stronger learning opportunities, empowered families
                and safer environments where children can develop and reach
                their potential.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STRATEGIC FOCUS ================= */}
      <section className="ftf-section bg-[#050817]">

        <div className="ftf-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Our Strategic Focus
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-5xl">
              Child Development
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Our work is built around three interconnected areas that help
              create stronger conditions for children to thrive.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="ftf-card p-7"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-['Poppins'] text-3xl font-extrabold text-[#4DD0E1]/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                      <Icon className="h-6 w-6 text-[#4DD0E1]" />
                    </div>

                  </div>

                  <h3 className="mt-7 font-['Poppins'] text-xl font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#AEB9CD]">
                    {pillar.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Vision */}
            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <Eye className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <span className="mt-7 block font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Vision
              </span>

              <p className="mt-5 font-['Poppins'] text-xl font-semibold leading-9 text-white">
                A world where every child has the opportunity to learn, grow,
                thrive and realise their full potential.
              </p>

            </div>


            {/* Mission */}
            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                <Target className="h-7 w-7 text-[#A78BFA]" />
              </div>

              <span className="mt-7 block font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Mission
              </span>

              <p className="mt-5 font-['Poppins'] text-xl font-semibold leading-9 text-white">
                To transform futures through kindness by strengthening the
                conditions that enable children to learn, grow and thrive
                through education, family empowerment and child protection.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="ftf-section bg-[#050817]">

        <div className="ftf-container">

          <div className="max-w-2xl">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              What Guides Us
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Our values shape how we serve, partner and manage the
              responsibility entrusted to us.
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="ftf-card p-6"
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


      {/* ================= FOUNDER ================= */}
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

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Meet Our Founder
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Sunday Caleb
              </h2>

              <p className="mt-2 font-['Poppins'] font-semibold text-[#4DD0E1]">
                Founder & President, Favored Tribe Foundation
              </p>

              <div className="mt-7 space-y-5 leading-8 text-[#AEB9CD]">

                <p>
                  Sunday Caleb is the Founder and President of Favored Tribe
                  Foundation, a child-focused nonprofit organisation committed
                  to transforming the lives of vulnerable children through its
                  focus on child development.
                </p>

                <p>
                  A graduate of Philosophy (B.Sc.), Caleb is an event planner,
                  decorator, consultant and founder of Prime Events Services.
                  His professional journey includes serving as a Program Intern
                  at Ovie Brume Foundation from 2019 to 2022, working in the
                  hospitality industry and training in International Human
                  Resource Management.
                </p>

                <p>
                  Throughout his university years, Caleb served as Class
                  Governor and demonstrated a strong commitment to leadership
                  and service. He was also recognised as the{" "}
                  <strong className="text-white">
                    Best Platoon Leader
                  </strong>{" "}
                  during the NYSC 2025 Batch A Stream I Orientation Camp in
                  Bayelsa State.
                </p>

              </div>


              {/* Vision behind FTF */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#1D293E] p-6 md:p-7">

                <h3 className="font-['Poppins'] text-xl font-bold text-white">
                  The Vision Behind FTF
                </h3>

                <p className="mt-4 leading-7 text-[#AEB9CD]">
                  The vision for Favored Tribe Foundation was born during
                  Caleb's NYSC service as a teacher at Ogoni Central School,
                  Amassoma, a public primary school in Bayelsa State.
                  Witnessing children struggle with poverty, hunger, poor
                  health and limited access to basic educational needs inspired
                  him to establish a platform that would provide lasting
                  support and opportunities for vulnerable children beyond the
                  classroom.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="ftf-section bg-[#050817]">

        <div className="ftf-container">

          <div className="relative overflow-hidden rounded-[32px] border border-[#4DD0E1]/10 bg-gradient-to-br from-[#1D293E] to-[#11182B] p-8 text-center md:p-12">

            <div className="relative z-10">

              <h2 className="font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Help us transform futures through kindness.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#AEB9CD]">
                Whether you volunteer, partner, donate or help spread the word,
                your contribution can help create stronger conditions for
                children and families to thrive.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  to="/get-involved"
                  className="ftf-btn-primary"
                >
                  Get Involved
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:bg-white/5"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;

