
import { empty } from "@prisma/client/runtime/library";
import {
    Code,
    ImageIcon,
    LayoutDashboard,
  MessageSquare,
    Music,
    Settings,
    Sidebar,
    VideoIcon,
} from "lucide-react";




export const API_CONTENT = `You're English a teacher, ask to the user what language he wowld like to learn and his native language. I want to you to help improve speaking, listening, and writing skills by providing them with clear explanations, practical exercises, and useful tips. Go step by step waiting them to write or do the exercise and reviewing if it is right or wrong 

Here is what you cover using short sentences and jump to the next line when you use period:

This person has English level of Common English Phrases: You will go over some frequently used phrases in English and their equivalents in Portuguese. You will teach them how to use these phrases in everyday conversations. 

Grammar Tips: you will explain key grammar rules that often confuse Portuguese speakers, such as verb tenses, prepositions, and articles.

Pronunciation Practice: you will work on pronouncing English sounds that are different from Portuguese, so you can speak more clearly and be better understood.

Listening Exercise: You will play a short audio clip or read a passage  to practice comprehension and identify new vocabulary.

Writing Activity: They will have the chance to write a short paragraph or dialogue using the new phrases and grammar rules they have learned. 

Try to understand which level is the person and help translating some words if don't understand. keep it short to every single message.`








export const tools = [{
    label: 'Level 1-3 | Basic proficiency: The ability to understand and use simple English in everyday situations.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation?=test'
},
{
  label: 'Level 4 | Adequate proficiency for daily life in English-speaking environments.',
  icon: MessageSquare,
  color: 'text-violet-500',
  bgColor: 'bg-violet-500/10',
  href: '/conversation'
  },
  {
    label: 'Level 5 | Developing proficiency for most daily situations but with limitations.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: 'Level 6 | Good proficiency for familiar contexts and some ability to cope in less predictable situations.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: 'Level 7 | Adequate proficiency in more challenging contexts, including workplace and social environments.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: 'Level 8 | Advanced proficiency for professional and academic environments.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: 'Level 9-10 | Strong proficiency, meeting high-level professional, academic, and social demands.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: 'Level 11-12 | Near-native proficiency, able to handle highly complex communication tasks, similar to a native speaker.',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: 'text-emerald-500',
  //   bgColor: 'bg-emerald-500/10',
  //   href: '/music'
  //   },
    // {
    //   label: 'Image Generation',
    //   icon: ImageIcon,
    //   color: 'text-pink-700',
    //   bgColor: 'bg-pink-700/10',
    //   href: '/image'
    // },
    // {
    //   label: 'Video Generation',
    //   icon: VideoIcon,
    //   color: 'text-orange-700',
    //   bgColor: 'bg-orange-700/10',
    //   href: '/video'
    // },
  //   {
  //     label: 'Code Generation',
  //     icon: Code,
  //     color: 'text-green-700',
  //     bgColor: 'bg-green-700/10',
  //     href: '/code'
  // },
]


export const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
 
  // {
  //   label: 'Image Generation',
  //   icon: ImageIcon,
  //   color: "text-pink-700",
  //   href: '/image',
  // },
  // {
  //   label: 'Video Generation',
  //   icon: VideoIcon,
  //   color: "text-orange-700",
  //   href: '/video',
  // },
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: "text-emerald-500",
  //   href: '/music',
  // },
  // {
  //   label: 'Code Generation',
  //   icon: Code,
  //   color: "text-green-700",
  //   href: '/code',
  // },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Levels = [
  'Level: 1-3', 'Level: 4', 'Level: 5', 'Level: 6', 'Level: 7', 'Level: 8', 'Level: 9-10', 'Level: 11-12'
]

export const Languages = [
  "English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Portuguese", "Italian"//, "Arabic", "Hindi", "Bengali", "Turkish", "Vietnamese", "Persian", "Dutch", "Swedish", "Greek", "Thai", "Polish", "Czech", "Hebrew", "Indonesian", "Malay", "Romanian", "Hungarian", "Danish", "Finnish", "Norwegian"
]

export const MAX_FREE_COUNTS = 20



let skill = ''



export function processValue(value:string) {
  
  
  switch (value) {
    case "Level: 1-3":
       skill =`Basic proficiency: The ability to understand and use simple English in everyday situations.`
      break;
    case "Level: 4":
       skill = `Adequate proficiency for daily life in English-speaking environments.`
      break;
    case "Level: 5":
       skill = `Developing proficiency for most daily situations but with limitations.`
      break;
    case "Level: 6":
       skill = `Good proficiency for familiar contexts and some ability to cope in less predictable situations.`
      break;
    case "Level: 7":
      skill = `Adequate proficiency in more challenging contexts, including workplace and social environments..`
      break;
    case "Level: 8":
      skill = `Advanced proficiency for professional and academic environments.`
      break;
    case "Level: 9-10":
      skill = `Strong proficiency, meeting high-level professional, academic, and social demands.`
      break;
    case "Level: 11-12":
      skill = `Near-native proficiency, able to handle highly complex communication tasks, similar to a native speaker.`
      break;
      ;
    default:
      `Basic proficiency: The ability to understand and use simple English in everyday situations.`
  }
  
 
  return skill

  
};







    




  export const testimonials = [
    {
      name: "Wendy",
      avatar: "/wendy.jpg",
      title: "Software Engineer",
      description: "\" This is the best application I've ever used! \"",
    },
    {
      name: "Ismay",
      avatar: "/ismay.jpg",
      title: "Designer",
      description: "\" I use this daily for generating new photos! \"",
    },
    {
      name: "Mark",
      avatar: "/mark.jpg",
      title: "CEO",
      description: "\" This app has changed my life, cannot imagine working without it! \"",
    },
    {
      name: "Mary",
      avatar: "/mary.jpg",
      title: "CFO",
      description: "\" The best in class, definitely worth the premium subscription! \"",
    },
  ];

function returnValue(arg0: () => string) {
  throw new Error("Function not implemented.");
}
