export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  score: number;
  status: 'new' | 'qualified' | 'contacted' | 'converted';
  createdAt: Date;
}

export interface Deal {
  id: string;
  leadId: string;
  stage: 'prospecting' | 'qualification' | 'needsAnalysis' | 'proposal' | 'closing';
  value: number;
  probability: number;
  expectedCloseDate: Date;
  notes: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'social' | 'content';
  status: 'draft' | 'active' | 'completed';
  metrics: {
    sent: number;
    opened: number;
    clicked: number;
    converted: number;
  };
}