/** Gold gradient emphasis used inside section headings. */
export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
      {children}
    </em>
  );
}
