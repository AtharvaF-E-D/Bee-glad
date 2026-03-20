/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getJobs } from "@/lib/appwrite/jobs";
import React, { useEffect, useState } from "react";

type Job = {
  $id: string;
  title: string;
  type: string;
  workMode?: string;
  experience?: string;
  focus?: string;
  published?: boolean;
};

const Card = ({ job }: { job: Job }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute -left-1 top-0 h-full w-full bg-yellow-400 rounded-2xl"></div>
      </div>

      <div className="relative bg-linear-to-br from-[#1f1f1f] to-[#2a2a2a]
                      border border-white/20
                      rounded-2xl
                      p-8
                      text-white">

        <h2 className="text-2xl font-light mb-4">{job.title}</h2>

        <div className="flex gap-3 mb-6">
          {job.type && (
            <span className="text-xs bg-white text-black px-3 py-1 rounded-md">
              {job.type}
            </span>
          )}
          {job.workMode && (
            <span className="text-xs bg-white text-black px-3 py-1 rounded-md">
              {job.workMode}
            </span>
          )}
        </div>

        {job.focus && (
          <p className="text-white/60 text-sm mb-2">Focus: {job.focus}</p>
        )}
        {job.experience && (
          <p className="text-white/60 text-sm mb-6">Experience: {job.experience}</p>
        )}

        <button className="text-white font-light hover:underline">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const OpenPositions = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
  const fetchJobs = async () => {
    const data = await getJobs();

    const formattedJobs: Job[] = data.map((doc: any) => ({
      $id: doc.$id,
      title: doc.title,
      type: doc.type,
      workMode: doc.workMode,
      experience: doc.experience,
      focus: doc.focus,
      published: doc.published,
    }));

    setJobs(formattedJobs);
  };

  fetchJobs();
}, []);

  return (
    <div className="bg-black py-24">
      <h1 className="font-light text-white text-5xl text-center mb-6">
        Open Positions
      </h1>

      <p className="text-white/50 text-xl font-normal text-center mb-16">
        Find your perfect role and join our growing team of Bee Glad
      </p>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {jobs.map((job) => (
          <Card key={job.$id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default OpenPositions;