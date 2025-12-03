export default function Divider() {
  return (
    <div className="relative w-full py-xl">
      <div
        aria-hidden="true"
        className="absolute left-0 w-full h-px top-1/2 -translate-y-1/2 pointer-events-none 
              bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_75%,transparent_100%)] 
          "
      />
    </div>
  );
}
