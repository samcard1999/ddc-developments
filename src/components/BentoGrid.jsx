import React from "react";

const bentoItems = [
  {
    title: "Actions",
    description:
      "Streamline inbox management with bulk actions like marking as read or archiving all.",
    image: "/assets/bento/actions.png",
    className: "md:col-span-2"
  },
  {
    title: "Bell",
    description:
      "A recognizable notification indicator, alerting users to updates using visual cues.",
    image: "/assets/bento/bell.png",
    className: ""
  },
  {
    title: "Inbox",
    description:
      "Manage all your messages from a single, unified interface with smart filters.",
    image: "/assets/bento/inbox.png",
    className: ""
  }
];

const BentoGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-12 bg-[#070f1d] text-[#dcdfe2]">
      {bentoItems.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl overflow-hidden bg-gradient-to-br from-[#162d57] to-[#070f1d] shadow-xl transition hover:scale-[1.015] duration-300 ${item.className}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#dcdfe2] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#bac0c6]">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BentoGrid;
