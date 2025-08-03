"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function FullscreenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-foreground p-2">
          <Menu size={28} />
        </button>
      </DialogTrigger>

      <DialogContent
        className="p-6 bg-background text-foreground w-full max-w-none h-full rounded-none overflow-y-auto"
        showCloseButton={false} // ✅ optional if your version supports it
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-lg font-medium">
          {["#about", "#work", "#projects", "#contact"].map((href) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {href.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
            </Link>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
