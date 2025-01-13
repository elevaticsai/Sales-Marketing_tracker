import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Lead Magnet Promotion",
    description: "Promote eBooks, free trials, and discounts to capture leads",
    status: "in-progress" as const,
    assignee: "Rachel Kim"
  },
  {
    title: "Ad Campaign Management",
    description: "Run targeted ads on social media and Google Ads",
    status: "in-progress" as const,
    assignee: "Marcus Brown"
  },
  {
    title: "CRM Integration",
    description: "Set up and maintain CRM and marketing automation tools",
    status: "completed" as const,
    assignee: "Chris Taylor"
  }
];

const metrics = [
  { label: "Leads Captured (Monthly)", value: "342" },
  { label: "Avg. Landing Page Conv. Rate", value: "4.8%" },
  { label: "Cost per Lead", value: "$28" }
];

export function CaptureLeads() {
  return (
    <PageLayout
      title="Lead Capture Process"
      description="Implement and optimize lead capture strategies across multiple channels."
      activities={activities}
      metrics={metrics}
    />
  );
}