import { z } from "zod";

// Blog Post Schema
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  excerpt: z.string(),
  author: z.string(),
  date: z.string(),
  imageUrl: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

// Trip/Event Schema
export const tripSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  location: z.string(),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  duration: z.string(),
  price: z.number(),
  maxParticipants: z.number(),
  currentParticipants: z.number(),
  imageUrl: z.string().optional(),
  includesFood: z.boolean().default(false),
  includesTransport: z.boolean().default(false),
});

// Membership Form Schema
export const membershipSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  year: z.enum(['1st Year', '2nd Year', '3rd Year', '4th Year', 'Faculty']),
  department: z.string().min(2, "Please enter your department"),
  emergencyContact: z.string().min(10, "Emergency contact must be at least 10 digits"),
  experienceLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  consentWaiver: z.boolean().refine(val => val === true, "You must agree to the safety waiver"),
});

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// RSVP Schema
export const rsvpSchema = z.object({
  tripId: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  emergencyContact: z.string().min(10, "Emergency contact must be at least 10 digits"),
  dietaryRestrictions: z.string().optional(),
  medicalConditions: z.string().optional(),
});

// Types
export type BlogPost = z.infer<typeof blogPostSchema>;
export type Trip = z.infer<typeof tripSchema>;
export type MembershipForm = z.infer<typeof membershipSchema>;
export type ContactForm = z.infer<typeof contactSchema>;
export type NewsletterForm = z.infer<typeof newsletterSchema>;
export type RSVPForm = z.infer<typeof rsvpSchema>;