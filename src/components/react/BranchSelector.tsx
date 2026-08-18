import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown, MapPin, Store, X } from 'lucide-react';
import { branches } from '../../data/store';
import { selectBranch, useSelectedBranch } from '../../lib/branchStore';

export default function BranchSelector() {
  const selected = useSelectedBranch();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex min-h-11 items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 font-display text-sm font-medium text-ink shadow-sm transition hover:border-brand/40 hover:text-brand-dark active:scale-[0.98]"
        aria-haspopup="dialog"
      >
        <MapPin className="h-4 w-4 text-brand" strokeWidth={2} />
        <span className="hidden sm:inline">{selected ? selected.name : 'Elige tu sucursal'}</span>
        <span className="sm:hidden">{selected ? selected.name : 'Sucursal'}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted" strokeWidth={2} />
      </button>

      {open && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/45 p-0 backdrop-blur-sm sm:items-center sm:p-5">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="branch-dialog-title"
            tabIndex={-1}
            className="max-h-[88dvh] w-full overflow-y-auto rounded-t-[2rem] bg-cream p-5 shadow-2xl sm:max-w-xl sm:rounded-[2rem] sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">Compra local</p>
                <h2 id="branch-dialog-title" className="font-display text-2xl font-semibold tracking-tight text-ink">¿Desde qué ciudad nos escribes?</h2>
                <p className="mt-1 text-sm text-muted">Tu pedido llegará al WhatsApp de esa tienda.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar selector" className="rounded-full bg-white p-2.5 text-ink transition hover:text-brand">
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {branches.map((branch) => {
                const available = Boolean(branch.phoneInternational);
                const isSelected = branch.id === selected?.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    disabled={!available}
                    onClick={() => {
                      selectBranch(branch.id);
                      setOpen(false);
                    }}
                    className="flex min-h-20 items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-brand/40 disabled:cursor-not-allowed disabled:bg-ink/[0.03] disabled:opacity-55"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-pale text-brand-dark">
                      <Store className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-semibold text-ink">{branch.name}</span>
                      <span className="block text-xs text-muted">{available ? branch.phoneDisplay : 'Próximamente'}</span>
                    </span>
                    {isSelected && <Check className="h-5 w-5 text-brand" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
