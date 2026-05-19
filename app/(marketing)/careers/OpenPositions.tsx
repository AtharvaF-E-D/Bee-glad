/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getAllJobs } from "@/lib/services/admin/jobs.Services";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type JobType = {
  _id: string;
  title: string;
  jobType?: string;
  workMode?: string;
  focus?: string;
  experience?: string;
};

type CardProps = {
  job: JobType;
};

const Card = ({ job }: CardProps) => {
  return (
    <div className="relative">

      <div className="absolute inset-0">
        <div className="absolute -left-1 top-0 h-full w-full bg-yellow-400 rounded-2xl"></div>
      </div>

      <div
        className="
                    relative
                    bg-linear-to-br
                    from-[#1f1f1f]
                    to-[#2a2a2a]
                    border border-white/20
                    rounded-2xl
                    p-8
                    text-white
                "
      >

        <h2 className="text-2xl font-light mb-4">
          {job.title}
        </h2>

        <div className="flex gap-3 mb-6 flex-wrap">

          {job.jobType && (
            <span className="text-xs bg-white text-black px-3 py-1 rounded-md">
              {job.jobType}
            </span>
          )}

          {job.workMode && (
            <span className="text-xs bg-white text-black px-3 py-1 rounded-md">
              {job.workMode}
            </span>
          )}

        </div>

        {job.focus && (
          <p className="text-white/60 text-sm mb-2">
            Focus: {job.focus}
          </p>
        )}

        {job.experience && (
          <p className="text-white/60 text-sm mb-6">
            Experience: {job.experience}
          </p>
        )}

        <Link href="/joinTeam">
          <button className="text-white font-light hover:underline cursor-pointer">
            Apply Now
          </button>
        </Link>

      </div>

    </div>
  );
};

const OpenPositions = () => {

  const [jobs, setJobs] = useState<JobType[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const response = await getAllJobs();

        if (response?.success) {

          setJobs(response?.data || []);
        }

      } catch (error) {

        console.error(
          "Jobs fetch error:",
          error
        );

      } finally {

        setLoading(false);
      }
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {loading ? (

          [1, 2].map((item) => (
            <div
              key={item}
              className="bg-[#1f1f1f] rounded-2xl p-8 animate-pulse"
            >

              <div className="h-8 bg-[#2a2a2a] rounded w-2/3 mb-6" />

              <div className="flex gap-3 mb-6">

                <div className="h-7 w-24 bg-[#2a2a2a] rounded" />

                <div className="h-7 w-28 bg-[#2a2a2a] rounded" />

              </div>

              <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mb-3" />

              <div className="h-4 bg-[#2a2a2a] rounded w-1/2 mb-6" />

              <div className="h-5 bg-[#2a2a2a] rounded w-24" />

            </div>
          ))

        ) : jobs.length > 0 ? (

          jobs.map((job) => (
            <Card
              key={job._id}
              job={job}
            />
          ))

        ) : (

          <div className="col-span-2 text-center py-20">

            <p className="text-white/40 text-xl">
              No open positions available
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default OpenPositions;