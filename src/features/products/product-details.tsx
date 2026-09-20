import { useState } from "react";
import { Check, ChevronRight, Instagram, Menu, Minus, Plus, Search, ShoppingBag, UserRound, X } from "lucide-react";

import mainImage from "@/assets/santal-parchment-main.jpg";
import detailImage from "@/assets/santal-detail.jpg";
import atelierImage from "@/assets/santal-atelier.jpg";
import travelImage from "@/assets/santal-travel.jpg";
import fleurImage from "@/assets/fleur-de-lune.jpg";
import noirImage from "@/assets/noir-cocoon.jpg";
import solImage from "@/assets/sol-dor.jpg";
import roseImage from "@/assets/rose-absolute.jpg";

const gallery = [
  { src: mainImage, alt: "Santal Parchment perfume bottle in golden sunlight", width: 1200, height: 1200 },
  { src: detailImage, alt: "Embossed Santal Parchment packaging detail", width: 1200, height: 800 },
  { src: atelierImage, alt: "Santal Parchment ingredients in the perfumer's atelier", width: 1200, height: 800 },
  { src: travelImage, alt: "Santal Parchment travel bottle", width: 1200, height: 800 },
];

const sizes = [
  { volume: "30 ml", price: "$140" },
  { volume: "50 ml", price: "$180" },
  { volume: "100 ml", price: "$220" },
];

const related = [
  { name: "Fleur de Lune", price: "$195", notes: "Floral / Jasmine & White Musk", image: fleurImage },
  { name: "Noir Cocoon", price: "$240", notes: "Oriental / Tobacco & Amber", image: noirImage },
  { name: "Sol d’Or", price: "$185", notes: "Fresh / Bergamot & Sea Salt", image: solImage },
  { name: "Rose Absolute", price: "$205", notes: "Floral / Damask Rose & Cedar", image: roseImage },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return <span className={`font-display text-[1.55rem] tracking-[0.28em] ${light ? "text-footer-foreground" : "text-foreground"}`}>ODORATUS</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-foreground py-2 text-center text-[9px] font-medium uppercase tracking-wide text-background">
        Complimentary signature gift wrapping on all orders above $150
      </div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 lg:grid-cols-3 lg:px-8">
          <button className="inline-flex h-10 w-10 items-center justify-center lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
            <Menu size={19} />
          </button>
          <nav className="hidden items-center gap-9 text-[11px] uppercase lg:flex" aria-label="Primary navigation">
            <a href="#top" className="font-semibold">Home</a><a href="#companions">Shop</a><a href="#companions">Categories</a><a href="#story">The Atelier</a>
          </nav>
          <div className="justify-self-center"><BrandMark /></div>
          <div className="flex items-center justify-end gap-4">
            <label className="hidden h-9 w-48 items-center gap-2 rounded-full border border-border px-3 text-muted-foreground md:flex">
              <Search size={14} /><input className="min-w-0 flex-1 bg-transparent text-[11px] outline-none" placeholder="Search fragrances..." aria-label="Search fragrances" />
            </label>
            <button className="hidden h-9 w-9 items-center justify-center sm:inline-flex" aria-label="Account"><UserRound size={17} /></button>
            <button className="relative inline-flex h-9 w-9 items-center justify-center" aria-label="Shopping bag"><ShoppingBag size={17} /><span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[8px] text-gold-foreground">2</span></button>
          </div>
        </div>
      </header>
      {menuOpen && <div className="fixed inset-0 z-50 bg-foreground/35 lg:hidden" onClick={() => setMenuOpen(false)}><nav className="h-full w-72 bg-background p-6" onClick={(event) => event.stopPropagation()}><div className="mb-10 flex items-center justify-between"><BrandMark /><button className="h-10 w-10" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X /></button></div><div className="grid gap-6 text-sm uppercase"><a href="#top">Home</a><a href="#companions">Shop</a><a href="#companions">Categories</a><a href="#story">The Atelier</a></div></nav></div>}
    </>
  );
}

function ProductGallery() {
  const [active, setActive] = useState(0);
  const selected = gallery[active];
  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-sm bg-muted">
        <img src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} className="h-full w-full object-cover" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {gallery.map((image, index) => <button key={image.src} onClick={() => setActive(index)} aria-label={`View product image ${index + 1}`} className={`aspect-[1.55] overflow-hidden rounded-sm border-2 ${active === index ? "border-foreground" : "border-transparent"}`}><img src={image.src} alt="" loading="lazy" width={image.width} height={image.height} className="h-full w-full object-cover" /></button>)}
      </div>
    </div>
  );
}

function ProductPurchase() {
  const [size, setSize] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(true);
  const [added, setAdded] = useState(false);
  return (
    <div className="lg:pt-1">
      <div className="flex flex-wrap gap-2 text-[9px] font-semibold uppercase text-muted-foreground"><span className="rounded-full bg-muted px-3 py-1.5">Scent family: Woody</span><span className="rounded-full bg-muted px-3 py-1.5">Occasion: Evening</span></div>
      <h1 className="mt-4 font-display text-4xl leading-none md:text-5xl">Santal Parchment</h1>
      <div className="mt-4 grid grid-cols-[1fr_auto] items-center border-b border-border pb-7"><p className="text-2xl font-medium">{sizes[size].price}</p><p className="flex items-center gap-2 text-[11px] font-semibold text-available"><span className="h-2 w-2 rounded-full bg-available" />Available in Atelier</p></div>
      <fieldset className="mt-7"><legend className="mb-3 text-[10px] font-bold uppercase">Select volume</legend><div className="grid grid-cols-3 gap-3">{sizes.map((option, index) => <button key={option.volume} onClick={() => setSize(index)} className={`h-16 border text-center transition-colors ${size === index ? "border-foreground" : "border-border"}`}><span className="block text-sm font-medium">{option.volume}</span><span className="block text-[10px] text-muted-foreground">{option.price}</span></button>)}</div></fieldset>
      <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-5 bg-muted p-5"><div><p className="text-xs font-semibold">Complimentary Signature Gift Wrapping</p><p className="mt-1 text-[10px] text-muted-foreground">Encased in linen paper box with custom wax seal stamp.</p></div><button role="switch" aria-checked={giftWrap} aria-label="Complimentary gift wrapping" onClick={() => setGiftWrap(!giftWrap)} className={`relative h-6 w-11 rounded-full transition-colors ${giftWrap ? "bg-gold" : "bg-border"}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform ${giftWrap ? "translate-x-5" : "translate-x-0.5"}`} /></button></div>
      <div className="mt-6 grid grid-cols-[96px_1fr] gap-4"><div className="grid h-12 grid-cols-3 items-center border border-border"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid h-full place-items-center"><Minus size={12} /></button><span className="text-center text-xs">{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="grid h-full place-items-center"><Plus size={12} /></button></div><button onClick={() => setAdded(true)} className="flex h-12 items-center justify-center gap-2 bg-foreground px-4 text-[11px] font-bold uppercase text-background transition-opacity hover:opacity-85">{added ? <><Check size={15} /> Added to bag</> : `Add to cart / ${sizes[size].price}`}</button></div>
      <section id="story" className="mt-8 border-t border-border pt-7"><h2 className="font-display text-3xl">Scent Anatomy</h2><p className="mt-5 text-sm leading-6 text-muted-foreground">Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.</p><dl className="mt-5 text-[10px] uppercase">{[["Top notes","Sicilian Bergamot, Pink Pepper"],["Heart notes","Egyptian Jasmine Sambac, Papyrus"],["Base notes","West Indian Sandalwood, Cardamom, Amber"]].map(([term, value]) => <div key={term} className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-3"><dt className="font-bold">{term}</dt><dd className="text-right normal-case text-muted-foreground">{value}</dd></div>)}</dl></section>
    </div>
  );
}

function RelatedProducts() {
  return <section id="companions" className="bg-related py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><h2 className="font-display text-4xl md:text-5xl">Olfactory Companions</h2><p className="mt-3 text-[10px] uppercase text-muted-foreground">Fragrances of synonymous sophistication</p></div><div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">{related.map((product) => <article key={product.name} className="rounded-sm bg-card p-3 shadow-card"><img src={product.image} alt={`${product.name} perfume bottle`} loading="lazy" width={912} height={1104} className="aspect-[.82] w-full object-cover" /><div className="mt-4 grid grid-cols-[1fr_auto] gap-2"><h3 className="font-display text-lg md:text-xl">{product.name}</h3><span className="text-xs font-semibold">{product.price}</span></div><p className="mt-1 truncate text-[8px] uppercase text-gold">{product.notes}</p><button className="mt-4 h-9 w-full border border-border text-[9px] font-bold uppercase hover:border-foreground">Add to cart +</button></article>)}</div></div></section>;
}

function Footer() {
  const groups = [{ title: "Collections", links: ["La Maison", "Private Reserve", "Scented Candles", "Discovery Sets"] }, { title: "Customer Care", links: ["Olfactory Consultation", "Shipping & Returns", "Atelier Appointments", "Care Guide"] }, { title: "About Us", links: ["Our Philosophy", "Sourcing Standards", "Sustainability Commitments", "Journal"] }];
  return <footer className="bg-footer py-14 text-footer-muted md:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 md:grid-cols-[1.4fr_2fr]"><div><BrandMark light /><p className="mt-6 max-w-sm text-xs leading-6">An independent olfactory house cultivating slow-luxury liquid narratives. Every bottle is hand-poured in small batches using sustainably sourced botanicals.</p><div className="mt-6 flex gap-3"><a href="#" aria-label="Instagram" className="grid h-8 w-8 place-items-center rounded-full border border-footer-border"><Instagram size={13} /></a><a href="#" aria-label="Explore social profile" className="grid h-8 w-8 place-items-center rounded-full border border-footer-border"><ChevronRight size={13} /></a></div></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{groups.map((group) => <div key={group.title}><h3 className="text-[10px] font-semibold uppercase text-gold">{group.title}</h3><ul className="mt-5 grid gap-4 text-xs">{group.links.map((link) => <li key={link}><a href="#">{link}</a></li>)}</ul></div>)}</div></div><div className="mt-14 flex flex-col gap-3 border-t border-footer-border pt-6 text-[9px] uppercase sm:flex-row sm:justify-between"><span>© 2026 Odoratus. All rights reserved.</span><span>Secured checkout via &nbsp; VISA &nbsp; MASTERCARD &nbsp; AMEX</span></div></div></footer>;
}

export function ProductDetailsPage() {
  return <div id="top" className="min-h-screen bg-background text-foreground"><Header /><main><div className="mx-auto max-w-7xl px-5 pb-20 pt-5 lg:px-8 lg:pb-28"><div className="mb-5 flex items-center gap-2 text-[10px] text-muted-foreground"><span>Home</span><ChevronRight size={10} /><span>Shop</span><ChevronRight size={10} /><span>Fragrances</span><ChevronRight size={10} /><span className="text-foreground">Santal Parchment</span></div><div className="grid gap-10 md:grid-cols-2 lg:gap-16"><ProductGallery /><ProductPurchase /></div></div><RelatedProducts /></main><Footer /></div>;
}