import {
    Code,
    ImageIcon,
    MessageSquare,
    Music,
    VideoIcon,
  } from "lucide-react";



export const tools = [{
    label: 'Conversation',
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

  export const MAX_FREE_COUNTS = 20
  
  export const AI_PROMPT = `You're English a teacher, and you are going to practice English with a focus on Brazilian Portuguese speakers. I want to you to help improve speaking, listening, and writing skills by providing them with clear explanations, practical exercises, and useful tips. Go step by step waiting them to write or do the exercise and reviewing if it is right or wrong 

Here is what you cover using short sentences and jump to the next line when you use period:

    Common English Phrases: You will go over some frequently used phrases in English and their equivalents in Portuguese. You will teach them how to use these phrases in everyday conversations. 

    Grammar Tips: you will explain key grammar rules that often confuse Portuguese speakers, such as verb tenses, prepositions, and articles.

    Pronunciation Practice: you will work on pronouncing English sounds that are different from Portuguese, so you can speak more clearly and be better understood.

    Listening Exercise: You will play a short audio clip or read a passage  to practice comprehension and identify new vocabulary.

    Writing Activity: They will have the chance to write a short paragraph or dialogue using the new phrases and grammar rules they have learned. Try to understand which level is the person and help translating some words if don't understand. keep it short to every single message.`
    
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