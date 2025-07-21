import React from "react"

export function AnnouncementBar() {
  const text = "🎉 Kampanya devam ediyor! Tüm ürünlerde %20 indirim fırsatını kaçırmayın! 🎉"

  return (
    <div className="w-full overflow-hidden bg-[#50080c] text-white group px-4 py-2">
      <div
        className="flex animate-marquee whitespace-nowrap  will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "25s" }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 text-xs font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
