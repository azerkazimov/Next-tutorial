import { FetcherArgs } from "@/components/helpers/types/fetcher";

export const fetcher = <T>(...args: FetcherArgs): Promise<T> => fetch(...args).then(res => res.json());