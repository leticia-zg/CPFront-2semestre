"use client";

import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import { Layout } from "../../components/layout/Layout";
import UserContext from "../../context/UserContext";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function HomeParams() {
  const { cityCode } = useParams();
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
    const cityCodeParams = cityCode ? Number(cityCode) : 244; // 244 é o código padrão
    loadCity(cityCodeParams);
  }, [cityCode]);

  return (
    <Layout>
      <h1>Informações da Cidade</h1>
      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            {cityData ? (
              <>
                <h2>
                  {cityData.cidade}/{cityData.estado}
                </h2>
                <p>
                  Min <span>{cityData.clima[0]?.min ?? "Dados não disponíveis"}</span> /
                  Max <span>{cityData.clima[0]?.max ?? "Dados não disponíveis"}</span>
                </p>
                <p>{cityData.clima[0]?.condicao_desc ?? "Descrição não disponível"}</p>
                <ul>
                  {forecast.length > 0 ? (
                    forecast.map((day) => (
                      <li key={day.data}>
                        {formatDate(day.data)}: Min <span>{day.min ?? "Dados não disponíveis"}</span>, Max{" "}
                        <span>{day.max ?? "Dados não disponíveis"}</span> - {day.condicao_desc ?? "Condicao não disponível"}
                      </li>
                    ))
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
