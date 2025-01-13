import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Initial Contact",
    description: "Make first contact with qualified leads",
    status: "in-progress" as const,
    assignee: "David Lee"
  },
  {
    title: "Demo Scheduling",
    description: "Schedule and conduct product demonstrations",
    status: "completed" as const,
    assignee: "Sarah Miller"
  },
  {
    title: "Proposal Creation",
    description: "Create and send customized proposals",
    status: "in-progress" as const,
    assignee: "John Davis"
  }
];

const metrics = [
  { label: "Deals in Pipeline", value: "42" },
  { label: "Conversion Rate", value: "28%" },
  { label: "Avg. Deal Size", value: "$15,000" }
];

export function SalesOutreach() {
  return (
    <PageLayout
      title="Sales Outreach"
      description="Execute targeted sales outreach to convert qualified leads into customers."
      activities={activities}
      metrics={metrics}
    />
  );
}