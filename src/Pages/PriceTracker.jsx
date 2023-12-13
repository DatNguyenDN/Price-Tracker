import { useState, useEffect } from "react";
import Axios from "axios";
import "animate.css";
const PriceTracker = () => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [url, setUrl] = useState("");
    const [validUrl, setValidUrl] = useState(false);
    const [response, setResponse] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setValidUrl(URL_REGEX.test(url));
    }, [url]);

    const handleCloseModal = () => {
        setShowModal(false);
        setEmail("");
        setUrl("");
    };

    const simulateApiResponse = () => {
        setTimeout(() => {
            setResponse({ success: true });
        }, 1000);
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setValidEmail(EMAIL_REGEX.test(inputEmail));
    };

    const handleClick = async () => {
        try {
            const apiUrl = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/create-tracker"; // Replace with your API endpoint

            const headers = {
                "Content-Type": "text/json", // Set the Content-Type header
                "x-functions-key": "-qbcoDfFKIiluGvzxTqKe6BZ61KdQKTFZhs0IOEjAOFkAzFuOD8RvQ==",
                // Add any other headers as needed
            };

            const data = {
                email: email, // Your payload data
                url: url,
            };

            const axiosConfig = {
                headers,
                // withCredentials: true,
            };

            if (!validEmail || !email || !url || !validUrl) {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
                return;
            }

            const response = await Axios.post(apiUrl, data, axiosConfig);
            setResponse(response.data);
            if (response.status === 200) {
                setShowModal(true);
                console.log(response.data);
            } else if (response.data.statusCode === 500) {
                setShowError(true);
                return;
            } else {
                // Handle the case when the request is not successful
                console.error("Request was not successful:");
            }
        } catch (error) {
            // Handle any errors that occur during the API request
            console.error("Error:", error.message);
        }
    };
    return (
        <>
            <div id="container " 
            className="w-full p-[5%] max-h-screen  flex-row flex rounded-xl  max-sm:flex-col max-md:flex-col max-sm:w-full ">
                <div id="form" className="w-[60%] p-[5%] flex-col max-sm:w-full max-md:w-full space-y-5 text-[--color]  ">
                    <div className="text-center animate-fade-up">
                        <h1 className=" text-4xl animate__animated animate__backInLeft max-sm:text-[25px] text-primary">Welcome to Price Tracker</h1>
                    </div>

                    <form className="flex flex-col justify-center items-center gap-5 animate__animated animate__backInUp">
                        <label htmlFor="email" />
                        <input
                            className="input input-bordered input-primary input-md text-white w-full max-w-xs justify-center items-center "
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address..."
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <input
                            className="input input-bordered input-primary input-md text-white w-full max-w-xs"
                            type="url"
                            id="url"
                            name="url"
                            placeholder="Product's Url..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        {showAlert ? (
                            <div role="alert" className="alert alert-warning  max-sm:p-3  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6 max-sm:hidden"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span className="max-sm:text-sm">Invalid Email address or Product's Url address!</span>
                            </div>
                        ) : null}
                        {showError ? (
                            <div role="alert" className="alert alert-error max-sm:p-3 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6 max-sm:hidden"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="max-sm:text-sm">Error! Task failed successfully.</span>
                            </div>
                        ) : null}
                    </form>

                    <div className="flex justify-center items-center ">
                        <button className="btn btn-active btn-primary max-sm:btn-sm" onClick={handleClick}>
                            Submit
                        </button>
                    </div>
                </div>
                <div
                    id="banner"
                    className="w-[40%] p-[5%] h-fit   block justify-center items-center max-sm:w-full max-md:w-full max-sm:pt-10 max-md:pt-10 card-bordered border-[--btn] "
                >
                    <p className="animate__animated animate__backInRight max-sm:text-[20px] text-primary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis quia veniam, repudiandae, quae error exercitationem ipsum vel
                        consequatur fugit porro ad? Nulla, eveniet ipsum tempore ipsa laudantium exercitationem odit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Ipsa quae repellat cupiditate consectetur similique sed? Itaque animi eaque, voluptatem rem maxime amet, praesentium
                        vitae esse voluptate at impedit iste voluptates.
                    </p>
                </div>
            </div>

            {showModal ? (
                <dialog open={true} id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box text-white  ">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between text-xl">
                                <p className="text-[--primary]">{response.store}</p>
                                <p className="text-yellow-400">{response.priceString}</p>
                            </div>
                            <div className="relative">
                                <div className="flex flex-1 mx-auto justify-center">
                                    {" "}
                                    <img alt="product_img" src={`data:image/png;base64,${response.imageString}`} className="w-[90%] " />
                                </div>
                                <div
                                    className="
                                   absolute
                                   top-5
                                   -right-5
                                   rotate-45
                                   text-red-500
                                   text-3xl
                                   font-extrabold                               
                                   text-center
                                   shadow-md
                                   border-2 border-red-500
                                   w-[200px]
                                   p-2
                                   bg-white
                                    bg-opacity-50
                               
                                 "
                                >
                                    <p className=""> On sale!</p>
                                </div>
                            </div>
                            <p className="text-center text-xl text-purple-300">{response.title}</p>
                            <p className="text-center text-lg text-emerald-300">We will track and notify you when the price drops</p>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            ) : null}
        </>
    );
};

export default PriceTracker;
