"use client";

import * as z from "zod";
import axios from "axios";
import { Copy, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import  { Loader }  from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];
      
      const response = await axios.post('/api/conversation', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);
      
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Please provide more important details or context.");
      }
    } finally {
      router.refresh();
    }
  }

  // copy text inside the field
  const handleCopy = async (e?: any) => {
    
    try {
      const textCopied = e
      await navigator.clipboard.writeText(textCopied);
      console.log('Success to copy text');
 
    } catch (err) {
      console.log('Failed to copy text.');
      console.error('Error copying text: ', err);
    }
  };


  const handleSpeak = async (e?:any) => {
 
    try {
      const textCopied = e
      const speech = new SpeechSynthesisUtterance(textCopied); // Create a new speech instance
      speech.lang = 'en-US'; // Set the language (you can change it to any language code)
      window.speechSynthesis.speak(speech); // Speak the text

    } catch (err) {
      console.log('Failed to speak text.');
      console.error('Error speaking text: ', err);
    }
  };

  return ( 
    <div className='bg-cover bg-[#192339]'>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
              
                rounded-lg 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-2 p-2">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent text-black"
                        disabled={isLoading} 
                        placeholder=" e.g. - How do I calculate the radius of a circle?" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 p-2 m-2 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className=" max-w-60 bg-cover bg-[#111827] space-y-4 mt-4 text-[#FAF9F6] text-l rounded-lg">
        
          {isLoading && (
            <div className=" p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader  />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
          <Empty label="No conversation started." />
          )}
          <div className="bg-cover bg-[#192339] flex flex-col-reverse gap-y-4">
            
            {messages.map((message) => (
              <div 
                key={message.content} 
                className={cn(
                  " p-2 w-full flex items-start gap-x-0 rounded-lg bg-cover bg-[#111827]",
                  message.role === "user" ? "max-w-60 bg-cover bg-[#111827]   text-[#FAF9F6] text-l " : "bg-muted bg-cover bg-[#111827] ",
                )}
              >
             
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
               
                
                <code className="h-full max-w-full flex items-start gap-x-0 whitespace-break-spaces pb-8  bg-[#111827] ">

                  <div className="absolute  right-2 flex h-9 items-center rounded-lg bg-[#2F2F2F] mr-8 text-gray-400">
                    <div className="flex items-center rounded-lg bg-token-main-surface-secondary px-1.5 font-sans text-xs text-token-text-secondary">
                      <span className="" data-state="closed">
                        <button className="flex gap-1 items-center py-1"
                          onClick={(e) => handleCopy(message.content) }>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor">
                          </path>
                          </svg>
                          Copy
                        </button>
                      </span>
                    </div>
                  </div>

                  <div className="absolute mt-10 right-2 flex h-9 items-center rounded-lg bg-[#2F2F2F] mr-8 text-gray-400">
                    <div className="flex items-center rounded-lg bg-token-main-surface-secondary px-1 font-sans text-xs text-token-text-secondary">
                      <span className="" data-state="closed">
                        <button className="flex gap-1 items-center py-1"
                          onClick={(e) => handleSpeak(message.content) }>
                          <img width="24" height="24" src="volume-up-4-24.png" alt="icon" />
                          Speak
                        </button>
                      </span>
                    </div>
                  </div>

                <br/><br/>
                 <p className="max-w-full bg-[#111827] "> {message.content}</p>
                  </code>
                  
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ConversationPage;
