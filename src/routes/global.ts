import {
  PrivateRootStackParamList,
  RootBottomParamList,
} from './privateRoutes';
import { PublicRootStackParamList } from './publicRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootBottomParamList,
        PrivateRootStackParamList,
        PublicRootStackParamList {}
  }
}

export type RouteProps =
  | keyof RootBottomParamList
  | keyof PrivateRootStackParamList
  | keyof PublicRootStackParamList;
