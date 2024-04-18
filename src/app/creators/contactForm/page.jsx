"use client";
import React, { Suspense } from "react";
import Header from "@/app/components/Header";
import LastSection from "@/app/sections/brandsection/LastSection";
import { motion } from "framer-motion";
import FormInput from "@/app/components/FormInput";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useState } from "react";

import countries from "../../contants/countries.json";

function CreatorForm() {
  const color = "#006D53";

  const [loading, setLoading] = useState();
  const [others, setOthers] = useState({
    language: false,
    interests: false,
    employmentType: false,
  });

  const schema = yup.object({
    name: yup
      .string()
      .min(5, "Minumum is 5 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    pronoun: yup.string().required("Pronous is required"),
    phoneNumber: yup.number().required("Phone number is required"),
    employmentType: yup.string().required("Employment type is required"),
    nationality: yup.string().required("Nationality is required"),
    birthDate: yup.string().required("Birth date is required"),
    location: yup
      .string()
      .min(20, "Minumum 20 characters")
      .required("Location is required"),
    instaUsername: yup.string().required("Instagram username is required"),
    tiktokUsername: yup.string().required("Tiktok username is required"),
    language: yup.string().required("Language is required"),
    interests: yup.array().required("Interest is required"),
    // others: yup.object({
    //   language: yup.string().required("Please specify your language"),
    // }),
  });

  const onSubmit = async (value, resetForm) => {
    setLoading(true);
    await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
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
      .finally(() => {
        setLoading(false);
      });
  };

  const validateOthers = (value) => {
    let error;
    if (value === "") {
      error = "Please specify your language";
    }
    return error;
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <section className="flex p-10 gap-5 items-center justify-center bg-[#006D53]">
          <div className="basis-1/2 hidden xl:block">
            <Image
              src={
                "https://storage.googleapis.com/landing_page_cult/creators/Cult%20Creative%202.jpg"
              }
              alt="creator"
              width={600}
              height={600}
              className="rounded-lg mx-auto"
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
                  phoneNumber: "",
                  employmentType: "",
                  nationality: "",
                  birthDate: "",
                  location: "",
                  instaUsername: "",
                  tiktokUsername: "",
                  language: "",
                  others: {
                    language: "",
                  },
                  interests: [],
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
                      {({ field, form: { errors, touched }, meta }) => (
                        <FormInput
                          field={field}
                          label={"Email Address"}
                          type={"email"}
                          color={color}
                          errors={touched.email && errors.email}
                        />
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
                    <Field name="employmentType">
                      {({ field, form: { errors, touched }, meta }) => (
                        <FormInput
                          field={field}
                          label={"Current Employment Type"}
                          type={"text"}
                          color={color}
                          errors={
                            touched.employmentType && errors.employmentType
                          }
                        />
                      )}
                    </Field>

                    <div className="sm:col-span-3">
                      <Field name="pronoun">
                        {({ field, form: { errors, touched }, meta }) => (
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
                                  errors.pronoun &&
                                  touched.pronoun &&
                                  "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                <option value="he">He/Him </option>
                                <option value="she">She/Her </option>
                                <option value="they">They/Them</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                            {errors.pronoun && touched.pronoun && (
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
                        {({ field, form: { errors, touched }, meta }) => (
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
                                  errors.nationality &&
                                  touched.nationality &&
                                  "border-red-500"
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
                            {errors.nationality && touched.nationality && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.nationality}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <Field name="birthDate">
                      {({ field, form: { errors, touched }, meta }) => (
                        <FormInput
                          label={"Date of Birth"}
                          type={"date"}
                          field={field}
                          color={color}
                          errors={touched.birthDate && errors.birthDate}
                        />
                      )}
                    </Field>
                    <Field name="location">
                      {({ field, form: { errors, touched }, meta }) => (
                        <FormInput
                          label={"Current Location"}
                          field={field}
                          type={"text"}
                          color={color}
                          errors={touched.location && errors.location}
                        />
                      )}
                    </Field>
                    <Field name="instaUsername">
                      {({ field, form: { errors, touched }, meta }) => (
                        <FormInput
                          label={"Instagram Username"}
                          field={field}
                          type={"text"}
                          color={color}
                          errors={touched.instaUsername && errors.instaUsername}
                        />
                      )}
                    </Field>
                    <Field name="tiktokUsername">
                      {({ field, form: { errors, touched }, meta }) => (
                        <FormInput
                          label={"Tik Tok Username"}
                          field={field}
                          type={"text"}
                          color={color}
                          errors={
                            touched.tiktokUsername && errors.tiktokUsername
                          }
                        />
                      )}
                    </Field>
                    <div className="sm:col-span-3">
                      <Field name="language">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="language"
                              className="block text-sm font-medium leading-6"
                            >
                              Language
                            </label>
                            <div className="mt-2">
                              <select
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6  bg-[${color}] ${
                                  errors.language &&
                                  touched.language &&
                                  "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                <option value="english">English</option>
                                <option value="malay">Malay </option>
                                <option value="mandarin">Mandarin </option>
                                <option value="tamil">Tamil </option>
                                <option value="hindi">Hindi</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                            {field.value.includes("others") && (
                              <Field
                                name="others.language"
                                validate={validateOthers}
                              >
                                {({ field, form: { errors, touched } }) => (
                                  <>
                                    <FormInput
                                      {...field}
                                      placeholder="Please specify your language"
                                      type={"text"}
                                      color={color}
                                      errors={
                                        touched?.others?.language &&
                                        errors?.others?.language
                                      }
                                    />
                                  </>
                                )}
                              </Field>
                            )}
                            {errors.language && touched.language && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.language}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="sm:col-span-3">
                      <Field name={"interests"}>
                        {({ field, form: { errors, touched }, meta }) => (
                          <>
                            <select
                              {...field}
                              multiple={true}
                              className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6  bg-[${color}] ${
                                errors.interests &&
                                touched.interests &&
                                "border-red-500"
                              }`}
                            >
                              <option value="NY">New York</option>
                              <option value="SF">San Francisco</option>
                              <option value="CH">Chicago</option>
                              <option value="OTHER">Other</option>
                            </select>
                            {errors.interests && touched.interests && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.interests}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      type="submit"
                      disabled={loading}
                      className={`${
                        loading ? "bg-slate-300" : "bg-slate-100 "
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
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      type="submit"
                      className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase inline-flex items-center gap-5`}
                    >
                      Submit
                    </motion.button> */}
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
