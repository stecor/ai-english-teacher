"use client";

import {
  Search,
  PlayCircle,
  Clock,
  Star,
  BookOpen,
  Mic,
  MessageCircle,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import router from "next/router";

const categories = [
  "All",
  "Beginner",
  "Grammar",
  "Speaking",
  "Listening",
  "Vocabulary",
];

const lessons = [
  {
    title: "Daily Conversations",
    level: "Beginner",
    progress: 72,
    duration: "12 min",
    xp: 120,
    icon: MessageCircle,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Travel English",
    level: "Intermediate",
    progress: 28,
    duration: "18 min",
    xp: 180,
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Restaurant Practice",
    level: "Beginner",
    progress: 100,
    duration: "10 min",
    xp: 90,
    icon: Mic,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Job Interview",
    level: "Advanced",
    progress: 0,
    duration: "20 min",
    xp: 250,
    icon: Trophy,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Business English",
    level: "Intermediate",
    progress: 55,
    duration: "22 min",
    xp: 200,
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Listening Challenge",
    level: "Advanced",
    progress: 12,
    duration: "15 min",
    xp: 170,
    icon: Mic,
    color: "from-pink-500 to-purple-600",
  },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">
      <main className="lg:ml-72 min-h-screen p-5 lg:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>
          <h1 className="text-4xl font-bold">
            Lessons
          </h1>

          <p className="text-gray-400 mt-2">
            Continue your English journey.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search lessons..."
            className="w-full rounded-xl bg-[#111827] border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-purple-500"
          />
        </div>

      </div>

      {/* Continue Card */}

      <div className="mt-10 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 p-8 flex flex-col lg:flex-row justify-between items-center">

        <div>

          <p className="uppercase tracking-widest text-sm text-purple-200">
            Continue Learning
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Daily Conversations
          </h2>

          <p className="text-purple-100 mt-3">
            Practice real-life conversations and improve your fluency.
          </p>

          <div className="mt-6 h-3 rounded-full bg-white/20 overflow-hidden w-80">

            <div
              className="h-full bg-white rounded-full"
              style={{ width: "72%" }}
            />

          </div>

          <p className="mt-2 text-sm text-purple-100">
            72% Completed
          </p>

        </div>
        
        <Link
          href="/lessons/chat"
          className="mt-8 lg:mt-0 flex items-center gap-3 rounded-2xl bg-white text-purple-700 px-7 py-4 font-semibold hover:scale-105 transition">
          <PlayCircle />
          Resume
        </Link>

      

      </div>

      {/* Categories */}

      <div className="flex gap-3 mt-10 overflow-auto pb-2">

        {categories.map((item, index) => (

          <button
            key={item}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition
            ${
              index === 0
                ? "bg-purple-600"
                : "bg-[#111827] border border-white/10 hover:border-purple-500"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Lesson Grid */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">

        {lessons.map((lesson) => {

          const Icon = lesson.icon;

          return (

            <div
              key={lesson.title}
              className="rounded-3xl border border-white/10 bg-[#111827] p-6 hover:border-purple-500 transition group"
            >

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${lesson.color}`}
              >
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {lesson.title}
              </h3>

              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                {lesson.level}
              </span>

              <div className="flex justify-between text-sm text-gray-400 mt-6">

                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  {lesson.duration}
                </div>

                <div className="flex items-center gap-2">
                  <Star size={15} />
                  {lesson.xp} XP
                </div>

              </div>

              <div className="mt-6 h-2 rounded-full bg-gray-700 overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${lesson.progress}%` }}
                />

              </div>

              <div className="flex justify-between mt-3">

                <span className="text-sm text-gray-400">
                  {lesson.progress}% Completed
                </span>

                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Open
                </button>

              </div>

            </div>

          );
        })}
      </div>
        </main>
    </div>
  );
}






// "use client";

// import * as z from "zod";
// import axios from "axios";
// import { Copy, MessageSquare, Mic, MicOff } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { ChatCompletionRequestMessage } from "openai";

// import { BotAvatar } from "@/components/bot-avatar";
// import { Heading } from "@/components/heading";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { cn } from "@/lib/utils";
// import  { Loader }  from "@/components/loader";
// import { UserAvatar } from "@/components/user-avatar";
// import { Empty } from "@/components/ui/empty";
// import { useProModal } from "@/hooks/use-pro-modal";



// import { formSchema } from "./constants";
// import VideoComponent from "@/components/videoComponent";

// const LessonsPage = () => {


//   const router = useRouter();
//   const proModal = useProModal();
//   const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
//   const [userInput, setUserInput] = useState('');
//   const [response, setResponse] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [isActive, setIsActive] = useState(false)
//   const [isActiveMic, setIsActiveMic] = useState(false)
//   const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       prompt: ""
//     }
//   });


  
//   const toggleVoice = () => {
      
//     setIsActive(!isActive)
//     // Here you would typically implement the logic to start/stop voice recording
//     console.log(isActive ? "Stop ChatVoice" : "Started ChatVoice")
 
        
//     {
//       isActive ?
//         toast(
//           'Stopped ChatVoice',
//           {
//             style: {
//               borderRadius: '10px',
//               background: '#6F5AF6',
//               color: '#fff',
//             }
//           }
//         )
//         :
//         toast(
//           'Started ChatVoice',
//           {
//             style: {
//               borderRadius: '10px',
//               background: '#6F5AF6',
//               color: '#fff',
//             }
//           }
//         )

//     }
//     setTimeout(() => {
//       setIsActive(isActive)
//     }, 5000);
//   }

// // handleSpeechRecognition
//   const handleSpeechRecognition = () => {
//     setIsActive(isActive)
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     recognition.onstart = () => setIsListening(true);
//     recognition.onend = () => setIsListening(false);

//     recognition.onresult = (event?:any) => {
//       const transcript = event.results[0][0].transcript;
//       setUserInput(transcript);
//       sendMessageToChatGPT(transcript);
     
//     };
//     recognition.start();
    
//      };
     
// // sendMessageToChatGPT
//   const sendMessageToChatGPT = async (values:any) => {
//     console.log(values);
//     try {
     
//       const userMessage: ChatCompletionRequestMessage = { role: "user", content: values };
//       const newMessages = [...messages, userMessage];
      
//       const response = await axios.post('/api/conversation', { messages: newMessages });
//       setMessages((current) => [...current, userMessage, response.data]);

//       console.log('Response Data:', response.data);
    
//       setResponse(response.data.content);
   

//       // Use TTS to convert the response to speech
//       const utterance = new SpeechSynthesisUtterance(response.data.content);
//       speechSynthesis.speak(utterance);
      
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error('Axios Error:', error.response?.data);
//       } else {
//         console.error('Unexpected Error:', error);
//       }
//     }
//   }

//   const isLoading = form.formState.isSubmitting;
  
//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
//       const newMessages = [...messages, userMessage];
      
//       const response = await axios.post('/api/conversation', { messages: newMessages });
//       setMessages((current) => [...current, userMessage, response.data]);
      
//       form.reset();
//     } catch (error: any) {
//       if (error?.response?.status === 403) {
//         proModal.onOpen();
//       } else {
//         toast.error("Please provide more important details or context.");
//       }
//     } finally {
//       router.refresh();
//     }
//   }

//   // copy text inside the field
//   const handleCopy = async (e?: any) => {
    
//     try {
//       const textCopied = e
//       await navigator.clipboard.writeText(textCopied);   
//       toast(
//         'Copied text',
//         {
//           style: {
//             borderRadius: '10px',
//             background: '#6F5AF6',
//             color: '#fff',
//           }
//         }
//       ) 
 
//     } catch (err) {
//       toast.error('Failed to copy text.');
//       console.error('Error copying text: ', err);
//     }
//   };


//   const HandleSpeak = async (text?: any) => {

//     toggleVoice()
    

  
//     try {
//       const textSpeach = text
//       const speech = new SpeechSynthesisUtterance(textSpeach); // Create a new speech instance
//       speech.lang = 'en-US' // Set the language (you can change it to any language code)
//       {
//         isActive ?
//           window.speechSynthesis.cancel(): // Cancel the speach  
//           window.speechSynthesis.speak(speech) // Speak the text  
        
   
         
          
//       }
  
//     } catch (err) {
//       console.log('Failed to speak text.');
//       console.error('Error speaking text: ', err);
//   }

//   {
//       isActive ?
  
//         toast(
//             'Stop Speak',
//             {
//                 style: {
//                     borderRadius: '10px',
//                     background: '#6F5AF6',
//                     color: '#fff',
//               }
            
//           }
          
//         ) :
//         toast(
//           'Play Speak',
//           {
//               style: {
//                   borderRadius: '10px',
//                   background: '#6F5AF6',
//                   color: '#fff',
//               }
//           }
//       )

// }
  
    
   
// }



//   return ( 
//     <div className='bg-cover bg-[#192339]'>
//       <Heading
//         title="Conversation"
//         description="Our most advanced conversation model."
//         icon={MessageSquare}
//         iconColor="text-violet-500"
//         bgColor="bg-violet-500/10"
//       />
//       <div className="px-4 lg:px-8">
//         <div>
//           <Form {...form}>
//             <form 
//               onSubmit={form.handleSubmit(onSubmit)} 
//               className="
//                 rounded-lg 
//                 w-full 
//                 p-4 
//                 px-3 
//                 md:px-6 
//                 focus-within:shadow-sm
//                 grid
//                 grid-cols-12
//                 gap-6
//                 items-center
//               "
//             >
//               <FormField
//                 name="prompt"
//                 render={(  {field}) => (
//                   <FormItem className="col-span-12 lg:col-span-9">
//                     <FormControl className="m-2 p-2">
//                       <Input
                        
//                         className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent text-black text-l"
//                         disabled={isLoading} 
                 
//                         placeholder=" Let's start?" 
                        
//                         {...field}
//                       />
                
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />
              
//               <Button className="col-span-10 p-2 m-2 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
//                 Check
//               </Button>
//               <Button 
//               onClick={handleSpeechRecognition}
//               disabled={isListening}
//             variant={isActiveMic ? "default" : "outline"}
//                 size="icon"
//             aria-label={isActiveMic ? "Stop voice input" : "Start voice input"}
//             className={`rounded-full transition-colors ${
//               !isActiveMic ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
//             }`}
//             >
//             {!isActiveMic ?
//                 (<Mic className="h-5 w-5" />) 
//                 :
//                 (
//                 <MicOff className="h-5 w-5" />
//                 )}
//           </Button>
        
//             </form>
//           </Form>
//         </div>
//         <div className=" max-w-60 bg-cover bg-[#111827] space-y-4 mt-4 text-[#FAF9F6] text-l rounded-lg">
        
//           {isLoading && (
//             <div className=" p-8 rounded-lg w-full flex items-center justify-center ">
//               <Loader  />
//             </div>
//           )}
//           {messages.length === 0 && !isLoading && (
//           <Empty label="No conversation started." />
//           )}
//           <div className="bg-cover bg-[#192339] flex flex-col-reverse gap-y-4">
            
//             {messages.map((message) => (
//               <div 
//                 key={message.content} 
//                 className={cn(
//                   " p-2 w-full flex items-start gap-x-0 rounded-lg bg-cover bg-[#111827]",
//                   message.role === "user" ? "max-w-60 bg-cover bg-[#111827]   text-[#FAF9F6] text-l " : "bg-muted bg-cover bg-[#111827] ",
//                 )}
//               >
                
//                 {message.role === "user" ?
//                 <UserAvatar /> :
//                 <BotAvatar />
//                 }
              
                
//                 <code className="h-full max-w-full flex  gap-x-0 whitespace-break-spaces   bg-[#111827] ">

              

//                   <div className="absolute right-0 flex  items-center rounded-lg bg-[#2F2F2F] mr-10 text-gray-400">
//                     <div className="flex items-center rounded-lg bg-token-main-surface-secondary px-1 font-sans text-xs text-token-text-secondary">
//                       <span className="mr-4" data-state="closed">
//                         <button className="flex gap-1 items-center py-1 "
//                           onClick={(e) => handleCopy(message.content) }>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm">
//                           <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor">
//                           </path>
//                           </svg>
//                           Copy
//                         </button>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="absolute right-12 flex ml-2 items-center rounded-lg bg-[#2F2F2F] mr-20 text-gray-400 ">
//                     <div className="flex items-center rounded-lg bg-token-main-surface-secondary px-1.5 font-sans text-xs text-token-text-secondary">
//                       <span className="" data-state="closed">
//                         <button className="flex gap-1 items-center py-1"
//                           onClick={(e) => HandleSpeak(message.content) }>
//                            {
//                             isActive === true ?  
//                               <img width="24" height="24" src="stop-it-1.png" alt="icon pause" />  :
//                               <img width="24" height="24" src="volume-up-4-24.png" alt="icon play" /> 
//                             }
//                         </button>
                     
//                       </span>
//                     </div>
//                   </div>
                
             
//                     <p className="mt-14 pb-6 right mr-0  bg-[#111827] "> {message.content}</p>
                   
//                   </code>
                  
//               </div>
              
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//    );
// }
 
// export default LessonsPage;
