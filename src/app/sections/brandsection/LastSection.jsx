import React from "react";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

const LastSection = ({ color }) => {
  return (
    <main className="bg-[#F4F4F4] py-10 px-20">
      <Footer hoverText={color} />
      <div className="flex gap-3 mt-10 justify-end">
        <Icon
          icon="ic:baseline-whatsapp"
          style={{ color: "black" }}
          width={30}
        />
        <Icon
          icon="material-symbols:globe"
          style={{ color: "black" }}
          width={30}
        />
        <Icon
          icon="mingcute:google-fill"
          style={{ color: "black" }}
          width={30}
        />
        <Icon icon="mdi:instagram" style={{ color: "black" }} width={30} />
      </div>
    </main>
  );
};

export default LastSection;
