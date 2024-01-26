import Home from '../public/icons/home.svg';
import Search from '../public/icons/search.svg';
import Post from '../public/icons/post.svg';
import Activity from '../public/icons/activity.svg';
import MyProfile from '../public/icons/myprofile.svg';
import Like from '../public/icons/like.svg';
import Message from '../public/icons/message.svg';
import Repost from '../public/icons/repost.svg';
import Send from '../public/icons/send.svg';


const iconClass = {
  nav : {
    home : "dark:fill-dark-navicon fill-light-navicon",
    search: "dark:text-dark-navicon text-light-navicon",
    post: "dark:fill-dark-navicon fill-light-navicon",
    like: "dark:text-dark-navicon text-light-navicon fill-none",
    profile: "dark:fill-dark-navicon fill-light-navicon",
  },
  content : {
    like : "dark:stroke-[#FFFFFF] stroke-[#101010]",
    message : "dark:stroke-[#FFFFFF] stroke-[#101010]",
    repost : "dark:stroke-[#FFFFFF] stroke-[#101010]",
    send : "dark:stroke-[#FFFFFF] stroke-[#101010]",
  }
}

export const navigationLists = [
  {
    icon: <Home width={25} height={25} className={iconClass.nav.home} />,
    path: '/',
  },
  {
    icon: <Search width={25} height={25} className={iconClass.nav.search} />,
    path: '/search',
  },
  {
    icon: <Post width={25} height={25} className={iconClass.nav.post} />,
    path: null,
  },
  {
    icon: <Activity width={25} height={25} className={iconClass.nav.like} />,
    path: '/activity',
  },
  {
    icon: <MyProfile width={25} height={25} className={iconClass.nav.profile} />,
    path: '/profile',
  },
]

export const threadContentIcons = [
  {
    icon: <Like width={25} height={25} className={iconClass.content.like} />,
  },
  {
    icon: <Message width={25} height={25} className={iconClass.content.message} />,
  },
  {
    icon: <Repost width={25} height={25} className={iconClass.content.repost} />,
  },
  {
    icon: <Send width={25} height={25} className={iconClass.content.send} />,
  },
]
// myProfile부분 name `@가입한아이디이름` 으로 변경 예정
