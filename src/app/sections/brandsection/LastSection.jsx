import React from "react";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

const LastSection = ({ color }) => {
  return (
    <main className="bg-[#F4F4F4] py-10 px-20">
      <Footer hoverText={color} />
      <div className="flex gap-3 mt-10 justify-end">
        <a href="https://wa.me/60162678757" target="_blank">
          <Icon icon="uil:whatsapp-alt" width={30} />
        </a>
        <a href="https://www.instagram.com/cultcreativeasia/" target="_blank">
          <Icon icon="uil:instagram-alt" width={30} />
        </a>
        <a href="https://my.linkedin.com/company/cultcreativeapp" target="_blank">
          <Icon icon="uil:linkedin" width={30} />
        </a>
        <a href="https://www.youtube.com/@cultcreativeapp" target="_blank">
          <Icon icon="uil:youtube" width={30} />
        </a>
      </div>
    </main>
  );
};

export default LastSection;
