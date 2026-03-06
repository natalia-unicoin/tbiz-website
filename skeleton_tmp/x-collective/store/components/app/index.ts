import {
  LoadingState,
  VideoCard,
} from 'types';

import { StoreonModule } from 'storeon';

import axiosAdapter from 'utils/axiosAdapter';

const SUMSUB_LEVEL_NAME = process.env.NEXT_PUBLIC_SUMSUB_LEVEL_NAME;

interface VideoModalStateData {
  peopleTalkVideo?: boolean;
  videoData: VideoCard | any;
  onClose: () => void;
  onChangeElement: (flow: 'prev' | 'next') => void;
}

interface accessTokenApplicantData {
  token: string;
  userId: string;
}

interface VideoModalState extends LoadingState {
  data: VideoModalStateData | null;
}
interface accessTokenApplicantState extends LoadingState {
  data?: accessTokenApplicantData | null;
}

export interface AppState {
  modalVideo: VideoModalState;
  accessTokenApplicant: accessTokenApplicantState;
}

export interface getAccessTokenApplicantPayload {
  externalUserId: string;
}
export interface getApplicantPayload {
  externalUserId: string;
}

export type SetVideoModalPayload = VideoCard | null | any;

export interface AppEvents {
  getAccessTokenApplicant: getAccessTokenApplicantPayload;
  getApplicant: getApplicantPayload;
  setModalVideoState: SetVideoModalPayload;
  setAccessTokenApplicantState: accessTokenApplicantState;
}

const appModule: StoreonModule<AppState, AppEvents> = (store) => {
  store.on('@init', () => ({
    modalVideo: {
      fetching: false,
      error: false,
      data: null,
    },
    accessTokenApplicant: {
      fetching: false,
      error: false,
      data: null,
    },
    applicant: {
      fetching: false,
      error: false,
      data: null,
    },
  }));

  store.on('getAccessTokenApplicant', async (state, payload) => {
    try {
      const { externalUserId } = payload;
      const timeStamp = String(Math.floor(Date.now() / 1000));

      store.dispatch('setAccessTokenApplicantState', {
        fetching: true,
        error: false,
      });

      const response = await axiosAdapter({
        method: 'POST',
        url: '/verify/accessTokens',
        data: {
          timeStamp: timeStamp,
          externalUserId: externalUserId,
          levelName: SUMSUB_LEVEL_NAME,
        },
      });

      store.dispatch('setAccessTokenApplicantState', {
        fetching: false,
        error: false,
        data: response.data,
      });
    } catch (error) {
      store.dispatch('setAccessTokenApplicantState', {
        fetching: false,
        error: true,
      });
    }
  });

  store.on('setModalVideoState', (state, videoData) => {
    return {
      ...state,
      modalVideo: {
        ...state.modalVideo,
        data: videoData,
      },
    };
  });

  store.on('setAccessTokenApplicantState', (state, {
    data = null,
  }) => {
    return {
      ...state,
      accessTokenApplicant: {
        ...state.accessTokenApplicant,
        data,
      },
    };
  });
};

export default appModule;
