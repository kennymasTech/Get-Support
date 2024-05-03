import NavBar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import LoginCard from "./component/LoginCard";
import SignUpCard from "./component/SignUpCard";
import AboutPage from "./pages/AboutPage";
import SidebarWithHeader from "./component/SidebarWithHeader";
import ContactUsPage from "./pages/ContactUsPage";
import PersistLogin from "./component/PersistLogin";
import RequireAuth from "./component/RequireAuth";
import PostsPage from "./pages/PostsPage";
import CreatorsPage from "./pages/CreatorsPage";
import DashboardPage from "./pages/DashboardPage";
import AudioPostsPage from "./pages/AudioPostsPage";
import PhotoPostsPage from "./pages/PhotoPostsPage";
import VideoPostsPage from "./pages/VideoPostsPage";
import TextPostsPage from "./pages/TextPostsPage";
import AboutUsHero from "./component/AboutUsHero";
import AboutUsTeam from "./component/AboutUsTeam";
import HeroSect from "./component/HeroSect";
import HeroCont from "./component/HeroCont";
import Posts from "./component/Posts";
import Creators from "./component/Creators";
import Dashboard from "./component/Dashboard";
import AudioPosts from "./component/AudioPosts";
import VideoPosts from "./component/VideoPosts";
import PhotoPosts from "./component/PhotoPosts";
import TextPosts from "./component/TextPosts";
import BarChart from "./component/BarChart";
import PostItem from "./component/PostItem";
import Actions from "./component/Actions";
import ProfilePage from "./component/ProfilePage";
import UserPosts from "./component/UserPosts";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/write-posts" element={<TextPostsPage />} />
        <Route path="/photo-posts" element={<PhotoPostsPage />} />
        <Route path="/audio-posts" element={<AudioPostsPage />} />
        <Route path="/video-posts" element={<VideoPostsPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/post-Item" element={<PostItem />} />
        {/* <Route path="/audio" element={<AudioPosts />} /> */}
        {/* <Route path="/video" element={<VideoPosts />} /> */}
        {/* <Route path="/photo" element={<PhotoPosts />} /> */}
        {/* <Route path="/text" element={<TextPosts />} /> */}
        {/* <Route path="/dashboards" element={<Dashboard />} /> */}
        <Route path="/user-posts" element={<UserPosts />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/barchart" element={<BarChart />} />
        {/* <Route path="/creators" element={<Creators />} /> */}
        {/* <Route path="/posts" element={<Posts />} /> */}
        {/* <Route path="/herosect" element={<HeroSect />} /> */}
        {/* <Route path="/herocont" element={<HeroCont />} /> */}
        {/* <Route path="/aboutushero" element={<AboutUsHero />} /> */}
        {/* <Route path="/aboutusteam" element={<AboutUsTeam />} /> */}
        <Route path="/signup" element={<SignUpCard />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/footer" element={<Footer />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/sidebarwithheader" element={<SidebarWithHeader />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
