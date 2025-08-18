// import { useEffect } from "react";
import { downloadQuoteTxt } from "../../services";
import { parseAuthorFileName } from "../../utils";
import { DownloadIcon } from "../../icons/icons";
import type { Quote } from "../../interfaces";

export const QuoteDownloadTxtBtn = ({ quote, author }: Quote) => {
  const txtAuthorName = parseAuthorFileName(author);

  {
    /* Considero un poco invasivo para el usuario que se descargue automaticamente el .txt al entrar a la ruta /qod, por ello mismo lo siento más adecuado que se descargue a través de un click realizado por la interacción del usuario. (aunque de todas formas si se precisa exactamente que de descargue automaticamente al entrar a la ruta se podria lograr con un efecto en cada carga del componente) */
  }

  // useEffect(() => {
  //   downloadQuoteTxt(`${quote} - ${author}`, `quote-of-day-${txtAuthorName}.txt`)
  // }, [quote, author, txtAuthorName])

  return (
    <button type="button" onClick={() => downloadQuoteTxt(`${quote} - ${author}`, `quote-of-day-${txtAuthorName}.txt`)} className="btn-download-txt">
      <span>
        <DownloadIcon />
        Download .txt
      </span>
    </button>
  );
};
