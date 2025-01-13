import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Market Research",
    description: "Conduct surveys and interviews with potential customers",
    status: "in-progress" as const,
    assignee: "Sarah Johnson"
  },
  {
    title: "Buyer Persona Creation",
    description: "Develop detailed buyer personas based on research",
    status: "pending" as const,
    assignee: "Michael Chen"
  },
  {
    title: "ICP Definition",
    description: "Define and document Ideal Customer Profile",
    status: "completed" as const,
    assignee: "Emily Rodriguez"
  }
];

const metrics = [
  { label: "Buyer Personas Created", value: "4/5" },
  { label: "ICP Alignment Score", value: "85%" },
  { label: "Research Completion", value: "75%" }
];

export function TargetAudience() {
  return (
    <PageLayout
      title="Target Audience Definition"
      description="Define and understand our ideal customer through market research, buyer personas, and ICP development."
      activities={activities}
      metrics={metrics}
    />
  );
}