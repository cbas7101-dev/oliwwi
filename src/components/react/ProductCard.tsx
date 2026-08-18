import { useEffect, useRef } from 'react';
import { Droplets, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import type { Product } from '../../data/store';
import WhatsAppIcon from './WhatsAppIcon';

interface Props {
  product: Product;
  onOrder: (product: Product) => void;
}

const colorClasses = {
  rose: 'from-[#f9b2c9] via-[#ef4d86] to-[#bf1455]',
  pink: 'from-[#ffe5ed] via-[#f7a1be] to-[#e92672]',
  peach: 'from-[#fff2df] via-[#f4d4ba] to-[#e9a67e]',
  lilac: 'from-[#f5e8f5] via-[#dcb8dc] to-[#ad77ad]',
  aqua: 'from-[#e5faf9] via-[#a9dedb] to-[#5da8a8]'
};

export default function ProductCard({ product, onOrder }: Props) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const visual = card.querySelector('[data-product-visual]');
    const onEnter = () => gsap.to(visual, { y: -7, rotate: 1.5, duration: 0.45, ease: 'power3.out' });
    const onLeave = () => gsap.to(visual, { y: 0, rotate: 0, duration: 0.55, ease: 'power3.out' });
    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mouseleave', onLeave);
      gsap.killTweensOf(visual);
    };
  }, []);

  return (
    <article ref={cardRef} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/[0.08] bg-white p-2 shadow-card transition duration-300 hover:border-brand/20">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.3rem] bg-gradient-to-br ${colorClasses[product.color]}`}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, white 0 1px, transparent 2px)', backgroundSize: '28px 28px, 19px 19px' }} />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.13em] text-ink backdrop-blur-sm">{product.category}</span>
        <div data-product-visual className="absolute inset-x-0 bottom-4 mx-auto flex h-[72%] w-[62%] items-center justify-center rounded-[42%_42%_24%_24%] border border-white/55 bg-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_35px_-20px_rgba(61,12,34,0.6)] backdrop-blur-md">
          <div className="text-center text-ink/75">
            {product.category.includes('Skincare') || product.category === 'Skincare' ? <Droplets className="mx-auto mb-2 h-8 w-8" strokeWidth={1.4} /> : <Sparkles className="mx-auto mb-2 h-8 w-8" strokeWidth={1.4} />}
            <span className="block font-display text-xs font-semibold uppercase tracking-[0.13em]">{product.brand}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4 sm:pb-4">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-dark">{product.brand}</p>
        <h3 className="mt-1.5 min-h-[3.25rem] font-display text-lg font-semibold leading-[1.2] tracking-tight text-ink">{product.name}</h3>
        {product.extra && <p className="mt-2 text-xs font-semibold text-muted">{product.extra}</p>}

        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-ink/[0.08] pb-4 pt-4">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Unidad</span>
            <strong className="font-display text-lg font-semibold text-ink">{product.unitPrice}</strong>
          </div>
          <div className="border-l border-ink/[0.08] pl-3">
            <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Desde 3 unid.</span>
            <strong className="font-display text-lg font-semibold text-brand-dark">{product.wholesalePrice}</strong>
          </div>
        </div>

        <button type="button" onClick={() => onOrder(product)} className="button-primary w-full">
          <WhatsAppIcon />
          Pedir por WhatsApp
        </button>
      </div>
    </article>
  );
}
