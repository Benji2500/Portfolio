import React from 'react';
import { X } from 'lucide-react';
import { useEscapeToClose } from '../../hooks/useEscapeToClose';

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  /** Max-width utility class for the dialog panel (Tailwind). */
  panelClassName?: string;
  children: React.ReactNode;
}

/**
 * Shared modal shell: fixed backdrop with blur, centered scrollable area,
 * Escape-to-close handling, and a consistent rounded dialog panel.
 * Used by ProjectModal, ContactModal, ResumeModal, GitHubPushHub, and the
 * article reader.
 */
export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  isOpen,
  onClose,
  panelClassName = 'max-w-3xl',
  children,
}) => {
  useEscapeToClose(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full ${panelClassName} overflow-hidden rounded-2xl border border-slate-800 bg-[#0e121c] text-slate-100 shadow-2xl my-8`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

interface ModalCloseButtonProps {
  onClose: () => void;
  className?: string;
}

/** Consistent circular close button used across all modals. */
export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onClose,
  className = 'absolute top-5 right-5 rounded-full bg-slate-900/80 p-2 text-slate-300 hover:text-white border border-slate-700/60 transition-colors cursor-pointer',
}) => (
  <button onClick={onClose} className={className} aria-label="Close modal">
    <X className="w-4 h-4" />
  </button>
);
