"use client"
import { useContext, useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { Header } from "../../components/Header/Header";
import { useRouter } from "next/navigation";
import { UserContext, UserContextProps } from "@/context/UserContext";

export default function Profile() {
  const router = useRouter();

  const { userName } = useContext(UserContext) as UserContextProps;

  useEffect(() => {
    if (!(userName !== "")) {
      router.push("/login");
    }
  }, []);

  return (
    <Layout>
      <Header title="Perfil" userName={userName} />
    </Layout>
  );
}
