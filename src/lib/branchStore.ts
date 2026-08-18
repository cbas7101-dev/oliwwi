import { useSyncExternalStore } from 'react';
import { branches, type Branch } from '../data/store';

const STORAGE_KEY = 'oliwwi-selected-branch';
const EVENT_NAME = 'oliwwi-branch-change';

function getSnapshot(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot(): null {
  return null;
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener('storage', callback);
  };
}

export function selectBranch(branchId: string) {
  window.localStorage.setItem(STORAGE_KEY, branchId);
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function useSelectedBranch(): Branch | null {
  const branchId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return branches.find((branch) => branch.id === branchId) ?? null;
}
