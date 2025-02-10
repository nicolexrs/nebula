import React, { useEffect, useRef } from 'react';

const TradingViewTradingTerminal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      new (window as any).TradingView.widget({
        container_id: 'tradingview-widget-container',
        width: '100%',
        height: '600px',
        symbol: 'BINANCE:BTCUSDT', // Default symbol
        interval: '1', // Default interval
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        toolbar_bg: '#00000',
        toolbar: true,
        enable_publishing: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: false,
        studies: [

        ],

      });
    };

    containerRef.current.appendChild(script);


  }, []);

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} id="tradingview-widget-container"></div>
    </div>
  );

};

export default TradingViewTradingTerminal;