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
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: 'text-pink-700',
      bgColor: 'bg-pink-700/10',
      href: '/image'
    },
    // {
    //   label: 'Video Generation',
    //   icon: VideoIcon,
    //   color: 'text-orange-700',
    //   bgColor: 'bg-orange-700/10',
    //   href: '/video'
    // },
    {
      label: 'Code Generation',
      icon: Code,
      color: 'text-green-700',
      bgColor: 'bg-green-700/10',
      href: '/code'
  },]

export const MAX_FREE_COUNTS = 5
  

    
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