import React from 'react';

type MarqueeTextProps = {
  children: React.ReactNode;
  pauseOnHover?: boolean | "true" | "false";
  direction?: "left" | "right";
  duration?: string | number;
  loop?: boolean;
  className?: string;
};

const MarqueeText = ({
  children,
  pauseOnHover = false,
  direction = "left",
  duration = 5,
  loop = true,
  className = "",
}: MarqueeTextProps) => (
  <div className={`overflow-hidden ${className}`}>
    <style>{`
      @keyframes local-marquee-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .local-marquee-track {
        display: flex;
        width: max-content;
        animation: local-marquee-scroll ${duration}s linear ${loop ? "infinite" : "1"} ${direction === "right" ? "reverse" : "normal"};
      }
      .local-marquee-track:hover {
        animation-play-state: ${pauseOnHover === true || pauseOnHover === "true" ? "paused" : "running"};
      }
    `}</style>
    <div className="local-marquee-track">
      <div className="flex shrink-0">{children}</div>
      <div className="flex shrink-0" aria-hidden="true">{children}</div>
    </div>
  </div>
);

const Marquee = async () => {
    let marqueeData;

     try {
    const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

    if (!response.ok) throw new Error("All product API 1 failed");

    marqueeData = await response.json();
  } catch {
    try {
      const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

      if (!response.ok) throw new Error("All product API 2 failed");

      marqueeData = await response.json();
    } catch {
      throw new Error("Both APIs failed");
    }
  }
    // const response = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    // const marqueeData = await response.json();
    console.log("{after setting 2API marquee=}", marqueeData);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">

            <MarqueeText pauseOnHover="true" direction="right" duration= "60" loop={true} className="py-2">
                {marqueeData.map((item: {
                  id: string | number;
                  image: string;
                  slug: string;
                  today: string;
                  unit: string;
                  change: { dir: string; pct: string | number };
                }) => (
                    <div key={item.id}><span className="mx-4"> </span>

                        {item.image}
                        <span> </span>
                        {item.slug}
                        <span> </span>
                        {item.today}
                        <span> </span>
                        <span>Tk/</span>
                        {item.unit}
                        <span> </span>
                        {item.change.dir === 'up' ? (
                            <span className="text-red-500">▲</span>
                        ) : (
                            <span className="text-green-500">▼</span>
                        )}
                        {item.change.pct}
                         <span>%</span>
                    </div>
                ))}

            </MarqueeText>
        </div>
    );
};

export default Marquee;