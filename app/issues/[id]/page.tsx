import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import delay from "delay";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <>
      <div>Title:{issue.title}</div>
      <div>Description:{issue.description}</div>
      <div>Status:{issue.status}</div>
      <div>CreateAt:{issue.createAt.toDateString()}</div>
    </>
  );
};

export default IssueDetailPage;
