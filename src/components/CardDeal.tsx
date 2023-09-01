import { FC } from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import { Button } from "./Button";

export const CardDeal: FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        repellendus voluptates nihil commodi quos ratione quisquam ipsa officia
        maxime ullam ut praesentium neque itaque rem saepe aliquam ex placeat
        libero?
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>
  </section>
);
