"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Trash } from "@phosphor-icons/react/dist/ssr";

interface IProps {
  src: string | null;
  alt: string;
  setFile: (value: string | null) => void;
}

export function Avatar({ src, alt, setFile }: IProps) {
  return (
    <div>
      <Image
        src={src ? src : "/image-not-found.png"}
        alt={alt}
        width={150}
        height={150}
        className="obje-cover rounded-lg"
      />

      {src !== null && (
        <div onClick={() => setFile(null)} className="mt-2">
          <Button variant="outline" className="text-red-500" size="sm">
            <Trash size={20} />
            Remover imagem
          </Button>
        </div>
      )}
    </div>
  );
}
