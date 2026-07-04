const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="h-full bg-cover flex items-center justify-center">
        {children}
      </main>
    );
  }
   
  export default AuthLayout;