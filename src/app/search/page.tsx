"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "../../components/Layout/Layout";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function Search() {
  const router = useRouter();
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const loadCities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );

      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.error(error);
      setCityList([]); // Limpa cityList em caso de erro
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    loadCities();
  };

  const handleNavigate = (cityCode: number) => {
    router.push(`/?cityCode=${cityCode}`);
  };

  return (
    <Layout>
      <h1>Busca</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Buscar cidade"
          id="search"
          name="search"
          type="text"
          onChange={handleChange}
        />
        <Button type="submit">Buscar</Button>
      </form>

      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {cityList.map((city) => (
              <li key={city.id} onClick={() => handleNavigate(city.id)}>
                {city.nome} / {city.estado}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
