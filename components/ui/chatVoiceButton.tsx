import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"
import toast from 'react-hot-toast'

 function ChatVoiceButton() {
  const [isActive, setIsActive] = useState(false)

  const toggleVoice = () => {
    setIsActive(!isActive)
    // Here you would typically implement the logic to start/stop voice recording
    console.log(isActive ? "Stopped ChatVoice" : "Started ChatVoice")
  
    {isActive ?
      toast(
        'Stopped ChatVoice',
        {
          style: {
            borderRadius: '10px',
            background: '#6F5AF6',
            color: '#fff',
          }
        }
      ) 
      :
      toast(
        'Started ChatVoice',
        {
          style: {
            borderRadius: '10px',
            background: '#6F5AF6',
            color: '#fff',
          }
        }
      ) 
    
    }
  }

  return (
    <Button 
      onClick={toggleVoice}
      variant={isActive ? "default" : "outline"}
      size="icon"
      aria-label={isActive ? "Stop voice input" : "Start voice input"}
      className={`rounded-full transition-colors ${
        isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
      }`}
    >
      {isActive ?
        (<Mic className="h-5 w-5" />) 
        :
        (
        <MicOff className="h-5 w-5" />
        )}
      

    </Button>



  )
}

export {ChatVoiceButton} 