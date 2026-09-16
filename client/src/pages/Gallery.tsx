import { useState } from "react";
import {
  Camera,
  Heart,
  ArrowRight,
  X,
  ImageOff,
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

const filters = [
  "All",
  "Education",
  "Family",
  "Protection",
  "Community",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>(
    {},
  );

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter,
        );

  const handleImageError = (image: string) => {
    setImageErrors((previous) => ({
      ...previous,
      [image]: true,
    }));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="ftf-page">
      {/* =========================================================
          HERO
      ========================================================= */}
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
              <span className="text-[#4DD0E1]">
                tell our story.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              A glimpse into our work, community engagement, and the
              people at the heart of Favored Tribe Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTERS
      ========================================================= */}
      <section className="pt-10 md:pt-12">
        <div className="ftf-container">
          <div
            className="flex flex-wrap justify-center gap-2.5"
            role="group"
            aria-label="Gallery filters"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "bg-[#5e35b1] text-white shadow-lg shadow-[#5e35b1]/20"
                      : "border border-white/10 bg-white/5 text-[#AEB9CD] hover:border-[#4DD0E1]/30 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#71809A]">
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "moment" : "moments"}
              </p>
            </div>

            <p className="hidden text-sm text-[#71809A] sm:block">
              Click an image to view it
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const hasImageError = imageErrors[item.image];

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    if (!hasImageError) {
                      setSelectedImage(item);
                    }
                  }}
                  className={`group overflow-hidden rounded-[24px] border border-white/10 bg-[#1d293e] text-left transition duration-300 ${
                    hasImageError
                      ? "cursor-default"
                      : "hover:-translate-y-1 hover:border-[#4DD0E1]/20 hover:shadow-2xl hover:shadow-black/20"
                  }`}
                  aria-label={
                    hasImageError
                      ? `${item.title} image unavailable`
                      : `View ${item.title}`
                  }
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#111a2d]">
                    {hasImageError ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                          <ImageOff size={25} />
                        </div>

                        <p className="mt-4 text-sm font-semibold text-white">
                          Photo coming soon
                        </p>

                        <p className="mt-2 max-w-xs text-xs leading-5 text-[#7f8ba3]">
                          More moments from our work and community
                          activities will be added here.
                        </p>
                      </div>
                    ) : (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          onError={() =>
                            handleImageError(item.image)
                          }
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-transparent opacity-80" />

                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-[#4DD0E1] backdrop-blur-md">
                            {item.category}
                          </span>

                          <h3 className="mt-2 text-lg font-bold text-white">
                            {item.title}
                          </h3>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center bg-[#5e35b1]/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5e35b1] shadow-xl">
                            <Camera size={21} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <div className="p-4">
                    <p className="text-sm leading-6 text-[#AEB9CD]">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* EMPTY STATE */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <Camera size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                No photos yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-[#AEB9CD]">
                There are no gallery moments in this category yet.
                Check back as our work continues to grow.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="ftf-section bg-[#080d20]">
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
                  Through volunteering, partnership, advocacy, or
                  support, you can help create stronger futures for
                  children and families.
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

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={closeLightbox}
        >
          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close image"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {/* IMAGE */}
          <div
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#10172a] shadow-2xl"
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

              <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}