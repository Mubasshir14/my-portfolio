

export const Contact = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id='contact'>
            <div className="text-center">
                <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
            </div>

            <div className="max-w-[800px] mx-auto">

                <div className="mt-6 bg-[#161616] rounded-xl">
                    <div className="p-10">

                        <form action="https://getform.io/f/jbwxlxla" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <div className="my-2.5 relative">
                                        <label htmlFor="name" className="sr-only">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Your Name"
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:border-pink-600 hover:bg-[#1c1c1c] hover:border-pink-600"
                                            aria-label="Your Name"
                                        />
                                    </div>

                                </div>
                                <div>
                                    <div className="my-2.5 relative">
                                        <label htmlFor="name" className="sr-only">Your Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="name"
                                            required
                                            placeholder="Your Email"
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:border-pink-600 hover:bg-[#1c1c1c] hover:border-pink-600"
                                            aria-label="Your Name"
                                        />
                                    </div>

                                </div>

                                <div className="sm:col-span-2">
                                    <div className="my-2.5 relative">
                                        <label htmlFor="name" className="sr-only">Your Message</label>
                                        <textarea
                                            rows={4}
                                            type="text"
                                            name="message"
                                            required
                                            id="message"
                                            placeholder="Your Message"
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:border-pink-600 hover:bg-[#1c1c1c] hover:border-pink-600"
                                            aria-label="Your Message"
                                        />

                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <button type="submit" className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md">Send</button>
                                </div>

                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}
