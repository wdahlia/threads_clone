import Home from '../public/icons/home.svg';
import Search from '../public/icons/search.svg';
import Post from '../public/icons/post.svg';
import Like from '../public/icons/like.svg';
import MyProfile from '../public/icons/myprofile.svg';


const navClass = {
  home : "dark:fill-dark-navicon fill-light-navicon",
  search: "dark:text-dark-navicon text-light-navicon stroke-[8px]",
  post: "dark:fill-dark-navicon fill-light-navicon",
  like: "dark:text-dark-navicon text-light-navicon fill-none stroke-[8px]",
  profile: "dark:fill-dark-navicon fill-light-navicon",
}

export const navigationLists = [
  {
    icon: <Home width={35} height={35} className={navClass.home} />,
    path: '/',
  },
  {
    icon: <Search width={35} height={35} className={navClass.search} />,
    path: '/search',
  },
  {
    icon: <Post width={35} height={35} className={navClass.post} />,
    path: null,
  },
  {
    icon: <Like width={35} height={35} className={navClass.like} />,
    path: '/activity',
  },
  {
    icon: <MyProfile width={35} height={35} className={navClass.profile} />,
    path: '/profile',
  },
]

// myProfile부분 name `@가입한아이디이름` 으로 변경 예정
