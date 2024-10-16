"use client";

import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { useSearchParams } from "next/navigation";
import { Header } from "../components/Header/Header"

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default function Home() {
  const searchParams = useSearchParams();
  const cityCode = searchParams.get("cityCode");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);

  const loadCity = async (cityCode: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
      );
      const data = await response.json();
      setCityData(data);
      await loadForecast(cityCode);
    } catch (error) {
      console.error(error);
      setCityData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loadForecast = async (cityCode: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}/6`
      );
      const data = await response.json();
      setForecast(data.clima);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cityCodeParams = cityCode ? Number(cityCode) : 244; 
    loadCity(cityCodeParams);
  }, [cityCode]);

  return (
    <Layout>
      <Header title="Inicio" />
      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            {cityData ? (
              <>
                <div>
                  <h2>
                    {cityData?.cidade}/{cityData?.estado}
                  </h2>
                  <p>
                    Min<span>{cityData?.clima[0].min}</span>/ Max
                    <span>{cityData?.clima[0].max}</span> - 
                     <span> {cityData?.clima[0].condicao_desc}</span>
                  </p>
                </div>
                <ul>
                  {forecast.length > 0 ? (
                    forecast.map((day) => {
                      const formattedDate = formatDate(day.data);
                      const minTemp = day.min !== null ? day.min : "Dados não disponíveis";
                      const maxTemp = day.max !== null ? day.max : "Dados não disponíveis";
                      const condition = day.condicao_desc || "Condição não disponível";

                      return (
                        <li key={day.data}>
                          {formattedDate}: Min <span>{minTemp}</span>, Max <span>{maxTemp}</span> - {condition}
                        </li>
                      );
                    })
                  ) : (
                    <li>Nenhuma previsão disponível.</li>
                  )}
                </ul>
              </>
            ) : (
              <p>Nenhuma cidade encontrada.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
