import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Lead Scoring Implementation",
    description: "Set up lead scoring based on engagement and demographics",
    status: "completed" as const,
    assignee: "Diana Chen"
  },
  {
    title: "BANT Assessment",
    description: "Evaluate leads using BANT framework",
    status: "in-progress" as const,
    assignee: "James Wilson"
  },
  {
    title: "Lead Segmentation",
    description: "Segment leads into MQLs and SQLs",
    status: "in-progress" as const,
    assignee: "Sophie Martinez"
  }
];

const metrics = [
  { label: "MQLs Generated", value: "156" },
  { label: "SQL Conversion Rate", value: "35%" },
  { label: "Avg. Qualification Time", value: "3.2 days" }
];

export function QualifyLeads() {
  return (
    <PageLayout
      title="Lead Qualification"
      description="Qualify and score leads to ensure efficient use of sales resources."
      activities={activities}
      metrics={metrics}
    />
  );
}