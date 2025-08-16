export const parseAuthorFileName = (author: string) =>
  author
    ?.split(/[\s-]+/)
    .join("-")
    .toLowerCase();
