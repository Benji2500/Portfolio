import { useEffect } from 'react';

/**
 * Registers an Escape-key handler while `isActive` is true.
 * Shared by all modal-style overlays.
 */
export function useEscapeToClose(isActive: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose]);
}
