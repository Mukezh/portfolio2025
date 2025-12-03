import React, { useState } from "react";
import { WriteupComponent } from "./WriteupComponent";
import { DetailedWriteup } from "./DetailedWriteup";

export const Writeup: React.FC = () => {
  const [selectedWriteup, setSelectedWriteup] = useState<string | null>(null);

  const writeup = [
    {
      slug: "Javascript",
      date: "14-10-2025",
      head: "Javascript behind the scenes",
    },
    { slug: "Typescript", date: "14-10-2025", head: "TS behind the scenes" },
    {
      slug: "SQL vs NOSQL",
      date: "18-10-2025",
      head: "SQL and NoSQL behind the scenes",
    },
  ];

  if (selectedWriteup) {
    return (
      <DetailedWriteup
        slug={selectedWriteup}
        onBack={() => setSelectedWriteup(null)}
      />
    );
  }

  return (
    <div>
      {/*{writeup.map((w) => (
        <WriteupComponent
          key={w.slug}
          date={w.date}
          head={w.head}
          onClick={() => setSelectedWriteup(w.slug)}
        />
      ))}*/}{" "}
      //WILL WRITE SOON
    </div>
  );
};
