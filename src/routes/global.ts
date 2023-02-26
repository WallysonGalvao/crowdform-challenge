import { PublicRootStackParamList } from './publicRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PublicRootStackParamList {}
  }
}

export type RouteProps = keyof PublicRootStackParamList;
