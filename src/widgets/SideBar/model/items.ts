import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/home-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SideBarItemType {
  path: string
  text: string
  Icon: VFC<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'PAGE.MAIN_TITLE',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'PAGE.ABOUT_TITLE',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'PAGE.PROFILE_TITLE',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'PAGE.ARTICLES',
    authOnly: true,
  },
];
