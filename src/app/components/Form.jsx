import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const BrandForm = ({ image, color }) => {
  const [loading, setLoading] = React.useState();

  const onSubmit = async (value, resetForm) => {
    setLoading(true);
    await fetch("/api/sendBrand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((val) => {
        alert(val.message);
        setLoading(false);
        resetForm();
      })
      .catch((err) => alert(JSON.stringify(err)))
      .finally(() => setLoading(false));
  };

  const schema = yup.object({
    name: yup.string()
      .min(5, "At least 5 characters required")
      .required("Required"),
    email: yup.string()
      .email("Invalid email address")
      .required("Required"),
    phoneNumber: yup.number()
      .positive('Invalid character "-"')
      .integer('Invalid character "."')
      // Hack: we're not using a regex to parse phone numbers, use this to force a minimum number of digits
      // "012 345 6789", minus two digits in case of some unusually short phone number
      .min(100_000_00/*00*/, "Too short")
      // "+60 12 3456 7890", plus two digits for redundancy
      .max(999_99_9999_9999_99, "Too long")
      .required("Required"),
    companyName: yup.string()
      .required("Required"),
    companySize: yup.number()
      .integer("Number must be an integer")
      // A value less than 1 is not "too low", it's outright invalid
      .min(1, "Must be positive")
      // Maximum value of 32-bit signed integer, we want this to fit in an `Int` in the database
      .max(2_147_483_647, "Too high")
      .required("Required"),
    industry: yup.string()
      .required("Required"),
    monthlyInfluencerBudget: yup.number()
      // We assume there is no need for fractional budgets
      .integer("Must be an integer")
      .min(1, "Must be positive")
      .max(2_147_483_647, "Too high")
      .required("Required"),
  });

  return (
    <section className="flex items-center justify-center">
      <div className="basis-1/2 hidden xl:block">
        <Image
          src={
            "https://storage.googleapis.com/landing_page_cult/main/Cult%20Creative%201.jpg"
          }
          alt="test"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5 xl:basis-1/2">
        <h1
          className="md:text-[7rem] text-6xl font-aileron md:-tracking-[.5rem] text-pretty max-w-[30rem]"
          style={{
            lineHeight: 0.75,
          }}
        >
          power up <span className="font-times">your</span>{" "}
          <span className="font-times italic -tracking-[.5rem]">marketing</span>
        </h1>
        <div>
          <a
            href="https://calendly.com/danishmokhtar/30min?month=2024-03"
            target="__blank"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-aileron uppercase flex-none`}
            >
              Book a call
            </motion.button>
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold -tracking-[.05rem]">
            Want to get in touch? Tell us what you need.
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              companyName: "",
              companySize: "",
              industry: "",
              monthlyInfluencerBudget: "",
            }}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values));
              onSubmit(values, resetForm);
            }}
            validationSchema={schema}
          >
            <Form>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
                <Field name="name">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="text"
                        label={"Name"}
                        color={color}
                        errors={touched.name && errors.name}
                      />
                    </>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="email"
                        label={"Email Address"}
                        color={color}
                        errors={touched.email && errors.email}
                      />
                    </>
                  )}
                </Field>
                <Field name="phoneNumber">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="number"
                        label={"Phone Number"}
                        color={color}
                        errors={touched.phoneNumber && errors.phoneNumber}
                      />
                    </>
                  )}
                </Field>
                <Field name="companyName">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="text"
                        label={"Company Name"}
                        color={color}
                        errors={touched.companyName && errors.companyName}
                      />
                    </>
                  )}
                </Field>
                <Field name="companySize">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="number"
                        label={"Company Size"}
                        color={color}
                        errors={touched.companySize && errors.companySize}
                      />
                    </>
                  )}
                </Field>
                <Field name="industry">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="text"
                        label={"Industry"}
                        color={color}
                        errors={touched.industry && errors.industry}
                      />
                    </>
                  )}
                </Field>
                <Field name="monthlyInfluencerBudget">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        field={field}
                        type="number"
                        label={"Monthly Influencer Budget"}
                        color={color}
                        errors={touched.monthlyInfluencerBudget && errors.monthlyInfluencerBudget}
                      />
                    </>
                  )}
                </Field>
              </div>
              <div className="mt-10 text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  disabled={loading}
                  className={`${loading ? "bg-slate-300" : "bg-slate-100 "
                    } py-2 px-12 rounded-full text-[${color}] font-serif uppercase inline-flex items-center gap-5`}
                >
                  {loading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-dasharray="15"
                        stroke-dashoffset="15"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M12 3C16.9706 3 21 7.02944 21 12"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="15;0"
                        />
                        <animateTransform
                          attributeName="transform"
                          dur="1.5s"
                          repeatCount="indefinite"
                          type="rotate"
                          values="0 12 12;360 12 12"
                        />
                      </path>
                    </svg>
                  )}
                  Submit
                </motion.button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default BrandForm;
