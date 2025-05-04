# St Helena Transit Hub

A unified platform for taxi booking, public transport scheduling, and hire-drive services for St Helena Island.

## Features

- **User Registration/Account Creation**
  - Secure authentication (email/SSO)
  - Profile management (payment methods, preferences)

- **Taxi Booking System**
  - Real-time availability, fare calculation, GPS tracking
  - Taxi Operator Dashboard: Booking management, driver tracking, earnings analytics

- **Public Transport Integration**
  - Interactive timetable (bus/ferry routes), fare calculator
  - Live updates via API integration

- **Hire-Drive Service**
  - Vehicle selection, rental period booking, insurance options
  - Hire-Drive Operator Dashboard: Fleet management, pricing control, booking approvals

- **Unified User Dashboard**
  - View/book taxis/hire-drives, track rides, payment history, cancellations

- **Admin Panel**
  - User/operator management, transaction monitoring, report generation

## Technical Stack

- **Frontend**: Next.js with TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js
- **State Management**: Zustand
- **Maps & Location**: Mapbox
- **Payment Processing**: Ready for payment gateway integration

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/st-helena-transit-hub.git
   cd st-helena-transit-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Mapbox API Key (when implemented)
   NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_api_key
   
   # Payment Gateway Keys (when implemented)
   PAYMENT_GATEWAY_PUBLIC_KEY=your_payment_public_key
   PAYMENT_GATEWAY_SECRET_KEY=your_payment_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This application is designed to be deployed on Netlify.

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set up the environment variables in Netlify's dashboard
4. Deploy!

## Project Structure

```
st-helena-transit-hub/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router 
│   │   ├── admin/       # Admin dashboard
│   │   ├── auth/        # Authentication pages
│   │   ├── dashboard/   # User dashboard
│   │   ├── hire-drive/  # Hire-drive service pages
│   │   ├── operator/    # Operator dashboards
│   │   ├── taxis/       # Taxi booking pages
│   │   ├── transport/   # Public transport pages
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   │   ├── forms/       # Form components
│   │   ├── layout/      # Layout components
│   │   ├── maps/        # Map components
│   │   └── ui/          # UI components
│   ├── data/            # Data utilities and mock data
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Library code
│   └── utils/           # Utility functions
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Future Enhancements

- Real-time tracking for public transport
- Mobile app development
- Carpooling functionality
- Advanced analytics for operators
- Loyalty program for frequent users

## License

This project is licensed under the MIT License - see the LICENSE file for details.