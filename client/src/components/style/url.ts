import { useMemo, useState } from 'react';

export const useUrlState = () => {
  const [state, setState] = useState<{ [key: string]: string }>(() => getAllUrlParams());

  return useMemo(
    () =>
      [
        state,
        (key: string, val: number | string) => {
          const v = val.toString();
          setUrlParam(key, v);
          setState(p => ({ ...p, [key]: v }));
        },
      ] as const,
    [state],
  );
};

export const getAllUrlParams = () => {
  const entries = new URLSearchParams(location.search).entries();
  const all: Record<string, string> = {};

  for (const entry of entries) {
    all[entry[0]] = entry[1];
  }

  return all;
};

export const getUrlParam = (name: string) => {
  const params = new URLSearchParams(location.search);
  return params.get(name);
};

export const setUrlParam = (key: string, value: number | string) => {
  const params = new URLSearchParams(location.search);

  if (value) {
    params.set(key, `${value}`);
  } else {
    params.delete(key);
  }

  history.replaceState({}, '', `${location.pathname}?${params}`);
};
