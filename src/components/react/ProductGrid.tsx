import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, MapPin, X } from 'lucide-react';
import { branches, productCategories, type Product, type ProductCategory } from '../../data/store';
import { selectBranch, useSelectedBranch } from '../../lib/branchStore';
import ProductCard from './ProductCard';
import WhatsAppIcon from './WhatsAppIcon';

interface Props {
  products: Product[];
  filterable?: boolean;
}

function openWhatsApp(product: Product, phone: string) {
  const message = `Hola, quiero pedir: ${product.name}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

export default function ProductGrid({ products, filterable = false }: Props) {
  const selectedBranch = useSelectedBranch();
  const [category, setCategory] = useState<'Todos' | ProductCategory>('Todos');
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const visibleProducts = category === 'Todos' ? products : products.filter((product) => product.category === category);

  useEffect(() => {
    if (!pendingProduct) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPendingProduct(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [pendingProduct]);

  const order = (product: Product) => {
    if (selectedBranch?.phoneInternational) {
      openWhatsApp(product, selectedBranch.phoneInternational);
      return;
    }
    setPendingProduct(product);
  };

  return (
    <>
      {filterable && (
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap" aria-label="Filtrar productos por categoría">
          {productCategories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-11 shrink-0 rounded-full border px-4 py-2 font-display text-sm font-medium transition active:scale-[0.98] ${category === item ? 'border-brand bg-brand text-white' : 'border-ink/10 bg-white text-ink hover:border-brand/40 hover:text-brand-dark'}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onOrder={order} />)}
      </div>

      {pendingProduct && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/45 backdrop-blur-sm sm:items-center sm:p-5">
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="order-branch-title" tabIndex={-1} className="max-h-[90dvh] w-full overflow-y-auto rounded-t-[2rem] bg-cream p-5 shadow-2xl sm:max-w-xl sm:rounded-[2rem] sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-pale text-brand-dark"><MapPin className="h-5 w-5" strokeWidth={2} /></span>
                <h2 id="order-branch-title" className="font-display text-2xl font-semibold tracking-tight text-ink">Elige dónde pedir</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">Selecciona una tienda para pedir <strong className="text-ink">{pendingProduct.name}</strong>.</p>
              </div>
              <button type="button" onClick={() => setPendingProduct(null)} aria-label="Cerrar" className="rounded-full bg-white p-2.5 text-ink transition hover:text-brand"><X className="h-5 w-5" strokeWidth={2} /></button>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {branches.map((branch) => {
                const available = Boolean(branch.phoneInternational);
                return (
                  <button
                    key={branch.id}
                    type="button"
                    disabled={!available}
                    onClick={() => {
                      if (!branch.phoneInternational) return;
                      selectBranch(branch.id);
                      openWhatsApp(pendingProduct, branch.phoneInternational);
                      setPendingProduct(null);
                    }}
                    className="flex min-h-20 items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-brand/40 disabled:cursor-not-allowed disabled:bg-ink/[0.03] disabled:opacity-55"
                  >
                    <span className="min-w-0 flex-1"><span className="block font-display font-semibold text-ink">{branch.name}</span><span className="block text-xs text-muted">{available ? branch.phoneDisplay : 'Próximamente'}</span></span>
                    {branch.id === selectedBranch?.id && <Check className="h-5 w-5 text-brand" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted"><WhatsAppIcon className="h-4 w-4" /> Tu pedido se termina directamente con la tienda.</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
