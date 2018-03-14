import {
  CHANGE_ACTIVE_VIEW,
  FINISH_FIRST_VISIT,
  RESET_ACTIVE_VIEW
} from './App.constants';

export function finishFirstVisit() {
  return {
    type: FINISH_FIRST_VISIT
  };
}

export function handleActiveView(payload) {
  return {
    type: CHANGE_ACTIVE_VIEW,
    payload
  };
}

export function resetActiveView() {
  return {
    type: RESET_ACTIVE_VIEW
  };
}
