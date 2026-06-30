const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-[#0F101C] w-full ">
      <div className="mx-auto w-full lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;