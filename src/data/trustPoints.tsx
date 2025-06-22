import React from 'react';
import { HiChatAlt2, HiLightningBolt, HiBadgeCheck, HiUserCircle, HiCalendar } from 'react-icons/hi';

export interface TrustPoint {
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const trustPoints: TrustPoint[] = [
  {
    icon: <HiChatAlt2 />,
    content: <><strong>Clear, jargon-free communication</strong> — I explain what&apos;s wrong and how I&apos;ll fix it in plain English, not tech speak.</>
  },
  {
    icon: <HiLightningBolt />,
    content: <><strong>Fast, effective solutions</strong> — Most issues are resolved in under an hour, with permanent fixes that prevent future problems.</>
  },
  {
    icon: <HiBadgeCheck />,
    content: <><strong>5+ years of hands-on experience</strong> helping individuals and small businesses solve real tech problems and get back to work quickly.</>
  },
  {
    icon: <HiUserCircle />,
    content: <><strong>Personal, one-on-one support</strong> — You work directly with me, not a chatbot or offshore call center. I remember your setup and preferences.</>
  },
  {
    icon: <HiCalendar />,
    content: <><strong>Flexible scheduling</strong> — Book appointments that work for your schedule, with remote support available for immediate help or in-person visits for complex issues.</>
  }
]; 