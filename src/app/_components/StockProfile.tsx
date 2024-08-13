"use client";

import Image from "next/image";
import { useAtom } from "jotai";
import { stockDataAtom } from "../store";
import { Dot, ExternalLink } from "lucide-react";
import { formatMarketCap } from "../_utils/formatter";

const StockProfile: React.FC = () => {
  const [stockData] = useAtom(stockDataAtom);

  const {
    logo,
    name,
    ticker,
    weburl,

    country,
    marketCapitalization,
    listedExchange,
    ipo,

    currency,
    currentPrice,
    percentChange,
    absoluteChange,

    previousClose,
    openPrice,
    highPrice,
    lowPrice,
  } = stockData;

  if (!name) return null;

  return (
    <div className="w-full h-full flex flex-col gap-12 p-4 rounded-xl bg-background-darker shadow">
      <div className="flex items-center gap-2 text-xs font-extralight opacity-60">
        {country && (
          <>
            <p>{country}</p>
            <Dot size={20} strokeWidth={0.5} />
          </>
        )}
        {ipo && (
          <>
            <p>{ipo}</p>
            <Dot size={20} strokeWidth={0.5} />
          </>
        )}
        <p>{listedExchange}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          {logo ? (
            <Image
              src={logo}
              alt={`${name} Logo`}
              width={64}
              height={64}
              className="bg-primary"
            />
          ) : (
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-primary text-background font-bold">
              ?
            </div>
          )}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">{ticker}</h2>
            {weburl ? (
              <a
                className="flex items-center gap-2 text-primary"
                href={weburl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
                <span>
                  <ExternalLink size={12} strokeWidth={1} />
                </span>
              </a>
            ) : (
              <p className="font-extralight">{name}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-4xl font-bold">
            <span className="text-xs font-extralight opacity-60">
              {currency}
            </span>{" "}
            {currentPrice.toFixed(2)}
          </p>
          <p
            className={`${percentChange < 0 ? "text-error" : "text-success"} `}
          >
            {percentChange > 0 && "+"}
            {percentChange.toFixed(2)}%{" "}
            <span>
              ({absoluteChange > 0 && "+"}
              {absoluteChange.toFixed(2)})
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-12 justify-end">
        {marketCapitalization && (
          <ProfileInfo
            title="Market Cap"
            data={formatMarketCap(marketCapitalization)}
          />
        )}
        {highPrice && <ProfileInfo title="High" data={highPrice.toFixed(2)} />}
        {lowPrice && <ProfileInfo title="Low" data={lowPrice.toFixed(2)} />}
        {openPrice && <ProfileInfo title="Open" data={openPrice.toFixed(2)} />}
        {previousClose && (
          <ProfileInfo title="Previous Close" data={previousClose.toFixed(2)} />
        )}
      </div>
    </div>
  );
};

interface ProfileInfoProps {
  title: string;
  data: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ title, data }) => {
  return (
    <div className="flex flex-col items-end">
      <p className="text-xs font-extralight uppercase opacity-60">{title}</p>
      <p className="text-lg font-bold">{data}</p>
    </div>
  );
};

export default StockProfile;
