import Image from "next/image";
import Link from "next/link";

const ListItem = ({ href, target, children }) => (
  <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
    <Link
      href={href}
      target={target}
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <section className="text-[#231F20]">
      <div className="flex item-start gap-10 xl:gap-40 flex-wrap">
        <div className="grow">
          <Image
            src="/images/logo1.png"
            alt="Cult Creative footer logo"
            width={130}
            height={130}
          />
          <div className="mt-10">
            <p className="uppercase font-light">202001018157 (1374477-W)</p>
            <p className="uppercase font-light">Copyright 2024</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl -tracking-[.1rem]">Cult Careers</p>
          <ul className="font-light text-sm">
            <ListItem
              href="https://www.cultcreative.asia/employers"
              target="_blank"
            >
              Hire a Creative
            </ListItem>
            <ListItem
              href="https://web.cultcreative.asia/?utm_source=wix&utm_medium=job_page&utm_campaign=general_CCWL_website"
              target="_blank"
            >
              Apply to Creative Jobs
            </ListItem>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl -tracking-[.1rem]">Company</p>
          <ul className="font-light text-sm">
            <ListItem href="/about">
              About Us
            </ListItem>
            <ListItem href="/faq">
              FAQ
            </ListItem>
            <ListItem href="/contact">
              Contact Us
            </ListItem>
            <ListItem href="/resources">
              Resources
            </ListItem>
            <ListItem href="/newsroom">
              Newsroom
            </ListItem>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl -tracking-[.1rem]">Support</p>
          <ul className="font-light text-sm">
            <ListItem href="/privacy-policy">
              Privacy Policy
            </ListItem>
            <ListItem href="/terms-and-conditions">
              Terms and Conditions
            </ListItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
