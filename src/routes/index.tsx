import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailsPage } from "@/features/products/product-details";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santal Parchment Eau de Parfum — Odoratus" },
      { name: "description", content: "Discover Santal Parchment, a woody evening fragrance with bergamot, papyrus, sandalwood, cardamom and amber." },
      { property: "og:title", content: "Santal Parchment Eau de Parfum — Odoratus" },
      { property: "og:description", content: "A warm woody fragrance wrapped in bergamot, papyrus, sandalwood and amber." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductDetailsPage,
});
