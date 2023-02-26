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
