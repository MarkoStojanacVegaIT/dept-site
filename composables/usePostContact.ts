import { JSON_SERVER_URL } from "~/consts";
import { IArticle } from "~/types/article";

export const usePostContact = async (formData: IArticle) => {
  try {
    await fetch(JSON_SERVER_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
