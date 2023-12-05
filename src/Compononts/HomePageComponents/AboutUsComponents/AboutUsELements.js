import React from "react";

import AboutUsElement from "./AboutUsElement/AboutUsElement";
import {
  PiCertificateThin,
  PiVideoLight,
  PiStudentDuotone,
} from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

const AboutUsElements = (props) => (
  <section className="flex justify-evenly text-white py-16 bg-[#6952ff] relative">
    <AboutUsElement content="Online Certificate">
      <PiCertificateThin className="text-white text-6xl" />
    </AboutUsElement>

    <AboutUsElement content="Top Instructor">
      <FaChalkboardTeacher className="text-white text-6xl" />
    </AboutUsElement>

    <AboutUsElement content="unlimited online courses">
      <PiVideoLight className="text-white text-6xl" />
    </AboutUsElement>

    <AboutUsElement content="Experianced Members">
      <PiStudentDuotone className="text-white text-6xl" />
    </AboutUsElement>
  </section>
);

export default AboutUsElements;
