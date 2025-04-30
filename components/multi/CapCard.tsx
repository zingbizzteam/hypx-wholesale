'use client';

import Image from 'next/image';

interface CapCardProps {
  imageSrc: string;
  label: string;
  alt?: string;
}

export default function CapCard({ imageSrc, label, alt = 'Product Image' }: CapCardProps) {
  return (
    <div className="border border-[#b5b5b5] rounded-[8px] p-4 bg-[#F0F0F0] text-center">
      <h3 className="text-lg md:text-2xl font-semibold mb-2">{label}</h3>
      <div className="w-full aspect-square relative">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded"
        />
      </div>
    </div>
  );
}
