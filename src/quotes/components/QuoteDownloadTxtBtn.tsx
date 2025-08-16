import { downloadQuoteTxt } from "../../services/download-quote-txt";
import { parseAuthorFileName } from "../../utils/parse-author-file-name";
import type { QuoteProps } from "../../interfaces";
import { DownloadIcon } from "../../icons/icons";

export const QuoteDownloadTxtBtn = ({ quote, author }: QuoteProps) => {
  const txtAuthorName = parseAuthorFileName(author);

  {
    /* Considero un poco invasivo para el usuario que se descargue automaticamente el .txt al entrar a la ruta /qod, por ello mismo lo siento más adecuado que se descargue a través de un click realizado por la interacción del usuario. (aunque de todas formas si se precisa exactamente que de descargue automaticamente al entrar a la ruta se podria lograr con un efecto en cada carga del componente) */
  }

  return (
    <button type="button" onClick={() => downloadQuoteTxt(`${quote} - ${author}`, `quote-of-day-${txtAuthorName}.txt`)} className="btn-download-txt">
      <span>
        <DownloadIcon />
        Descargar .txt
      </span>
    </button>
  );
};
