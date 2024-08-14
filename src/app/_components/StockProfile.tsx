"use client";

import Image from "next/image";
import { useAtom } from "jotai";
import { stockDataAtom } from "../store";
import { Dot, ExternalLink } from "lucide-react";
import { formatDate, formatMarketCap } from "../_utils/formatter";

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

  if (!currentPrice) return null;

  return (
    <div className="w-full h-full flex flex-col gap-8 p-4 rounded-xl bg-background-darker shadow md:gap-12">
      <div className="flex flex-col-reverse gap-2 text-xs font-extralight opacity-65 md:flex-row md:items-center">
        {country && (
          <>
            <p>{country}</p>
            <Dot size={20} strokeWidth={0.5} className="hidden md:block" />
          </>
        )}
        {ipo && (
          <>
            <p>{formatDate(ipo)}</p>
            <Dot size={20} strokeWidth={0.5} className="hidden md:block" />
          </>
        )}
        <p>{listedExchange}</p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-4">
          {logo ? (
            <Image
              src={logo}
              alt={`${name} Logo`}
              width={64}
              height={64}
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="/images/placeholder.png"
            />
          ) : (
            <Image
              src="/images/placeholder.png"
              alt={`Placeholder logo`}
              width={64}
              height={64}
              className="rounded-xl"
            />
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
            <span className="text-xs font-extralight opacity-65">
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

      <div className="flex justify-end flex-wrap gap-x-8 gap-y-4 md:gap-x-12">
        {marketCapitalization && (
          <ProfileInfo
            title="Market Cap"
            data={formatMarketCap(marketCapitalization)}
          />
        )}
        {lowPrice && <ProfileInfo title="Low" data={lowPrice.toFixed(2)} />}
        {highPrice && <ProfileInfo title="High" data={highPrice.toFixed(2)} />}
        {previousClose && (
          <ProfileInfo title="Previous Close" data={previousClose.toFixed(2)} />
        )}
        {openPrice && <ProfileInfo title="Open" data={openPrice.toFixed(2)} />}
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
      <p className="text-xs font-extralight uppercase opacity-65">{title}</p>
      <p className="text-lg font-bold">{data}</p>
    </div>
  );
};

export default StockProfile;
