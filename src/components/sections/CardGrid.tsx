import React from 'react';
import Image from 'next/image';
import { Ellipsis } from 'lucide-react';

interface CardData {
  id: string;
  coverImage: string;
  title: string;
  timestamp: string;
  avatar: string;
}

const CARDS: CardData[] = [
  {
    id: '1',
    coverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/1cbe52f155944f60a0dbc8aa249c995baa8512d69e85c74234-1.webp',
    title: 'Presentation Intelligence',
    timestamp: '7 months ago',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png',
  },
  {
    id: '2',
    coverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/62734eeaa25946feb99f98852d5fcbaf3e5f96be22999f640c-3.webp',
    title: 'MEDTRONIC’S BARIATRIC SURGERY',
    timestamp: '4 months ago',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png',
  },
  {
    id: '3',
    coverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/ef4f293a42d747c1a312a38360c782972962e79b2237bd4fa6-5.webp',
    title: 'Scenario Presentation',
    timestamp: '3 months ago',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png',
  },
  {
    id: '4',
    coverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/7ad3884f7aa641baab5f057a435f3c3cca8d5e6890450387ae-7.webp',
    title: 'Innovation Lab Report',
    timestamp: '2 months ago',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png',
  },
  {
    id: '5',
    coverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/bfa6f711cea047d4b1b5aa8d534f3bb0c7f55b6a7f399bee68-9.webp',
    title: 'Marketing Strategy 2024',
    timestamp: '1 month ago',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png',
  }
];

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-x-6 gap-y-8">
      {CARDS.map((card) => (
        <div key={card.id}>
          <div className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5 cursor-pointer transition-all duration-200 hover:bg-white/10">
            {/* Card Cover */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={card.coverImage}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Top Hover Gradient Overlay */}
              <div className="absolute left-0 top-0 h-[60px] w-full bg-gradient-to-b from-black/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              
              {/* Options Menu Button (Visible on Hover) */}
              <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button className="flex h-8 w-8 items-center justify-center rounded bg-[#2C353F] text-white hover:bg-[#3d4957]">
                  <Ellipsis size={20} />
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col justify-end p-[10px] min-h-[120px]">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex-1 overflow-hidden pr-2">
                  <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#b8c0c5]">
                    {card.timestamp}
                  </p>
                </div>
                
                {/* User Avatar */}
                <div className="relative h-8 w-8 flex-shrink-0 z-10">
                  <Image
                    src={card.avatar}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full border border-white/10 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Inset click area overlay to prevent nested button issues while keeping card clickable */}
            <div className="absolute inset-0 pointer-events-none" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;