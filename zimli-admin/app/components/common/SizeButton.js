import React from 'react'

export default function SizeButton({size,selectedSize,onSelect}) {
  return (
    <button
      className={`p-1 m-1 border w-9 ${
        size === selectedSize
          ? "text-[#DC137B] bg-[#FFE4F4] border-[#F78DCC]"
          : "text-[#000000B2]"
      } `}
      onClick={() => onSelect(size)}
    >
      {size}
    </button>
  );
}
// border: 1px solid #00000066