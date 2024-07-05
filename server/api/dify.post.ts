import { DifyResponse } from "~/interfaces";

export default defineEventHandler(async (event) => {
  const { difyApiKey, difyBaseUrl, difyProjectName } = useRuntimeConfig();

  const body = await readBody(event);

  try {
    const response = await $fetch<DifyResponse>("/workflows/run", {
      method: "POST",
      baseURL: difyBaseUrl,
      timeout: 60000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${difyApiKey}`,
      },
      body: {
        inputs: body,
        response_mode: "blocking",
        user: difyProjectName,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
});
