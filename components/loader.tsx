import Image from "next/image"

export  const Loader = () => {
    return (
      <div className=" cover bg-[#111827] h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="
        w-10 h-10 relative animate-spin
        " >
            <Image src={"/logo.png"} fill alt={"logo"} sizes="w-10 h-10"/>
            </div>
            <p className="text-sm text-muted-foreground">
            A.I. English Teacher is thinking...
            </p>
    </div>
  )
}
