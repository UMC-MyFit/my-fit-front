import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile/Profile";
import CardDetail from "../pages/profile/CardDetail";
import FeedDetail from "../pages/profile/FeedDetail";
import Recruiting from "../pages/recruiting/Recruiting";
import Splash from "../pages/onboarding/Splash";
import RecruitAnnouncement from "../pages/recruiting/RecruitAnnouncement";
import SelectMembers from "../pages/onboarding/SelectMembers";
import RegisterMethod from "../pages/onboarding/RegisterMethod";
import RegisterEmail from "../pages/onboarding/RegisterEmail";

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
        path: "recruit",
        element: <Recruiting />,
      },
      {
        path: "recruit/announcement",
        element: <RecruitAnnouncement />,
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
        path: "onboarding/register-method",
        element: <RegisterMethod />,
      },
      {
        path: "onboarding/register-email",
        element: <RegisterEmail />,
      },
    ],
  },
]);

export default router;
