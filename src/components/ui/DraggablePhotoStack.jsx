import { useState } from "react";
import { motion } from "framer-motion";

const defaultPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
    caption: "Coding Session 💻",
    rotate: -6,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    caption: "Setup Minimalis ☕",
    rotate: 4,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
    caption: "Coffee & Code 🚀",
    rotate: -3,
  },
];

export function DraggablePhotoStack({ photos = defaultPhotos }) {
  const [stack, setStack] = useState(photos);

  const handleDragEnd = (_, info, index) => {
    const threshold = 60; // Batas jarak geser untuk melempar
    const offsetX = info.offset.x;

    if (Math.abs(offsetX) > threshold) {
      // Pindahkan item teratas ke urutan paling bawah stack setelah digeser
      setTimeout(() => {
        setStack((prevStack) => {
          const newStack = [...prevStack];
          const [movedItem] = newStack.splice(index, 1);
          newStack.unshift(movedItem); // Taruh di urutan paling bawah (belakang)
          return newStack;
        });
      }, 150);
    }
  };

  return (
    <div className="relative w-72 h-96 flex items-center justify-center overflow-visible">
      {stack.map((photo, index) => {
        // Kartu yang paling atas adalah yang ada di indeks terakhir array
        const isTop = index === stack.length - 1;

        return (
          <motion.div
            key={photo.id}
            className="absolute w-64 h-80 bg-white p-3 pb-10 rounded-2xl shadow-xl cursor-grab active:cursor-grabbing border border-gray-100 flex flex-col items-center select-none"
            style={{
              zIndex: index,
            }}
            initial={{
              rotate: photo.rotate || 0,
              scale: 1,
            }}
            animate={{
              scale: isTop ? 1 : 0.95,
              y: isTop ? 0 : (stack.length - 1 - index) * 4,
              x: 0,
              rotate: photo.rotate || 0,
              transition: { duration: 0.2 },
            }}
            drag={isTop ? "x" : false} // Hanya kartu paling atas yang bisa ditarik
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={(e, info) => handleDragEnd(e, info, index)}
            whileHover={isTop ? { scale: 1.02 } : {}}
            whileTap={isTop ? { scale: 0.98 } : {}}
          >
            <div className="w-full h-full overflow-hidden rounded-xl bg-gray-100 pointer-events-none">
              <img
                src={photo.url}
                alt={photo.caption || "Photo"}
                className="w-full h-full object-cover"
              />
            </div>
            {photo.caption && (
              <p className="mt-3 text-sm font-medium text-gray-700 font-sans tracking-wide">
                {photo.caption}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}