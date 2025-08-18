export const Error = ({ message = "Ocurrió un error" }: { message: string }) => {
  return <span className="text-highlight-error">Error: {message}</span>;
};
