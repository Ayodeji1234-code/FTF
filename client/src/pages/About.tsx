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
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Compassion",
    text: "We serve with empathy, kindness, and genuine concern for every child, family, and community.",
    icon: HeartHandshake,
  },
  {
    title: "Integrity",
    text: "We uphold honesty, transparency, accountability, and ethical leadership in every aspect of our work.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    text: "We pursue high standards in programme delivery, organisational management, learning, and impact.",
    icon: Award,
  },
  {
    title: "Equity",
    text: "We believe every child deserves equal opportunities regardless of background or circumstance.",
    icon: Scale,
  },
  {
    title: "Empowerment",
    text: "We equip children, families, and communities with knowledge, skills, and opportunities for sustainable change.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    text: "We believe meaningful change is achieved through purposeful partnerships and collective action.",
    icon: Handshake,
  },
  {
    title: "Stewardship",
    text: "We manage resources responsibly and transparently to create meaningful and sustainable impact.",
    icon: Leaf,
  },
];

const pillars = [
  {
    number: "01",
    title: "Education",
    text: "Creating opportunities for children to access, participate in, and benefit from quality education, learning resources, mentorship, skills development, and other opportunities that strengthen their capabilities and confidence.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Family Empowerment",
    text: "Strengthening parents, caregivers, and families with relevant knowledge, skills, resilience, and opportunities to provide stable, supportive, and nurturing environments for children.",
    icon: Users,
  },
  {
    number: "03",
    title: "Child Protection",
    text: "Promoting children's rights, safety, dignity, and well-being while contributing to the prevention and response to abuse, neglect, exploitation, violence, and other forms of harm.",
    icon: ShieldCheck,
  },
];

const objectives = [
  "Advance Child Development",
  "Improve Educational Opportunities",
  "Strengthen Families and Caregivers",
  "Promote Child Protection and Well-being",
  "Strengthen Community and Institutional Capacity",
  "Generate Evidence and Learning",
];

function About() {
  return (
    <main className="ftf-page">

      {/* HERO */}
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
              Favored Tribe Foundation (FTF) is a child-focused,
              non-governmental, non-profit organisation committed to creating
              the conditions that enable vulnerable and disadvantaged children
              to learn, grow, thrive and realise their full potential.
            </p>

          </div>
        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Who We Are
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Child development is at the heart of our work.
              </h2>
            </div>

            <div className="space-y-6 text-[#AEB9CD] leading-8">
              <p>
                Favored Tribe Foundation is a child-focused organisation
                committed to advancing child development and creating
                opportunities for children, particularly those experiencing
                vulnerability and disadvantage.
              </p>

              <p>
                We recognise that poverty, limited access to quality
                education, inadequate family support, exposure to violence,
                and unsafe environments can affect children's learning,
                health, emotional well-being, protection, and future
                opportunities.
              </p>

              <p>
                Our approach recognises that sustainable improvements in
                children's well-being require more than addressing individual
                needs in isolation. Children are more likely to thrive when
                they have meaningful learning opportunities, when families
                and caregivers are equipped to provide stable and nurturing
                environments, and when systems and communities actively
                protect children from harm.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* STRATEGIC FOCUS */}
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
              FTF's overarching strategic focus is Child Development,
              supported by three interconnected strategic pillars.
            </p>
          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.number}
                  className="ftf-card p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins'] text-3xl font-extrabold text-[#4DD0E1]/30">
                      {pillar.number}
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


      {/* VISION & MISSION */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="grid gap-6 md:grid-cols-2">

            {/* VISION */}
            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <Eye className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <span className="mt-7 block font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Vision
              </span>

              <p className="mt-5 font-['Poppins'] text-xl font-semibold leading-9 text-white">
                A world where every child has the opportunity to learn,
                grow, thrive and realise their full potential.
              </p>

            </div>


            {/* MISSION */}
            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                <Target className="h-7 w-7 text-[#A78BFA]" />
              </div>

              <span className="mt-7 block font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Mission
              </span>

              <p className="mt-5 font-['Poppins'] text-xl font-semibold leading-9 text-white">
                To transform futures through kindness by strengthening the
                conditions that enable children to learn, grow, thrive and
                realise their full potential through education, family
                empowerment and child protection.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* THE NEED */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

            <div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                The Need
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Every child deserves an opportunity to reach their potential.
              </h2>

              <div className="mt-7 space-y-5 leading-8 text-[#AEB9CD]">

                <p>
                  Millions of children continue to face conditions that
                  limit their ability to learn, grow, remain protected, and
                  reach their full potential.
                </p>

                <p>
                  Poverty, inadequate access to quality education, poor
                  nutrition, violence, financial hardship, weak family
                  support, and unsafe environments are interconnected
                  challenges that can affect children's development.
                </p>

                <p>
                  FTF believes these realities require an integrated response
                  that addresses both children and the conditions surrounding
                  them.
                </p>

              </div>

            </div>


            <div className="rounded-[28px] border border-[#4DD0E1]/10 bg-[#0B1022] p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <HeartHandshake className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <h3 className="mt-7 font-['Poppins'] text-2xl font-bold text-white">
                Our Response
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                We seek to expand learning opportunities, strengthen
                families and promote safe and protective environments for
                children.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CORE VALUES */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="max-w-3xl">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              What Guides Us
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Our values shape how we serve, how we partner, and how we
              manage the responsibility entrusted to us.
            </p>
          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

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


      {/* CORE OBJECTIVES */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              What We Seek To Achieve
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Our Core Objectives
            </h2>

          </div>


          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1D293E] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5E35B1]/20 font-['Poppins'] text-sm font-bold text-[#4DD0E1]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="font-['Poppins'] font-semibold text-white">
                  {objective}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* THEORY OF CHANGE */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="mx-auto max-w-4xl">

            <div className="text-center">

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Theory of Change
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Strengthening the conditions around children.
              </h2>

            </div>


            <div className="mt-12 rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-10">

              <p className="text-lg leading-8 text-[#AEB9CD]">
                FTF believes that every child has potential, but the
                conditions in which a child grows can either enable or
                constrain that potential.
              </p>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl border border-white/10 bg-[#0B1022] p-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#4DD0E1]">
                    When
                  </span>

                  <p className="mt-2 leading-7 text-white">
                    children have access to meaningful learning
                    opportunities, families and caregivers are strengthened,
                    and children are supported by safe and protective
                    environments...
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0B1022] p-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-orange-400">
                    Then
                  </span>

                  <p className="mt-2 leading-7 text-white">
                    children are better positioned to develop their
                    knowledge, skills, confidence, resilience, and
                    capabilities...
                  </p>
                </div>

                <div className="rounded-2xl border border-[#4DD0E1]/20 bg-[#5E35B1]/10 p-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#4DD0E1]">
                    Ultimately
                  </span>

                  <p className="mt-2 font-['Poppins'] text-lg font-semibold leading-8 text-white">
                    stronger developmental outcomes, stronger families and
                    communities, and greater opportunities for children to
                    realise their potential.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FOUNDER */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

            {/* FOUNDER PHOTO */}
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

              <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 rounded-full bg-[#4DD0E1]/10 blur-2xl" />
              <div className="absolute -right-5 -top-5 -z-0 h-24 w-24 rounded-full bg-[#5E35B1]/20 blur-2xl" />
            </div>


            {/* FOUNDER CONTENT */}
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
                  Foundation (FTF), a child-focused nonprofit organisation
                  committed to transforming the lives of vulnerable children
                  through its focus on child development.
                </p>

                <p>
                  A graduate of Philosophy (B.Sc.), Caleb is an event
                  planner, decorator, consultant, and founder of Prime Events
                  Services. His professional journey includes serving as a
                  Program Intern at Ovie Brume Foundation from 2019 to 2022,
                  working in the hospitality industry as a chef, and
                  undergoing training in International Human Resource
                  Management (IHRM).
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


              {/* VISION BEHIND FTF */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#1D293E] p-6 md:p-7">

                <h3 className="font-['Poppins'] text-xl font-bold text-white">
                  The Vision Behind FTF
                </h3>

                <p className="mt-4 leading-7 text-[#AEB9CD]">
                  The vision for Favored Tribe Foundation was born during
                  Caleb's NYSC service as a teacher at St. Augustine Catholic Primary School II, a public primary
                  school in Bayelsa State. Witnessing children struggle with
                  poverty, hunger, poor health, and limited access to basic
                  educational needs inspired him to establish a platform that
                  would provide lasting support and opportunities for
                  vulnerable children beyond the classroom.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FOUNDER MESSAGE */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">

          <div className="mx-auto max-w-4xl">

            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-12">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20 text-3xl text-[#4DD0E1]">
                “
              </div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                A Message from the Founder
              </span>

              <blockquote className="mt-6 font-['Poppins'] text-xl font-medium leading-9 text-white md:text-2xl md:leading-10">
                “Every child deserves the opportunity to learn, grow, and
                achieve their full potential. At Favored Tribe Foundation,
                we are committed to creating lasting change by giving
                vulnerable children hope, opportunity, and a brighter
                future. Together with our partners, donors, and volunteers,
                we can transform lives—one child at a time.”
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-6">

                <p className="font-['Poppins'] font-bold text-white">
                  Sunday Caleb
                </p>

                <p className="mt-1 text-sm text-[#4DD0E1]">
                  Founder & President, Favored Tribe Foundation
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">

          <div className="overflow-hidden rounded-[32px] border border-[#4DD0E1]/10 bg-gradient-to-br from-[#1D293E] to-[#11182B] p-8 text-center md:p-12">

            <h2 className="font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Help us transform futures through kindness.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#AEB9CD]">
              Whether you volunteer, partner, donate, or help spread the
              word, your contribution can help create stronger conditions
              for children and families to thrive.
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

export default About;