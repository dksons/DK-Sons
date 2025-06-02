import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Readmore() {
  const { postId } = useParams();
  const location = useLocation();
  const post = location.state?.post;
  console.log(post);
  

  const splitContentAtWordBoundary = (text) => {
    if (!text) return { firstPart: '', secondPart: '' };

    const midPoint = Math.floor(text.length / 2);
    let splitIndex = text.indexOf(' ', midPoint);

    if (splitIndex === -1) {
      splitIndex = text.lastIndexOf(' ', midPoint);
    }

    if (splitIndex === -1) {
      splitIndex = midPoint;
    }

    const firstPart = text.substring(0, splitIndex).trim();
    const secondPart = text.substring(splitIndex).trim();

    return { firstPart, secondPart };
  };

  const { firstPart, secondPart } = splitContentAtWordBoundary(post?.content);

  return (
    <>
      <Helmet>
        <title>{post?.Title ? `${post.title} | My Blog` : 'Blog Post'}</title>
        <meta
          name="description"
          content={
            post?.content
              ? post.content.substring(0, 160).replace(/<\/?[^>]+(>|$)/g, "")
              : 'Read this amazing blog post.'
          }
        />
        <meta
          name="keywords"
          content={`${post?.Title}, ${post?.author_name}, blog post, React`}
        />
        <meta property="og:title" content={post?.title || 'Blog Post'} />
        <meta
          property="og:description"
          content={
            post?.content
              ? post.content.substring(0, 160).replace(/<\/?[^>]+(>|$)/g, "")
              : 'Read this amazing blog post.'
          }
        />
        <meta property="og:image" content={post?.imglink || ''} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className='w-full min-h-screen'>
        <div className="w-full mt-28">
          {/* Your original UI code unchanged */}
          <div className="px-6 py-8 sm:px-12 lg:px-20 xl:px-32 border-b bg-amber-100">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-6">
                {post?.title+'fewuffyvew'}
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-900">
                    {post?.author_name}
                  </h3>
                  <p className="text-amber-700 font-medium">{post?.occupation}</p>
                  <div className="flex items-center mt-2 text-sm text-amber-600">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5 min read • Published on {post?.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-12 lg:px-20 xl:px-32 bg-amber-50">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-amber-900 leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                  {firstPart}
                </p>
              </div>

              <div className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-xl shadow-lg mb-8">
                <img
                  src={post?.imglink}
                  alt={post?.title || 'Blog image'}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-amber-900 leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                  {secondPart}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Readmore;
