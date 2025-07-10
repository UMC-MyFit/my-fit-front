import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile/Profile";
import CardDetail from "../pages/profile/CardDetail";
import FeedDetail from "../pages/profile/FeedDetail";
import Recruiting from "../pages/recruiting/Recruiting";
import Splash from "../pages/onboarding/Splash";
import RecruitAnnouncement from "../pages/recruiting/RecruitAnnouncement";
import SelectMembers from "../pages/onboarding/SelectMembers";
import SavedAnnouncement from "../pages/recruiting/SavedAnnouncement";
import RegisterAnnouncement from "../pages/recruiting/RegisterAnnouncement";
import PersonalSetting from "../pages/setting/PersonalSetting";
import CompanySetting from "../pages/setting/CompanySetting";
import VerifiedCompanySetting from "../pages/setting/VerifiedCompanySetting";
import AlarmSetting from "../pages/setting/AlarmSetting";
import RegisterEmail from "../pages/onboarding/RegisterEmail";
import RegisterMethod from "../pages/onboarding/RegisterMethod";
import VerifiedSettingPage from "../pages/setting/VerifiedSettingPage";
import Account from "../pages/setting/Account";
import ResetPasssword from "../pages/setting/ResetPassword";
import ProfileStatus from "../pages/profile/ProfileStatus";
import ProfileRegister from "../pages/onboarding/ProfileRegister";
import ProfileCardRegister from "../pages/onboarding/ProfileCardRegister";
import ProfilePreview from "../pages/onboarding/ProfilePreview";
import CompanyProfileRegister from "../pages/onboarding/CompanyProfileRegister";
import CompanyCardRegister from "../pages/onboarding/CompanyCardRegister";
import CompanyPreview from "../pages/onboarding/CompanyPreview";
import CompanyVerification from "../pages/onboarding/CompanyVerification";
import RequestCoffeeChat from "../pages/chatting/RequestCoffeeChat";
import CompanyProfile from "../pages/setting/CompanyProfile";
import PersonalProfile from "../pages/setting/PersonalProfile";
import Chatting from "../pages/chatting/Chatting";
import ChattingList from "../pages/chatting/ChattingList";
import CoffeeChatList from "../pages/chatting/CoffeeChatList";
import CoffeeChatStorage from "../pages/chatting/CoffeeChatStorage";
import CoffeChatModal from "../pages/chatting/CoffeeChatModal";
import FeedPage from "../pages/feed/FeedPage";
import FeedSearch from "../pages/feed/FeedSearch";
import MyAlarm from "../pages/feed/MyAlarm";
import PostFeed from "../pages/feed/PostFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "mypage",
        element: <Profile />,
      },
      {
        path: "mypage/card",
        element: <CardDetail />,
      },
      {
        path: "mypage/feed",
        element: <FeedDetail />,
      },
      {
        path: "mypage/status",
        element: <ProfileStatus />,
      },
      {
        path: "recruit",
        element: <Recruiting />,
      },
      {
        path: "recruit/announcement",
        element: <RecruitAnnouncement />,
      },
      {
        path: "recruit/savedannouncement",
        element: <SavedAnnouncement />,
      },
      {
        path: "recruit/registerannouncement",
        element: <RegisterAnnouncement />,
      },
      {
        path: "onboarding",
        element: <Splash />,
      },
      {
        path: "onboarding/selectmembers",
        element: <SelectMembers />,
      },
      {
        path: "companysetting",
        element: <CompanySetting />,
      },
      {
        path: "companysetting/verified",
        element: <VerifiedCompanySetting />,
      },
      {
        path: "personalsetting",
        element: <PersonalSetting />,
      },
      {
        path: "onboarding/register-method",
        element: <RegisterMethod />,
      },
      {
        path: "onboarding/register-email",
        element: <RegisterEmail />,
      },
      {
        path: "onboarding/profile-register",
        element: <ProfileRegister />,
      },
      {
        path: "onboarding/profile-card-register",
        element: <ProfileCardRegister />,
      },
      {
        path: "onboarding/profile-preview",
        element: <ProfilePreview />,
      },
      {
        path: "onboarding/company-profile-register",
        element: <CompanyProfileRegister />,
      },
      {
        path: "onboarding/company-card-register",
        element: <CompanyCardRegister />,
      },
      {
        path: "onboarding/company-preview",
        element: <CompanyPreview />,
      },
      {
        path: "onboarding/company-verification",
        element: <CompanyVerification />,
      },
      {
        path: "feed/feed-main",
        element: <FeedPage />,
      },
      {
        path: "feed/feed-search",
        element: <FeedSearch />,
      },
      {
        path: "feed/my-alarm",
        element: <MyAlarm />,
      },
      {
        path: "feed/post-feed",
        element: <PostFeed />,
      },

      {
        path: "companysetting/alarmsetting",
        element: <AlarmSetting />,
      },
      {
        path: "companysetting/verifiedsetting",
        element: <VerifiedSettingPage />,
      },
      {
        path: "personalsetting/account",
        element: <Account />,
      },
      {
        path: "personalsetting/resetpassword",
        element: <ResetPasssword />,
      },
      {
        path: "coffeechat/request",
        element: <RequestCoffeeChat />,
      },
      {
        path: "companysetting/profile",
        element: <CompanyProfile />,
      },
      {
        path: "personalsetting/profile",
        element: <PersonalProfile />,
      },
      {
        path: "chatting",
        element: <Chatting />,
      },
      {
        path: "chatting/chattinglist",
        element: <ChattingList />,
      },
      {
        path: "chatting/coffeechatlist",
        element: <CoffeeChatList />,
      },
      {
        path: "chatting/coffeechatstorage",
        element: <CoffeeChatStorage />,
      },
    ],
  },
]);

export default router;
