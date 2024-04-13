"use client";
import React, { Suspense, useEffect } from "react";
import Header from "@/app/components/Header";
import LastSection from "@/app/sections/brandsection/LastSection";
import { motion } from "framer-motion";
import FormInput from "@/app/components/FormInput";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import countries from "../../contants/countries.json";

function CreatorForm() {
  const color = "#006D53";

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email("Invalid email address").required(),
    pronoun: yup.string().required(),
    nationality: yup.string().required(),
    birthDate: yup.string().required(),
    location: yup.string().min(100, "Minumum 100 chars").required(),
    instaUsername: yup.string().required(),
    tiktokUsername: yup.string().required(),
    language: yup.string().required(),
    interests: yup.string().required(),
  });

  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <section className="flex p-10  items-center justify-center bg-[#006D53]">
          <div className="basis-1/2 hidden xl:block">
            <Image
              src={
                "https://storage.googleapis.com/landing_page_cult/creators/Cult%20Creative%202.jpg"
              }
              alt="creator"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 ">
              <h1 className="sm:text-8xl text-8xl -tracking-[.35rem]">
                get{" "}
                <span className="font-times italic -tracking-[.6rem] text-8xl">
                  started.
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-bold -tracking-[.05rem]">
                We’re excited to work together. <br />
                Tell us who you are and we’ll get back to you with suitable
                brand deals.
              </h1>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  pronoun: "",
                  nationality: "",
                  birthDate: "",
                  location: "",
                  instaUsername: "",
                  tiktokUsername: "",
                  language: "",
                  interests: "",
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={schema}
              >
                <Form>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
                    <Field name="name">
                      {({ field, form: { errors } }) => (
                        <>
                          <FormInput
                            field={field}
                            type="text"
                            label={"Name"}
                            color={color}
                            errors={errors.name}
                          />
                        </>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form: { errors }, meta }) => (
                        <FormInput
                          field={field}
                          label={"Email Address"}
                          type={"email"}
                          color={color}
                          errors={errors.email}
                        />
                      )}
                    </Field>

                    <div className="sm:col-span-3">
                      <Field name="pronoun">
                        {({ field, form: { errors }, meta }) => (
                          <>
                            <label
                              htmlFor="pronoun"
                              className="block text-sm font-medium leading-6"
                            >
                              Pronoun
                            </label>
                            <div className="mt-2">
                              <select
                                name="pronoun"
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.pronoun && "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                <option value="he">He/Him </option>
                                <option value="she">She/Her </option>
                                <option value="they">They/Them</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                            {errors.pronoun && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.pronoun}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="sm:col-span-3">
                      <Field name="nationality">
                        {({ field, form: { errors }, meta }) => (
                          <>
                            <label
                              htmlFor="nationality"
                              className="block text-sm font-medium leading-6"
                            >
                              Nationality
                            </label>
                            <div className="mt-2">
                              <select
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.nationality && "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                {countries.map((elem) => {
                                  return (
                                    <option key={elem.code} value={elem.name}>
                                      {elem.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            {errors.nationality && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.nationality}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <FormInput
                      label={"Date of Birth"}
                      name={"date-of-birth"}
                      type={"date"}
                      color={color}
                    />
                    <FormInput
                      label={"Current Location"}
                      name={"location"}
                      type={"text"}
                      color={color}
                    />
                    <FormInput
                      label={"Instagram Username"}
                      name={"instagram"}
                      type={"text"}
                      color={color}
                    />
                    <FormInput
                      label={"Tik Tok Username"}
                      name={"tiktok"}
                      type={"text"}
                      color={color}
                    />
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="languages"
                        className="block text-sm font-medium leading-6"
                      >
                        Languages
                      </label>
                      <div className="mt-2">
                        <select
                          value={["malay", "english"]}
                          className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6  bg-[${color}]`}
                        >
                          <option value="english">English</option>
                          <option value="malay">Malay </option>
                          <option value="mandarin">Mandarin </option>
                          <option value="tamil">Tamil </option>
                          <option value="hindi">Hindi</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <FormInput
                      label={"Interests"}
                      name={"interests"}
                      type={"text"}
                      color={color}
                    />
                  </div>
                  <div className="mt-10 text-center">
                    {/* <Link href={"/creators/contactForm"}> */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      type="submit"
                      className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase flex-none`}
                    >
                      Submit
                    </motion.button>
                    {/* </Link> */}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
        <LastSection color={"#006D53"} />
      </Suspense>
    </main>
  );
}

export default CreatorForm;
