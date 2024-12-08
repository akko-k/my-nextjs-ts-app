// app/components/ImageGallery.tsx

import Image from 'next/image';

export default function ImageGallery() {
  const images = [
    { src: '/images/photo1.jpg', alt: 'Photo 1' },
    { src: '/images/photo2.jpg', alt: 'Photo 2' },
    { src: '/images/photo3.jpg', alt: 'Photo 3' },
    { src: '/images/photo4.jpg', alt: 'Photo 4' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={image.src}
            alt={image.alt}
            sizes="300px"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      ))}
    </div>
  );
}
