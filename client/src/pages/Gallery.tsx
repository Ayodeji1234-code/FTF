import { useState } from "react";
import {
  Camera,
  Heart,
  Users,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    image: "/gallery/education.jpg",
    title: "Education & Learning",
    category: "Education",
    description:
      "Creating opportunities for children to learn, develop, and thrive.",
  },
  {
    image: "/gallery/community.jpg",
    title: "Community Engagement",
    category: "Community",
    description:
      "Working alongside communities to strengthen environments for children.",
  },
  {
    image: "/gallery/family.jpg",
    title: "Family Empowerment",
    category: "Family",
    description:
      "Supporting families and caregivers to build stronger, resilient households.",
  },
  {
    image: "/gallery/child-protection.jpg",
    title: "Child Protection",
    category: "Protection",
    description:
      "Promoting safety, dignity, rights, and well-being for every child.",
  },
  {
    image: "/gallery/outreach.jpg",
    title: "Community Outreach",
    category: "Community",
    description:
      "Connecting with communities through meaningful outreach and engagement.",
  },
  {
    image: "/gallery/children.jpg",
    title: "Children at the Centre",
    category: "Education",
    description:
      "Keeping children at the heart of everything we do.",
  },
];

const filters = ["All", "Education", "Family", "Protection", "Community"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#5e35b1]/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center ftf-fade-up">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
              <Camera size={30} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Gallery
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Moments that{" "}
              <span className="text-[#4DD0E1]">tell our story.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Explore moments from our work, community engagement, outreach,
              and commitment to creating better futures for children and
              families.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pt-12">
        <div className="ftf-container">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-[#5e35b1] text-white shadow-lg shadow-[#5e35b1]/20"
                    : "border border-white/10 bg-white/5 text-[#AEB9CD] hover:border-[#4DD0E1]/30 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d293e] text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-[#4DD0E1] backdrop-blur-md">
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center bg-[#5e35b1]/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5e35b1]">
                      <Camera size={21} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-6 text-[#AEB9CD]">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[#AEB9CD]">
                No gallery items available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WHAT THE GALLERY REPRESENTS */}
      <section className="ftf-section bg-[#080d20]">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              What we capture
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              People, purpose, and progress.
            </h2>

            <p className="mt-5 leading-8 text-[#AEB9CD]">
              Our work is centred on people. Every programme and partnership
              is designed to strengthen the conditions that allow children to
              learn, grow, thrive, and realise their full potential.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="ftf-card p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <GraduationCap size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Children Learning
              </h3>

              <p className="mt-3 leading-7 text-[#AEB9CD]">
                Supporting meaningful opportunities for children to learn and
                develop.
              </p>
            </div>

            <div className="ftf-card p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <Users size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Stronger Families
              </h3>

              <p className="mt-3 leading-7 text-[#AEB9CD]">
                Strengthening families and caregivers so children can thrive.
              </p>
            </div>

            <div className="ftf-card p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <ShieldCheck size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Safer Environments
              </h3>

              <p className="mt-3 leading-7 text-[#AEB9CD]">
                Promoting safety, dignity, protection, and well-being for
                children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#17102f] via-[#12182c] to-[#091827] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#5e35b1]/20 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-[#4DD0E1]">
                  <Heart size={18} />
                  <span className="text-sm font-bold uppercase tracking-[0.15em]">
                    Be part of the story
                  </span>
                </div>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Help us create more moments worth remembering.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
                  Whether through volunteering, partnership, advocacy, or
                  support, your contribution can help strengthen opportunities
                  for children and families.
                </p>
              </div>

              <Link
                to="/get-involved"
                className="ftf-btn-primary whitespace-nowrap"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <div
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#10172a]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-full object-contain"
            />

            <div className="p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4DD0E1]">
                {selectedImage.category}
              </span>

              <h3 className="mt-1 text-xl font-bold text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}