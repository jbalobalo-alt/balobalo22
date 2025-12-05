export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-indigo-700 animate-gradient-shift">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float-1"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float-2"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-float-3"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500/15 rounded-full blur-lg animate-float-4"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-md relative z-10">
        {children}
      </div>
    </div>
  );
}