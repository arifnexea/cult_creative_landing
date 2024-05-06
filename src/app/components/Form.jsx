import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";

const BrandForm = ({ color }) => {
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
        toast.success(val.message);
        setLoading(false);
        resetForm();
      })
      .catch((err) => alert(JSON.stringify(err)))
      .finally(() => setLoading(false));
  };

  const schema = yup.object({
    name: yup
      .string()
      .min(5, "At least 5 characters required")
      .required("Required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Required"),
    phoneNumber: yup
      .number()
      .positive("Invalid character “-”")
      .integer("Invalid character “.”")
      // Hack: we're not using a regex to parse phone numbers, use this to force a minimum number of digits
      // "012 345 6789", minus two digits in case of some unusually short phone number
      .min(100_000_00 /*00*/, "Too short")
      // "+60 12 3456 7890", plus two digits for redundancy
      .max(999_99_9999_9999_99, "Too long")
      .required("Required"),
    companyName: yup.string().required("Required"),
    companySize: yup.string().required("Required"),
    industry: yup.string().required("Required"),
    otherIndustry: yup.string(),
    monthlyInfluencerBudget: yup
      .number()
      // We assume there is no need for fractional budgets
      .integer("Must be an integer")
      .min(1, "Must be positive")
      // We want the value to fit in an `Int`, and `2**32 - 1` is more than enough, but use 2 billion because it is a "nice number"
      .max(2_000_000_000, "Too high")
      .required("Required"),
    instaUsername: yup.string(),
    tiktokUsername: yup.string(),
  });

  return (
    <section className="flex items-center justify-center">
      <div className="basis-1/2 hidden xl:block">
        <Image
          src="https://storage.googleapis.com/landing-cultcreative/main/Cult%20Creative%201.jpg"
          alt="test"
          width={600}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>
      <div className="flex flex-col gap-5 xl:basis-1/2 text-[#F4F4F4]">
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
            target="_blank"
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
              otherIndustry: "",
              monthlyInfluencerBudget: "",
              instaUsername: "",
              tiktokUsername: "",
            }}
            onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
            validationSchema={schema}
          >
            <Form>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Field name="name">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Name"
                        type="text"
                        field={field}
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
                        label="Email Address"
                        type="email"
                        field={field}
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
                        label="Phone Number"
                        type="number"
                        field={field}
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
                        label="Company Name"
                        type="text"
                        field={field}
                        color={color}
                        errors={touched.companyName && errors.companyName}
                      />
                    </>
                  )}
                </Field>
                <div className="sm:col-span-3">
                  <Field name="companySize">
                    {({ field, form: { errors, touched } }) => (
                      <>
                        <label
                          htmlFor="companySize"
                          className="block text-sm font-medium leading-6"
                        >
                          Company Size
                        </label>
                        <div className="mt-2">
                          <select
                            name="companySize"
                            {...field}
                            className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${errors.companySize
                              && touched.companySize
                              && "border-red-500"
                              }`}
                          >
                            <option value="">...</option>
                            <option>1 to 10</option>
                            <option>11 to 50</option>
                            <option>51 to 100</option>
                            <option>101 to 200</option>
                            <option>Over 200</option>
                          </select>
                        </div>
                        {errors.companySize && touched.companySize && (
                          <p class="text-red-500 text-xs mx-2 my-1">
                            {errors.companySize}
                          </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="sm:col-span-3">
                  <Field name="industry">
                    {({ field, form: { errors, touched } }) => (
                      <>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium leading-6"
                        >
                          Industry
                        </label>
                        <div className="mt-2">
                          <select
                            name="industry"
                            {...field}
                            className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${errors.industry
                              && touched.industry
                              && "border-red-500"
                              }`}
                          >
                            <option value="">...</option>
                            <option>Banking & Finance</option>
                            <option>Beauty</option>
                            <option>Lifestyle</option>
                            <option>Health & Wellness</option>
                            <option>F&B</option>
                            <option>Fashion</option>
                            <option>Charity or NGO</option>
                            <option>Education</option>
                            <option>Events</option>
                            <option>Motherhood & Family</option>
                            <option>Hotel & Travel</option>
                            <option>Jewellery</option>
                            <option>Footwear</option>
                            <option>Art</option>
                            <option>Technology</option>
                            <option>Others</option>
                          </select>
                        </div>
                        {field.value.includes("Others") && (
                          <Field
                            name="otherIndustry"
                            validate={(value) => value === "" ? "Required" : ""}
                          >
                            {({ field, form: { errors, touched } }) => (
                              <>
                                <FormInput
                                  placeholder="Please specify your industry"
                                  type="text"
                                  {...field}
                                  color={color}
                                  errors={touched.otherIndustry && errors.otherIndustry}
                                />
                              </>
                            )}
                          </Field>
                        )}
                        {errors.industry && touched.industry && (
                          <p class="text-red-500 text-xs mx-2 my-1">
                            {errors.industry}
                          </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <Field name="monthlyInfluencerBudget">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Monthly Influencer Budget"
                        type="number"
                        field={field}
                        color={color}
                        errors={touched.monthlyInfluencerBudget && errors.monthlyInfluencerBudget}
                      />
                    </>
                  )}
                </Field>
                <Field name="instaUsername">
                  {({ field, form: { errors, touched } }) => (
                    <FormInput
                      label="Instagram Username"
                      type="text"
                      field={field}
                      color={color}
                      errors={touched.instaUsername && errors.instaUsername}
                    />
                  )}
                </Field>
                <Field name="tiktokUsername">
                  {({ field, form: { errors, touched } }) => (
                    <FormInput
                      label="TikTok Username"
                      type="text"
                      field={field}
                      color={color}
                      errors={touched.tiktokUsername && errors.tiktokUsername}
                    />
                  )}
                </Field>
              </div>
              <div className="mt-10 text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  disabled={loading}
                  className={`${loading ? "bg-slate-300" : "bg-slate-100 "}
                  py-2 px-12 rounded-full text-[${color}] font-serif uppercase inline-flex items-center gap-5`}
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
