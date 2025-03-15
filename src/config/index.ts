import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
	title: {
      default: 'LeadBot AI | Your AI Sales and Customer Service Live Agent',
      template: '%s | LeadBot'
   },
	description: 'LeadBot is an AI powered Chatbot Agents that help you generate more leads and convert visitors to paying clients. No coding skills required. Get started for free!',
   icons: {
      icon: [
         {
            url: '/icons/favicon.ico',
            href: '/icons/favicon.ico'
         }
      ]
   },
   openGraph: {
      title: 'LeadBot AI | Your AI Sales and Customer Service Live Agent',
      description: 'LeadBot is an AI powered Chatbot Agents that help you generate more leads and convert visitors to paying clients. No coding skills required. Get started for free!',
      images: [
         {
            url: '/assets/og-image.png'
         }
      ]
   },
   twitter: {
      card: 'summary_large_image',
      creator: '@ryseupsolutionsllc',
      title: 'LeadBot AI | Your AI Sales and Customer Service Live Agent',
      description: 'LeadBot is an AI powered Chatbot Agents that help you generate more leads and convert visitors to paying clients. No coding skills required. Get started for free!',
      images: [
         {
            url: '/assets/og-image.png'
         }
      ]
   },
   metadataBase: new URL('https://nexjsleadbot.vercel.app/'),
}