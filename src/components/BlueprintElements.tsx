/**
 * Blueprint-style decorative elements: corner brackets, crosshair nodes, dimension annotations.
 */

interface BlueprintCornerProps {
  className?: string;
}

/** Corner bracket marks around a container — wrap your content with position: relative */
export const BlueprintCorners = ({ className = "" }: BlueprintCornerProps) => {
  const cornerStyle = "absolute w-4 h-4 border-primary/25";
  return (
    <>
      <span className={`${cornerStyle} top-0 left-0 border-t border-l ${className}`} />
      <span className={`${cornerStyle} top-0 right-0 border-t border-r ${className}`} />
      <span className={`${cornerStyle} bottom-0 left-0 border-b border-l ${className}`} />
      <span className={`${cornerStyle} bottom-0 right-0 border-b border-r ${className}`} />
    </>
  );
};

/** Small crosshair dot — place at grid intersections or key points */
export const CrosshairNode = ({ className = "" }: { className?: string }) => (
  <span className={`absolute w-2 h-2 ${className}`}>
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="w-px h-full bg-primary/20" />
    </span>
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="h-px w-full bg-primary/20" />
    </span>
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/30" />
  </span>
);

/** Dimension label — small annotation like on a technical drawing */
export const DimensionLabel = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center gap-1 text-[10px] font-mono text-primary/30 uppercase tracking-widest ${className}`}
  >
    <span className="w-3 h-px bg-primary/20" />
    {children}
    <span className="w-3 h-px bg-primary/20" />
  </span>
);

/** A horizontal rule styled like a blueprint dimension line */
export const BlueprintDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="flex-1 h-px bg-primary/10" />
    <span className="w-1.5 h-1.5 rotate-45 border border-primary/20" />
    <span className="flex-1 h-px bg-primary/10" />
  </div>
);
