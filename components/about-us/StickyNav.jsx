"use client";

const menuItems = [
  { label: "History", id: "history" },
  { label: "Leadership", id: "leadership" },
  { label: "Strength", id: "strength" },
  { label: "Philosophy", id: "philosophy" },
];

const StickyNav = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = 100; // header height adjust here
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-[#e9e4d8] border-b border-red-500">

      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center gap-6 sm:gap-10 text-sm sm:text-base font-medium text-[#1c1c5a]">

        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => handleScroll(item.id)}
            className="hover:text-[#A30133] transition"
          >
            {item.label}
          </button>
        ))}

      </div>
    </div>
  );
};

export default StickyNav;