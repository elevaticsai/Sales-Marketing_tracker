# SalesFlow - Sales & Marketing Management Tool

A comprehensive sales and marketing management tool built with React, TypeScript, and Tailwind CSS. This application helps teams streamline their sales process from lead generation to deal closure.

## Features

### Authentication
- Email/Password login
- Social authentication (Google, GitHub, Apple)
- Password recovery
- User registration
- Protected routes

### Sales & Marketing Features
- **Target Audience Management**
  - Buyer persona creation
  - ICP definition
  - Market research tracking

- **Lead Generation**
  - Multi-channel campaign management
  - Content calendar
  - Landing page performance

- **Lead Management**
  - Lead capture
  - Lead qualification (BANT)
  - Lead nurturing
  - Sales handoff process

- **Sales Process**
  - Sales outreach tracking
  - Deal pipeline management
  - Performance analytics

### Dashboard & Analytics
- Real-time performance metrics
- Lead generation performance charts
- Sales pipeline visualization
- KPI tracking

## Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Default Login Credentials
- Email:
- Password: 

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/         # React Context providers
├── pages/           # Page components
│   ├── auth/        # Authentication pages
│   └── ...          # Feature pages
├── types/           # TypeScript type definitions
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Features in Detail

### Authentication System
- Protected routes using AuthGuard
- Context-based auth state management
- Loading states and error handling
- Social authentication integration
- Password recovery flow

### Dashboard
- Real-time metrics display
- Interactive charts
- Sales pipeline visualization
- Activity tracking

### Mobile Responsiveness
- Responsive sidebar navigation
- Mobile-optimized forms
- Touch-friendly interactions
- Adaptive layouts

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint and TypeScript for code quality and consistency. Configuration can be found in:
- `eslint.config.js`
- `tsconfig.json`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
