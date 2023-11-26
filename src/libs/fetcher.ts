type TTSResponse<T = unknown> = {
  success: boolean;
  data: T;
  error?: any;
  meta?: {
    pages: number;
    page: number;
  };
};

type TTSQuery = {
  [key: string]: string | number;
};

type IReadTime = {
  minutes: number;
  seconds: number;
};

type ITag = {
  name: string;
  slug: string;
};

export type IToc = {
  level: number;
  text: string;
  htmlId: string;
};

export type IProduct = {
  id: string;
  name: string;
  slug: string;
  organization: { id: string; name: string; slug: string };
  status: string;
  content: {
    html: string;
    readTime: IReadTime;
    toc: IToc[];
  };
  description: string;
  tags: ITag[];
  createdAt: string;
  updatedAt: string;
};

export type ResponseProducts = TTSResponse<IProduct[]>;
export type ResponseProduct = TTSResponse<IProduct>;

const apiUri = process.env.TTS_API_URL! || "http://localhost:3000";
const orgId = process.env.TTS_ORG_ID!;
const appId = process.env.TTS_APP_ID!;

function buildUrl(
  basePath: string,
  queries?: TTSQuery,
  opts?: { removeHost: boolean }
) {
  const base = new URL(basePath, apiUri);

  if (queries) {
    const mapQueries = Object.entries(queries);
    mapQueries.forEach((item) => {
      if (base.searchParams.has(item[0])) {
        base.searchParams.set(item[0], item[1].toString());
      } else {
        base.searchParams.append(item[0], item[1].toString());
      }
    });
  }

  if (opts && opts.removeHost) {
    return base.href.replace(apiUri, "");
  }

  return base.href;
}

async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, {
    ...init,
    headers: { "content-type": "application/json", ...init?.headers }
  });

  const data = await response.json();
  return data;
}

export async function getProducts(queries?: TTSQuery) {
  const endPoint = buildUrl(`/api/v2/${orgId}/products`, {
    ...queries,
    populate: "organization",
    appId
  });

  const products = await fetcher<ResponseProducts>(endPoint, {
    next: { revalidate: 10 }
  });
  return products;
}
