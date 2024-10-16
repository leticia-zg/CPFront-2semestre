import { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext, UserContextProps } from "../../context/UserContext";
import { styles } from "../Header/Header.style"

interface HeaderProps {
  title: string;
  userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
  const router = useRouter();
  
  const context = useContext(UserContext);
  
  // Verificação do contexto para evitar erros de desestruturação
  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { setUserName } = context; // Desestruturação segura

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    setUserName("");
    router.push("/login");
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>{title}</h1>
      <div style={styles.div}>
        {userName ? (
          <div style={styles.userData}>
            <span>{userName}</span>
            <button style={styles.button} onClick={handleLogout}>
              Sair
            </button>
          </div>
        ) : (
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};
