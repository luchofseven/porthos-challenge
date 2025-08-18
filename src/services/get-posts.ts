import { API_URL } from "../const/apiUrl";
import type { ApiPostsResponse } from "../interfaces";

// Para obtener publicaciones por palabra clave (keyword posts)
export const getPostByKeyword = async (keyword: string): Promise<ApiPostsResponse> => {
  try {
    const url = new URL(`${API_URL}/posts/search`);

    if (keyword) {
      url.searchParams.append("q", keyword);
    } else {
      throw new Error("getPostByKeyword - Keyword not provided");
    }

    const response = await fetch(url);
    const data: ApiPostsResponse = await response.json();

    if (!data) {
      throw new Error("getPostByKeyword - An error occurred while calling the API");
    }

    return data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};
