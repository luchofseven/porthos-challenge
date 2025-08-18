interface SetCookieProps {
  name: string;
  value: string;
  hours: number;
}

interface GetCookieProps {
  name: string;
}

// Para guardar una cookie, requiere name = nombre de la propiedad, value = valor de la propiedad y hours = tiempo en horas para su expiración.
export const setCookie = ({ name, value, hours }: SetCookieProps) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Para obtener una cookie almacenada a través de su name.
export const getCookie = ({ name }: GetCookieProps): string | null => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
};
