# Ventures Crew Adventure Club Website

## Overview

This is a modern, responsive website for Ventures Crew, GNDEC's premier adventure club. The platform serves as a comprehensive hub for students interested in outdoor adventures, featuring trip bookings, safety information, community blog posts, and membership management. Built with React and TypeScript, the site emphasizes safety-first adventure experiences while fostering community building among college students.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system featuring outdoor adventure themes
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation (extensible to PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite middleware integration

### Design System
- **Typography**: Montserrat for headings and UI elements, Lora for body text
- **Color Palette**: Adventure-themed colors with deep teal primary (#0f4c5c), vibrant orange accent (#ff7a00), and neutral backgrounds
- **Components**: Modular component library with hover effects, elevation states, and dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Data Models
- **User Management**: Basic user schema with extensible profile fields
- **Adventure Content**: Trip/event models with difficulty levels, participant tracking, and location data
- **Content Management**: Blog post schema with author attribution, tags, and rich content support
- **Form Handling**: Membership, contact, and RSVP forms with comprehensive validation

### Page Structure
- **Home**: Hero section with call-to-action and adventure showcase
- **About**: Mission, vision, and founder profile with community values
- **Trips**: Event listings with filtering, search, and booking capabilities
- **Blog**: Article management with categorization and search functionality
- **Gallery**: Photo grid with lightbox and filtering options
- **Membership**: Registration forms with safety waiver integration
- **Safety**: Equipment guides and safety protocol documentation
- **Faculty**: Partnership information and sponsor outreach materials
- **Contact**: Multi-channel communication with campus integration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity for production deployments
- **@radix-ui/***: Accessible UI primitive components for forms, dialogs, and navigation
- **@tanstack/react-query**: Server state management and API caching
- **drizzle-orm**: Type-safe ORM for database operations and migrations
- **wouter**: Lightweight routing library for single-page application navigation

### Development Tools
- **Vite**: Build tool with hot module replacement and optimization
- **TypeScript**: Static typing for improved developer experience and code reliability
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **ESBuild**: Fast JavaScript bundler for production builds

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for validation libraries
- **zod**: Runtime type validation for forms and API data
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### UI Enhancement
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for conditional className composition
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Touch-friendly carousel component for galleries

### Planned Integrations
- **Newsletter Service**: Mailchimp or similar for community communications
- **Analytics**: Google Analytics for user behavior tracking
- **Payment Processing**: For trip bookings and membership fees
- **Email Service**: For automated notifications and confirmations
- **Maps Integration**: For trip location visualization and campus mapping