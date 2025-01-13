import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Channel Selection",
    description: "Identify and evaluate potential lead generation channels",
    status: "completed" as const,
    assignee: "Alex Thompson"
  },
  {
    title: "Content Calendar",
    description: "Create and maintain content calendar for all channels",
    status: "in-progress" as const,
    assignee: "Jessica Lee"
  },
  {
    title: "Landing Page Setup",
    description: "Design and implement landing pages for lead capture",
    status: "in-progress" as const,
    assignee: "David Wilson"
  }
];

const metrics = [
  { label: "Active Channels", value: "6/8" },
  { label: "Content Calendar Progress", value: "70%" },
  { label: "Landing Pages Live", value: "8" }
];

export function LeadGeneration() {
  return (
    <PageLayout
      title="Lead Generation Strategy"
      description="Develop and implement comprehensive lead generation strategies across multiple channels."
      activities={activities}
      metrics={metrics}
    />
  );
}