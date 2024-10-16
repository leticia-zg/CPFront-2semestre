"use client"
import { useContext, useState } from "react";
import { Layout } from "../../components/layout/Layout";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useRouter } from "next/navigation";
import { UserContext, UserContextProps } from "@/context/UserContext";

export default function Login() {
  const { setUserName } = useContext(UserContext) as UserContextProps;

  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSendLogin = async ({login,password}: {
    login: string;
    password: string;
  }) => {
    console.log({login, password})
    setUserName(login);

    router.push("/profile");
  };

  const handleClick = () => {
    const params = {
      login: login,
      password: password,
    };

    handleSendLogin(params);
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form>
        <Input
          type="text"
          id="login"
          name="login"
          label="Login"
          onChange={handleLogin}
          placeholder="digite seu email"
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          name="password"
          onChange={handlePassword}
        />
        <Button type="button" onClick={handleClick}>
          Login
        </Button>
      </form>
    </Layout>
  );
}
