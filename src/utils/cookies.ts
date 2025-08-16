interface SetCookieProps {
  name: string;
  value: string;
  hours: number;
}

interface GetCookieProps {
  name: string;
}

export const setCookie = ({ name, value, hours }: SetCookieProps) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = ({ name }: GetCookieProps): string | null => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
};
