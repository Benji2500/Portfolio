import React from 'react';

interface DotSeparatedListProps {
  items: string[];
  /** Maximum number of items to render (defaults to all). */
  limit?: number;
  /** Tailwind class for the item text. */
  itemClassName?: string;
  /** Separator glyph (defaults to the typographic middle dot). */
  separator?: string;
  className?: string;
}

/**
 * Renders an inline, "unboxed" list of terms separated by typographic dots.
 * Shared by project cards, the project modal, experience entries, and the
 * architecture matrix so the pattern is implemented exactly once.
 */
export const DotSeparatedList: React.FC<DotSeparatedListProps> = ({
  items,
  limit,
  itemClassName = '',
  separator = '·',
  className = 'flex flex-wrap items-center gap-2',
}) => {
  const visible = typeof limit === 'number' ? items.slice(0, limit) : items;

  return (
    <div className={className}>
      {visible.map((item, idx) => (
        <React.Fragment key={`${item}-${idx}`}>
          <span className={itemClassName}>{item}</span>
          {idx < visible.length - 1 && (
            <span className="text-slate-600" aria-hidden="true">
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
