import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Target, 
  Mail, 
  TrendingUp, 
  UserCheck, 
  DollarSign,
  Megaphone,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = {
  leads: 245,
  deals: 58,
  revenue: 125000,
  campaigns: 12,
  performanceData: [
    { name: 'Jan', value: 45, previousValue: 35 },
    { name: 'Feb', value: 52, previousValue: 42 },
    { name: 'Mar', value: 68, previousValue: 55 },
    { name: 'Apr', value: 75, previousValue: 62 },
    { name: 'May', value: 82, previousValue: 70 },
    { name: 'Jun', value: 90, previousValue: 78 }
  ]
};

function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue, 
  progress 
}: { 
  title: string; 
  value: string | number; 
  icon: React.ElementType; 
  trend: 'up' | 'down'; 
  trendValue: string;
  progress?: number;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${
          title.includes('Leads') ? 'bg-blue-50 text-blue-600' :
          title.includes('Deals') ? 'bg-green-50 text-green-600' :
          title.includes('Revenue') ? 'bg-purple-50 text-purple-600' :
          'bg-red-50 text-red-600'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className={`flex items-center space-x-1 ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? 
            <ArrowUpRight className="h-4 w-4" /> : 
            <ArrowDownRight className="h-4 w-4" />
          }
          <span className="text-sm font-medium">{trendValue}</span>
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      {progress !== undefined && (
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Progress</span>
            <span className="text-gray-700">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                progress >= 75 ? 'bg-green-500' :
                progress >= 50 ? 'bg-blue-500' :
                progress >= 25 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function PipelineStage({ name, count, percentage }: { name: string; count: number; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{count} deals</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Leads"
          value={mockData.leads}
          icon={Users}
          trend="up"
          trendValue="+12.5%"
          progress={78}
        />
        <StatCard
          title="Active Deals"
          value={mockData.deals}
          icon={Target}
          trend="up"
          trendValue="+5.2%"
          progress={65}
        />
        <StatCard
          title="Revenue"
          value={`$${mockData.revenue.toLocaleString()}`}
          icon={DollarSign}
          trend="up"
          trendValue="+18.3%"
          progress={85}
        />
        <StatCard
          title="Active Campaigns"
          value={mockData.campaigns}
          icon={Megaphone}
          trend="down"
          trendValue="-2.4%"
          progress={42}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Lead Generation Performance</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Current</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Previous</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4F46E5" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#4F46E5' }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="previousValue" 
                  stroke="#9CA3AF" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#9CA3AF' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Pipeline</h2>
          <div className="space-y-4">
            <PipelineStage name="Prospecting" count={32} percentage={40} />
            <PipelineStage name="Qualification" count={24} percentage={30} />
            <PipelineStage name="Proposal" count={16} percentage={20} />
            <PipelineStage name="Closing" count={8} percentage={10} />
          </div>
        </div>
      </div>

      {/* Process Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{tab.label}</h3>
            <p className="text-sm text-gray-600">Click to view detailed process and activities</p>
          </button>
        ))}
      </div>
    </div>
  );
}

const tabs = [
  { id: 'target-audience', label: 'Target Audience', path: '/target-audience' },
  { id: 'lead-generation', label: 'Lead Generation', path: '/lead-generation' },
  { id: 'capture-leads', label: 'Capture Leads', path: '/capture-leads' },
  { id: 'qualify-leads', label: 'Qualify Leads', path: '/qualify-leads' },
  { id: 'nurture-leads', label: 'Nurture Leads', path: '/nurture-leads' },
  { id: 'handoff-sales', label: 'Handoff to Sales', path: '/handoff-sales' },
  { id: 'sales-outreach', label: 'Sales Outreach', path: '/sales-outreach' },
  { id: 'analyze-optimize', label: 'Analyze & Optimize', path: '/analyze-optimize' }
];