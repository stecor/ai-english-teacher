"use client";

import {
  Bot,
  CheckCheck,
  ChevronDown,
  Crown,
   Loader2,
  Menu,
  MessageSquare,
  Mic,
  MoreVertical,
  Plus,
  RefreshCw,
  Send,
  Settings,
  Sparkles,
  Trash2,
  User,
  X,
} from "lucide-react";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useUser } from "@clerk/nextjs";
import { title } from "process";
import { ConversationTopicModal } from "@/components/conversation-topic-modal";
import { useRouter } from "next/navigation";
import { date } from "zod";


type MessageRole = "USER" | "ASSISTANT" | "SYSTEM";

interface Chat {
  id: string;
  title: string;
  preview: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  active?: boolean;
}

interface ChatMessage {
  id?: string;
  chatId?: string;
  role: MessageRole;
  content: string;
  createdAt?: string;
}

interface Conversation {
  id: string;
  title: string;
  preview: string;
  time: string;
  active?: boolean;
}

export interface Lesson {
  id: string;
  userId: string;

  title: string;
  description?: string | null;
  category?: string | null;

  level: string;
  status: string;

  progress: number;
  completed: boolean;

  createdAt: string;
  updatedAt: string;
}

  // {Starter Messages}

const starterMessages_1: ChatMessage[] = [
  {
    id: "message-1",
    role: "ASSISTANT",
    content:
      "👋 Hi there! I’m your AI conversation partner.\nHow can I help you today?",
    createdAt: "10:30 AM",
  },
  {
    id: "message-2",
    role: "USER",
    content: "I’d like to practice ordering coffee.",
    createdAt: "10:31 AM",
  },
  {
    id: "message-3",
    role: "ASSISTANT",
    content:
      "Great! Let’s start with a simple scenario.\nImagine you’re in a coffee shop.\nWhat would you like to order?",
    createdAt: "10:31 AM",
  },
  {
    id: "message-4",
    role: "USER",
    content: "I’d like a large latte, please.",
    createdAt: "10:32 AM",
  },
  {
    id: "message-5",
    role: "ASSISTANT",
    content:
      "Perfect! How would you like your latte?\nWould you like any sugar or milk alternatives?",
    createdAt: "10:32 AM",
  },
];


const starterMessages_2: ChatMessage[] = [
  {
    id: "message-1",
    role: "ASSISTANT",
    content:
      "👋 Hi there! I’m your AI conversation partner.\nHow can I help you today?",
    createdAt: "12:30 AM",
  },
  {
    id: "message-2",
    role: "USER",
    content: "I’d like to practice a travel conversation.",
    createdAt: "12:31 AM",
  },
  {
    id: "message-3",
    role: "ASSISTANT",
    content:
      "Absolutly! Let’s start with an nice scenario.\nImagine you’re in a trip.\nGood morning! May I see your passport?",
    createdAt: "12:32 AM",
  },
  {
    id: "message-4",
    role: "USER",
    content: "Here you are, I'm flying to London.",
    createdAt: "12:33 AM",
  },
  {
    id: "message-5",
    role: "ASSISTANT",
    content:
      "Welcome!\nWhere are you going today?",
    createdAt: "12:34 AM",
  },
];

const starterMessages_3: ChatMessage[] = [
  {
    id: "message-1",
    role: "ASSISTANT",
    content: "Hey there! Any updates on the new project?",
    createdAt: "12:30 AM",
  },
  {
    id: "message-2",
    role: "USER",
    content: "Yeah! I finished the new dashboard layout yesterday.\nIt's much cleaner now and works well on mobile too.",
    createdAt: "12:31 AM",
  },
  {
    id: "message-3",
    role: "ASSISTANT",
    content:
      "Nice!\nHow's the AI lesson page coming along?",
    createdAt: "12:32 AM",
  },
  {
    id: "message-4",
    role: "USER",
    content: "The UI is almost done.\nI'm working on connecting it to the OpenAI API so users can chat with the AI tutor.",
    createdAt: "12:33 AM",
  },
  {
    id: "message-5",
    role: "ASSISTANT",
    content:
      "Great.\nAny blockers?",
    createdAt: "12:34 AM",
  },
];


const initialConversations: Conversation[] = [
  {
    id: "conversation-1",
    title: "Practice ordering coffee",
    preview: "I’d like a large latte, please.",
    time: "10:32 AM",
    active: true,
  },
  {
    id: "conversation-2",
    title: "Travel conversation",
    preview: "Can you help me ask for directions?",
    time: "Yesterday",
    active: false
  },
  {
    id: "conversation-3",
    title: "Business meeting",
    preview: "Let’s discuss the project update.",
    time: "2 days ago",
    active: false
  },

];


function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

const formatTime = (date: string | Date) => {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};



export default function LessonsPage() {

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] =
  useState<ChatMessage[]>(starterMessages_1);
  const [conversations, setConversations] =
  useState<Conversation[]>(initialConversations);
  const { user, isLoaded } = useUser();
  const [isListening, setIsListening] = useState(false);
  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [quickReplies, setQuickReplies] = useState<string[]>([
  "Hello!",
  "Can you help me?",
  "Let's practice English."
  ]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentChatId, setCurrentChatId] = useState("");
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [newTitle, setNewTitle]= useState("");
  const router = useRouter();
  const [chatActive, setChatActive] = useState("");
  const [input, setInput] = useState("");



 // 1️⃣ Load lessons
  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      setLoading(false);
      return;
    }

    const loadLessons = async () => {
      try {
        const response = await fetch("/api/lessons");
        console.log("GET LESSONS USER:", user);
        if (!response.ok) {
          const error = await response.json();
          console.error("Lessons API error:", error);
          return;
        }

        const data = await response.json();

        console.log("LESSONS:", data);

        setLessons(data);
      } catch (error) {
        console.error("Failed to load lessons:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLessons();
  }, [isLoaded, user]);

    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isSending]);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "0px";
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      160
    )}px`;
  }, [message]);

   // LOAD CHATS
  const loadChats = async (chatId?:string) => {


  try {
    const response = await fetch("/api/chats");

    if (!response.ok) {
      console.error("Failed to load chats");
      return;
    }

    const data = await response.json();

    console.log("CHATS:", data);
    
    setChats(data);

   

  } catch (error) {
    console.error("LOAD CHATS ERROR:", error);
  }
};


useEffect(() => {
  loadChats();
}, []);



const saveMessage = async (
  chatId: string,
  role: "USER" | "ASSISTANT",
  title:string,
  content: string
) => {
  console.log("CALLING saveMessage:", {
    chatId,
    role,
    title,
    content,
  });

  const response = await fetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chatId,
      role,
      title,
      content,
    }),
  });

  console.log("SAVE STATUS:", response.status);

  const data = await response.json();

  console.log("SAVED MESSAGE:", data);

  return data;
};

const sendMessage = async (
  text: string,
  chatId: string
) => {
  const id = chatId ?? selectedChat?.id;

  if (!id) {
    console.error("Chat ID missing");
    return;
  }

  // SAVE USER ONLY ONCE
  await saveMessage(
    id, 
    "USER", 
    title,
    text);

  const response = await fetch("/api/conversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chatId: id,
      message: text,  
    }),
  });

  const data = await response.json();

  if (data.response) {
    // SAVE ASSISTANT ONLY ONCE
    await saveMessage(
      id,
      "ASSISTANT",
      data.title,
      data.response
    );
  }

  return data.response;
};


const createChat = async (title?: string) => {
  
  try {
    const response = await fetch("/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:title,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("CREATE CHAT ERROR:", error);
      return null;
    }

    const newChat = await response.json();

    console.log("NEW CHAT:", newChat);

    return newChat;
  } catch (error) {
    console.error("CREATE CHAT FAILED:", error);
    return null;
  }
};


const loadMessages = async (chatId?: string) => {

  try {
    console.log("LOADING CHAT:", chatId);

    if(chatId && chatId.includes("conversation")){
      handlechat(chatId)
      return
    }

    const response = await fetch(
      `/api/messages?chatId=${chatId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    console.log("LOAD STATUS:", response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error("LOAD ERROR:", error);
      return;
    }

    const data = await response.json();

    console.log("MESSAGES FROM DATABASE:", data);

    const formattedMessages = data.map((message: any) => ({
      id: message.id,
      role:
        message.role === "USER"
          ? "USER"
          : "ASSISTANT",
      content: message.content,
    }));

    console.log("FORMATTED MESSAGES:", formattedMessages);

    setMessages(formattedMessages);
    
  
    

  } catch (error) {
    console.error("FAILED TO LOAD CHAT:", error);
  }
};


const handleSelectConversation = (chat: Chat) => {
  setSelectedChat(chat);
  loadMessages(chat.id);
};


 const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const text = message.trim();

  if (!text) return;

  if (!selectedChat?.id) {
    console.error("No active chat selected");
    return;
  }

  setMessage("");

  await sendMessage(text, selectedChat.id);
   // Load this chat's messages
  await loadMessages(selectedChat.id);
};


  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      event.currentTarget.form?.requestSubmit();

    }
  };


  const clearChat = () => {
    setMessages([
      {
        id: createId(),
        role: "ASSISTANT",
        content:
          "👋 Hi! I’m your AI conversation partner.\nWhat would you like to practice today?",
        createdAt: formatTime(`${Date.now}`),
      },
    ]);
  };



  //  setShowTopicModal(false)

  //   const response = await fetch("/api/chats", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title,
  //     }),
  //   });

  //   const data = await response.json();

  //   console.log("NEW CHAT:", data);

  //   const content = data.content

  //   const conversationId = createId();
   
  //   setConversations((current) => [
  //     {
  //       id: conversationId,
  //       title: title,
  //       preview: content,
  //       time: "Now",
  //       active: true,
  //     },
  //     ...current.map((item) => ({
  //       ...item,
  //       active: false,
  //     })),
  //   ]);

  //   setMessages([
  //     {
  //       id: createId(),
  //       role: "ASSISTANT",
  //       content:
  //         "Welcome to a new conversation! What would you like to practice?",
  //       createdAt: formatTime(),
  //     },
  //   ]);

  //   setSidebarOpen(false);
  // };

const selectChat = async (id: string) => {
  
  console.log("selectChat:", id);

  if (!id.includes("conversation")) {
    const chat = chats.find((chat) => chat.id === id);
    if (!chat) {
      console.error("Chat not found:", id);
      return;
    } else {
      setSelectedChat(chat);
    }
  }


  // Update active state on Chats
  setChats((current) =>
    current.map((chat) => ({
      ...chat,  
      active: chat.id === id,
    }))
  );


     setConversations((current)=> 
    current.map((conversation) => ({
      ...conversation,
      active: false
    }))
  );


 

  // Load this chat's messages
  await loadMessages(id);


  setSidebarOpen(false);
};


  const selectConversation = async (id: string) => {

    setConversations((current) =>
      current.map((conversation) => ({
        ...conversation,
        active: conversation.id === id,        
      }))     
    );
    
    setSidebarOpen(false);

  };


  const startVoiceInput = () => {

   const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  const SpeechRecognitionAPI =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognitionAPI) {
    alert("Speech recognition is not supported by this browser.");
    return;
  }

  const recognition = new SpeechRecognitionAPI();

  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onresult = (event: { resultIndex: any; results: string | any[]; }) => {
    let transcript = "";

    for (
      let index = event.resultIndex;
      index < event.results.length;
      index++
    ) {
      transcript += event.results[index][0].transcript;
    }

    setMessage(transcript);
  };

  recognition.onerror = (event: { error: any; }) => {
    console.error("Speech recognition error:", event.error);
    setIsListening(false);
  };

  recognition.onend = () => {
    setIsListening(false);
    textareaRef.current?.focus();
  };

  recognition.start();
};


// Start a conversation after choose the title
 const handleStartConversation = async (title: string) => {
  setShowTopicModal(false);

  const newChat = await createChat(title);

  if (!newChat) {
    console.error("Could not create chat");
    return;
  }

  setSelectedChat(newChat);

  setChats((prev) => [
    { ...newChat, active: true },
    ...prev.map((chat) => ({
      ...chat,
      active: false,
    })),
  ]);

  const prompt = `Let's practice a language conversation about ${title}.`;

  await sendMessage(prompt, newChat.id);

  loadMessages(newChat.id)
};


// Examples of conversation
  function handlechat(selectConversation: string) {
      switch (selectConversation) {
    case ("conversation-1"):
      setMessages([...starterMessages_1]);
      break;

    case ("conversation-2"):
      setMessages([...starterMessages_2]);
      break;

    case ("conversation-3"):
      setMessages([...starterMessages_3]);
      break;

    default:
      setMessages([]);
  }

  setMessage("");
  }


  return (
   
     <main className="lg:ml-72 min-h-screen p-5 lg:p-3">
      <div className="mx-auto flex h-screen max-w-[1600px] overflow-hidden border-white/10 bg-[#0a1120] shadow-2xl lg:h-[calc(100vh-40px)] lg:rounded-3xl lg:border">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-77.5 flex-col border-r border-white/10 bg-[#091120] transition-transform duration-300 lg:static lg:w-90 lg:shrink-0 lg:translate-x-0 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between px-5 pb-6 pt-6 lg:px-6">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-400 ring-1 ring-violet-400/10">
                <MessageSquare size={29} strokeWidth={2.2} />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  Conversation
                </h1>

                <p className="mt-1 max-w-47.5 text-sm leading-6 text-slate-400">
                  Your intelligent language practice partner.
                </p>
              </div>
            </div>

                  

            <button
              type="button"
              aria-label="Close sidebar"
              className="rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
         
        

          <div className="px-5 lg:px-6">
            <ConversationTopicModal
              open={showTopicModal}
              onClose={() => setShowTopicModal(false)}
              onStart={handleStartConversation}
            />
            <button
              type="button"
              //onClick={startNewConversation}
              onClick={() => setShowTopicModal(true)}
              className="flex cursor-pointer h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-500 px-4 font-semibold shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              <Plus size={20} />
              New conversation
            </button>
             {/* {chats.map((conversation) => (
            <button
             type="button"
              className="flex cursor-pointer h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-500 px-4 font-semibold shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
              key={conversation.id}
              onClick={() => handleSelectConversation(conversation)}
            >
              {conversation.title}
            </button>
          ))} */}

          </div>
         
       
          <div className="mt-7 min-h-0 flex-1 overflow-y-auto px-5 pb-5 lg:px-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Messages
            </p>

            <div className="space-y-2 ">
            
               {/* Chats of the DB */}
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() =>
                   selectChat(chat.id)
                  } 
                  className={`group cursor-pointer w-full rounded-2xl border p-3.5 text-left transition ${
                    chat.active 
                      ? "border-violet-400/20 bg-violet-500/15"
                      : "border-transparent bg-white/2.5 hover:border-white/10 hover:bg-white/5"
                  }`} 
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                       chat.active 
                          ? "bg-violet-500/20 text-violet-300"
                          : "bg-white/5 text-slate-400 group-hover:text-white"
                      }`} 
                    >
                      <MessageSquare size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-100">
                          {chat.title}
                        </p>

                        <span className="shrink-0 text-[11px] text-slate-500">
                          {formatTime(chat.createdAt)}
                        </span>
                      </div>

                      <p className="mt-1 truncate text-xs leading-5 text-slate-400">
                        {chat.preview}
                      </p>
                    </div>
                  </div>
                </button>
              ))}


              {/* Conversations of the Array / examples */}
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  type="button"
                  onClick={() => 
                    `${selectChat(conversation.id)}` + selectConversation(conversation.id) +`${handlechat(conversation.id)}` + setSelectedConversationId(conversation.title)
                  } 
                  className={`group cursor-pointer w-full rounded-2xl border p-3.5 text-left transition ${
                    conversation.active
                      ? "border-violet-400/20 bg-violet-500/15"
                      : "border-transparent bg-white/2.5 hover:border-white/10 hover:bg-white/5"
                  }`} 
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        conversation.active
                          ? "bg-violet-500/20 text-violet-300"
                          : "bg-white/5 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <MessageSquare size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-100">
                          {conversation.title}
                        </p>

                        <span className="shrink-0 text-[11px] text-slate-500">
                          {conversation.time}
                        </span>
                      </div>

                      <p className="mt-1 truncate text-xs leading-5 text-slate-400">
                        {conversation.preview}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
          
            </div>
          </div>


            {/* Upgrade Card */}
           
             <div className="px-5 pb-5 lg:px-6 lg:hidden">
              
            <div className="rounded-2xl border border-violet-400/15 bg-linear-to-br from-violet-500/10 to-transparent p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                  <Crown size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold ">Go Premium</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Unlimited practice, advanced feedback and more.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 h-10 w-full rounded-xl bg-violet-600 text-sm font-semibold transition hover:bg-violet-500"
              >
                Upgrade now
              </button>
            </div>
          </div>


        {/* User */}

          <div className="flex rounded-2xl border items-center justify-center border-violet-400/15 bg-linear-to-br from-violet-500/10 to-transparent p-4 mb-4 ml-6 mr-6 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold">
              {user?.firstName?.charAt(0)}
            </div>

            <div className="min-w-0 flex-1 ml-3">
              <p className="truncate text-sm font-medium"> {user?.firstName}</p>
              <p className="text-xs text-slate-500">Free plan</p>
            </div>

            <button
              type="button"
              aria-label="Settings"
              className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white "
            >
              <Settings size={19} />
            </button>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_35%)]">
          <header className="flex h-19 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                aria-label="Open sidebar"
                className="rounded-xl p-2 text-slate-300 hover:bg-white/5 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={22} />
              </button>

              <button
                type="button"
                className="flex min-w-0 items-center gap-2 rounded-xl px-2 py-2 text-left transition hover:bg-white/5"
              >
     
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold sm:text-base">
                    {selectedConversationId}
                  </p>
                  <p className="mt-0.5 hidden text-xs text-emerald-400 sm:block">
                    AI tutor online
                  </p>
                </div>

                <ChevronDown
                  size={18}
                  className="shrink-0 text-slate-500"
                />
              </button>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={clearChat}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <Trash2 size={18} />
                <span className="hidden sm:inline">Clear chat</span>
              </button>

              <button
                type="button"
                aria-label="More options"
                className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <MoreVertical size={19} />
              </button>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex-1 space-y-7">
                {messages.map((chatMessage) => (
                  <ChatBubble
                    key={chatMessage.id}
                    message={chatMessage}
                  />
                ))}

                {isSending && <TypingBubble />}

                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          <div className="shrink-0 px-4 pb-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              {messages.at(-1)?.role === "ASSISTANT" &&
                !isSending && (
                  <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply}
                        type="button"
                        onClick={() => {
                          const activeChat =
                            selectedChat ??
                            chats.find((chat) => chat.active);

                          if (!activeChat?.id) {
                            console.error("No active chat selected");
                            return;
                          }

                          void sendMessage(reply, activeChat.id);
                        }}
                        className="shrink-0 rounded-xl border border-white/10 bg-white/2.5 px-4 py-2.5 text-sm text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                      >
                        {reply}
                      </button>
                    ))}

                  <button
                    type="button"
                      aria-label="New suggestions"
                      onClick={() => console.log("new suggestions")}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white"
                    >
                      <RefreshCw size={17} />
                    </button>
                  </div>
                )}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-[#10192a]/95 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl focus-within:border-violet-500/50 focus-within:ring-4 focus-within:ring-violet-500/5"
              >
                <div className="flex items-end gap-2">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    rows={1}
                    placeholder="Type your message..."
                    disabled={isSending}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    className="max-h-40 min-h-12 flex-1 resize-none bg-transparent px-3 py-3 text-[15px] leading-6 text-white outline-none placeholder:text-slate-500 disabled:cursor-not-allowed"
                  />

                  <button
                    type="button"
                    aria-label="Use voice input"
                    onClick={startVoiceInput}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition ${
                      isListening
                        ? "animate-pulse border-red-400/30 bg-red-500/15 text-red-300"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Mic size={20} />
                  </button>

                  <button
                    type="submit"
                    aria-label="Send message"
                    disabled={!message.trim() || isSending}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-purple-700 text-white shadow-lg shadow-violet-950/50 transition hover:scale-[1.03] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                  >
                    {isSending ? (
                      < Loader2
                        size={20}
                        className="animate-spin"
                      />
                    ) : (
                      <Send size={19} />
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-2 px-1 text-center text-[11px] text-slate-600 sm:text-left">
                AI responses may contain mistakes. Check important
                information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "USER";

  return (
    <article
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500/40 to-purple-800/40 text-violet-200 ring-1 ring-violet-400/20">
          <Sparkles size={19} />
        </div>
      )}

      <div
        className={`flex max-w-[86%] flex-col sm:max-w-[72%] ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg sm:px-5 sm:py-3.5 sm:text-[15px] ${
            isUser
              ? "rounded-br-md bg-linear-to-br from-violet-600 to-purple-800 text-white shadow-violet-950/30"
              : "rounded-bl-md border border-white/6 bg-[#182236] text-slate-100 shadow-black/20"
          }`}
        >
          {message.content}
        </div>

        <div
          className={`mt-1.5 flex items-center gap-1.5 px-1 text-[11px] text-slate-500 ${
            isUser ? "flex-row-reverse" : ""
          }`}
        >
          <span>{message.createdAt}</span>

          {isUser && (
            <CheckCheck size={14} className="text-violet-400" />
          )}
        </div>
      </div>

      {isUser && (
        <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-300 sm:flex">
          <User size={17} />
        </div>
      )}
    </article>
  );
}



function TypingBubble() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500/40 to-purple-800/40 text-violet-200 ring-1 ring-violet-400/20">
        <Bot size={19} />
      </div>

      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/6 bg-[#182236] px-5 py-4">
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
      </div>
    </div>
  );
}








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

// const ConversationPage = () => {


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
                 
//                         placeholder=" Let's start? Entre com um texto ou fale após apertar o botão de mic." 
                        
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
 
// export default ConversationPage;