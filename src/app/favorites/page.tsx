"use client"
import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/layout/Layout";
import { UserContext, UserContextProps } from "../../context/UserContext";


export default function Favorites() {

  const { userName } = useContext(UserContext) as UserContextProps;

  return (
    <Layout>
      <Header title="Favoritos" userName={userName} />
    </Layout>
  );
}