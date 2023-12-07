import React from "react";

import QualfiedTeachrsCard from "./QUAALFIED TEACHRS CARD/QualfiedTeachrsCard";

const QualfiedTeachrsCards = (props) => (
  <section className="py-10">
    <article className="text-center">
      <span className="text-base text-cyan-500 font-bold">Our Team</span>

      <p className="text-center font-bold text-2xl">
        Meet our team and teacher who <br /> teaches you online
      </p>
    </article>
    <article className="flex flex-row py-16 relative justify-evenly ">
      <QualfiedTeachrsCard />
      <QualfiedTeachrsCard />
      <QualfiedTeachrsCard />
      <QualfiedTeachrsCard />
    </article>
  </section>
);

export default QualfiedTeachrsCards;
