import { AllBlogContext } from '@/context/contextapi.jsx';
import useBlogFetcher, { BlogPostForm } from '@/services/operations/blogApi';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Readmore from '../common/Readmore';
import { useNavigate } from 'react-router-dom';

// Simple Rich Text Editor Component
const RichTextEditor = ({ value, onChange, placeholder }) => {
    const editorRef = useRef(null);
    const [isEditorReady, setIsEditorReady] = useState(false);

    useEffect(() => {
        if (editorRef.current) {
            setIsEditorReady(true);
            // Set initial content
            if (value && editorRef.current.innerHTML !== value) {
                editorRef.current.innerHTML = value;
            }
        }
    }, []);

    useEffect(() => {
        if (isEditorReady && value !== undefined && editorRef.current) {
            const currentContent = editorRef.current.innerHTML;
            if (currentContent !== value) {
                editorRef.current.innerHTML = value || '';
            }
        }
    }, [value, isEditorReady]);

    const handleInput = () => {
        if (editorRef.current && onChange) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current.focus();
        handleInput();
    };

    const insertLink = () => {
        const url = prompt('Enter URL:');
        if (url) {
            execCommand('createLink', url);
        }
    };

    const handleKeyDown = (e) => {
        // Handle tab for indentation
        if (e.key === 'Tab') {
            e.preventDefault();
            execCommand('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    };

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
                {/* Text Formatting */}
                <button
                    type="button"
                    onClick={() => execCommand('bold')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200 font-bold"
                    title="Bold"
                >
                    B
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('italic')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200 italic"
                    title="Italic"
                >
                    I
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('underline')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200 underline"
                    title="Underline"
                >
                    U
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Alignment */}
                <button
                    type="button"
                    onClick={() => execCommand('justifyLeft')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Align Left"
                >
                    ⬅
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('justifyCenter')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Align Center"
                >
                    ⬄
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('justifyRight')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Align Right"
                >
                    ➡
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Lists */}
                <button
                    type="button"
                    onClick={() => execCommand('insertUnorderedList')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Bullet List"
                >
                    • List
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('insertOrderedList')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Numbered List"
                >
                    1. List
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Headings */}
                <select
                    onChange={(e) => {
                        if (e.target.value) {
                            execCommand('formatBlock', e.target.value);
                            e.target.value = '';
                        }
                    }}
                    className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Headings"
                >
                    <option value="">Format</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="p">Paragraph</option>
                </select>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Link */}
                <button
                    type="button"
                    onClick={insertLink}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Insert Link"
                >
                    🔗
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Text Color */}
                <div className="relative inline-block">
                    <input
                        type="color"
                        id="textColor"
                        onChange={(e) => execCommand('foreColor', e.target.value)}
                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                        title="Text Color"
                        defaultValue="#000000"
                    />
                </div>

                {/* Background Color */}
                <div className="relative inline-block">
                    <input
                        type="color"
                        id="bgColor"
                        onChange={(e) => execCommand('hiliteColor', e.target.value)}
                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                        title="Background Color"
                        defaultValue="#ffffff"
                    />
                </div>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Quick Color Buttons */}
                <div className="flex gap-1">
                    <button
                        type="button"
                        onClick={() => execCommand('foreColor', '#ef4444')}
                        className="w-6 h-6 bg-red-500 border border-gray-300 rounded"
                        title="Red Text"
                    ></button>
                    <button
                        type="button"
                        onClick={() => execCommand('foreColor', '#3b82f6')}
                        className="w-6 h-6 bg-blue-500 border border-gray-300 rounded"
                        title="Blue Text"
                    ></button>
                    <button
                        type="button"
                        onClick={() => execCommand('foreColor', '#10b981')}
                        className="w-6 h-6 bg-green-500 border border-gray-300 rounded"
                        title="Green Text"
                    ></button>
                    <button
                        type="button"
                        onClick={() => execCommand('foreColor', '#f59e0b')}
                        className="w-6 h-6 bg-yellow-500 border border-gray-300 rounded"
                        title="Yellow Text"
                    ></button>
                </div>

                <div className="w-px bg-gray-300 mx-1"></div>

                {/* Clear Formatting */}
                <button
                    type="button"
                    onClick={() => execCommand('removeFormat')}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    title="Clear Formatting"
                >
                    Clear
                </button>
            </div>

            {/* Editor */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                className="min-h-[200px] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                style={{ minHeight: '200px' }}
                data-placeholder={placeholder}
                suppressContentEditableWarning={true}
            />

            <style jsx>{`
                [contenteditable]:empty::before {
                    content: attr(data-placeholder);
                    color: #9ca3af;
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
};

export default function Blog1() {
    const divRef = useRef()
    const { blogdata, userdata } = useContext(AllBlogContext);
    const { GetAllBlogs } = useBlogFetcher();
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [blogPosts, setBlogPosts] = useState([]);
    const [editorContent, setEditorContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState('posts');
    useEffect(() => {
        console.log(page);
        GetAllBlogs(page); // Fetch page 1 blogs
        window.scrollTo({ top: 0, behavior: 'smooth' })
        console.log(userdata.isLoggedin);

    }, [page]);

    const navigate = useNavigate();

    const handleReadMore = (post) => {
        console.log('hello ');

        navigate(`/Readmore/${post._id}`, { state: { post } });
    };
    useEffect(() => {
        console.log(blogdata);
        if (blogdata?.allBlogs) {
            setBlogPosts(blogdata.allBlogs)
        }
    }, [blogdata]);


    // Sample initial blog posts for demonstration
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { isSubmitSuccessful },
    } = useForm();


    useEffect(() => {
        setValue('content', editorContent);
    }, [editorContent, setValue]);

const SubmitForm = async (data) => {
    console.log(data);
    
    const { title, content, author_name, occupation } = data;
    const imageFile = data.image[0];
    
    const date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    
    setloading(true);
    
    try {
        if (imageFile) {
            console.log("hii");
            
            const formData = new FormData();
            formData.append('image', imageFile);
            formData.append("title", title);
            formData.append("content", content);
            formData.append("author_name", author_name);
            formData.append("occupation", occupation);
            formData.append("date", date);
            
            // Debug FormData contents
            console.log("FormData contents:");
            for (let [key, value] of formData.entries()) {
                if (value instanceof File) {
                    console.log(`${key}:`, {
                        name: value.name,
                        size: value.size,
                        type: value.type
                    });
                } else {
                    console.log(`${key}:`, value);
                }
            }
            
            const response = await BlogPostForm(formData);
            
            const imglink = response?.imageUrl || '';
            
            const newPost = {
                id: blogPosts.length + 1,
                title,
                content,
                author_name,
                occupation,
                date,
                imglink,
            };
            
            setBlogPosts([newPost, ...blogPosts]);
            console.log('Form data submitted:', newPost);
            setIsSubmitted(true);
        } else {
            console.warn('No image file provided');
        }
    } catch (error) {
        console.error('Error in SubmitForm:', error);
    } finally {
        setloading(false);
    }
};



    useEffect(() => {
        if (isSubmitSuccessful) {
            if (loading === false) {
                reset({
                    title: "",
                    content: "",
                    authorName: "",
                    occupation: "",
                });
                setEditorContent(''); // Clear editor content
            }
        }
    }, [reset, isSubmitSuccessful, loading]);



    return (
        <div className="min-h-screen mt-25   py-12 px-4 sm:px-6 lg:px-8" ref={divRef}>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r text-white tracking-wide">
                        Blogs
                    </h1>

                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-3">
                    {<div className="inline-flex rounded-md shadow-sm">
                        <button
                            onClick={() => setActiveTab('posts')}
                            className={`px-5 py-2.5  font-medium text-sm ${userdata.isLoggedin && 'rounded-l-lg'} ${activeTab === 'posts'
                                ? 'bg-blue-600 text-white rounded'
                                : 'bg-white text-gray-700 hover:bg-gray-50 '
                                }`}
                        >
                            View Posts
                        </button>
                        <button
                            onClick={() => setActiveTab('create')}
                            className={`px-5 py-2.5 rounded-r-lg font-medium text-sm ${activeTab === 'create'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Create Post
                        </button>
                    </div>}
                </div>

                {/* Form Section */}
                {userdata.isLoggedin && <div>
                    {activeTab === 'create' && (
                        <div className="bg-white/40 rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
                            <div className="p-6 sm:p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Blog Post</h2>

                                {isSubmitted && (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-green-700">Post submitted successfully!</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form className="space-y-6" onSubmit={handleSubmit(SubmitForm)}>
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                            Title *
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            {...register("title", { required: true })}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Enter an eye-catching title"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                                            Content *
                                        </label>
                                        <input
                                            type="hidden"
                                            {...register("content", { required: true })}
                                        />
                                        <RichTextEditor
                                            value={editorContent}
                                            onChange={setEditorContent}
                                            placeholder="Write your blog post content here..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="author_name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Author Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="author_name"
                                                name="author_name"
                                                {...register("author_name", { required: true })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className='rounded-xl p-2 border-1 text-black/60'>
                                            <label htmlFor="">Image Upload</label>
                                            <input 
                                            type="file"
                                             id="imageInput" 
                                            className='border-1'
                                             name="image"
                                                onChange={e => {
                                                    const fileList = e.target.files;
                                                    if (fileList.length > 0) {
                                                        setValue('image', fileList);  // setValue from react-hook-form
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                                                Occupation
                                            </label>
                                            <input
                                                type="text"
                                                id="occupation"
                                                name="occupation"
                                                {...register("occupation", { required: true })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Your occupation"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end pt-4">
                                        <button
                                            type='submit'
                                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                        >
                                            Publish Post
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                </div>}
                {/* Blog Posts Display Section */}
                {activeTab === 'posts' && (
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        {blogPosts.map(post => (
                            <div key={post?._id} className=" m-5 rounded-xl bg-white/40 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                                <div className="md:flex">

                                    <div className="p-6 md:p-8 ">
                                        <div className="flex items-center text-sm text-white mb-2">
                                            <span className="text-blue-200 font-medium">{post.date}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-black mb-3">{post.author_name}</h3>

                                        <div
                                            className="text-gray-200 mb-4 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                        />

                                        <div className="flex items-center mt-6">
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-medium">
                                                    {post?.author_name.toString().charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ml-3"> <p className="text-lg font-medium text-white">{post.title}</p>
                                                {post.occupation && (
                                                    <p className="text-sm text-gray-500">{post.occupation}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center " onClick={() => handleReadMore(post)}>
                                                Read More
                                                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {blogPosts.length === 0 && (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No posts yet</h3>
                                <p className="mt-1 text-sm text-gray-500">Get started by creating your first blog post.</p>
                                <div className="mt-6">

                                </div>
                            </div>
                        )}
                    </div>
                )}
                {!(activeTab === 'create') && <div className=' flex lg:mt-44 flex-col justify-center items-center'>
                    <div className='bg-amber-50/40 p-2 rounded mb-2'>{[...Array(blogdata?.totalPageCount)].map((_, i) => (
                        <button id={`${i + 1}`} value={i + 1} className={`m-1 border-1 border-black/40 p-1 w-fit cursor-pointer px-2 rounded ${page == i + 1 ? 'bg-blue-300 text-black' : ''}`} onClick={(e) => setpage(Number(e.target.value))}>{i + 1}</button>
                    ))}</div>
                    <span className='text-white/80'>Pages</span>
                </div>}
            </div>
        </div>
    );
}