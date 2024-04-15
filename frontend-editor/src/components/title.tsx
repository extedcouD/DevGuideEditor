export function OndcTitle({ children }: any) {
  return (
    <div className="flex items-center justify-between mx-auto px-4 py-2 shadow-lg">
      <img
        src="https://seeklogo.com/images/O/open-network-for-digital-commerce-logo-E7F55933B3-seeklogo.com.png"
        alt="Logo"
        className="h-16 w-auto"
      />
      {<GradientText>DEV GUILD EDITOR</GradientText>}
      {children}
    </div>
  );
}
export function GradientText({ children }: any) {
  return (
    <h2
      className="text-3xl md:text-3xl lg:text-3xl font-bold text-center text-transparent bg-clip-text flex-grow"
      style={{
        backgroundImage: "linear-gradient(to right, #007CF0, #00DFD8)",
      }}
    >
      {children}
    </h2>
  );
}