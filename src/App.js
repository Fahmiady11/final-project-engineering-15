import React from 'react';
import './App.css';
import './output.css';
import Spiner from './Assets/Spinners/Spiner';
import { isiContent } from './ApiFake/dataForumStatic';
import { isiBlog } from './ApiFake/dataBlogStatic';

//Routing
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Component/pages/AboutPage';
import ProfilePage from './Component/pages/ProfilePage';
import ProtectedRoute from './Component/protected/ProtectedRoute';


const HomePage = React.lazy(() => import('./Component/pages/HomePage'));
const DetailForumPage = React.lazy(() =>
  import('./Component/pages/DetailForumPage')
);
const NotFound = React.lazy(() => import('./Component/pages/NotFound'));
const DetailBlogPage = React.lazy(() =>
  import('./Component/pages/DetailBlogPage')
);
const CreateBlogPage = React.lazy(() =>
  import('./Component/pages/CreateBlogPage')
);
const BlogPage = React.lazy(() => import('./Component/pages/BlogPage'));
const ForumPage = React.lazy(() => import('./Component/pages/ForumPage'));
const CreateForumPage = React.lazy(() =>
  import('./Component/pages/CreateForumPage')
);
const FaqPage = React.lazy(() => import('./Component/pages/FaqPage'));
const LoginPage = React.lazy(() => import('./Component/pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./Component/pages/RegisterPage'));
const CobaPage = React.lazy(() => import('../src/Component/store/CobaPage'));
function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <HomePage />
            </React.Suspense>
          }
        />

        {/* forumPage */}
        <Route path="forumin">
          <Route
            index
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <ForumPage data={isiContent} />
              </React.Suspense>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="createforum"
              element={
                <React.Suspense
                  fallback={
                    <div>
                      <Spiner />
                    </div>
                  }
                >
                  <CreateForumPage />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="detailforum/:idforum"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <DetailForumPage data={isiContent} />
              </React.Suspense>
            }
          />
        </Route>

        {/* blogPage */}
        <Route path="blogin">
          <Route
            index
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <BlogPage data={isiBlog} />
              </React.Suspense>
            }
          />
          <Route
            path="createblog"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <CreateBlogPage />
              </React.Suspense>
            }
          />
          <Route
            path="detailblog/:idblog"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <DetailBlogPage data={isiBlog} />
              </React.Suspense>
            }
          />
        </Route>
        {/* AboutPage */}
        <Route
          path="aboutpage"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <AboutPage />
            </React.Suspense>
          }
        />
        {/* FaqPage */}
        <Route
          path="faqpage"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <FaqPage />
            </React.Suspense>
          }
        />
        {/* ProfilePage */}
        <Route
          path="profilepage"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <ProfilePage />
            </React.Suspense>
          }
        />

        {/* LoginPage */}
        <Route
          path="loginpage"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <LoginPage />
            </React.Suspense>
          }
        />
        {/* RegisterPage */}
        <Route
          path="registerpage"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <RegisterPage />
            </React.Suspense>
          }
        />

        <Route
          path="cobapage"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <CobaPage />
            </React.Suspense>
          }
        />

        <Route
          path="*"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
