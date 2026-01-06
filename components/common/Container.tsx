export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto px-4 max-w-5xl animate-fade-in-blur ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
